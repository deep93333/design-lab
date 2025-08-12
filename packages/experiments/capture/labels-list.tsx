import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@deep-design-lab/ui"
import { CheckIcon, PlusIcon } from "lucide-react"
import type { FC } from "react"
import { useState } from "react"
import { LabelBadge } from "./label-badge"
import { mockLabels, type Label } from "./note-mode"
import { createKeyFromName, getVibrantGradientFromString } from "./utils"





export const LabelsList: FC<{ onSelectLabel: (labelId: string | undefined) => void; selectedLabel: string | undefined }> = ({ onSelectLabel, selectedLabel }) => {
  const [labels, setLabels] = useState<Label[]>(mockLabels)
  const [query, setQuery] = useState("")

  const filteredLabels = labels.filter(l => l.name.toLowerCase().includes(query.toLowerCase()))

  const handleLabelSelect = (labelKey: string) => {
    onSelectLabel(labelKey)
  }

  const handleCreateLabel = (name: string) => {
    const key = createKeyFromName(name)
    const newLabel: Label = {
      id: Date.now().toString(),
      name,
      key,
      noteCount: 0
    }
    setLabels(prev => [...prev, newLabel])
    handleLabelSelect(key)
    setQuery('')
  }

  return (
    <Command autoFocus className="bg-transparent border-none">
      <div className="flex flex-row px-2 py-0.5 items-center gap-0">

        <CommandInput value={query} onValueChange={setQuery} placeholder="Search labels" autoFocus className="px-2" onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === "Enter" && filteredLabels.length === 0 && query.trim()) {
            handleCreateLabel(query.trim())
          }
        }} />
      </div>

      <CommandList className="px-1.5 pb-1.5 max-h-[200px]">
        {filteredLabels.length === 0 && query.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-12 px-4 text-center">
            <div className="w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center mb-4">
              <PlusIcon className="size-8 text-foreground/30" strokeWidth={1.5} />
            </div>
            <h3 className="text-sm font-medium text-foreground/70 mb-1">No labels yet</h3>
            <p className="text-xs text-foreground/50 max-w-[200px] leading-relaxed">
              Create labels to organize your notes. Start typing to create your first label.
            </p>
          </div>
        ) : (
          <>
            {filteredLabels.map(label => {
              const isSelected = selectedLabel === label.key
              return (
                <CommandItem
                  key={label.id}
                  value={label.name}
                  className={`flex items-center gap-2 rounded-[10px] px-1.5 py-1`}
                  onSelect={() => handleLabelSelect(label.key)}
                >
                  <LabelBadge color={getVibrantGradientFromString(label.key)} />
                  <span className="text-xs text-foreground">{label.name}</span>
                  <div className="flex-1" />
                  {isSelected && <span className="text-xs text-foreground/50"><CheckIcon className="size-4 text-brand" /></span>}
                  <span className="text-xs text-foreground/50">{label.noteCount} notes</span>
                </CommandItem>
              )
            })}
          </>
        )}
        {filteredLabels.length === 0 && query.length > 0 && (
          <CommandEmpty>
            <div className="flex flex-col items-center gap-2">
              <PlusIcon className="size-4 text-foreground/50" />
              <span className="text-sm text-foreground/50">Create a new label</span>
            </div>
          </CommandEmpty>
        )}
      </CommandList>
    </Command>
  )
} 