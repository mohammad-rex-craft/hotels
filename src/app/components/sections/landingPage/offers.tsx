'use client'
import ArrowRight from "@/app/components/icons/ArrowRight";
import Btn from "@/app/components/common/Btn";
import { useState, useEffect } from "react";

const Offers = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.offers-section');
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
        <section className={'offers-section w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] bg-lightGreen flex flex-col gap-6 sm:gap-8 md:gap-10 justify-center items-center py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8'}>
            <div className={`bg-white w-fit py-1 px-2 sm:px-3 rounded-md text-darkGreen font-bold hover:scale-110 transition-transform duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <p className="text-xs sm:text-sm md:text-base">SPECIAL OFFERS</p>
            </div>
            <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight px-4 hover:text-darkGreen transition-colors duration-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>Special Discount for Hotel & Resort Booking</h2>
            
            <div className={'flex flex-col lg:flex-row w-full lg:w-[85%] xl:w-[75%] 2xl:w-[65%] gap-6 sm:gap-8 lg:gap-12 justify-between'}>
                <div className={`w-full lg:w-[48%] relative h-64 sm:h-80 md:h-96 lg:h-[300px] group cursor-pointer transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
                    <img className={'w-full opacity-70 h-full object-cover rounded-2xl group-hover:opacity-90 group-hover:scale-105 transition-all duration-500'}
                         src={'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg'} 
                         alt={'Hotel Booking Offer'} />
                    <div className={'absolute top-0 left-0 w-full h-full flex text-white gap-4 sm:gap-6 flex-col justify-center p-4 sm:p-6 md:p-8 group-hover:bg-black/20 transition-all duration-500 rounded-2xl'}>
                        <div className={'border-b-2 border-l-2 w-fit p-2 sm:p-3 border-white rounded-bl-md hover:bg-white hover:text-darkGreen transition-all duration-300'}>
                            <p className="text-sm sm:text-base md:text-lg font-semibold">30% Offer</p>
                        </div>
                        <h4 className={'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight group-hover:text-gold transition-colors duration-300'}>Get 30% Off on Hotel Booking</h4>
                        <Btn title={'Book Now'} size={'px-4 sm:px-5 py-2 sm:py-3'} dis={true} />
                    </div>
                </div>
                
                <div className={`w-full lg:w-[48%] relative h-64 sm:h-80 md:h-96 lg:h-[300px] group cursor-pointer transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
                    <img className={'w-full opacity-70 h-full object-cover rounded-2xl group-hover:opacity-90 group-hover:scale-105 transition-all duration-500'}
                         src={'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg'} 
                         alt={'Resort Booking Offer'} />
                    <div className={'absolute top-0 left-0 w-full h-full flex text-white gap-4 sm:gap-6 flex-col justify-center p-4 sm:p-6 md:p-8 group-hover:bg-black/20 transition-all duration-500 rounded-2xl'}>
                        <div className={'border-b-2 border-l-2 w-fit p-2 sm:p-3 border-white rounded-bl-md hover:bg-white hover:text-darkGreen transition-all duration-300'}>
                            <p className="text-sm sm:text-base md:text-lg font-semibold">35% Offer</p>
                        </div>
                        <h4 className={'text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight group-hover:text-gold transition-colors duration-300'}>Get 35% Off on Resort Booking</h4>
                        <Btn title={'Book Now'} size={'px-4 sm:px-5 py-2 sm:py-3'} dis={true} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Offers