'use client'

import { useEffect, useRef, useState } from 'react';
import { NavBar } from './_components/NavBar';
import Image from "next/image";
import { VanyaHeader } from "./_components/VanyaHeader";
import gsap from 'gsap'
import { ScrollTrigger, TextPlugin } from 'gsap/all';


export default function Home() {
  gsap.registerPlugin(TextPlugin, ScrollTrigger);
  
  return (
    <main className='bg-black w-screen h-screen overflow-hidden'>

      <div className="header-bg fixed w-screen h-screen z-[1] top-0 left-0"></div>

      <NavBar />

      <div className="relative z-10 w-full h-max overflow-y-scroll">

        <VanyaHeader />

        <section className='w-full'>
          <Image
            src={"/division-1.svg"}
            width={300}
            height={200}
            alt='division'
            className='w-full'
          />
        </section>
      </div>
    </main>
  )
}
