"use client"

import { useEffect, useRef, useState } from "react"

const S = 4

type SpriteProps = {
  className?: string
  style?: React.CSSProperties
}

// ── Custom Cursor ──
export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    let currentHoverState = false;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }
      
      const target = e.target as HTMLElement
      const clickable = target.closest('a, button, [role="button"]')
      const isNowHovering = !!clickable
      
      if (currentHoverState !== isNowHovering) {
          currentHoverState = isNowHovering;
          setIsHovering(isNowHovering);
      }
    }
    
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (!isTouchDevice) {
        document.body.classList.add('no-native-cursor')
        document.addEventListener('mousemove', handleMouseMove)
        return () => {
            document.body.classList.remove('no-native-cursor')
            document.removeEventListener('mousemove', handleMouseMove)
        }
    }
  }, [])

  const arrowRows = [
    [1,0,0,0,0,0,0],
    [1,1,0,0,0,0,0],
    [1,2,1,0,0,0,0],
    [1,2,2,1,0,0,0],
    [1,2,2,2,1,0,0],
    [1,2,2,2,2,1,0],
    [1,2,2,2,2,2,1],
    [1,2,2,1,1,1,0],
    [1,2,1,0,0,0,0],
    [1,1,0,0,0,0,0],
    [1,0,0,0,0,0,0],
  ]

  const handRows = [
    [0,0,1,1,0,0,0,0],
    [0,0,1,2,1,0,0,0],
    [0,0,1,2,1,0,0,0],
    [0,1,1,2,1,1,1,0],
    [1,2,2,2,2,2,2,1],
    [1,2,2,2,2,2,2,1],
    [1,2,2,2,2,2,2,1],
    [0,1,2,2,2,2,1,0],
    [0,0,1,1,1,1,0,0],
  ]

  return (
    <div 
        ref={cursorRef} 
        className="fixed pointer-events-none z-[9999] hidden sm:block transition-transform duration-75"
        style={{ transform: isHovering ? 'translate(-8px, -2px)' : 'translate(0px, 0px)' }}
    >
      <PixelCanvas 
        id="sp-cursor"
        scale={3}
        rows={isHovering ? handRows : arrowRows}
        palette={{1: '#1a1a2e', 2: '#fcf9f5'}}
      />
    </div>
  )
}

// ── Generic pixel sprite renderer ──
function PixelCanvas({ id, rows, palette, scale, className, style }: SpriteProps & { id: string, rows: number[][], palette: Record<number, string>, scale: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const h = rows.length
    const w = rows[0].length
    canvas.width = w * scale
    canvas.height = h * scale
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (let r = 0; r < h; r++) {
      for (let c = 0; c < w; c++) {
        const v = rows[r][c]
        if (!v) continue
        ctx.fillStyle = palette[v]
        ctx.fillRect(c * scale, r * scale, scale, scale)
      }
    }
  }, [rows, palette, scale])

  return (
    <canvas 
      ref={canvasRef} 
      id={id} 
      className={`absolute [image-rendering:pixelated] pointer-events-none z-10 ${className || ""}`} 
      style={style} 
    />
  )
}

// ── Specific Sprites ──

export function CloudSprite(props: SpriteProps) {
  return <PixelCanvas {...props} id="sp-cloud" scale={S} palette={{1: '#c8dff0'}} rows={[
    [0,0,0,1,1,1,1,1,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,1,1,0,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,0,0],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,0],
  ]} />
}

export function CloudSprite2(props: SpriteProps) {
  return <PixelCanvas {...props} id="sp-cloud2" scale={S} palette={{1: '#c8dff0'}} rows={[
    [0,0,1,1,1,1,1,0,0,0],
    [0,1,1,1,1,1,1,1,1,0],
    [1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1],
    [0,1,1,1,1,1,1,1,1,0],
  ]} />
}

