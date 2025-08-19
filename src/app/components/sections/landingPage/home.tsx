'use client'
import Nav from "@/app/components/nav";
import CheckInForm from "@/app/components/checkInForm";
import Btn from "@/app/components/common/Btn";
import {useState} from "react";

const Home = () => {

    const [openForm,setOpenForm] = useState(false)

    return (
        <div className={'w-full relative overflow-x-clip '}>
            <div className={'w-full h-[80vh] flex justify-center items-center'}>
                <div className={'absolute w-full h-full  z-10'}>
                    <img src={'/home.jpg'} className={'w-full h-full object-cover'} alt={'..'}></img>
                </div>
                <div className={'absolute w-full h-full bg-black opacity-40 z-20 '}></div>
                <div className={'absolute top-0 w-full'}>
                    <Nav/>
                </div>
                <div className={'flex flex-col gap-2 justify-center items-center z-20 text-4xl lg:text-7xl text-white font-bold w-2/3 md:w-1/2'}>
                    <h1>Book With Best</h1>
                    <h1 className={'text-gold'}>Luxury Hotel</h1>
                    <p className={' text-center opacity-80'}> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    <div className={'flex gap-6 text-[15px] text-black'}>
                        <Btn title={'Explore More'} bg={'bg-gold'}/>
                        <Btn title={'Our Service'}/>
                    </div>
                </div>
                <div className={`absolute z-30  hidden lg:block right-0 -bottom-[120px] lg:-bottom-[65px]  w-[80vw] lightGreen rounded-l-xl `}>
                   <CheckInForm openForm={openForm} setOpenForm={setOpenForm}/>
                </div>
                <div className={`absolute z-30 ${openForm?'right-0':"-right-[92vw]"} block lg:hidden -bottom-[120px] transform duration-200 ease-in-out  w-[95vw] lightGreen rounded-l-xl `}>
                    <CheckInForm openForm={openForm} setOpenForm={setOpenForm}/>
                </div>
            </div>
        </div>
    )
}

export default Home