import { Button } from "@deep-design-lab/ui"
import { ChevronDown, XIcon } from "lucide-react"
import { motion } from "motion/react"
import type { FC } from "react"
import { useState } from "react"
import { LabelBadge } from "./label-badge"
import { LabelsList } from "./labels-list"
import { Shortcut } from "./shortcut"
import { getVibrantGradientFromString } from "./utils"

export type Label = {
  id: string
  name: string
  key: string
  noteCount: number
}

export const mockLabels: Label[] = [
  { id: "1", name: "Work", key: "work", noteCount: 12 },
  { id: "2", name: "Personal", key: "personal", noteCount: 8 },
  { id: "3", name: "Ideas", key: "ideas", noteCount: 15 },
  { id: "4", name: "Research", key: "research", noteCount: 6 },
  { id: "5", name: "Meeting Notes", key: "meeting-notes", noteCount: 9 },
  { id: "6", name: "Todo", key: "todo", noteCount: 23 },
  { id: "7", name: "Archive", key: "archive", noteCount: 4 }
]


export const NoteMode: FC<{ onCancel: () => void; onCapture: () => void }> = ({ onCancel, onCapture }) => {
  const [content, setContent] = useState("")
  const [showLabels, setShowLabels] = useState(false)
  const [selectedLabel, setSelectedLabel] = useState<string | undefined>(undefined)



  const toggleLabels = () => {
    setShowLabels(prev => !prev)
  }



  const handleSave = async () => {
    if (content.trim()) {
      onCapture()
    }
  }

  const selectedLabelData = mockLabels.find(l => l.key === selectedLabel)

  const renderContent = () => {


    // Default: Text 
    return (
      <div className="p-1.5 w-full h-fit">
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30, delay: 0.2 }} className="w-full h-fit corner-smoothing bg-foreground/10 note-shadow rounded-[0.7rem] relative">
          {!showLabels && <textarea autoFocus placeholder="Jot down your thoughts..." className="w-full h-full min-h-[200px] p-2 resize-none text-foreground outline-none bg-transparent text-sm p-4" value={content} onChange={e => setContent(e.target.value)} />}
          {showLabels && <LabelsList onSelectLabel={labelKey => {
            setSelectedLabel(labelKey || "no-label")
            setShowLabels(false)
          }} selectedLabel={selectedLabel || undefined} />}
        </motion.div>
      </div>
    )
  }


  return (
    <div className="flex flex-col gap-0 w-[400px] p-0 min-h-fit">
      {<div className="flex items-center gap-1 draggable px-1.5 pt-1.5">
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }} key={showLabels ? "labels" : "note"}>
          <Button variant={showLabels ? "secondary" : "ghost"} size="sm" className="flex flex-row items-center justify-between !text-white not-draggable" onClick={toggleLabels}>
            <LabelBadge color={getVibrantGradientFromString(selectedLabelData?.key || "no-label")} />
            {selectedLabelData ? selectedLabelData.name : "Select Label"}
            <ChevronDown className={`size-3 transition-all duration-200 ${showLabels ? "rotate-180" : ""}`} strokeWidth={2.5} />
          </Button>
        </motion.div>

        <div className="flex-1" />
        {!showLabels &&
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, type: "spring", stiffness: 300, damping: 30 }}>
            <Button variant="brand" size='sm' className="!text-background not-draggable transition-all duration-200" onClick={handleSave}>
              Capture <span className="flex flex-row items-center gap-0.5">
                <Shortcut shortcut="⌘+⏎" />
              </span>

            </Button>
          </motion.div>}


        <Button variant="ghost" size='icon-sm' className=" !text-foreground not-draggable" onClick={onCancel}>
          <XIcon className="size-4" strokeWidth={2.5} />
        </Button>
      </div>}

      {renderContent()}
    </div>
  )
} 