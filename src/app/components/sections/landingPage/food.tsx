'use client'
import CheckMarkIcon from "@/app/components/icons/CheckMarkIcon";
import ArrowRight from "@/app/components/icons/ArrowRight";
import Btn from "@/app/components/common/Btn";
import { useState, useEffect } from "react";

const Food = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.food-section');
            if (element) {
                const rect = element.getBoundingClientRect();
                const isInView = rect.top < window.innerHeight && rect.bottom > 0;
                if (isInView) {
                    setIsVisible(true);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial load
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={'food-section w-full min-h-[80vh] flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 justify-center items-center bg-gray-100 py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8'}>
            <div className={`w-full lg:w-[45%] xl:w-[40%] flex flex-col gap-4 sm:gap-6 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                <div className={'bg-white w-fit py-1 px-2 sm:px-3 rounded-md text-darkGreen font-bold hover:scale-110 transition-transform duration-300'}>
                    <p className="text-xs sm:text-sm md:text-base">FOOD & DRINK</p>
                </div>
                <h2 className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight hover:text-darkGreen transition-colors duration-300'}>Quality Food And Drink Your Tip Are Enjoyable</h2>
                <p className={'text-sm sm:text-base text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300'}>
                    is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                    type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                    also the leap into electronic
                </p>
                
                <div className={'flex gap-3 sm:gap-4 hover:translate-x-2 transition-transform duration-300 cursor-pointer'}>
                    <CheckMarkIcon className={'w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1 hover:scale-110 transition-transform duration-300'}/>
                    <div className={'flex flex-col gap-2'}>
                        <h4 className={'text-base sm:text-lg md:text-xl font-bold text-gray-800 hover:text-darkGreen transition-colors duration-300'}>Premium Quality Ingredients</h4>
                        <p className={'text-sm sm:text-base text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300'}>when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic</p>
                    </div>
                </div>
                
                <div className={'flex gap-3 sm:gap-4 hover:translate-x-2 transition-transform duration-300 cursor-pointer'}>
                    <CheckMarkIcon className={'w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1 hover:scale-110 transition-transform duration-300'}/>
                    <div className={'flex flex-col gap-2'}>
                        <h4 className={'text-base sm:text-lg md:text-xl font-bold text-gray-800 hover:text-darkGreen transition-colors duration-300'}>Expert Chefs</h4>
                        <p className={'text-sm sm:text-base text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300'}>when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic</p>
                    </div>
                </div>
                
                <div className={'flex gap-3 sm:gap-4 hover:translate-x-2 transition-transform duration-300 cursor-pointer'}>
                    <CheckMarkIcon className={'w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0 mt-1 hover:scale-110 transition-transform duration-300'}/>
                    <div className={'flex flex-col gap-2'}>
                        <h4 className={'text-base sm:text-lg md:text-xl font-bold text-gray-800 hover:text-darkGreen transition-colors duration-300'}>Fresh Daily Menu</h4>
                        <p className={'text-sm sm:text-base text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300'}>when an unknown printer took a galley of type and scrambled it to
                            make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic</p>
                    </div>
                </div>

                <Btn title={'Learn More'} bg={'bg-darkGreen'} dis={true} color={'text-white'} size={'px-4 sm:px-5 py-3 sm:py-4'}/>

            </div>
            
            <div className={`w-full lg:w-[45%] xl:w-[40%] flex flex-col sm:flex-row gap-4 sm:gap-6 justify-between transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                <img 
                    className={'w-full sm:w-[49%] h-48 sm:h-64 md:h-80 lg:h-[80%] object-cover translate-y-0 sm:translate-y-10 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 hover:rotate-1 transition-all duration-500 cursor-pointer animate-float-slow group'} 
                    src={'https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg'} 
                    alt={'Delicious Food 1'}
                />
                <img 
                    className={'w-full sm:w-[49%] h-48 sm:h-64 md:h-80 lg:h-[80%] object-cover translate-y-0 sm:-translate-y-10 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-110 hover:-rotate-1 transition-all duration-500 cursor-pointer animate-float-slow-reverse group'} 
                    src={'https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg'} 
                    alt={'Delicious Food 2'}
                />
            </div>
        </section>
    )
}

export default Food