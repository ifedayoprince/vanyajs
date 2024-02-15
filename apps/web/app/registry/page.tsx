import { ComponentCard } from './ComponentCard';
import { FaChevronRight } from "react-icons/fa6";
import { NavBar } from "../_components/NavBar";
import Image from "next/image";

export const metadata = {
    title: "VanyaJS Registry - Components That Stun"
}
export default function Home() {
    return (
        <main className='bg-black w-screen h-screen overflow-auto'>

            <div className="header-bg fixed w-screen h-screen z-[1] top-0 left-0"></div>

            <NavBar noEffect />

            <div className="relative z-10 w-full">
                <div className="flex py-16 flex-col items-center text-center border-b border-thicksharp ">
                    <h1 className="text-6xl text-white font-bold">Registry</h1>
                </div>

                <div className="grid grid-cols-3 gap-6 p-10 w-full">
                    <ComponentCard
                        name='HoverImageDrop'
                        demoUrl='/chair.png'
                    />
                    <ComponentCard
                        name='Hoverp'
                        demoUrl='/man.png'
                    />
                    <ComponentCard
                        name='HoverImageDrop'
                        demoUrl='/chair.png'
                    />
                    <ComponentCard
                        name='HoverImageDrop'
                        demoUrl='/chair.png'
                    />
                </div>
            </div>
        </main>
    )
}