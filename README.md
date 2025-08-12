# Deep Design Lab - Monorepo

This is a monorepo containing multiple packages for the Deep Design Lab project.

## Structure

```
deep-design-lab/
├── packages/
│   └── web/          # React + TypeScript + Vite web application
├── package.json      # Root workspace configuration
└── README.md
```

## Getting Started

Install dependencies:
```bash
bun install
```

## Development

### Web Application
```bash
# Start the web development server
bun run dev
# or specifically
bun run dev:web

# Build the web application
bun run build
# or specifically  
bun run build:web

# Run linting
bun run lint

# Preview production build
bun run preview
```

## Adding New Packages

To add a new package to the monorepo:

1. Create a new directory under `packages/`
2. Add a `package.json` with a scoped name like `@deep-design-lab/package-name`
3. The package will automatically be included in the workspace

## Technology Stack

- **Package Manager**: Bun with workspaces
- **Web App**: React 19 + TypeScript + Vite
- **Linting**: ESLint with TypeScript support
- **Build**: Vite with TypeScript compilation

## Web Package Details

The web package (`packages/web/`) contains:
- React 19 with TypeScript
- Vite for development and building
- ESLint with React and TypeScript rules
- Modern React development setup with Fast Refresh