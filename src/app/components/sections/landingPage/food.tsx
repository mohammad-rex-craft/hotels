import CheckMarkIcon from "@/app/components/icons/CheckMarkIcon";
import ArrowRight from "@/app/components/icons/ArrowRight";

const Food = () => {


    return (

        <div className={'w-full h-screen flex gap-12 justify-center items-center bg-gray-100'}>
            <div className={'w-[40%] flex flex-col gap-4'}>
                <div className={'bg-white w-fit py-1 px-2 rounded-md text-darkGreen font-bold'}>
                    <p>FOOD & DRINK</p>
                </div>
                <h2 className={'text-4xl font-bold'}>Quality Food And Drink Your Tip Are Enjoyable</h2>
                <p className={'text-[14px]'}>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic
                </p>
                <div className={'flex gap-2'}>
                    <CheckMarkIcon className={'w-8 h-8'}/>
                    <div className={'flex flex-col gap-2'}>
                        <h4 className={'text-[18px] font-bold'}>safdshjgfkdsfg</h4>
                        <p className={'text-[14px]'}>when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic</p>
                    </div>
                </div>
                <div className={'flex gap-2'}>
                    <CheckMarkIcon className={'w-8 h-8'}/>
                    <div className={'flex flex-col gap-2'}>
                        <h4 className={'text-[18px] font-bold'}>safdshjgfkdsfg</h4>
                        <p className={'text-[14px]'}>when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic</p>
                    </div>
                </div>
                <div className={'flex gap-2'}>
                    <CheckMarkIcon className={'w-8 h-8'}/>
                    <div className={'flex flex-col gap-2'}>
                        <h4 className={'text-[18px] font-bold'}>safdshjgfkdsfg</h4>
                        <p className={'text-[14px]'}>when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic</p>
                    </div>
                </div>
                <div className={'px-5 py-4 w-fit rounded-md bg-darkGreen text-white flex gap-2 font-semibold cursor-pointer'}>
                    <span>Book Your Stay</span>
                    <ArrowRight className={'rotate-[-30deg] w-4 h-4 '}/>
                </div>
            </div>
            <div className={'w-[40%] flex justify-between'}>
                <img className={'w-[49%] h-[80%] object-cover translate-y-10 rounded-2xl'} src={'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg'} alt={'..'}></img>
                <img className={'w-[49%] h-[80%] object-cover -translate-y-10 rounded-2xl'} src={'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg'} alt={'..'}></img>
            </div>

        </div>
    )
}

export default Food