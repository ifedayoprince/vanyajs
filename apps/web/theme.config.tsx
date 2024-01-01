import React from 'react'
import Image from 'next/image'
import './app/globals.css'

import { DocsThemeConfig } from 'nextra-theme-docs'
import { Footer } from './app/_components/Footer'
import { FaWhatsapp } from 'react-icons/fa6'

const config: DocsThemeConfig = {
  
  logo: (
    <div className="flex gap-2 items-center">
      <Image src={'/logo.png'} width={40} height={40} className="h-full aspect-square" alt="site logo" />
      <h3 className="font-bold text-xl">Vanya.js</h3>
    </div>),
  project: {
    link: 'https://github.com/ifedayoprince/vanya',
  },
  primaryHue: {
    dark: 19,
    light: 19
  },
  darkMode: true,
  chat: {
    link: "https://wa.me/+2349039630470",
    icon: <FaWhatsapp className='scale-[1.5]'/>
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Vanya Docs"
    }
  },
  docsRepositoryBase: 'https://github.com/ifedayoprince/vanya.js.org/tree/master/pages/docs',
  footer: {
    text: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://nextra.site" target="_blank">
          VanyaJS
        </a>
        .
      </span>
    )
  },
  editLink: {
    text: <p>Edit this page</p>
  },
  toc: {
    float: true
  },
  banner: {
    key: 'experimental-release',
    text: (
      <a href="https://npmjs.com/package/vanya" target="_blank">
        🌟 Vanya is still experimental for now. We'll let you know once it's stable!
      </a>
    )
  }
,
}

export default config
