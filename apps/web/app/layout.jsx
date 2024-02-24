import './globals.css';
import { Rubik } from 'next/font/google'
import { NavBar } from './components/NavBar';
import {Footer} from './components/Footer';


const rubik = Rubik({
    subsets: [
        'latin'
    ],
    adjustFontFallback: false
});

export const metadata = {
    title: 'VanyaJS :: Your Story Starts Here',
    description: "VanyaJS is a UI registry designed to aid in your storytelling. All of its components are built with expert craftsmanship to ensure your story is told the way you want.",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${rubik.className}`}>
                <NavBar />
                {children}

                <Footer />
            </body>
        </html>
    )
}
