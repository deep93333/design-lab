import type { FC } from "react";
import { cn } from "./utils";

export const LabelBadge: FC<{ className?: string; color: string }> = ({ className, color }) => {
  return (
    <div className={cn("w-4 h-4 rounded-md relative", className)} style={{ background: color }} />
  )
} 