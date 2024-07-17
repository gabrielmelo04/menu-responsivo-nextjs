'use client'
import { usePathname } from 'next/navigation'
import { Article, House, MapPin, Storefront } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

export default function Menu(){

    const pathname = usePathname();

    return(
        <nav className="
            w-[60px]
            pt-6
            pb-6
            pl-[calc((60px-32px)/2)]
            absolute 
            overflow-x-hidden
            flex
            flex-col
            justify-center
            items-center
            gap-12
            bg-indigo-800
            border-r-8
            border-blue-500
            ml-4 mt-[calc((100vh-300px)/2)]
            rounded-lg     
            md:hover:w-[180px]
            md:gap-6
            transition-all
            duration-1000 
            z-20
        ">
            <Link href="/" className={`w-full flex items-center pr-2 pt-2 pb-2 gap-4 cursor-point rounded-tl-lg rounded-bl-lg md:hover:bg-blue-400 transition-all duration-500 ease-in ${pathname === '/' ? 'md:bg-blue-500 ' : ''}`} >
                <House className={`fixed ${pathname === '/' ? 'md:fill-white fill-blue-500 ' : 'fill-white'}`} size={32} weight="bold" />
                <label className="hidden ml-10 text-lg font-semibold text-zinc-50 tracking-widest cursor-pointer md:flex">Início</label>
            </Link>
            <Link href="/product" className={`w-full flex items-center pr-2 pt-2 pb-2 gap-4 cursor-pointer rounded-tl-lg rounded-bl-lg md:hover:bg-blue-400 transition-all duration-500 ease-in ${pathname === '/product' ? 'md:bg-blue-500 ' : ''}`}>
                <Storefront className={`fixed ${pathname === '/product' ? 'md:fill-white fill-blue-500 ' : 'fill-white'}`} size={32} weight="bold" />
                <label className="hidden ml-10 text-lg font-semibold text-zinc-50 tracking-widest cursor-pointer md:flex ">Produtos</label> 
            </Link>
            <Link href="/about" className={`w-full flex items-center pr-2 pt-2 pb-2 gap-4 cursor-pointer rounded-tl-lg rounded-bl-lg md:hover:bg-blue-400 transition-all duration-500 ease-in ${pathname === '/about' ? 'md:bg-blue-500' : ''}`}> 
                <Article className={`fixed ${pathname === '/about' ? 'md:fill-white fill-blue-500 ' : 'fill-white'}`} size={32} weight="bold" color="#fff"/>
                <label className="hidden ml-10 text-lg font-semibold text-zinc-50 tracking-widest cursor-pointer md:flex">Sobre</label>
            </Link>
            <Link href="/contact" className={`w-full flex items-center pr-2 pt-2 pb-2 gap-4 cursor-pointer rounded-tl-lg rounded-bl-lg md:hover:bg-blue-400 transition-all duration-500 ease-in ${pathname === '/contact' ? 'md:bg-blue-500' : ''}`	}>
                <MapPin className={`fixed ${pathname === '/contact' ? 'md:fill-white fill-blue-500 ' : 'fill-white'}`} size={32} weight="bold" color="#fff"/>
                <label className="hidden ml-10 text-lg font-semibold text-zinc-50 tracking-widest cursor-pointer md:flex">Contato</label> 
            </Link>
            
        </nav>
    )
}