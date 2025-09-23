# AGENTS.md - Development Guidelines

## Build/Test/Lint Commands

- `npm run build` - Build the React Router application
  t
- `npm run dev` - Start development server
- `npm run typecheck` - Run TypeScript type checking (react-router typegen + tsc)
- `npm start` - Start production server
- No lint/test commands configured - add if needed

## Code Style Guidelines

- **Framework**: React Router v7 with TypeScript, Vite, Tailwind CSS
- **Imports**: Use single quotes, organize by external libs first, then internal modules
- **Types**: Use TypeScript strict mode, import types with `type` keyword
- **Naming**: camelCase for variables/functions, PascalCase for components
- **Files**: Use `.tsx` for React components, `.ts` for utilities
- **Paths**: Use `~/*` alias for app directory imports (configured in tsconfig)
- **Exports**: Use named exports for utilities, default exports for React components
- **Error Handling**: Use ErrorBoundary pattern with isRouteErrorResponse checks
- **Formatting**: Use single quotes for JSX attributes, consistent spacing
- **CSS**: Use Tailwind classes, avoid inline styles

