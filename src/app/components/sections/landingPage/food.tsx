import CheckMarkIcon from "@/app/components/icons/CheckMarkIcon";
import ArrowRight from "@/app/components/icons/ArrowRight";
import Btn from "@/app/components/common/Btn";

const Food = () => {
    return (
        <div className={'w-full min-h-[80vh] flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 justify-center items-center bg-gray-100 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8'}>
            <div className={'w-full lg:w-[45%] xl:w-[40%] flex flex-col gap-4 sm:gap-6'}>
                <div className={'bg-white w-fit py-1 px-2 sm:px-3 rounded-md text-darkGreen font-bold'}>
                    <p className="text-xs sm:text-sm md:text-base">FOOD & DRINK</p>
                </div>
                <h2 className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight'}>Quality Food And Drink Your Tip Are Enjoyable</h2>
                <p className={'text-sm sm:text-base text-gray-600 leading-relaxed'}>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic
                </p>
                
                <div className={'flex gap-3 sm:gap-4'}>
                    <CheckMarkIcon className={'w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1'}/>
                    <div className={'flex flex-col gap-2'}>
                        <h4 className={'text-base sm:text-lg md:text-xl font-bold text-gray-800'}>Premium Quality Ingredients</h4>
                        <p className={'text-sm sm:text-base text-gray-600 leading-relaxed'}>when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic</p>
                    </div>
                </div>
                
                <div className={'flex gap-3 sm:gap-4'}>
                    <CheckMarkIcon className={'w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1'}/>
                    <div className={'flex flex-col gap-2'}>
                        <h4 className={'text-base sm:text-lg md:text-xl font-bold text-gray-800'}>Expert Chefs</h4>
                        <p className={'text-sm sm:text-base text-gray-600 leading-relaxed'}>when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic</p>
                    </div>
                </div>
                
                <div className={'flex gap-3 sm:gap-4'}>
                    <CheckMarkIcon className={'w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1'}/>
                    <div className={'flex flex-col gap-2'}>
                        <h4 className={'text-base sm:text-lg md:text-xl font-bold text-gray-800'}>Fresh Daily Menu</h4>
                        <p className={'text-sm sm:text-base text-gray-600 leading-relaxed'}>when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic</p>
                    </div>
                </div>

                <Btn title={'Learn More'} bg={'bg-darkGreen'} dis={true} color={'text-white'} size={'px-4 sm:px-5 py-3 sm:py-4'}/>

            </div>
            
            <div className={'w-full lg:w-[45%] xl:w-[40%] flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between'}>
                <img 
                    className={'w-full sm:w-[49%] h-48 sm:h-64 md:h-80 lg:h-[80%] object-cover translate-y-0 sm:translate-y-10 rounded-2xl shadow-lg'} 
                    src={'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg'} 
                    alt={'Delicious Food 1'}
                />
                <img 
                    className={'w-full sm:w-[49%] h-48 sm:h-64 md:h-80 lg:h-[80%] object-cover translate-y-0 sm:-translate-y-10 rounded-2xl shadow-lg'} 
                    src={'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg'} 
                    alt={'Delicious Food 2'}
                />
            </div>
        </div>
    )
}

export default Food