import Image from "next/image"
import { useState, useRef, useEffect } from "react";
import { FaFlask } from "react-icons/fa6"
import gsap from 'gsap'


export const VanyaHeader: React.FC = () => {
	const [_window, setWindowObject] = useState<null | Window>(null)
	const cursor = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		setWindowObject(window);
		_window?.addEventListener("mouseenter", (ev) => {
			gsap.set(cursor.current, { visibility: "visible" })
			gsap.to(cursor.current, {
				x: ev.clientX,
				y: ev.clientY
			})
		})
		_window?.addEventListener("mousemove", (ev) => {
			gsap.set(cursor.current, { visibility: "visible" })
			gsap.to(cursor.current, {
				x: ev.clientX,
				y: ev.clientY
			})
		})
		_window?.addEventListener("mouseexit", (ev) => {
			gsap.to(cursor.current, {
				opacity: 0,
				visibility: "hidden",
				duration: 2
			})
		})
	})
	return (
		<header className="relative w-full py-28 flex items-center justify-center">
			<div ref={cursor} className='bg-white pointer-events-none -top-3 -left-3 text-black rounded-full aspect-square min-w-6 min-h-6 flex items-center justify-center p-4 fixed z-[100] invisible text-center'></div>
			<Image
				src={"/circles.svg"}
				width={614}
				height={614}
				alt="circle"
				className="absolute -bottom-[307px] -left-[307px] min-w-[614px] min-h-[614px] pointer-events-none"
			/>
			<div className="flex flex-col gap-4 items-center">
				<div className="p-6 rounded-full bg-[hsl(252,36%,5%)] border border-[#161226]">
					<Image
						src={"/logo.png"}
						width={307}
						height={307}
						alt="logo"
						className="w-24 h-24"
					/>
				</div>
				<div className="flex flex-col gap-3 items-center text-center">
					<h1 className="text-white text-4xl font-bold flex gap-2 items-center ">
						Vanya.js
						<FaFlask className="p-2 bg-orange-600 rounded-full text-white" />
					</h1>
					<p className="text-gray-300 text-center">The web has evolved, have you? Design for the new wave <strong className="text-blue-500 font-bold italic">#TheNewWeb</strong></p>
				</div>
			</div>
		</header>
	)
}