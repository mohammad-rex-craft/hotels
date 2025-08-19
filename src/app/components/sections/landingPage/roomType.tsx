'use client'
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import RoomCard from "@/app/components/roomCard";

const RoomType = () => {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            align: 'start',
            containScroll: 'trimSnaps',
        },
        [
            Autoplay({
                delay: 3000,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            }),
        ]
    );

    const roomsData = [
        {
            id: 1,
            imgUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1170&q=80',
            price: 800,
            title: 'Deluxe Rooms',
            guests: 2,
            beds: 2,
            bath: 1
        },
        {
            id: 2,
            imgUrl: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?auto=format&fit=crop&w=1170&q=80',
            price: 600,
            title: 'Family Rooms',
            guests: 2,
            beds: 2,
            bath: 1
        },
        {
            id: 3,
            imgUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1170&q=80',
            price: 750,
            title: 'Single Rooms',
            guests: 2,
            beds: 1,
            bath: 1
        },
        {
            id: 4,
            imgUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1171&q=80',
            price: 950,
            title: 'Presidential Suite',
            guests: 4,
            beds: 2,
            bath: 2
        },
        {
            id: 5,
            imgUrl: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1170&q=80',
            price: 800,
            title: 'Deluxe Rooms',
            guests: 2,
            beds: 2,
            bath: 1
        },
        {
            id: 6,
            imgUrl: 'https://images.unsplash.com/photo-1566195992011-5f6b21e539aa?auto=format&fit=crop&w=1170&q=80',
            price: 600,
            title: 'Family Rooms',
            guests: 2,
            beds: 2,
            bath: 1
        },
        {
            id: 7,
            imgUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1170&q=80',
            price: 750,
            title: 'Single Rooms',
            guests: 2,
            beds: 1,
            bath: 1
        },
        {
            id: 8,
            imgUrl: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1171&q=80',
            price: 950,
            title: 'Presidential Suite',
            guests: 4,
            beds: 2,
            bath: 2
        },
    ];

    return (
        <section className="w-full h-[75vh] md:h-[80vh] lg:h-screen py-12 sm:py-16 md:py-20 flex flex-col gap-8 sm:gap-10 md:gap-12 justify-center items-center bg-lightGreen">
            <div className={'flex flex-col gap-3 sm:gap-4 justify-center items-center w-full px-4 sm:px-6 md:px-8 lg:w-4/5 xl:w-3/5'}>
                <div className={'bg-white w-fit py-1 px-2 sm:px-3 rounded-md text-darkGreen font-bold'}>
                    <p className="text-xs sm:text-sm md:text-base">ROOM TYPE</p>
                </div>
                <h2 className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight'}>The Best Luxury Rooms And Suites</h2>
            </div>
            <div className="container mx-auto px-4 sm:px-6 md:px-8">
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {roomsData.map(room => (
                            <div key={room.id}
                                 className="embla__slide flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_60%] lg:flex-[0_0_45%] xl:flex-[0_0_35%] pl-2 sm:pl-3 md:pl-4">
                                <RoomCard {...room} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RoomType;