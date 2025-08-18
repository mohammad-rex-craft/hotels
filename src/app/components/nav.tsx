import Link from "next/link";
import SearchIcon from "@/app/components/icons/SearchIcon";
import MenuIcon from "@/app/components/icons/MenuIcon";
import ArrowRight from "@/app/components/icons/ArrowRight";
import ArrowDown from "@/app/components/icons/ArrowLeft";


const Nav = ()=>{


    return (
        <div className={'w-full h-20 flex justify-between items-center z-30 relative pr-8'}>
            <div className="relative bg-white w-80 h-full flex gap-2 justify-center items-center pr-4 shadow-md py-1">
                <div className="absolute top-0 -right-5 w-16 h-full bg-white transform skew-x-[-20deg] "></div>
                <img src={'/logo.jpg'} alt={'..'} className={'h-full'}></img>
                <span className="relative text-black font-bold text-2xl">Fixyland</span>
            </div>
            <div className={'flex gap-4 text-white font-semibold text-[14px]'}>
                <div className={'flex gap-1 cursor-pointer'}>
                    <Link href={'#'}>Home</Link>
                    <ArrowDown/>
                </div>
                <div className={'flex gap-1 cursor-pointer'}>
                    <Link href={'#'}>Pages</Link>
                    <ArrowDown/>
                </div>
                <div className={'flex gap-1 cursor-pointer'}>
                    <Link href={'#'}>Rooms & Sultes</Link>
                    <ArrowDown/>
                </div>
                <div className={'flex gap-1 cursor-pointer'}>
                    <Link href={'#'}>Services</Link>
                    <ArrowDown/>
                </div>
                <div className={'flex gap-1 cursor-pointer'}>
                    <Link href={'#'}>Blog</Link>
                    <ArrowDown/>
                </div>
                <div className={'flex gap-1 cursor-pointer'}>
                    <Link href={'#'}>Contact</Link>
                    <ArrowDown/>
                </div>
            </div>
            <div className={'flex gap-4 items-center'}>
                <div className={'p-2 icon h-full cursor-pointer'}>
                    <SearchIcon/>
                </div>
                <div className={'p-2 icon h-full cursor-pointer'}>
                    <MenuIcon/>
                </div>
                <div className={'px-6 py-3 rounded-md bg-gold flex gap-2 font-semibold cursor-pointer'}>
                    <span>Book Your Stay</span>
                    <ArrowRight className={'rotate-[-30deg] w-4 h-4 translate-y-1'}/>
                </div>
            </div>
        </div>
    )
}

export default Nav