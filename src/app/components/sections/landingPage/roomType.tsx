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
        <section className="w-full h-screen flex flex-col gap-12 justify-center items-center bg-lightGreen">
            <div className={'flex flex-col gap-2 justify-center items-center w-1/3'}>
                <div className={'bg-white w-fit py-1 px-2 rounded-md text-darkGreen font-bold'}>
                    <p>ROOM TYPE</p>
                </div>
                <h2 className={'text-4xl font-bold text-center'}>The Best Luxury Rooms And Suites</h2>
            </div>
            <div className="container mx-auto">
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        {roomsData.map(room => (
                            <div key={room.id}
                                 className="embla__slide flex-[0_0_90%] pl-4 sm:flex-[0_0_45%] md:flex-[0_0_30%]">
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