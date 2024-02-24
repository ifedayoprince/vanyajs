import React from 'react'
import Image from 'next/image'
import './app/globals.css'

import { DocsThemeConfig } from 'nextra-theme-docs'
import { Footer } from './app/components/Footer'
import { Logo } from './app/components/Logo'

const config: DocsThemeConfig = {
  logo: (
    <div className="flex items-center gap-1 font-bold">
      <Logo className="h-6" />
      Vanya.js
    </div>),
  project: {
    link: 'https://github.com/ifedayoprince/vanya',
  },
  primaryHue: {
    dark: 32,
    light: 32
  },
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Vanya"
    }
  },
  docsRepositoryBase: 'https://github.com/ifedayoprince/vanya/tree/master/app/web/pages/docs',
  footer: {
    text: <Footer />
  },
  banner: {
    key: '0.0.1-experimental',
    text: (
      <a href="https://npmjs.com/package/vanya" target="_blank">
        🌟 Vanya is still experimental for now.
      </a>
    )
  }
}

export default config