export function StarSprite(props: SpriteProps) {
  return <PixelCanvas {...props} id="sp-star" scale={S} palette={{1: '#d4a017'}} rows={[
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
    [1,1,1,1,1,1,1],
    [0,1,1,1,1,1,0],
    [1,0,1,1,1,0,1],
    [0,0,0,1,0,0,0],
    [0,0,0,1,0,0,0],
  ]} />
}

export function HeartSprite(props: SpriteProps) {
  return <PixelCanvas {...props} id="sp-heart" scale={S} palette={{1: '#d94f4f'}} rows={[
    [0,1,1,0,1,1,0],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [0,1,1,1,1,1,0],
    [0,0,1,1,1,0,0],
    [0,0,0,1,0,0,0],
  ]} />
}

export function FlowerSprite(props: SpriteProps) {
  return <PixelCanvas {...props} id="sp-flower" scale={S} palette={{1: '#e07abf', 2: '#f5d033', 3: '#4a8c3f'}} rows={[
    [0,0,1,0,1,0,0],
    [0,1,1,1,1,1,0],
    [1,1,1,2,1,1,1],
    [0,1,1,1,1,1,0],
    [0,0,1,0,1,0,0],
    [0,0,0,3,0,0,0],
    [0,0,0,3,0,0,0],
    [0,0,3,3,0,0,0],
  ]} />
}

export function CoinSprite(props: SpriteProps) {
  return <PixelCanvas {...props} id="sp-coin" scale={S} palette={{1: '#b8860b', 2: '#f0c040'}} rows={[
    [0,0,1,1,1,1,0,0],
    [0,1,1,2,2,1,1,0],
    [1,1,2,2,2,2,1,1],
    [1,1,2,2,2,2,1,1],
    [0,1,1,2,2,1,1,0],
    [0,0,1,1,1,1,0,0],
  ]} />
}

export function GhostSprite(props: SpriteProps) {
  return <PixelCanvas {...props} id="sp-ghost" scale={S} palette={{1: '#9eb3c8', 2: '#1a1a2e'}} rows={[
    [0,0,1,1,1,0,0],
    [0,1,1,1,1,1,0],
    [1,1,2,1,2,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1],
    [1,0,1,0,1,0,1],
  ]} />
}

export function CrawlerSprite(props: SpriteProps) {
  return <PixelCanvas {...props} id="sp-crawler" scale={S} palette={{1: '#2d4a1e', 2: '#f5f0e8'}} rows={[
    [0,1,1,1,1,0],
    [1,1,1,1,1,1],
    [1,2,1,1,2,1],
    [1,1,1,1,1,1],
    [0,1,1,1,1,0],
    [0,1,0,0,1,0],
    [0,1,0,0,1,0],
    [1,1,0,0,1,1],
  ]} />
}

export function WatcherSprite(props: SpriteProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  // Make the watcher look left/right randomly
  useEffect(() => {
    let timeoutId: NodeJS.Timeout
    const look = () => {
      if (canvasRef.current) {
        const flip = Math.random() > 0.5
        canvasRef.current.style.transform = flip
          ? 'translateX(-50%) scaleX(-1)'
          : 'translateX(-50%) scaleX(1)'
      }
      timeoutId = setTimeout(look, 1600 + Math.random() * 2400)
    }
    timeoutId = setTimeout(look, 1000)
    return () => clearTimeout(timeoutId)
  }, [])

  return (
    <div className={`absolute pointer-events-none z-10 ${props.className || ""}`} style={props.style}>
      <PixelCanvas 
        id="sp-watcher-canvas" 
        scale={S} 
        className="!relative !transform !-translate-x-1/2 left-1/2 transition-transform duration-200"
        palette={{1: '#4a7c35', 2: '#f5f0e8'}} 
        rows={[
          [0,1,1,1,1,0],
          [1,1,1,1,1,1],
          [1,2,1,1,2,1],
          [1,1,1,1,1,1],
          [0,1,1,1,1,0],
          [0,1,0,0,1,0],
          [1,1,0,0,1,1],
        ]} 
      />
    </div>
  )
}
