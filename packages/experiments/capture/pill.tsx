import { Button } from "@deep-design-lab/ui"
import { RefreshCcw } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { CapturedMode } from "./captured-mode"
import { NoteMode } from "./note-mode"
import { Shortcut } from "./shortcut"
import "./style.css"
import { cn } from "./utils"


export function Pill() {
  const [captured, setCaptured] = useState(false)
  const [isOpen, setIsOpen] = useState(false)



  const handleCapture = () => {
    setCaptured(true)
  }





  const fadeUpVariant = {
    initial: { opacity: 0, y: 5, style: { "filter": "blur(10px)" } },
    animate: { opacity: 1, y: 0, style: { "filter": "blur(0px)" } },
    exit: { opacity: 0, y: 5, style: { "filter": "blur(10px)" } }
  }



  return (
    <div className="relative w-full h-full bg-secondary flex flex-col items-center justify-center">
      <Button size="icon-sm" variant="outline" className="absolute top-4 right-4" onClick={() => { setIsOpen(false); setCaptured(false) }}><RefreshCcw className="!size-3" /></Button>
      <AnimatePresence mode="wait">

        <motion.div
          layout
          initial={{ opacity: 0, scale: 0, filter: "blur(10px)", borderRadius: "0.1rem" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)", borderRadius: "1rem" }}
          exit={{ opacity: 0, filter: "blur(10px)", borderRadius: "0.1rem" }}

          transition={{
            duration: 1,
            type: "spring",
            stiffness: 400,
            damping: 30

          }}
          data-theme="dark"
          className={cn(
            "corner-smoothing pill-shadow top-8 bg-zinc-900",
            !isOpen && !captured && "hover:scale-[1.05]"
            // "opacity-100 scale-100 will-change-transform",
            // captured && "animate-pulse"
          )}
        >
          {isOpen && !captured && <motion.div
            layout
            variants={fadeUpVariant}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              layout: { duration: 0.5, type: "spring", stiffness: 300, damping: 30 },
              duration: 0.30,
              delay: 0.2
            }}
            className={cn(
              "w-fit h-fit rounded-[1.05rem] flex justify-center",
              captured && "border-brand/30 bg-brand/5"
            )}
          >
            <NoteMode onCancel={() => setIsOpen(false)} onCapture={handleCapture} />

          </motion.div>}
          {isOpen && captured && <motion.div
            layout
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{
              layout: { duration: 0.5, type: "spring", stiffness: 300, damping: 30 },
              duration: 0.30,
              delay: 0.2
            }}
            className={cn(
              "w-fit h-fit rounded-[1.05rem] flex justify-center",
              captured && "border-brand/30 bg-brand/5"
            )}
          >
            <CapturedMode />
          </motion.div>}
          {!isOpen && <motion.div variants={fadeUpVariant} initial="initial" animate="animate" exit="exit" transition={{ duration: 0.30, delay: 0.2 }} className="h-8 px-2.5 cursor-pointer rounded-lg flex items-center justify-center text-sm text-foreground gap-2" onClick={() => setIsOpen(true)}>Capture <Shortcut shortcut="command+J" /></motion.div>}
        </motion.div>

      </AnimatePresence>
    </div>
  )
}