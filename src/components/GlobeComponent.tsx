// src/components/GlobeComponent.tsx
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { nodes, connections, BusinessNode, Connection } from '../data/nodes';

// Define brand colors to ensure consistency with the rest of the website
const COLORS = {
  primary: 0x0056b3,     // Primary blue
  primaryLight: 0x007bff, // Lighter blue
  primaryDark: 0x004494,  // Darker blue
  secondary: 0x1a2b3c,    // Dark blue/slate
  accent: 0x00d4ff,       // Bright cyan
  danger: 0xe63946,       // Red for high risk indicators
  warning: 0xffb400,      // Amber for warnings
  success: 0x4caf50,      // Green for positive indicators
  light: 0xf8f9fa,        // Off-white background
  dark: 0x212529,         // Near black
  gray: 0x6c757d,         // Medium gray
  white: 0xffffff,        // White
  black: 0x000000,        // Black
};

// Helper: convert lat/long to 3D vector on sphere
const latLongToVector3 = (lat: number, lon: number, radius: number): THREE.Vector3 => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
};

// Helper: Compute points along a great circle arc between two vectors
const greatCirclePoints = (
  start: THREE.Vector3,
  end: THREE.Vector3,
  segments: number
): THREE.Vector3[] => {
  const vStart = start.clone().normalize();
  const vEnd = end.clone().normalize();
  const points: THREE.Vector3[] = [];
  const angle = vStart.angleTo(vEnd);
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const sinTotal = Math.sin(angle);
    if (sinTotal === 0) {
      points.push(vStart.clone().multiplyScalar(start.length()));
    } else {
      const A = Math.sin((1 - t) * angle) / sinTotal;
      const B = Math.sin(t * angle) / sinTotal;
      const intermediate = new THREE.Vector3().addVectors(
        vStart.clone().multiplyScalar(A),
        vEnd.clone().multiplyScalar(B)
      );
      intermediate.multiplyScalar(start.length());
      points.push(intermediate);
    }
  }
  return points;
};

interface TooltipData {
  description: string;
  x: number;
  y: number;
  isHighRisk?: boolean;
  riskLevel?: number;
}


