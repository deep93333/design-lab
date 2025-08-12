# @deep-design-lab/capture

A React component library for creating capture interfaces with note-taking functionality, labels, and animations.

## Installation

```bash
bun add @deep-design-lab/capture
```

## Components

### Pill
The main capture interface component with expandable functionality.

```tsx
import { Pill } from '@deep-design-lab/capture'

<Pill />
```

### NoteMode
A note-taking interface with label management.

```tsx
import { NoteMode } from '@deep-design-lab/capture'

<NoteMode onSave={(note) => console.log(note)} onCancel={() => {}} />
```

### CapturedMode
Shows a captured state with animation.

```tsx
import { CapturedMode } from '@deep-design-lab/capture'

<CapturedMode />
```

### LabelsList
A searchable list of labels with creation functionality.

```tsx
import { LabelsList, type Label } from '@deep-design-lab/capture'

const labels: Label[] = [
  { id: "1", name: "Work", key: "work", noteCount: 12 }
]

<LabelsList 
  labels={labels}
  selectedLabels={[]}
  onLabelToggle={(label) => {}}
  onCreateLabel={(name) => {}}
/>
```

### Utilities

#### `cn(...inputs)`
Utility function for merging Tailwind classes.

#### `getVibrantGradientFromString(str)`
Generates a vibrant gradient from a string.

#### `createKeyFromName(name)`
Creates a URL-friendly key from a name.

## Styling

Make sure to include the CSS file in your project:

```tsx
import '@deep-design-lab/capture/style.css'
```

## Dependencies

This package requires the following peer dependencies:
- React 18+ or 19+
- React DOM 18+ or 19+

## Development

```bash
# Build the package
bun run build:capture

# Watch mode for development
bun run dev:capture
```