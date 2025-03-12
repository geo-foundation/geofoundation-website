// src/data/nodes.ts
// This file now re-exports types and data from mapData.ts
// to maintain backward compatibility
import { 
  BusinessNode, 
  Connection, 
  nodes, 
  connections 
} from './mapData';

export type { BusinessNode, Connection };
export { nodes, connections };