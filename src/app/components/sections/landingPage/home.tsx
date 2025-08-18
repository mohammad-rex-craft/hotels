import Nav from "@/app/components/nav";
import CheckInForm from "@/app/components/checkInForm";
import Btn from "@/app/components/common/Btn";

const Home = () => {


    return (
        <div className={'w-full relative '}>
            <div className={'w-full h-[80vh] flex justify-center items-center'}>
                <div className={'absolute w-full h-full  z-10'}>
                    <img src={'/home.jpg'} className={'w-full h-full object-cover'} alt={'..'}></img>
                </div>
                <div className={'absolute w-full h-full bg-black opacity-40 z-20 '}></div>
                <div className={'absolute top-0 w-full'}>
                    <Nav/>
                </div>
                <div className={'flex flex-col gap-2 justify-center items-center z-30 text-7xl text-white font-bold w-1/2'}>
                    <h1>Book With Best</h1>
                    <h1 className={'text-gold'}>Luxury Hotel</h1>
                    <p className={'text-[12px] text-center opacity-80'}> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    <div className={'flex gap-6 text-[15px] text-black'}>
                        <Btn title={'Explore More'} bg={'bg-gold'}/>
                        <Btn title={'Our Service'}/>
                    </div>
                </div>
                <div className={'absolute z-30 right-0 -bottom-[65px] h-[130px] w-[80vw] lightGreen rounded-l-xl '}>
                   <CheckInForm/>
                </div>
            </div>
        </div>
    )
}

export default Home