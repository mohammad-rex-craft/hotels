import React from "react";

const UsersIcon = () => (
    <svg xmlns="http://www.w.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path
            d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015.5-4.93A5 5 0 0111 16v1H1v-1a5 5 0 015-5z"/>
    </svg>);
const BedIcon = () => (
    <svg xmlns="http://www.w.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path d="M18 10a2 2 0 00-2-2H4a2 2 0 00-2 2v4a2 2 0 002 2h12a2 2 0 002-2v-4z"/>
        <path d="M3 8a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"/>
    </svg>);
const BathIcon = () => (
    <svg xmlns="http://www.w.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd"
              d="M5 2a1 1 0 011 1v1h8V3a1 1 0 112 0v1h1a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V6a2 2 0 012-2h1V3a1 1 0 011-1zm1 10a1 1 0 100 2h8a1 1 0 100-2H6z"
              clipRule="evenodd"/>
    </svg>);
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"/>
    </svg>);

const RoomCard = ({imgUrl, price, title, guests, beds, bath}: {
    imgUrl: string,
    price: number,
    title: string,
    guests: number,
    beds: number,
    bath: number
}) => (
    <div className="overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="relative">
            <img src={imgUrl} alt={title} className="h-40 sm:h-48 md:h-56 w-full object-cover transition-transform duration-300 hover:scale-105"/>
            <div
                className="absolute left-2 sm:left-4 top-2 sm:top-4 rounded-md bg-teal-600 px-2 sm:px-3 py-1 text-xs sm:text-sm font-bold text-white">${price} /
                Night
            </div>
        </div>
        <div className="p-3 sm:p-4 md:p-6">
            <h3 className="mb-2 text-lg sm:text-xl md:text-2xl font-bold text-gray-800">{title}</h3>
            <div className="mb-3 sm:mb-4 flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
                <span className="flex items-center gap-1 sm:gap-2"><UsersIcon/> {guests} Guests</span>
                <span className="flex items-center gap-1 sm:gap-2"><BedIcon/> {beds} Beds</span>
                <span className="flex items-center gap-1 sm:gap-2"><BathIcon/> {bath} Bath</span>
            </div>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base text-gray-600 line-clamp-2">There are many variations of passages of Lorem Ipsum
                available.</p>
            <a href="#"
               className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-teal-600 transition-colors hover:text-teal-700">Read
                More <ArrowRightIcon/></a>
        </div>
    </div>
);

export default RoomCard