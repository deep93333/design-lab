import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getVibrantGradientFromString(str: string): string {
  return generateVibrantHSLAFromString(str)
}

export const createKeyFromName = (name: string) => {
  return name.toLowerCase().replace(/[^a-z0-9]/g, "-")
}

export const getFirstLineFromHtml = (html: string, maxLength: number = 50): string => {
  const div = document.createElement('div')
  div.innerHTML = html
  const text = div.textContent || ''
  
  // Get only the first line (cut at line breaks)
  const firstLine = text.split('\n')[0].trim()
  
  // Truncate if too long
  return firstLine.length > maxLength ? firstLine.substring(0, maxLength) + '...' : firstLine
}

export function generateVibrantHSLA(seed?: string | number): string {
  const random = seed ? seededRandom(seed) : Math.random
  
  const hue = parseFloat((random() * 360).toFixed(3))
  const saturation = parseFloat((80 + random() * 20).toFixed(3)) // 80-100%
  const lightness = parseFloat((50 + random() * 20).toFixed(3)) // 50-70%
  const alpha = 1
  
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
}

export function generateVibrantHSLAFromString(str: string): string {
  let hash = 0
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash)
    hash = hash & hash
  }
  
  const random = seededRandom(hash)
  const hue = parseFloat((Math.abs(hash) % 360).toFixed(3))
  const saturation = parseFloat((80 + random() * 20).toFixed(3))
  const lightness = parseFloat((50 + random() * 50).toFixed(3))
  const alpha = 1
  
  return `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
}

export function generateMultipleVibrantHSLA(count: number, seed?: string | number): string[] {
  const colors: string[] = []
  const random = seed ? seededRandom(seed) : Math.random
  
  for (let i = 0; i < count; i++) {
    const hue = parseFloat(((random() + i * 0.618033988749) % 1 * 360).toFixed(3))
    const saturation = parseFloat((80 + random() * 20).toFixed(3))
    const lightness = parseFloat((50 + random() * 20).toFixed(3))
    const alpha = 1
    
    colors.push(`hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`)
  }
  
  return colors
}

function seededRandom(seed: string | number): () => number {
  const numericSeed = typeof seed === 'string' ? 
    seed.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) : seed
  
  let x = Math.sin(numericSeed) * 10000
  return () => {
    x = Math.sin(x) * 10000
    return x - Math.floor(x)
  }
}