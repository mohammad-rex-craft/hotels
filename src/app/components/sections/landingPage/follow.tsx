'use client'
import InstaIcon from "@/app/components/icons/instaIcon";
import { useState, useEffect } from "react";

const Follow = ()=>{
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.querySelector('.follow-section');
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

    const images = [
        'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg',
        'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg',
        'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg',
        'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg',
        'https://images.pexels.com/photos/2986231/pexels-photo-2986231.jpeg',
        'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg'
    ];

    return (
        <section className={'follow-section w-full h-[18vh] flex relative overflow-hidden'}>
            {images.map((src, index) => (
                <img 
                    key={index}
                    className={`h-full w-1/6 min-w-[150px] object-cover hover:scale-110 hover:brightness-110 transition-all duration-500 cursor-pointer ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                    style={{
                        transitionDelay: `${index * 100}ms`,
                        transitionProperty: 'opacity, transform'
                    }}
                    src={src} 
                    alt={'Instagram Photo'}
                />
            ))}
            <div className={`absolute text-[12px] md:text-[15px] bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 whiteGlass text-darkGreen flex flex-col justify-center items-center gap-4 px-16 py-6 rounded-2xl font-bold transition-all duration-1000 ease-out delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
                <InstaIcon classname={'w-8 h-8 md:w-10 md:h-10 text-darkGreen hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer'}/>
                <h4 className="hover:text-gold transition-colors duration-300">Follow Our</h4>
                <h4 className="hover:text-gold transition-colors duration-300">Instagram</h4>
            </div>
        </section>
    )
}

export default Follow