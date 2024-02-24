import Link from "next/link"
import { siteConfig } from "../config"

export const Footer = () => {
    return (
        <section className='p-8 md:p-16'>
            <p>Built by <Link href={siteConfig.links.author} className='text-primary underline underline-offset-4'>Ifedayo</Link>. The source code is available on <Link href={siteConfig.links.github} className='text-primary underline underline-offset-4'>GitHub</Link>.</p>
        </section>
    )
}