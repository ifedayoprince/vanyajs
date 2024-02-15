import Image from "next/image"
import { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaFlask } from "react-icons/fa6"
import gsap from 'gsap'


export const VanyaHeader: React.FC = () => {
	const [_window, setWindowObject] = useState<null | Window>(null)
	const content = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		setWindowObject(window);
		gsap.fromTo(content.current?.querySelector("#chevron") as Element, {
			opacity: 0.1,
			y: -20
		}, {
			opacity: 0.7,
			y: 20,
			duration: 0.8,
			repeat: -1
		})
	})
	return (
		<header className="relative h-screen w-full py-28 flex items-center justify-center">
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
				<div className="flex flex-col gap-3 items-center text-center" ref={content}>
					<h1 className="text-white text-4xl font-bold flex gap-2 items-center ">
						Vanya.js
						<FaFlask className="p-2 bg-orange-600 rounded-full text-white" />
					</h1>
					<p className="text-gray-300 text-center">The web has evolved, have you? Design for the new wave <strong className="text-blue-500 font-bold italic">#TheNewWeb</strong></p>
					<FaChevronDown className="scale-150 text-white absolute bottom-10" id="chevron"/>
				</div>
			</div>
		</header>
	)
}