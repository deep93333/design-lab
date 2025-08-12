# @deep-design-lab/ui

A React UI component library built with Radix UI primitives, Tailwind CSS v4, and TypeScript.

## Features

- 🎨 Built with **Tailwind CSS v4** for modern styling
- ♿ Accessible components using **Radix UI** primitives
- 🎯 **TypeScript** support with proper type definitions
- 🎭 **Class Variance Authority (cva)** for variant management
- 🚀 Optimized for modern React applications
- 📦 ESM module support

## Installation

```bash
bun add @deep-design-lab/ui
```

## Usage

### Import Styles

Import the CSS file in your main application file:

```tsx
import '@deep-design-lab/ui/styles'
```

### Import Components

```tsx
import { Button, Dialog, Command, HoverCard, Tooltip } from '@deep-design-lab/ui'

function App() {
  return (
    <div>
      <Button variant="default" size="lg">
        Click me
      </Button>
    </div>
  )
}
```

## Components

### Button
- Multiple variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`, `brand`
- Multiple sizes: `xs`, `sm`, `default`, `lg`, `xl`, `icon`, `icon-sm`, `icon-xs`
- Loading states with spinner
- Icon support (left/right)
- Tooltip integration
- Full width option

### Dialog
- Modal dialogs with overlay
- Header, body, and footer sections
- Customizable close button
- Accessibility features

### Command
- Command palette component
- Search functionality
- Keyboard navigation
- Groups and separators

### HoverCard
- Rich hover cards with content
- Multiple sizes and variants
- Positioning options
- Header, body, and footer sections

### Tooltip
- Simple tooltip component
- Multiple positioning options
- Customizable delay

## Development

### Building

```bash
bun run build:ui
```

### Watching for Changes

```bash
bun run dev:ui
```

## Theme System

The UI package includes a comprehensive theme system with:

- Light and dark mode support
- CSS custom properties for easy customization
- Tailwind CSS v4 theme configuration
- Consistent color palette and spacing

## TypeScript Support

All components are fully typed with TypeScript, including:

- Component props with proper typing
- Variant props using class-variance-authority
- Exported type definitions
- Generic constraints where applicable

## License

MIT