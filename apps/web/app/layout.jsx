import './globals.css';
import { Rubik } from 'next/font/google'
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { Analytics } from "@vercel/analytics/react"
import Head from 'next/head';

const rubik = Rubik({
    subsets: [
        'latin'
    ],
    adjustFontFallback: false
});

export const metadata = {
    title: 'VanyaJS :: Your Story Starts Here',
    description: "VanyaJS is a UI registry designed to aid in your storytelling. All of its components are built with expert craftsmanship to ensure your story is told the way you want.",
    openGraph: {
        title: "VanyaJS :: Your Story Starts Here",
        description: "Tell your Story, Reflect your Brand",
        url: "https://vanya.js.org",
        siteName: "Vanya.js",
        images: [
            {
                url: 'https://vanya.js.org/og.png',
                width: 1200,
                height: 630,
            }
        ],
        locale: "en_US",
        type: "website"
    },
    twitter: {
        card: 'summary_large_image',
        title: 'VanyaJS :: Your Story Starts Here',
        description: 'Tell your Story, Reflect your Brand',
        creator: '@vanyajs_',
        images: ['https://vanya.js.org/og.png'], // Must be an absolute URL
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${rubik.className}`}>
                <NavBar />
                {children}
                <Analytics />
                <Footer />
            </body>
        </html>
    )
}
