'use client'
import Nav from "@/app/components/nav";
import CheckInForm from "@/app/components/checkInForm";
import Btn from "@/app/components/common/Btn";
import {useState, useEffect} from "react";

const Home = () => {

    const [openForm,setOpenForm] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        setIsVisible(true)
    }, [])

    return (
        <section id={'home'} className={'w-full relative overflow-x-clip '}>
            <div className={'w-full h-[80vh] flex justify-center items-center'}>
                <div className={`absolute w-full h-full z-10 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg'} className={'w-full h-full object-cover'} alt={'..'}></img>
                </div>
                <div className={`absolute w-full h-full bg-black z-20 transition-opacity duration-1000 ease-in-out ${isVisible ? 'opacity-40' : 'opacity-0'}`}></div>
                <div className={`absolute top-0 w-full transition-opacity duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <Nav/>
                </div>
                <div className={`flex flex-col gap-2 justify-center items-center z-20 text-4xl lg:text-7xl text-white font-bold w-2/3 md:w-1/2 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h1 className={`transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Book With Best</h1>
                    <h1 className={`text-gold transition-all duration-700 ease-out delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Luxury Hotel</h1>
                    <p className={`text-center opacity-80 transition-all duration-700 ease-out delay-700 ${isVisible ? 'opacity-80 translate-y-0' : 'opacity-0 translate-y-8'}`}> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    <div className={`flex gap-6 text-[15px] text-black transition-all duration-700 ease-out delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <Btn title={'Explore More'} bg={'bg-gold'}/>
                        <Btn title={'Our Service'}/>
                    </div>
                </div>
                <div className={`absolute z-30 hidden lg:block right-0 -bottom-[120px] lg:-bottom-[65px] w-[80vw] lightGreen rounded-l-xl transition-all duration-1000 ease-out delay-1200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                   <CheckInForm openForm={openForm} setOpenForm={setOpenForm}/>
                </div>
                <div className={`absolute z-30 ${openForm?'right-0':"-right-[92vw]"} block lg:hidden -bottom-[120px] transform duration-500 ease-in-out w-[95vw] lightGreen rounded-l-xl transition-all duration-1000 ease-out delay-1200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                    <CheckInForm openForm={openForm} setOpenForm={setOpenForm}/>
                </div>
            </div>
        </section>
    )
}

export default Home