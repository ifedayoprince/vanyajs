
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Logo } from "./Logo";
import { FaNpm, FaGithub, FaTwitter } from "react-icons/fa6";
import { siteConfig } from "../config";


export const NavBar = () => {

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center justify-between">
        <div className='flex gap-6 h-full items-center'>

          <Link href={'/'}><div className="flex items-center gap-1 font-bold">
            <Logo className="h-6" />
            Vanya.js
          </div></Link>
          <div className='hidden md:flex gap-4'>
            <Link href="/registry" className="text-gray-500 hover:text-black">Registry</Link>
            <Link href="/docs" className="text-gray-500 hover:text-black">Docs</Link>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <Link href={siteConfig.links.npm} className="hidden md:block"><div className="flex gap-2 py-1 px-4 bg-gray-100 rounded-full items-center">
            <FaNpm className="w-8" />
            <p className="font-medium text-md">v{siteConfig.version}</p>
          </div></Link>
          <Link href={siteConfig.links.github}>
            <FaGithub className="h-6 w-6" />
          </Link>
          <Link href={siteConfig.links.twitter}>
            <FaTwitter className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </nav>
  )
}
