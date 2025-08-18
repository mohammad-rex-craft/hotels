import ArrowRight from "@/app/components/icons/ArrowRight";

const Offers = () => {
    return (
        <div className={'w-full h-[60vh] bg-lightGreen flex flex-col gap-6 justify-center items-center '}>
            <div className={'bg-white w-fit py-1 px-2 rounded-md text-darkGreen font-bold'}>
                <p>SPECIAL OFFERS</p>
            </div>
            <h2 className={'text-4xl font-bold'}>Special Discount for Hotel & Resort Booking</h2>
            <div className={'flex w-[65%] h-[300px] justify-between'}>
                <div className={'w-[45%] relative'}>
                    <img className={'w-full opacity-70 h-full object-cover rounded-2xl'}
                         src={'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg'} alt={'..'}></img>
                    <div
                        className={'absolute top-0 left-0 w-full h-full flex text-white gap-6 flex-col justify-center  p-8'}>
                        <div className={'border-b-2 border-l-2 w-fit p-1 border-white '}>
                            <p>30% Offer</p>
                        </div>
                        <h4 className={'text-4xl'}>Get 30% Off on hotel Booking</h4>
                        <div
                            className={'px-4 py-3 rounded-md bg-white text-black w-fit flex gap-2 font-semibold cursor-pointer'}>
                            <span>Book Your Stay</span>
                            <ArrowRight className={'rotate-[-30deg] w-4 h-4 '}/>
                        </div>
                    </div>
                </div>
                <div className={'w-[45%] relative'}>
                    <img className={'w-full opacity-70 h-full object-cover rounded-2xl'}
                         src={'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'} alt={'..'}></img>
                    <div
                        className={'absolute top-0 left-0 w-full h-full flex text-white gap-6 flex-col justify-center  p-8'}>
                        <div className={'border-b-2 border-l-2 w-fit p-1 border-white '}>
                            <p>35% Offer</p>
                        </div>
                        <h4 className={'text-4xl'}>Get 35% Off on Resort Booking</h4>
                        <div
                            className={'px-4 py-3 rounded-md bg-white text-black w-fit flex gap-2 font-semibold cursor-pointer'}>
                            <span>Book Your Stay</span>
                            <ArrowRight className={'rotate-[-30deg] w-4 h-4 '}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Offers