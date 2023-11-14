import { ReactNode, useEffect, useRef } from 'react'

export interface HoverRandomTextProps {
  gradientRadius?: number | string
  mainLight?: string
  lightShade?: string
  secondaryLight?: string
  fadedLight?: string
  children: ReactNode
}

/**
 * Displays a large animated changing text element
 * @prop gradientRadius - The radius of the circle
 * @prop mainLight - sdsd
 *
 * @example <HoverRandomText>
 * 	<p>Hello</p>
 * </HoverRandomText>
 */
export const HoverRandomText: React.FC<HoverRandomTextProps> = ({
  gradientRadius = '40vw',
  mainLight = '#2979ff',
  lightShade = '#38b6ff',
  secondaryLight = '#2afc98',
  fadedLight = '#1e293b',
  children,
}) => {
  const wrapper = useRef(null)

  const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  const randomChar = () => chars[Math.floor(Math.random() * (chars.length - 1))],
    randomString = (length: number) => Array.from(Array(length)).map(randomChar).join('')

  useEffect(() => {
    const wrapperEl = wrapper.current as unknown as HTMLDivElement
    const card = wrapperEl.querySelector('.card') as HTMLDivElement,
      letters = card.querySelector('.card-letters') as HTMLDivElement

    let numberOfLetters = Math.round((wrapperEl.clientWidth * wrapperEl.clientHeight) / 80)

    const handleOnMove = (e: MouseEvent | Touch) => {
      const rect = card.getBoundingClientRect(),
        x = e.clientX - rect.left,
        y = e.clientY - rect.top

      letters.style.setProperty('--x', `${x}px`)
      letters.style.setProperty('--y', `${y}px`)

      letters.innerText = randomString(numberOfLetters)
    }

    card.onmousemove = (e) => handleOnMove(e)

    card.ontouchmove = (e) => handleOnMove(e.touches[0])
  }, [])

  return (
    <section
      className="vanya-wrapper flex justify-center items-center w-full overflow-hidden bg-black h-screen rounded-md"
      ref={wrapper}
    >
      {/* <div className="texts block w-full h-full overflow-hidden break-all text-white" onMouseMove={() => randomText()} ref={textRef}>{text}</div> */}
      <div className="h-full w-full flex items-center relative">
        <div className="w-full relative">
          <div className="card group flex items-center justify-center aspect-[1] relative overflow-hidden cursor-pointer">
            <div className="flex items-center justify-center relative z-[4] w-full h-full pointer-events-none">
              {children}
            </div>
            <div
              className="w-full h-full absolute mix-blend-darken pointer-events-none z-[3]"
              style={{
                background: `radial-gradient(
                ${fadedLight}66, 
                ${mainLight}80, 
                ${lightShade},
                ${secondaryLight}
              )`,
              }}
            ></div>
            <div
              className="card-letters group-hover:opacity-100 [--x:0px] [--y:0px] absolute left-0 top-0 h-full w-full text-white text-sm font-medium [word-wrap:break-word] opacity-0 transition-opacity duration-[400ms] scale-105"
              style={{
                WebkitMaskImage: `radial-gradient(
                ${
                  typeof gradientRadius == 'number' ? gradientRadius + 'px' : gradientRadius
                } circle at var(--x) var(--y), 
                rgb(255 255 255) 20%, 
                rgb(255 255 255 / 25%), 
                transparent
              )`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
