import ArrowRight from "@/app/components/icons/ArrowRight";
import SportIcon from "@/app/components/icons/SportIcon";
import SwimmingIcon from "@/app/components/icons/SwimmingIcon";
import MassageIcon from "@/app/components/icons/MassageIcon";
import JacuzziIcon from "@/app/components/icons/JacuzziIcon";


const HotelService = () => {


    return (
        <div className={'w-full h-[80vh] bg-gray-100 flex flex-col justify-center gap-10 items-center'}>
            <div className={'flex gap-12 w-full justify-center'}>
                <div className={'flex flex-col gap-6 w-1/3'}>
                    <div className={'bg-white w-fit py-1 px-2 rounded-md text-darkGreen font-bold'}>
                        <p>HOTEL SERVICE</p>
                    </div>
                    <h2 className={'text-4xl font-bold'}>Get The Best Hotel Fixyland Services</h2>
                    <p className={'text-[14px]'}>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                    </p>
                    <div
                        className={'px-5 py-4 w-fit rounded-md bg-darkGreen text-white flex gap-2 font-semibold cursor-pointer'}>
                        <span>Book Your Stay</span>
                        <ArrowRight className={'rotate-[-30deg] w-4 h-4 '}/>
                    </div>
                </div>
                <div className={'grid grid-rows-2 grid-cols-2 gap-6 w-1/3'}>
                    <div className={'relative'}>
                        <img src={'/home.jpg'} className={'w-full h-full rounded-2xl object-cover'} alt={'..'}></img>
                        <div className={'absolute rounded-2xl top-0 left-0 darkGreenGlass w-full h-full'}></div>
                        <div
                            className={'p-4 shadow-xl rounded-2xl  absolute top-0 left-0 w-full h-full z-30 flex flex-col text-white'}>
                            <SportIcon/>
                            <h4>Fitness Center</h4>
                            <p className={'text-[12px]'}>is simply dummy text of the printing and typesetting
                                industry.</p>
                        </div>
                    </div>
                    <div className={'p-4 bg-white shadow-xl rounded-2xl '}>
                        <JacuzziIcon/>
                        <h4>Jacuzzi</h4>
                        <p className={'text-[12px]'}>is simply dummy text of the printing and typesetting industry.</p>

                    </div>
                    <div className={'p-4 bg-white shadow-xl rounded-2xl '}>
                        <SwimmingIcon/>
                        <h4>Swimming Pool</h4>
                        <p className={'text-[12px]'}>is simply dummy text of the printing and typesetting industry.</p>

                    </div>
                    <div className={'p-4 bg-white shadow-xl rounded-2xl '}>
                        <MassageIcon/>
                        <h4>SPA Treatments</h4>
                        <p className={'text-[12px]'}>is simply dummy text of the printing and typesetting industry.</p>

                    </div>
                </div>
            </div>
            <div className={'text-[14px] flex gap-4'}>
                <p>Call us Tody : +20 1094221030</p>
                or
                <p>Email : mohammad123alhalabi123@gmail.com</p>
            </div>
        </div>
    )
}

export default HotelService