const GlobeComponent: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  // Tooltip state to store info and its screen position
  const [tooltip, setTooltip] = useState<TooltipData | null>(null);
  // Ref for marker meshes (used for raycasting)
  const markerMeshesRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    // Create Scene & Camera
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background to blend with website
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0, 6);

    // Renderer with improved settings
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // OrbitControls for subtle rotation
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4; // Slightly slower rotation
    controls.rotateSpeed = 0.5;

    // Create a group to hold the globe elements
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // --- Globe Base (Ocean) ---
    const oceanGeometry = new THREE.SphereGeometry(2, 128, 128);
    const oceanMaterial = new THREE.MeshPhongMaterial({
      color: COLORS.accent,
      shininess: 90,
      transparent: true,
      opacity: 0.2,
      side: THREE.FrontSide,
    });
    const oceanMesh = new THREE.Mesh(oceanGeometry, oceanMaterial);
    oceanMesh.renderOrder = 0;
    globeGroup.add(oceanMesh);

    // --- Enhanced Lighting ---
    // Ambient light for general illumination
    const ambientLight = new THREE.AmbientLight(COLORS.white, 0.4);
    scene.add(ambientLight);
    
    // Main directional light
    const directionalLight = new THREE.DirectionalLight(COLORS.white, 1.0);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);
    
    // Add hemisphere light for more natural shading
    const hemisphereLight = new THREE.HemisphereLight(COLORS.white, COLORS.primaryLight, 0.6);
    scene.add(hemisphereLight);
    
    // Add subtle point light for highlighting
    const pointLight = new THREE.PointLight(COLORS.accent, 0.5, 10);
    pointLight.position.set(-5, 2, -5);
    scene.add(pointLight);

    // --- Tilt the Globe ---
    globeGroup.rotation.x = 0.3;

    // Create a grid pattern on the globe (latitude/longitude lines)
    const gridMaterial = new THREE.LineBasicMaterial({ 
      color: COLORS.white, 
      transparent: true,
      opacity: 0.08
    });
    
    // Add longitude lines
    for (let i = 0; i < 24; i++) {
      const longitude = (i * 15) - 180;
      const points = [];
      for (let j = 0; j <= 180; j++) {
        const latitude = (j * 1) - 90;
        const point = latLongToVector3(latitude, longitude, 2.005);
        points.push(point);
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, gridMaterial);
      globeGroup.add(line);
    }
    
    // Add latitude lines
    for (let i = 0; i < 13; i++) {
      const latitude = (i * 15) - 90;
      const points = [];
      for (let j = 0; j <= 360; j++) {
        const longitude = (j * 1) - 180;
        const point = latLongToVector3(latitude, longitude, 2.005);
        points.push(point);
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      const line = new THREE.Line(geometry, gridMaterial);
      globeGroup.add(line);
    }

    // --- Load and Overlay GeoJSON as filled meshes ---
    fetch('/data/continents.geojson')
      .then((response) => response.json())
      .then((data: { features: any[] }) => {
        data.features.forEach((feature) => {
          if (feature.geometry.type === 'MultiPolygon') {
            feature.geometry.coordinates.forEach((polygon: number[][][]) => {
              if (polygon.length === 0) return;
              const outerRing = polygon[0];
              const shapePoints = outerRing.map(([lon, lat]) => new THREE.Vector2(lon, lat));
              const shape = new THREE.Shape(shapePoints);
              for (let i = 1; i < polygon.length; i++) {
                const holeRing = polygon[i];
                const holePoints = holeRing.map(([lon, lat]) => new THREE.Vector2(lon, lat));
                shape.holes.push(new THREE.Path(holePoints));
              }
              const geometry2D = new THREE.ShapeGeometry(shape);
              const positions = Array.from(geometry2D.attributes.position.array);
              const vertices3D: number[] = [];
              for (let i = 0; i < positions.length; i += 3) {
                const lon = positions[i];
                const lat = positions[i + 1];
                const vec3 = latLongToVector3(lat, lon, 2.01); // slightly above water
                vertices3D.push(vec3.x, vec3.y, vec3.z);
              }
              geometry2D.setAttribute('position', new THREE.Float32BufferAttribute(vertices3D, 3));
              geometry2D.computeVertexNormals();
              
              // Create material for the landmass with website's secondary color
              const landMaterial = new THREE.MeshPhongMaterial({
                color: COLORS.secondary,
                emissive: COLORS.secondary,
                emissiveIntensity: 0.05,
                shininess: 20,
                transparent: false,
                side: THREE.DoubleSide,
                polygonOffset: true,
                polygonOffsetFactor: 1000,
                polygonOffsetUnits: 1000,
              });
              
              const mesh = new THREE.Mesh(geometry2D, landMaterial);
              globeGroup.add(mesh);
            });
          }
        });
      })
      .catch((err) => {
        console.error('Error loading GeoJSON:', err);
        
        // Fallback simple sphere in case GeoJSON fails
        const fallbackGeometry = new THREE.SphereGeometry(2.01, 64, 64);
        const fallbackMaterial = new THREE.MeshPhongMaterial({
          color: COLORS.secondary,
          transparent: true,
          opacity: 0.8,
          wireframe: false,
        });
        const fallbackSphere = new THREE.Mesh(fallbackGeometry, fallbackMaterial);
        globeGroup.add(fallbackSphere);
      });
    
    // Add edges around continents for better definition
    const edges = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.SphereGeometry(2.011, 128, 128)),
      new THREE.LineBasicMaterial({ 
        color: COLORS.primaryLight,
        transparent: true,
        opacity: 0.1
      })
    );
    globeGroup.add(edges);

    // --- Markers and Connections Group ---
    const markersGroup = new THREE.Group();
    globeGroup.add(markersGroup);

    // Create modern-looking markers for each business node
    const markerGeometry = new THREE.SphereGeometry(0.03, 16, 16);
    
    // Simple risk pulse effect with blinking
    const createMarkerPulse = (position: THREE.Vector3, color: number, riskLevel = 2) => {
      // Create a single group for the pulse effect
      const pulseGroup = new THREE.Group();
      
      // Create a red blinking dot at the location
      const coreMaterial = new THREE.MeshBasicMaterial({
        color: color,
        transparent: true,
        opacity: 0.9
      });
      
      const coreGeometry = new THREE.SphereGeometry(0.04, 16, 16); // Slightly larger
      const core = new THREE.Mesh(coreGeometry, coreMaterial);
      core.position.copy(position);
      
      // Add blink animation data
      core.userData = {
        phase: Math.random() * Math.PI * 2,
        blinkSpeed: 0.02, // Very slow blink
        isCore: true
      };
      
      pulseGroup.add(core);
      
      return pulseGroup;
    };
    
    // Process each node
    nodes.forEach((node: BusinessNode) => {
      const pos = latLongToVector3(node.lat, node.lon, 2.05);
      
      // Use brand colors for markers
      let markerColor = COLORS.primaryLight;
      if (node.highRisk) {
        markerColor = COLORS.danger;
      }
      
      // Create glowing marker material
      const material = new THREE.MeshPhongMaterial({
        color: markerColor,
        emissive: markerColor,
        emissiveIntensity: 0.4,
        shininess: 100,
      });
      
      // Create marker and store its data
      const markerMesh = new THREE.Mesh(markerGeometry, material);
      markerMesh.position.copy(pos);
      markerMesh.userData = { 
        description: node.description,
        isHighRisk: node.highRisk,
        riskLevel: node.riskLevel
      };
      markersGroup.add(markerMesh);
      markerMeshesRef.current.push(markerMesh);
      
      // Add radar-like wave effect for all nodes, with enhanced effect for high risk nodes
      // Create a reference to the node position for radar waves
      markerMesh.userData.position = pos.clone();
      
      // Add blinking/pulsing effect for high risk nodes
      if (node.highRisk) {
        // Get risk level from node data or default to 2
        const riskLevel = node.riskLevel || 2;
        
        // Use danger color for all risks
        const riskColor = COLORS.danger;
        
        const pulse = createMarkerPulse(pos, riskColor, riskLevel);
        markersGroup.add(pulse);
        
        // Super simple blinking animation
        const animate = () => {
          if (!pulse) return;
          
          pulse.children.forEach(child => {
            if (child.userData && child.userData.isCore) {
              // Update the phase for blinking
              child.userData.phase += child.userData.blinkSpeed;
              
              // Get the material and update opacity
              const mesh = child as THREE.Mesh;
              const material = mesh.material as THREE.MeshBasicMaterial;
              
              // Simple sine wave for blinking
              const blinkValue = Math.sin(child.userData.phase) * 0.5 + 0.5;
              material.opacity = 0.5 + (blinkValue * 0.5);
            }
          });
          
          requestAnimationFrame(animate);
        };
        
        animate();
      }
    });

    // Connect nodes using great circle arcs with modern styling
    const segments = 80; // More segments for smoother curves
    
    connections.forEach((connection: Connection) => {
      const { from, to } = connection;
      const startNode = nodes.find((n: BusinessNode) => n.id === from);
      const endNode = nodes.find((n: BusinessNode) => n.id === to);
      
      if (!startNode || !endNode) return;
      
      const start = latLongToVector3(startNode.lat, startNode.lon, 2.05);
      const end = latLongToVector3(endNode.lat, endNode.lon, 2.05);
      const arcPoints = greatCirclePoints(start, end, segments);
      
      // Determine if this is a risk connection
      const isRiskConnection = startNode.highRisk || endNode.highRisk;
      
      // Create path with gradient-like effect
      for (let i = 1; i < arcPoints.length; i++) {
        const startPoint = arcPoints[i-1];
        const endPoint = arcPoints[i];
        
        // Calculate color based on position in path and risk level
        let segmentColor;
        if (isRiskConnection) {
          // For risk connections, use warning/danger colors
          segmentColor = startNode.highRisk ? COLORS.danger : COLORS.warning;
        } else {
          // For normal connections, use brand colors
          segmentColor = COLORS.accent;
        }
        
        // Create a line segment with the calculated color
        const segmentGeometry = new THREE.BufferGeometry().setFromPoints([startPoint, endPoint]);
        const segmentMaterial = new THREE.LineBasicMaterial({ 
          color: segmentColor,
          transparent: true,
          opacity: 0.7,
          linewidth: 1.5
        });
        
        const line = new THREE.Line(segmentGeometry, segmentMaterial);
        markersGroup.add(line);
      }
    });

    // --- Raycaster for Hover (Mouse Move) ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const onMouseMove = (event: MouseEvent) => {
      const rect = renderer.domElement.getBoundingClientRect();
      // Get normalized device coordinates
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(markerMeshesRef.current);
      if (intersects.length > 0) {
        // Instead of using event.clientX/Y, compute the screen position of the intersection point.
        const intersect = intersects[0];
        const screenPosition = intersect.point.clone();
        screenPosition.project(camera);
        const screenX = ((screenPosition.x + 1) / 2) * width;
        const screenY = ((-screenPosition.y + 1) / 2) * height;
        setTooltip({
          description: intersect.object.userData.description || 'No description available.',
          x: screenX,
          y: screenY,
          isHighRisk: intersect.object.userData.isHighRisk,
          riskLevel: intersect.object.userData.riskLevel
        });
      } else {
        setTooltip(null);
      }
    };
    renderer.domElement.addEventListener('mousemove', onMouseMove);

    // --- Animation Loop ---
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // --- Handle Resize ---
    const handleResize = () => {
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      renderer.setSize(newWidth, newHeight);
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      container.removeChild(renderer.domElement);
    };
  }, []); // markerMeshesRef is a ref so no need to add it to dependencies

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
      {tooltip && (
        <div
          style={{
            position: 'absolute',
            left: tooltip.x + 15,
            top: tooltip.y + 15,
            background: 'rgba(255,255,255,0.95)',
            padding: '12px 15px',
            borderRadius: '8px',
            pointerEvents: 'none',
            maxWidth: '320px',
            fontSize: '0.9rem',
            lineHeight: '1.4',
            color: '#1a2b3c',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
            border: tooltip.isHighRisk 
              ? '1px solid #e63946' 
              : '1px solid rgba(0, 86, 179, 0.2)',
            transform: 'translateY(-5px)',
            transition: 'all 0.3s ease',
            zIndex: 1000,
            fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          }}
        >
          {tooltip.isHighRisk && tooltip.riskLevel && (
            <div style={{ marginBottom: '6px' }}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                marginBottom: '4px'
              }}>
                <span style={{ 
                  fontWeight: 600, 
                  color: '#e63946',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                }}>
                  Risk Level
                </span>
                <span style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                }}>
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span key={i} style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      margin: '0 2px',
                      backgroundColor: i < (tooltip.riskLevel || 0) 
                        ? '#e63946' 
                        : '#e0e0e0'
                    }}></span>
                  ))}
                </span>
              </div>
            </div>
          )}
          {tooltip.description}
        </div>
      )}
      {/* <div
        style={{
          position: 'absolute',
          bottom: '20px',
          right: '20px',
          background: 'rgba(255,255,255,0.9)',
          padding: '10px 15px',
          borderRadius: '8px',
          fontSize: '0.8rem',
          color: '#6c757d',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.15)',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
          maxWidth: '200px',
        }}
      >
        <div style={{ fontWeight: 'bold', marginBottom: '8px', color: '#1a2b3c' }}>Network Legend:</div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <span style={{ 
            display: 'inline-block', 
            width: '12px', 
            height: '12px', 
            borderRadius: '50%', 
            backgroundColor: '#007bff',
            marginRight: '8px'
          }}></span>
          <span>Business Location</span>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ 
            display: 'inline-block', 
            width: '12px', 
            height: '12px', 
            borderRadius: '50%', 
            backgroundColor: '#e63946',
            marginRight: '8px'
          }}></span>
          <span>Risk / Disruption</span>
        </div>
      </div> */}
    </div>
  );
};

export default GlobeComponent;