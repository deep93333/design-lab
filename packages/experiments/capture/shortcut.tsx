import { ArrowUp, CommandIcon, CornerDownLeft, Option, Space } from "lucide-react";
import { motion } from "motion/react";
import type { FC } from "react";
import { cn } from "./utils";

export const Shortcut: FC<{ shortcut: string; className?: string }> = ({ shortcut, className }) => {
  const renderKey = (key: string) => {
    if (key === "command") {
      return <CommandIcon className="size-3" strokeWidth={3} />
    }
    if (key === "enter") {
      return <CornerDownLeft className="size-3" strokeWidth={3} />
    }
    if (key === "shift") {
      return <ArrowUp className="size-3" strokeWidth={3} />
    }
    if (key === "option") {
      return <Option className="size-3" strokeWidth={3} />
    }
    if (key === "⏎") {
      return <CornerDownLeft className="!size-3" strokeWidth={3} />
    }
    if (key === "Space") {
      return <Space className="!size-3" strokeWidth={3} />
    }
    return <span className="text-sm">{key}</span>
  }
  return (
    <motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className={cn("flex items-center gap-0.5 !opacity-50", className)}>
      {shortcut.split("+").map(renderKey)}
    </motion.div>
  )
} 