import gsap from 'gsap'
import { useEffect, useRef } from 'react'

export interface HoverImageDropProps {
  threshold?: number
  maxItems?: number
  links: string[]
}
export const HoverImageDrop: React.FC<HoverImageDropProps> = ({ threshold = 100, maxItems = 5, links }) => {
  const wrapper = useRef(null)
  const cursor = useRef(null)

  let items: NodeListOf<Element> | null = null
  let globalIndex = 0,
    last = { x: 0, y: 0 }

  useEffect(() => {
    let cursorEl = cursor.current as unknown as HTMLDivElement
    let wrapperEl = wrapper.current as unknown as HTMLDivElement
    items = wrapperEl.querySelectorAll('.item')

    wrapperEl.onmouseenter = (e) => {
      gsap.to(cursorEl, {
        top: e.clientY + 'px',
        left: e.clientX + 'px',
        opacity: 1,
      })
    }
    wrapperEl.onmousemove = (e) => {
      const lead = items?.item(globalIndex % items.length) as unknown as HTMLDivElement,
        tail = items?.item((globalIndex - maxItems) % items.length) as unknown as HTMLDivElement

      gsap.to(cursorEl, {
        top: e.clientY + 'px',
        left: e.clientX + 'px',
      })

      if (tail) tail.dataset.status = 'inactive'
      if (!(Math.hypot(e.clientX - last.x, e.clientY - last.y) > threshold)) return

      lead.style.top = e.clientY + 'px'
      lead.style.left = e.clientX + 'px'
      lead.style.zIndex = globalIndex + 1 + ''
      cursorEl.style.zIndex = globalIndex + 2 + ''

      lead.dataset.status = 'active'
      last = { x: e.clientX, y: e.clientY }
      globalIndex++
    }
  }, [])

  return (
    <section className="w-full">
      <div
        className="cursor opacity-0 absolute -translate-x-[50%] -translate-y-[50%] aspect-square w-[16vmin] h-[16vmin] pointer-events-none z-50 rounded-full bg-transparent border border-white"
        ref={cursor}
      ></div>

      <div
        className="vanya-wrapper relative cursor-none container bg-black flex gap-4 text-white w-full h-screen overflow-hidden"
        ref={wrapper}
      >
        {links.map((item, i) => (
          <div
            className='item absolute -translate-x-[50%] -translate-y-[50%] w-[45vmin] block data-[status="inactive"]:hidden'
            data-index={i.toString()}
            data-status="inactive"
            key={i}
          >
            <img src={item} alt={`Item ${i}`} />
          </div>
        ))}
      </div>
    </section>
  )
}
