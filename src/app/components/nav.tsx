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

            {isMenuOpen && (
                <div className="md:hidden fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 animate-fadeIn">
                    <div 
                        ref={menuRef}
                        className="fixed top-16 left-2 right-2 bg-white shadow-2xl rounded-2xl z-50 animate-slideDown border border-gray-100 max-h-[80vh] overflow-y-auto"
                    >
                        <div className="flex flex-col gap-4 p-4">
                            <Link href={'#home'} className="text-gray-800 font-semibold text-[14px] hover:text-blue-600 transition-colors duration-300 py-2" onClick={closeMenu}>Home</Link>
                            <Link href={'#about'} className="text-gray-800 font-semibold text-[14px] hover:text-blue-600 transition-colors duration-300 py-2" onClick={closeMenu}>Pages</Link>
                            <Link href={'#room'} className="text-gray-800 font-semibold text-[14px] hover:text-blue-600 transition-colors duration-300 py-2" onClick={closeMenu}>Rooms & Sultes</Link>
                            <Link href={'#service'} className="text-gray-800 font-semibold text-[14px] hover:text-blue-600 transition-colors duration-300 py-2" onClick={closeMenu}>Services</Link>
                            <Link href={'#blog'} className="text-gray-800 font-semibold text-[14px] hover:text-blue-600 transition-colors duration-300 py-2" onClick={closeMenu}>Blog</Link>
                            <Link href={'#contact'} className="text-gray-800 font-semibold text-[14px] hover:text-blue-600 transition-colors duration-300 py-2" onClick={closeMenu}>Contact</Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Nav