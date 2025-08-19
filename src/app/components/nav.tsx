'use client'
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import SearchIcon from "@/app/components/icons/SearchIcon";
import MenuIcon from "@/app/components/icons/MenuIcon";
import Close from "@/app/components/icons/Close";
import ArrowDown from "@/app/components/icons/ArrowLeft";
import Btn from "@/app/components/common/Btn";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                isMenuOpen &&
                menuRef.current &&
                buttonRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <div className={'w-full h-16 md:h-20 flex justify-between items-center z-30 relative pr-2 md:pr-6 lg:pr-8'}>
            <div className="relative bg-white w-40 md:w-80 h-full flex gap-2 justify-center items-center pr-4 shadow-md py-1">
                <div className="absolute top-0 -right-5 w-10 md:w-16 h-full bg-white transform skew-x-[-20deg] "></div>
                <img src={'/logo.jpg'} alt={'..'} className={'h-full'}></img>
                <h1 className="relative text-black font-bold text-md md:text-xl lg:text-2xl">Fixyland</h1>
            </div>
            
            <div className={'hidden md:flex gap-4 text-white font-semibold text-[14px]'}>
                <div className={'flex gap-1 cursor-pointer'}>
                    <Link href={'#home'}>Home</Link>
                    <ArrowDown/>
                </div>
                <div className={'flex gap-1 cursor-pointer'}>
                    <Link href={'#about'}>Pages</Link>
                    <ArrowDown/>
                </div>
                <div className={'flex gap-1 cursor-pointer'}>
                    <Link href={'#room'}>Rooms & Sultes</Link>
                    <ArrowDown/>
                </div>
                <div className={'flex gap-1 cursor-pointer'}>
                    <Link href={'#service'}>Services</Link>
                    <ArrowDown/>
                </div>
                <div className={'flex gap-1 cursor-pointer'}>
                    <Link href={'#blog'}>Blog</Link>
                    <ArrowDown/>
                </div>
                <div className={'flex gap-1 cursor-pointer'}>
                    <Link href={'#contact'}>Contact</Link>
                    <ArrowDown/>
                </div>
            </div>
            
            <div className={'flex gap-2 md:gap-4 items-center'}>
                <div className={'p-2 icon h-full cursor-pointer'}>
                    <SearchIcon/>
                </div>
                <div 
                    ref={buttonRef}
                    className={'md:hidden p-2 icon h-full cursor-pointer transition-transform duration-300 hover:scale-110'} 
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? <Close /> : <MenuIcon/>}
                </div>
                <Btn bg={'bg-gold'} size={'hidden md:block px-2 py-1 md:px-5 md:py-2  lg:px-6 lg:py-3'} dis={true}/>
            </div>

        </div>
    )
}

export default Nav