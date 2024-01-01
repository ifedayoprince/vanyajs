'use client'
import { useEffect, useRef, useState } from 'react';
import { NavBar } from './_components/NavBar';
import Image from "next/image";
import { VanyaHeader } from "./_components/VanyaHeader";
import Link from "next/link";
import { FaGasPump } from 'react-icons/fa6';
import gsap from 'gsap'
import { ScrollTrigger, TextPlugin } from 'gsap/all';

const WRAP_THRESHHOLD = 50;

export default function Home() {
  const [_window, setWindowObject] = useState<null | Window>(null)
  const [wrapped, setWrapped] = useState(false)
  const cursor = useRef<HTMLDivElement | null>(null);
  const featuresList = useRef<HTMLDivElement| null>(null);
  let anim;

  gsap.registerPlugin(TextPlugin, ScrollTrigger)
  function cursorWrite(str: string) {
    let cursorEl = cursor.current as HTMLDivElement;
    anim = gsap.timeline();
    let possibleRotations = [-6, 6]
    let randomIndex = Math.min(Math.floor(Math.random() * possibleRotations.length), 1)

    anim.fromTo(cursorEl, {
      left: "-0.75rem",
      top: "-0.75rem",
      width: "1.5rem",
      height: "1.5rem",
      rotate: 0,
      text: "",
    }, {
      width: "8rem",
      height: "8rem",
      left: "-4rem",
      top: "-4rem",
      rotate: possibleRotations[randomIndex],
      duration: 1
    }).to(cursorEl, {
      text: str,
      delay: 0.9
    }, "<")

    return anim;

  }

  useEffect(()=>{
    gsap.to(".features-list > div", {
      y: "-100vh",
      duration: 4,
      stagger: 0.6,
      scrollTrigger: {
        markers:true,
        start: "65% bottom",
        scrub: true,
      },
    })
  })
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
    _window?.addEventListener("scroll", (ev) => {
      if (_window?.scrollY > WRAP_THRESHHOLD && wrapped == false)
        setWrapped(true)
      else if (wrapped == true && _window?.scrollY < WRAP_THRESHHOLD)
        setWrapped(false)
    })
  })
  return (
    <main className='bg-black cursor-none'>
      <div ref={cursor} className='bg-white pointer-events-none -top-3 -left-3 text-black rounded-full aspect-square min-w-6 min-h-6 flex items-center justify-center p-4 fixed z-[100] invisible text-center'></div>
      <div className="header-bg fixed w-full h-screen z-[1] top-0 left-0"></div>
      <NavBar wrapped={wrapped} cursor={cursorWrite} />
      <VanyaHeader />

      <section className='w-full relative flex flex-col gap-3 pt-4 items-center z-10'>
        <video className="rounded-3xl border border-[#f65702] aspect-video w-[50vw]" />
        <Image
          src={"/division-1.svg"}
          width={612}
          height={300}
          alt='division'
          className='w-screen relative bottom-[5rem]'
        />
        <div className='w-full mb-5 pb-6 flex justify-center'>
          <code className='px-16 py-4 text-xl border border-[#ffffff20] rounded-xl text-gray-300'>npm install vanya</code>
        </div>
        <div className='w-full h-14 bg-[#fedbc7] rounded-t-[50%]'></div>
      </section>

      <section className='features-list relative z-10 bg-[#fedbc7] p-8 w-full min-h-screen grid grid-cols-3 gap-3' ref={featuresList}>
        <div className='rounded-xl px-6 flex flex-col gap-10 items-center bg-[#fedbc755] backdrop-blur-2xl py-8 border border-black'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-4xl font-bold text-[#f65702]'>Ease Of Use</h3>
            <p className='text-gray-800 text-lg'>The sdfsdfd sdfsdsdfds fsdfdsfsf fgds fsfdfsd frfr fsdfd fsdfsfsd fadasdasdasf dsfdfadadas dasasdasds adas</p>
          </div>
          <Image
            src="/robot.png"
            width={200}
            height={200}
            alt='robot'
            className='w-[70%]'
          />
        </div>
        <div className='rounded-xl px-6 flex flex-col gap-10 items-center bg-[#fedbc755] backdrop-blur-2xl py-8 border border-black'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-4xl font-bold text-[#f65702]'>Flexible</h3>
            <p className='text-gray-800 text-lg'>The sdfsdfd sdfsdsdfds fsdfdsfsf fgds fsfdfsd frfr fsdfd fsdfsfsd fadasdasdasf dsfdfadadas dasasdasds adas</p>
          </div>
          <Image
            src="/chair.png"
            width={200}
            height={200}
            alt='robot'
            className='w-[70%]'
          />
        </div>
        <div className='rounded-xl px-6 flex flex-col gap-10 items-center bg-[#fedbc755] backdrop-blur-2xl py-8 border border-black'>
          <div className='flex flex-col gap-2'>
            <h3 className='text-4xl font-bold text-[#f65702]'>High Quality</h3>
            <p className='text-gray-800 text-lg'>The sdfsdfd sdfsdsdfds fsdfdsfsf fgds fsfdfsd frfr fsdfd fsdfsfsd fadasdasdasf dsfdfadadas dasasdasds adas</p>
          </div>
          <Image
            src="/man.png"
            width={200}
            height={200}
            alt='robot'
            className='w-[70%]'
          />
        </div>
      </section>

    </main>
  )
}