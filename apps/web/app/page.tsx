'use client'

import { NavBar } from './_components/NavBar';
import Image from "next/image";
import { VanyaHeader } from "./_components/VanyaHeader";
import gsap from 'gsap'
import { ScrollTrigger, TextPlugin } from 'gsap/all';


export default function Home() {
  gsap.registerPlugin(TextPlugin, ScrollTrigger);

  return (
    <main className='bg-black w-screen'>

      <div className="header-bg fixed w-screen h-screen z-[1] top-0 left-0"></div>

      <NavBar />

      <VanyaHeader />

      <div className="w-full h-screen bg-red-400 flex flex-col items-center py-6 px-6">
        div
      </div>
    </main>
  )
}
