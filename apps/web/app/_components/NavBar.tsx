'use client'

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { FaNpm, FaGithub } from 'react-icons/fa6'
import { IoSearch } from 'react-icons/io5'

const WRAP_THRESHHOLD = 50;

export const NavBar: React.FC<{ noEffect?: boolean }> = ({ noEffect }) => {
  const [_window, setWindowObject] = useState<null | Window>(null);
  const [wrapped, setWrapped] = useState(false);

  useEffect(() => {
    setWindowObject(window);

    if (!noEffect) {
      _window?.addEventListener("scroll", (ev) => {
        if (_window?.scrollY > WRAP_THRESHHOLD && wrapped == false)
          setWrapped(true)
        else if (wrapped == true && _window?.scrollY < WRAP_THRESHHOLD)
          setWrapped(false)
      })
    }
  })
  return (
    <nav className={"w-[calc(100vw-3rem)] rounded-[4rem] " +
      "px-4 py-3 text-white flex gap-3 z-50 top-3 left-6 " +
      "items-center justify-between transition-all " +
      `${wrapped ? "fixed backdrop-blur-md backdrop-saturate-[180%] bg-[#00000079] border border-[#ffffff20]" : "relative"}`}>
      <div className="flex gap-12 h-full items-center">
        <Link href={"/"} className="w-full">
        <div className="flex gap-2 items-center cursor-pointer hover:opacity-70">
          <Image src={'/logo.png'} width={100} height={100} className="h-11 w-11" alt="site logo" />
          <h3 className="font-bold text-xl">Vanya.js</h3>
        </div>
        </Link>

        <ul className="flex gap-3 h-full items-center font-medium text-gray-400">
          <li>
            <Link href={'/registry'} className="cursor-pointer hover:text-gray-500">Registry</Link>
          </li>
          <li>
            <Link href={'/docs'} className="cursor-pointer hover:text-gray-500">Documentation</Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-5 h-full items-center">
        <FaNpm className="w-10 h-10 text-gray-100 cursor-pointer hover:text-gray-400" />
        <FaGithub className="w-6 h-6 text-gray-100 cursor-pointer hover:text-gray-400" />

        <div className="flex rounded-[5rem] p-3 h-full gap-2 bg-[#00000079] border border-[#ffffff20] items-center">
          <IoSearch />
          <input placeholder="Search" className="bg-transparent w-24 h-full text-sm outline-none focus:outline-none text-white" />
        </div>
      </div>
    </nav>);
}
