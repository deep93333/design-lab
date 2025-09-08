import { Button, cn } from '@deep-design-lab/ui'
import * as React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export function MarkdownStreamingPlayground() {
  const DEFAULT_MARKDOWN = `# AI Notes – Streaming Markdown Demo

This demo shows how content streams as tokens and renders live. It\'s designed to mimic a real product flow rather than a syntax sampler.

---

## Scenario

You\'re summarizing a customer interview while an AI assistant is streaming the draft in real time. You tweak the prompt, adjust speed, and watch the notes evolve.

## Goals

- Capture raw thoughts quickly while the model streams
- Keep context like links, quotes, and todos inline
- Share a clean summary with teammates

## Quick Start

1. Paste your raw notes in the sidebar
2. Click Stream to simulate token-by-token output
3. Tweak speed to match reading pace

~~~bash
curl -X POST https://api.example.com/v1/notes \\
  -H 'Content-Type: application/json' \\
  -d '{"topic":"markdown streaming","audience":"design eng"}'
~~~

## Live Summary (Example)

> Product vision: unify quick capture with high-fidelity export.
>
> Audience: fast-moving design engineers who need delightful UX.

- Pain points
  - Context switching between tools
  - Slow iteration loops
- Outcome
  - Faster capture-to-share cycle
  - Higher signal notes with structure

## Key Links

- Spec draft: https://example.com/specs/streaming-notes
- Design system: [Deep Design Lab](https://deep.design)

## API Shape

~~~json
{
  "id": "note_9a1c",
  "status": "streaming",
  "chunks": [
    { "t": 0, "delta": "Intro" },
    { "t": 120, "delta": "Goals" }
  ]
}
~~~

## Event Stream (Server-Sent Events)

~~~
event: token
data: {"delta":"Hello"}

event: token
data: {"delta":" world"}

event: done
data: {"duration_ms": 534}
~~~

## Acceptance Checklist

- [x] Stream tokens into a markdown buffer
- [x] Parse with GFM for tables, tasks, and footnotes
- [ ] Add pause / resume
- [ ] Export to .md and .pdf

## Table – Output Channels

| Channel  | Format | Status   | Notes                 |
|:---------|:-------|:---------|:----------------------|
| Web      | HTML   | Enabled  | Live streaming        |
| Notion   | MD     | Planned  | Via API               |
| Docs     | PDF    | Planned  | Export service needed |

## Code – Post-process Hook

~~~ts
type Chunk = { t: number; delta: string }

function assemble(chunks: Chunk[]): string {
  let out = ''
  for (const c of chunks) out += c.delta
  return out.trim()
}
~~~

## Footnote

We use GFM for practical authoring features.[^why]

[^why]: Tables, tasks, and autolinks are crucial for real notes.
`
  const [input, setInput] = React.useState<string>(DEFAULT_MARKDOWN)
  const [chunks, setChunks] = React.useState<string[]>([])
  const [isStreaming, setIsStreaming] = React.useState<boolean>(false)
  const [speedMs, setSpeedMs] = React.useState<number>(40)
  const [viewMode, setViewMode] = React.useState<'preview' | 'tokens'>('preview')
  const [chunkMode, setChunkMode] = React.useState<'word' | 'char' | 'markdown'>('markdown')
  const [rateMode, setRateMode] = React.useState<'interval' | 'cps'>('interval')
  const [charsPerSec, setCharsPerSec] = React.useState<number>(80)

  const fullTextRef = React.useRef<string>('')
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const timerRef = React.useRef<number | null>(null)
  const speedRef = React.useRef<number>(speedMs)
  const cpsRef = React.useRef<number>(charsPerSec)
  const animatedNodeIdsRef = React.useRef<Set<string>>(new Set())

  React.useEffect(() => {
    speedRef.current = speedMs
  }, [speedMs])
  React.useEffect(() => {
    cpsRef.current = charsPerSec
  }, [charsPerSec])

  const computeUnits = React.useCallback((): string[] => {
    if (chunkMode === 'char') {
      return Array.from(input)
    }
    if (chunkMode === 'word') {
      return input.split(/(\s+)/)
    }

    const units: string[] = []
    let cursorIndex = 0
    const totalLength = input.length

    const isLineStart = (idx: number): boolean => idx === 0 || input[idx - 1] === '\n'
    const indexOfFrom = (substr: string, from: number): number => input.indexOf(substr, from)

    const readUntilNewline = (from: number): number => {
      const nextNewline = indexOfFrom('\n', from)
      return nextNewline === -1 ? totalLength : nextNewline + 1
    }

    const tryFence = (): string | null => {
      if (input.startsWith('```', cursorIndex) || input.startsWith('~~~', cursorIndex)) {
        const fence = input.substr(cursorIndex, 3)
        const closeIndex = indexOfFrom(fence, cursorIndex + 3)
        const endIndex = closeIndex === -1 ? totalLength : closeIndex + 3
        return input.slice(cursorIndex, endIndex)
      }
      return null
    }

    const tryHeading = (): string | null => {
      if (isLineStart(cursorIndex) && input[cursorIndex] === '#') {
        const end = readUntilNewline(cursorIndex)
        return input.slice(cursorIndex, end)
      }
      return null
    }

    const tryBlockquote = (): string | null => {
      if (isLineStart(cursorIndex) && input[cursorIndex] === '>') {
        const end = readUntilNewline(cursorIndex)
        return input.slice(cursorIndex, end)
      }
      return null
    }

    const tryHr = (): string | null => {
      if (isLineStart(cursorIndex)) {
        const end = readUntilNewline(cursorIndex)
        const line = input.slice(cursorIndex, end)
        const normalized = line.trim()
        if (normalized === '---' || normalized === '***' || normalized === '___') return line
      }
      return null
    }

    const tryList = (): string | null => {
      if (!isLineStart(cursorIndex)) return null
      const end = readUntilNewline(cursorIndex)
      const line = input.slice(cursorIndex, end)
      if (/^(\s*)([-*+]\s+)/.test(line) || /^(\s*)\d+\.\s+/.test(line)) return line
      return null
    }

    const tryTableBlock = (): string | null => {
      if (!isLineStart(cursorIndex)) return null
      const end1 = readUntilNewline(cursorIndex)
      const line1 = input.slice(cursorIndex, end1)
      const isPipeRow = (line: string): boolean => line.includes('|')
      if (!isPipeRow(line1)) return null

      const start2 = end1
      if (start2 >= totalLength) return null
      const end2 = readUntilNewline(start2)
      const line2 = input.slice(start2, end2)

      const isSeparatorRow = (line: string): boolean => {
        const trimmed = line.trim()
        const withoutEdges = trimmed.replace(/^\|/, '').replace(/\|$/, '')
        const cells = withoutEdges.split('|')
        if (cells.length < 1) return false
        return cells.every((c) => /^\s*:?-{3,}:?\s*$/.test(c))
      }

      if (!isSeparatorRow(line2)) return null

      let scanStart = end2
      let lastEnd = end2
      while (scanStart < totalLength) {
        const rowEnd = readUntilNewline(scanStart)
        const row = input.slice(scanStart, rowEnd)
        if (!isPipeRow(row) || row.trim() === '') break
        lastEnd = rowEnd
        scanStart = rowEnd
      }

      const blockEnd = lastEnd
      return input.slice(cursorIndex, blockEnd)
    }

    const tryInlineCode = (): string | null => {
      if (input[cursorIndex] !== '`') return null
      const closeIndex = indexOfFrom('`', cursorIndex + 1)
      if (closeIndex === -1) return null
      return input.slice(cursorIndex, closeIndex + 1)
    }

    const tryEmphasis = (): string | null => {
      const two = input.substr(cursorIndex, 2)
      if (two === '**' || two === '__') {
        const closeIndex = indexOfFrom(two, cursorIndex + 2)
        if (closeIndex !== -1) return input.slice(cursorIndex, closeIndex + 2)
      }
      const one = input[cursorIndex]
      if (one === '*' || one === '_') {
        const closeIndex = indexOfFrom(one, cursorIndex + 1)
        if (closeIndex !== -1) return input.slice(cursorIndex, closeIndex + 1)
      }
      return null
    }

    const tryFootnote = (): string | null => {
      if (input.startsWith('[^', cursorIndex)) {
        const close = indexOfFrom(']', cursorIndex + 2)
        if (close !== -1) return input.slice(cursorIndex, close + 1)
      }
      if (isLineStart(cursorIndex) && input.startsWith('[^', cursorIndex)) {
        const end = readUntilNewline(cursorIndex)
        return input.slice(cursorIndex, end)
      }
      return null
    }

    const tryLinkOrImage = (): string | null => {
      const startIndex = input[cursorIndex] === '!' && input[cursorIndex + 1] === '[' ? cursorIndex + 1 : cursorIndex
      if (input[startIndex] !== '[') return null
      const closeBracket = indexOfFrom(']', startIndex + 1)
      if (closeBracket === -1) return null
      const hasParen = input[closeBracket + 1] === '('
      if (!hasParen) return input.slice(cursorIndex, closeBracket + 1)
      const closeParen = indexOfFrom(')', closeBracket + 2)
      if (closeParen === -1) return null
      return input.slice(cursorIndex, closeParen + 1)
    }

    const readWordOrSpaceOrPunct = (): string => {
      const remaining = input.slice(cursorIndex)
      const match = /(\s+|[.,;:!?(){}\[\]"'`]+|[^\s.,;:!?(){}\[\]"'`]+)/.exec(remaining)
      return match ? match[0] : input[cursorIndex]
    }

    while (cursorIndex < totalLength) {
      const tryOrder = [tryFence, tryHeading, tryBlockquote, tryHr, tryTableBlock, tryList, tryInlineCode, tryLinkOrImage, tryEmphasis, tryFootnote]
      let captured: string | null = null
      for (const fn of tryOrder) {
        captured = fn()
        if (captured) break
      }
      const unit = captured ?? readWordOrSpaceOrPunct()
      units.push(unit)
      cursorIndex += unit.length
    }

    return units
  }, [input, chunkMode])

  const handleStartStream = React.useCallback(() => {
    if (isStreaming) return
    setIsStreaming(true)
    setChunks([])
    animatedNodeIdsRef.current = new Set()
    fullTextRef.current = ''

    const units = computeUnits()
    let index = 0

    const tick = () => {
      if (index >= units.length) {
        setIsStreaming(false)
        timerRef.current = null
        return
      }
      const next = units[index]
      fullTextRef.current += next
      setChunks((prev) => [...prev, next])
      index += 1
      const delay = rateMode === 'cps'
        ? Math.max(30, Math.round((next.length / Math.max(1, cpsRef.current)) * 1000))
        : Math.max(5, speedRef.current)
      timerRef.current = window.setTimeout(tick, delay)
    }

    const initialDelay = rateMode === 'cps'
      ? Math.max(30, Math.round((units[0]?.length ?? 1) / Math.max(1, cpsRef.current) * 1000))
      : Math.max(5, speedRef.current)
    timerRef.current = window.setTimeout(tick, initialDelay)
  }, [computeUnits, isStreaming, rateMode])

  const rendered = React.useMemo(() => chunks.join(''), [chunks])

  const tokens = React.useMemo(() => {
    const source = rendered
    const result: { text: string; kind: 'word' | 'punct' | 'space'; start: number; end: number }[] = []
    const pattern = /(\s+|[.,;:!?(){}\[\]"'`]+|[^\s.,;:!?(){}\[\]"'`]+)/g
    let match: RegExpExecArray | null
    while ((match = pattern.exec(source)) !== null) {
      const text = match[0]
      const start = match.index
      const end = start + text.length
      if (/^\s+$/.test(text)) {
        result.push({ text, kind: 'space', start, end })
      } else if (/^[.,;:!?(){}\[\]"'`]+$/.test(text)) {
        result.push({ text, kind: 'punct', start, end })
      } else {
        result.push({ text, kind: 'word', start, end })
      }
    }
    return result
  }, [rendered])

  const incompleteRanges = React.useMemo(() => {
    const s = rendered
    const ranges: { start: number; end: number; kind: 'fence' | 'inlineCode' | 'emphasis' | 'link' | 'table' }[] = []
    if (!s) return ranges

    let i = 0
    let fenceOpenAt: number | null = null
    let inlineCodeOpenAt: number | null = null
    let star2OpenAt: number | null = null
    let star1OpenAt: number | null = null
    let us2OpenAt: number | null = null
    let us1OpenAt: number | null = null
    let linkTextOpenAt: number | null = null
    let linkUrlOpenAt: number | null = null

    while (i < s.length) {
      if (s.startsWith('```', i) || s.startsWith('~~~', i)) {
        if (fenceOpenAt === null) {
          fenceOpenAt = i
          i += 3
          continue
        } else {
          fenceOpenAt = null
          i += 3
          continue
        }
      }

      if (s[i] === '`') {
        if (inlineCodeOpenAt === null) inlineCodeOpenAt = i
        else inlineCodeOpenAt = null
        i += 1
        continue
      }

      if (s.startsWith('**', i)) {
        if (star2OpenAt === null) star2OpenAt = i
        else star2OpenAt = null
        i += 2
        continue
      }
      if (s.startsWith('__', i)) {
        if (us2OpenAt === null) us2OpenAt = i
        else us2OpenAt = null
        i += 2
        continue
      }
      if (s[i] === '*') {
        if (star1OpenAt === null) star1OpenAt = i
        else star1OpenAt = null
        i += 1
        continue
      }
      if (s[i] === '_') {
        if (us1OpenAt === null) us1OpenAt = i
        else us1OpenAt = null
        i += 1
        continue
      }

      if (s[i] === '[' || (s[i] === '!' && s[i + 1] === '[')) {
        if (linkTextOpenAt === null) linkTextOpenAt = i
        i += 1
        continue
      }
      if (s[i] === ']' && linkTextOpenAt !== null) {
        linkTextOpenAt = null
        if (s[i + 1] === '(') {
          linkUrlOpenAt = i + 1
        }
        i += 1
        continue
      }
      if (s[i] === ')' && linkUrlOpenAt !== null) {
        linkUrlOpenAt = null
        i += 1
        continue
      }

      i += 1
    }

    if (fenceOpenAt !== null) ranges.push({ start: fenceOpenAt, end: s.length, kind: 'fence' })
    if (inlineCodeOpenAt !== null) ranges.push({ start: inlineCodeOpenAt, end: s.length, kind: 'inlineCode' })
    if (star2OpenAt !== null) ranges.push({ start: star2OpenAt, end: s.length, kind: 'emphasis' })
    if (us2OpenAt !== null) ranges.push({ start: us2OpenAt, end: s.length, kind: 'emphasis' })
    if (star1OpenAt !== null) ranges.push({ start: star1OpenAt, end: s.length, kind: 'emphasis' })
    if (us1OpenAt !== null) ranges.push({ start: us1OpenAt, end: s.length, kind: 'emphasis' })
    if (linkTextOpenAt !== null || linkUrlOpenAt !== null) {
      const openAt = linkUrlOpenAt ?? linkTextOpenAt ?? 0
      ranges.push({ start: openAt, end: s.length, kind: 'link' })
    }

    const lastLineStart = s.lastIndexOf('\n') + 1
    if (lastLineStart >= 0) {
      const lastLine = s.slice(lastLineStart)
      if (lastLine.includes('|')) ranges.push({ start: lastLineStart, end: s.length, kind: 'table' })
    }

    return ranges
  }, [rendered])

  const visualizeWhitespace = React.useCallback((s: string): string => {
    let out = ''
    for (const ch of s) {
      if (ch === ' ') out += '␣'
      else if (ch === '\\t') out += '⇥'
      else if (ch === '\n') out += '↵\n'
      else out += ch
    }
    return out
  }, [])

  React.useEffect(() => {
    if (!containerRef.current) return
    containerRef.current.scrollTop = containerRef.current.scrollHeight
  }, [chunks])

  React.useEffect(() => {
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current)
        timerRef.current = null
      }
    }
  }, [])

  return (
    <div className="flex flex-col md:flex-row w-full max-w-5xl mx-auto p-4 gap-4">
      <aside className="w-full md:w-80 shrink-0 rounded-md border border-foreground/10 bg-background p-3 flex flex-col gap-3">
        <div className="text-xs text-foreground/60">Settings</div>
        <div className="flex items-center gap-2">
          <Button size="sm" variant="outline" onClick={handleStartStream} disabled={isStreaming}>
            Stream
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => {
              if (timerRef.current) {
                window.clearTimeout(timerRef.current)
                timerRef.current = null
              }
              setIsStreaming(false)
              setChunks([])
            }}
          >
            Clear
          </Button>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-foreground/60">View</label>
          <div className="flex items-center gap-1">
            <Button size="xs" variant={viewMode === 'preview' ? 'brand' : 'ghost'} onClick={() => setViewMode('preview')}>Preview</Button>
            <Button size="xs" variant={viewMode === 'tokens' ? 'brand' : 'ghost'} onClick={() => setViewMode('tokens')}>Tokens</Button>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-foreground/60">Chunk by</label>
          <div className="flex items-center gap-1">
            <Button size="xs" variant={chunkMode === 'word' ? 'brand' : 'ghost'} onClick={() => setChunkMode('word')}>Words</Button>
            <Button size="xs" variant={chunkMode === 'char' ? 'brand' : 'ghost'} onClick={() => setChunkMode('char')}>Characters</Button>
            <Button size="xs" variant={chunkMode === 'markdown' ? 'brand' : 'ghost'} onClick={() => setChunkMode('markdown')}>Markdown</Button>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-foreground/60">Streaming speed ({speedMs}ms)</label>
          <input
            type="range"
            min={5}
            max={200}
            step={5}
            value={speedMs}
            onChange={(e) => setSpeedMs(Number(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-[10px] text-foreground/50">
            <span>Fast</span>
            <span>Slow</span>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-foreground/60">Rate mode</label>
          <div className="flex items-center gap-1">
            <Button size="xs" variant={rateMode === 'interval' ? 'brand' : 'ghost'} onClick={() => setRateMode('interval')}>Fixed interval</Button>
            <Button size="xs" variant={rateMode === 'cps' ? 'brand' : 'ghost'} onClick={() => setRateMode('cps')}>Chars/sec</Button>
          </div>
          {rateMode === 'cps' && (
            <div className="flex items-center gap-2">
              <input
                type="range"
                min={20}
                max={600}
                step={10}
                value={charsPerSec}
                onChange={(e) => setCharsPerSec(Number(e.target.value))}
                className="w-full"
              />
              <span className="text-xs text-foreground/60 w-[4.5rem]">{charsPerSec} cps</span>
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs text-foreground/60">Input</label>
          <textarea
            className="w-full h-56 rounded-md border border-foreground/10 bg-background p-3 font-mono text-sm outline-none focus:ring-1 focus:ring-ring"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Write markdown here..."
          />
        </div>

        <div className="text-xs text-foreground/60">{isStreaming ? 'Streaming…' : 'Idle'}</div>
      </aside>

      <main className="flex-1 rounded-md border border-foreground/10 bg-background p-3">
        {viewMode === 'preview' ? (
          <>
            <div className="text-xs text-foreground/60 mb-2">Preview</div>
            <div ref={containerRef} className="max-h-[70vh] overflow-auto text-sm">
              <div className="prose prose-zinc max-w-none text-sm">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={(() => {
                    const getNodeId = (node: any, tag: string, children: any): string => {
                      const pos = node?.position?.start
                      const raw = Array.isArray(children) ? children.join('') : String(children ?? '')
                      const key = `${tag}|${pos?.offset ?? pos?.line + ':' + pos?.column ?? 'x'}|${raw.slice(0, 64)}`
                      let hash = 5381
                      for (let i = 0; i < key.length; i++) hash = ((hash << 5) + hash) ^ key.charCodeAt(i)
                      return `n-${(hash >>> 0).toString(16)}`
                    }

                    const setAnimatedOnce = (id: string) => {
                      if (!animatedNodeIdsRef.current.has(id)) {
                        animatedNodeIdsRef.current.add(id)
                        return false
                      }
                      return true
                    }

                    const tokenize = (text: string) => {
                      const tokens: { text: string; isSpace: boolean }[] = []
                      const re = /(\s+|[^\s]+)/g
                      let m: RegExpExecArray | null
                      while ((m = re.exec(text)) !== null) {
                        const part = m[0]
                        tokens.push({ text: part, isSpace: /^\s+$/.test(part) })
                      }
                      return tokens
                    }

                    const makeSimple = (Tag: any) => (props: any) => {
                      const id = getNodeId(props.node, Tag, props.children)
                      const already = setAnimatedOnce(id)
                      return (
                        <Tag id={id} className={cn(props.className, !already && 'fade-in-quick')} {...props} />
                      )
                    }

                    const makeTokenized = (Tag: any) => (props: any) => {
                      const id = getNodeId(props.node, Tag, props.children)
                      const className = props.className
                      const childArray = Array.isArray(props.children) ? props.children : [props.children]
                      const spans: any[] = []
                      let accIndex = 0
                      for (const child of childArray) {
                        if (typeof child === 'string') {
                          const tokens = tokenize(child)
                          for (const tk of tokens) {
                            const tid = `${id}-t${accIndex}`
                            const already = setAnimatedOnce(tid)
                            spans.push(
                              <span
                                key={tid}
                                id={tid}
                                className={cn(tk.isSpace ? 'whitespace-pre-wrap' : undefined, !already && 'fade-in-quick')}
                              >
                                {tk.text}
                              </span>
                            )
                            accIndex += tk.text.length
                          }
                        } else if (child != null) {
                          spans.push(child)
                        }
                      }
                      return (
                        <Tag id={id} className={className}>
                          {spans}
                        </Tag>
                      )
                    }

                    return {
                      p: makeTokenized('p'),
                      li: makeTokenized('li'),
                      h1: makeSimple('h1'),
                      h2: makeSimple('h2'),
                      h3: makeSimple('h3'),
                      h4: makeSimple('h4'),
                      h5: makeSimple('h5'),
                      h6: makeSimple('h6'),
                      ul: makeSimple('ul'),
                      ol: makeSimple('ol'),
                      blockquote: makeSimple('blockquote'),
                      pre: makeSimple('pre'),
                      code: makeSimple('code'),
                      table: makeSimple('table'),
                      thead: makeSimple('thead'),
                      tbody: makeSimple('tbody'),
                      tr: makeSimple('tr'),
                      td: makeSimple('td'),
                      th: makeSimple('th'),
                      hr: makeSimple('hr'),
                      img: makeSimple('img'),
                      a: makeSimple('a'),
                    }
                  })()}
                >
                  {rendered}
                </ReactMarkdown>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="text-xs text-foreground/60 mb-2">Tokens</div>
            <div className="max-h-[70vh] overflow-auto text-sm">
              <div className="flex flex-wrap gap-1">
                {tokens.map((t, i) => {
                  const isSpace = t.kind === 'space'
                  const isPunct = t.kind === 'punct'
                  const overlapsIncomplete = incompleteRanges.some((r) => t.start < r.end && t.end > r.start)
                  const base = 'inline-block rounded px-1.5 py-0.5 border text-xs'
                  const normalCls = isSpace
                    ? 'bg-foreground/5 text-foreground/60 border-foreground/10'
                    : isPunct
                      ? 'bg-foreground/10 text-foreground/80 border-foreground/20'
                      : 'bg-brand/10 text-brand border-brand/20'
                  const incompleteCls = 'border-dashed bg-green-500/5 text-foreground border-green-400/40'
                  const cls = overlapsIncomplete ? incompleteCls : normalCls
                  const content = isSpace ? visualizeWhitespace(t.text) : t.text
                  return (
                    <span key={i} className={`${base} ${cls}`}>
                      {content}
                    </span>
                  )
                })}
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}

export default MarkdownStreamingPlayground
