// src/data/chatData.ts

export interface ChatMessage {
  type: string;
  content: string;
  isLoading?: boolean;
  replace?: boolean;
}

export type ChatSequence = ChatMessage[];

// Supply Chain Sequence for Southeast Asia
export const supplyChainSequence: ChatSequence = [
  { type: 'user', content: 'Identify supply chain risks in Southeast Asia' },
  { type: 'ai', content: 'Processing geospatial risk analysis...', isLoading: true, replace: true },
  { type: 'ai', content: "GEOPOLITICAL RISK ANALYSIS\n\n• Port congestion in Singapore (↑28% last week)\n• Political instability in Myanmar impacting logistics\n• Severe weather alerts for Vietnam's manufacturing hubs\n• Labor disputes detected in Thailand industrial zones" },
  { type: 'user', content: 'Calculate impact on quarterly operations' },
  { type: 'ai', content: 'Quantifying business impact...', isLoading: true, replace: true },
  { type: 'ai', content: "OPERATIONAL IMPACT ASSESSMENT\n\n• 15% increased transit time for Singapore routes\n• 30% risk of delays from Vietnam suppliers\n• $1.2M potential revenue impact\n• 3 critical component shortages predicted\n\nRECOMMENDATION: Activate contingency plan B-7 for affected routes" }
];

// Regulatory Sequence for EU Carbon Markets
export const regulatorySequence: ChatSequence = [
  { type: 'user', content: 'Monitor regulatory changes in EU carbon markets' },
  { type: 'ai', content: 'Scanning regulatory environment...', isLoading: true, replace: true },
  { type: 'ai', content: "REGULATORY INTELLIGENCE\n\n• New EU carbon tax proposal (72% likelihood of passage)\n• Germany accelerating emissions standards timeline\n• France introducing stricter reporting requirements\n• 3 major industry competitors announcing carbon neutrality targets" },
  { type: 'user', content: 'How will this affect our compliance costs?' },
  { type: 'ai', content: 'Calculating compliance impact...', isLoading: true, replace: true },
  { type: 'ai', content: "COMPLIANCE IMPACT FORECAST\n\n• €2.3M additional annual compliance costs expected\n• 18% increase in carbon credit requirements\n• 4 facilities requiring emissions technology upgrades\n• 9-month window to implement new reporting systems\n\nRECOMMENDATION: Accelerate green energy transition in EU facilities" }
];

// Market Entry Sequence for South America
export const marketEntrySequence: ChatSequence = [
  { type: 'user', content: 'Analyze risks for market entry in South America' },
  { type: 'ai', content: 'Evaluating market conditions...', isLoading: true, replace: true },
  { type: 'ai', content: "MARKET ENTRY RISK ASSESSMENT\n\n• Currency volatility in Argentina (±12% monthly fluctuation)\n• Brazil introducing new foreign investment regulations\n• Chile experiencing political transition period\n• Colombia showing strong economic indicators with 5.2% growth" },
  { type: 'user', content: 'Recommend optimal entry strategy' },
  { type: 'ai', content: 'Formulating strategic recommendations...', isLoading: true, replace: true },
  { type: 'ai', content: "STRATEGIC RECOMMENDATION\n\n• Colombia identified as optimal initial market\n• Chile as secondary expansion target (12-month timeline)\n• Joint venture model reduces regulatory exposure by 65%\n• Currency hedging strategy estimated to save $3.4M annually\n\nRECOMMENDATION: Phase 1 launch in Bogotá with local partnership" }
];

// Array of all sequences for cycling
export const allChatSequences = [
  supplyChainSequence, 
  regulatorySequence, 
  marketEntrySequence
];

// Animation timing constants (in milliseconds)
export const chatTimeline = [2000, 2500, 12000, 18000, 18500, 28000];
export const resetDelay = 35000;
export const restartDelay = 8000;