import './globals.css';
import { Rubik } from 'next/font/google'

const rubik = Rubik({
    preload: false,
    adjustFontFallback: false
});

export const metadata = {
    title: 'VanyaJS :: Design for the new wave',
    description: "Design for the new wave.",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={rubik.className}>
                {children}
            </body>
        </html>
    )
}
