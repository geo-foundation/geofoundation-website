# Geofoundation Website: Development Guidelines

## Build Commands
- Start dev server: `npm start`
- Build for production: `npm run build`
- Run all tests: `npm test`
- Run single test: `npm test -- -t 'test name'`
- Run with test coverage: `npm test -- --coverage`

## Code Style
- **TypeScript**: Use strict mode with proper type annotations
- **Components**: React functional components with type annotations (e.g., `React.FC<Props>`)
- **Naming**: 
  - PascalCase for components and interfaces
  - camelCase for variables, functions, and instances
  - UPPER_CASE for constants
- **Imports**: Group imports (React first, then external libraries, components, utilities, styles)
- **Error Handling**: Use try/catch blocks and proper error boundaries
- **Formatting**: Use consistent indentation (2 spaces) and trailing commas
- **State Management**: Prefer React hooks (useState, useContext) over class components
- **Documentation**: Document complex logic with clear comments and JSDoc when appropriate
- **Testing**: Write tests for components and utilities with meaningful assertions

## Goal
create a functional website for the geofoundation company, here company description:
GeoFoundation offers a cutting-edge intelligence platform that analyzes geopolitical data to help multinational companies navigate today's volatile global environment. The solution integrates internal supply chain data with real-time global information—from news and social media to regulatory and environmental sources—ensuring companies receive context-aware insights. By leveraging agentic AI, GeoFoundation delivers proactive, on-demand decision support that goes beyond static risk scores. Autonomous AI agents provide real-time alerts, automate compliance reporting, and simulate business scenarios using digital twin technology. This enables companies to transform traditional reactive risk management into a dynamic, strategic process.