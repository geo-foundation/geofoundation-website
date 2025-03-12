// src/data/mapData.ts

export interface BusinessNode {
  id: string;
  lat: number;
  lon: number;
  highRisk?: boolean;
  description?: string;
  riskLevel?: number; // 1-3, with 3 being highest
}

export interface Connection {
  from: string; // node id
  to: string;   // node id
}

// Brand color definitions for the globe
export const COLORS = {
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

/*
  1) German Automotive Company
     - Headquarters in Stuttgart (Germany)
     - Factories in Germany and Poland
     - Disruptions: Energy crisis and Economic downturn in Japan
*/
export const nodes: BusinessNode[] = [
  // German Automotive Nodes
  {
    id: 'g_auto_hq',
    lat: 48.7758, // Stuttgart, Germany
    lon: 9.1829,
    description: 'Stuttgart HQ: German Automotive Company Headquarters.'
  },
  {
    id: 'g_auto_factory_de',
    lat: 48.1351, // Munich, Germany (example factory location)
    lon: 11.5820,
    description: 'Factory DE: Main manufacturing facility in Germany.'
  },
  {
    id: 'g_auto_factory_pl',
    lat: 52.2297, // Warsaw, Poland (example factory location)
    lon: 21.0122,
    description: 'Factory PL: Manufacturing facility in Poland.'
  },
  {
    id: 'g_auto_energy',
    lat: 55.0,   // Approximate Baltic Sea region to represent North Stream Two impact
    lon: 19.0,
    highRisk: true,
    riskLevel: 3,
    description: 'CRITICAL RISK: Energy Crisis - Major disruption due to North Stream Two incident affecting European operations.'
  },
  {
    id: 'g_auto_japan',
    lat: 35.6895, // Tokyo, Japan
    lon: 139.6917,
    highRisk: true,
    riskLevel: 2,
    description: 'HIGH RISK: Economic Downturn in Japan - Significant impact on supply chain and regional sales.'
  },
  {
    id: 'g_auto_supplier_fr',
    lat: 48.8566, // Paris, France
    lon: 2.3522,
    description: 'Paris Office: Key component supplier relationship management.'
  },
  {
    id: 'g_auto_sales_uk',
    lat: 51.5074, // London, UK
    lon: -0.1278,
    description: 'UK Sales Office: Primary distribution center for UK market.'
  },

  /*
    2) Silicon Valley Tech Company
       - Headquarters in Silicon Valley (San Jose)
       - Disruptions: Missing chips (chip supply shortage) and political policy changes
  */
  {
    id: 'sv_tech_hq',
    lat: 37.3382, // San Jose, CA
    lon: -121.8863,
    description: 'SV Tech HQ: Silicon Valley Technology Company Headquarters.'
  },
  {
    id: 'sv_tech_nyc',
    lat: 40.7128, // New York City
    lon: -74.0060,
    description: 'NYC Office: East Coast operations and financial services.'
  },
  {
    id: 'sv_tech_austin',
    lat: 30.2672, // Austin, TX
    lon: -97.7431,
    description: 'Austin Campus: Engineering and R&D center.'
  },
  {
    id: 'sv_chip_supply',
    lat: 25.0330, // Taipei, Taiwan (as a proxy for chip supply)
    lon: 121.5654,
    highRisk: true,
    riskLevel: 3,
    description: 'CRITICAL RISK: Semiconductor Shortage - Severe disruption from global chip supply shortage affecting product delivery.'
  },
  {
    id: 'sv_policy',
    lat: 38.9072, // Washington, D.C. (represents political uncertainty)
    lon: -77.0369,
    highRisk: true,
    riskLevel: 2,
    description: 'HIGH RISK: Regulatory Change - New policies creating compliance challenges and market uncertainty.'
  },
  {
    id: 'sv_tech_eu',
    lat: 52.3676, // Amsterdam (EU headquarters)
    lon: 4.9041,
    description: 'European Headquarters: Primary operations center for EU market.'
  },

  /*
    3) Asian Electronics Company (South Korea based)
       - Headquarters in Seoul, South Korea
       - Manufacturing facility in China
       - Disruption: Port/Logistics disruption in Hong Kong due to trade tensions
  */
  {
    id: 'asia_hq',
    lat: 37.5665, // Seoul, South Korea
    lon: 126.9780,
    description: 'Asia HQ: South Korean Electronics Company Headquarters.'
  },
  {
    id: 'asia_factory_cn',
    lat: 31.2304, // Shanghai, China (example manufacturing facility)
    lon: 121.4737,
    description: 'Factory CN: Manufacturing facility in China.'
  },
  {
    id: 'asia_factory_vn',
    lat: 21.0278, // Hanoi, Vietnam
    lon: 105.8342,
    description: 'Factory VN: Secondary manufacturing facility in Vietnam.'
  },
  {
    id: 'asia_rd_jp',
    lat: 35.6762, // Tokyo, Japan
    lon: 139.6503,
    description: 'Tokyo R&D: Research and development center.'
  },
  {
    id: 'asia_disruption',
    lat: 22.3193, // Hong Kong
    lon: 114.1694,
    highRisk: true,
    riskLevel: 3,
    description: 'CRITICAL RISK: Hong Kong Port Disruption - Trade tensions causing severe logistics delays and supply chain issues.'
  },
  {
    id: 'asia_climate',
    lat: 13.7563, // Manila, Philippines
    lon: 121.0585,
    highRisk: true,
    riskLevel: 2,
    description: 'HIGH RISK: Typhoon Season - Recurring seasonal disruptions to regional logistics and operations.'
  },
  
  /*
    4) Brazilian Mining Corporation
       - Headquarters in Rio de Janeiro
       - Mining operations and environmental risks
  */
  {
    id: 'brazil_hq',
    lat: -22.9068, // Rio de Janeiro
    lon: -43.1729,
    description: 'Rio HQ: Brazilian Mining Corporation Headquarters.'
  },
  {
    id: 'brazil_mine',
    lat: -19.9167, // Minas Gerais region
    lon: -43.9345,
    description: 'Mining Operations: Primary extraction and processing facilities.'
  },
  {
    id: 'brazil_port',
    lat: -23.9549, // Santos port
    lon: -46.3329,
    description: 'Santos Port: Primary export facility for mineral resources.'
  },
  {
    id: 'brazil_environ',
    lat: -3.4653, // Amazon region
    lon: -62.2159,
    highRisk: true,
    riskLevel: 3,
    description: 'CRITICAL RISK: Environmental Regulations - New protection laws affecting operational permissions.'
  },
  
  /*
    5) European Pharmaceutical Company
       - Headquarters in Zurich
       - Manufacturing and research facilities
  */
  {
    id: 'pharma_hq',
    lat: 47.3769, // Zurich, Switzerland
    lon: 8.5417,
    description: 'Zurich HQ: European Pharmaceutical Company Headquarters.'
  },
  {
    id: 'pharma_lab',
    lat: 48.8566, // Paris, France
    lon: 2.3522,
    description: 'Paris Labs: Advanced research and development center.'
  },
  {
    id: 'pharma_factory',
    lat: 51.2277, // Utrecht, Netherlands
    lon: 5.1828,
    description: 'Utrecht Facility: Primary manufacturing plant.'
  },
  {
    id: 'pharma_supply',
    lat: 19.0760, // Mumbai, India
    lon: 72.8777,
    highRisk: true,
    riskLevel: 2,
    description: 'HIGH RISK: API Shortage - Raw material supply constraints from Indian manufacturers.'
  }
];

export const connections: Connection[] = [
  // German Automotive Supply Chain Connections
  { from: 'g_auto_hq', to: 'g_auto_factory_de' },
  { from: 'g_auto_factory_de', to: 'g_auto_factory_pl' },
  { from: 'g_auto_hq', to: 'g_auto_supplier_fr' },
  { from: 'g_auto_hq', to: 'g_auto_sales_uk' },
  // Disruptions impacting German automotive supply chain:
  { from: 'g_auto_energy', to: 'g_auto_factory_de' },
  { from: 'g_auto_energy', to: 'g_auto_factory_pl' },
  { from: 'g_auto_japan', to: 'g_auto_hq' },

  // Silicon Valley Tech Company Connections
  { from: 'sv_tech_hq', to: 'sv_tech_nyc' },
  { from: 'sv_tech_hq', to: 'sv_tech_austin' },
  { from: 'sv_tech_hq', to: 'sv_tech_eu' },
  { from: 'sv_tech_hq', to: 'sv_chip_supply' },
  { from: 'sv_tech_austin', to: 'sv_chip_supply' },
  { from: 'sv_tech_hq', to: 'sv_policy' },
  { from: 'sv_tech_eu', to: 'sv_policy' },

  // Asian Electronics Company Connections
  { from: 'asia_hq', to: 'asia_factory_cn' },
  { from: 'asia_hq', to: 'asia_factory_vn' },
  { from: 'asia_hq', to: 'asia_rd_jp' },
  { from: 'asia_factory_cn', to: 'asia_factory_vn' },
  { from: 'asia_factory_cn', to: 'asia_disruption' },
  { from: 'asia_factory_vn', to: 'asia_climate' },
  
  // Brazilian Mining Corporation Connections
  { from: 'brazil_hq', to: 'brazil_mine' },
  { from: 'brazil_mine', to: 'brazil_port' },
  { from: 'brazil_mine', to: 'brazil_environ' },
  
  // European Pharmaceutical Company Connections
  { from: 'pharma_hq', to: 'pharma_lab' },
  { from: 'pharma_hq', to: 'pharma_factory' },
  { from: 'pharma_factory', to: 'pharma_supply' }
];