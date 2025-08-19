import React from "react";


const Staff = () => {

    const data = [
        {
            img:"https://images.pexels.com/photos/1181695/pexels-photo-1181695.jpeg",
            name:'mohammad',
            employee:'ceo'
        },
        {
            img:"https://images.pexels.com/photos/3201694/pexels-photo-3201694.jpeg",
            name:'mohammad',
            employee:'ceo'
        },
        {
            img:"https://images.pexels.com/photos/1181725/pexels-photo-1181725.jpeg",
            name:'mohammad',
            employee:'ceo'
        },
        {
            img:"https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg",
            name:'mohammad',
            employee:'ceo'
        },

    ]

    return (
        <section id={'staff'} className={'w-full h-[40vh] md:h-[60vh] lg:h-[80vh] flex flex-col justify-between '}>
            <div className={'flex flex-col w-full bg-darkGreen gap-3 sm:gap-4  items-center pt-10 lg:pt-16 h-[65%] lg:h-[60%] relative'}>
                <div className={'bg-white w-fit py-1 px-2 sm:px-3 rounded-md text-darkGreen font-bold'}>
                    <p className="text-xs sm:text-sm md:text-base">FIXYLAND STAFF</p>
                </div>
                <h2 className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center leading-tight text-white'}>Expert
                    Staff Persons</h2>
                <div
                    className={'w-full h-[70%] md:h-full absolute -bottom-[31%] md:-bottom-[44%] left-1/2 -translate-x-1/2 z-10 flex gap-6 justify-center '}>

                        {data.map((e,index)=>{
                            return (
                                <div className={'w-[18%] group lg:w-[16%] h-[80%] cursor-pointer transition-all duration-500 ease-out hover:scale-105'} key={index}>
                                    <img className={'w-full group-hover:object-fill object-cover group-hover:h-[75%] h-[70%] rounded-t-2xl transition-all duration-500 ease-out group-hover:scale-105'}
                                         src={e.img}
                                         alt={'..'}></img>
                                    <div className={'w-full group-hover:h-[25%] h-[30%] rounded-b-2xl flex flex-col justify-center px-2 lg:px-6 transition-all duration-500 ease-out bg-white group-hover:bg-gray-50'}
                                         style={{boxShadow: "0 6.5px 19px 12px #d1d0d0"}}>
                                        <h3 className={'text-[9px] md:text-[12px] lg:text-[16px] transition-all duration-300 ease-out group-hover:text-blue-600'}>{e.name}</h3>
                                        <p className={'transition-all duration-300 ease-out group-hover:text-gray-600'}>{e.employee}</p>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </div>
            <div className={'w-full flex justify-center items-end pb-3 md:pb-8 lg:pb-10 gap-6 md:gap-16 lg:gap-20 p-8 md:px-12 lg:px-16'}>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 2048 2048" className="transition-all duration-300 ease-out hover:scale-110 hover:fill-blue-500 cursor-pointer">
                    <path fill="#717171"
                          d="M1728 1664q26 0 45 19t19 45t-19 45t-45 19H960q-26 0-45-19t-19-45t19-45t45-19zm-128 256q26 0 45 19t19 45t-19 45t-45 19h-512q-26 0-45-19t-19-45t19-45t45-19zm238-512h210v128H537q-10 64-14 128t-7 127t-3 128t-1 129H128v-193q0-81 6-160t17-159H0v-128h172q50-245 151-471t250-427q-146-5-268-61T82 289l-45-46l47-44q104-97 228-147T579 1q156 0 286 58t239 168q77 2 149 24t134 60t113 90t87 115t57 135t20 150v64h-64q-132 0-247-56t-199-159q-76 138-191 227t-269 125q-43 99-76 200t-57 206h289q22-84 69-154t112-122t146-79t167-29q87 0 167 28t145 80t113 121t69 155M1238 380q-6 65-26 132q51 88 134 146t185 74q-10-61-35-115t-63-101t-88-80t-107-56m-126 7q-102 8-192 50T759 547T642 704t-61 189q85-7 161-36t139-78t112-112t81-144q14-33 23-67t15-69M224 247q80 66 177 101t201 35q97 0 187-30t168-88q-80-66-177-101t-201-35q-97 0-187 30t-168 88m318 775q-8 2-16 2t-16 0h-32q-16 0-32-2v-47q-53 118-89 232t-59 230t-32 235t-10 248h128q0-121 8-234t27-223t49-219t74-222m442 386h720q-20-57-56-104t-83-81t-104-52t-117-19q-61 0-117 18t-103 52t-84 81t-56 105"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48" className="transition-all duration-300 ease-out hover:scale-110 hover:stroke-blue-500 cursor-pointer">
                    <g fill="none" stroke="#717171" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4">
                        <path
                            d="m11 14.999l-6 1c1.63-7.514 6.364-9.993 11-10c2.997-.005 5.952 1.026 8 2c2.048-.974 5-2 8-2c4.611 0 9.37 2.486 11 10l-6-1c.559 2.1 1.788 5.792 0 9c-2.98-2.673-9.87-6.709-13-9c-3.13 2.291-10.02 6.327-13 9c-1.788-3.207-.559-6.9 0-9"/>
                        <path d="M24 15c-.755 3.889-1.811 13.533 0 21"/>
                        <path d="M12 42h24c-4.787-4.585-7-5.995-12-6s-10.108 3.382-12 6"/>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" className="transition-all duration-300 ease-out hover:scale-110 hover:fill-green-500 cursor-pointer">
                    <path fill="#717171"
                          d="M7.34 12.9a2.5 2.5 0 1 0-3.4-1a2.51 2.51 0 0 0 3.4 1m.38 5.9a1.49 1.49 0 0 0 2.06-.52l2.5-4.16a2.56 2.56 0 0 1 .83-.84l2.79-1.72a.28.28 0 0 0 .11-.15a.32.32 0 0 0 0-.19l-1.34-2.13a.26.26 0 0 0-.35-.09l-2.78 1.71a5.4 5.4 0 0 0-1.83 1.86l-2.5 4.16a1.5 1.5 0 0 0 .51 2.07m9.87-8.27A5.7 5.7 0 0 0 19 9.3a.24.24 0 0 0 0-.18a.23.23 0 0 0-.1-.17l-2-1.5a.25.25 0 0 0-.34 0A2.6 2.6 0 0 1 16 8l-.41.25a.3.3 0 0 0-.11.16a.26.26 0 0 0 0 .19l1.31 2.13a.26.26 0 0 0 .34.08Zm4.8-9.86a.5.5 0 0 0-.74-.59l-2.32 1.48a2 2 0 0 0-.81 1l-1.3 3.64a.27.27 0 0 0 .09.29L19.37 8a.24.24 0 0 0 .22 0a.25.25 0 0 0 .16-.16c.53-1.35 2.64-7.17 2.64-7.17M22.93 22c-1.59.15-2.67-1.55-2.68-1.57a1 1 0 0 0-1.71 0A3.38 3.38 0 0 1 15.79 22a2.8 2.8 0 0 1-2.41-1.48a1.05 1.05 0 0 0-1.72-.15A4.3 4.3 0 0 1 8.56 22a3.55 3.55 0 0 1-2.76-1.62a1 1 0 0 0-1.64-.09S2.72 22.13 1.05 22a1 1 0 0 0-1 .94C0 23.13 0 24 1.17 24a5.82 5.82 0 0 0 3.73-1.61A5.2 5.2 0 0 0 8.56 24a5.87 5.87 0 0 0 3.81-1.5a4.6 4.6 0 0 0 3.42 1.5a5.17 5.17 0 0 0 3.62-1.49A4.78 4.78 0 0 0 23.07 24a1 1 0 0 0 .93-1.12a1 1 0 0 0-1.07-.88"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" className="transition-all duration-300 ease-out hover:scale-110 hover:fill-purple-500 cursor-pointer">
                    <path fill="#717171" d="M19 9h-6v6h8v-4c0-1.1-.9-2-2-2" opacity="0.3"/>
                    <circle cx="7" cy="11" r="1" fill="#717171" opacity="0.3"/>
                    <path fill="#717171"
                          d="M4 11c0 1.66 1.34 3 3 3s3-1.34 3-3s-1.34-3-3-3s-3 1.34-3 3m4 0c0 .55-.45 1-1 1s-1-.45-1-1s.45-1 1-1s1 .45 1 1m11-4h-8v8H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4m2 8h-8V9h6c1.1 0 2 .9 2 2z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" className="transition-all duration-300 ease-out hover:scale-110 hover:stroke-orange-500 cursor-pointer">
                    <g fill="none" stroke="#717171" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path
                            d="M10 22v-6.57M12 11h.01M12 7h.01M14 15.43V22m1-6a5 5 0 0 0-6 0m7-5h.01M16 7h.01M8 11h.01M8 7h.01"/>
                        <rect width="16" height="20" x="4" y="2" rx="2"/>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 48 48" className="transition-all duration-300 ease-out hover:scale-110 hover:stroke-yellow-500 cursor-pointer">
                    <g fill="none" stroke="#717171" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                        <path
                            d="M20.74 4.707a3.085 3.085 0 0 1 5.52 0l5.124 9.818L41.94 16.59c2.437.477 3.404 3.562 1.706 5.44l-7.388 8.165l1.381 11.12c.318 2.563-2.222 4.474-4.466 3.361L23.5 39.879l-9.672 4.797c-2.244 1.113-4.784-.798-4.466-3.36l1.381-11.122l-7.388-8.165c-1.698-1.877-.73-4.962 1.706-5.44l10.555-2.064z"/>
                        <path
                            d="M27.75 20h-7.583L19 27l.855-.428a7 7 0 0 1 3.13-.739h1.848a3.5 3.5 0 0 1 3.5 3.5V30.5a3.5 3.5 0 0 1-3.5 3.5H22.5a3.5 3.5 0 0 1-3.3-2.333"/>
                    </g>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" className="transition-all duration-300 ease-out hover:scale-110 hover:stroke-red-500 cursor-pointer">
                    <g fill="none" stroke="#717171" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <circle cx="6" cy="7" r="3"/>
                        <path d="M16 14s1-3 1-8V4s-1-2-3-2c-1 0-2 .5-2 .5"/>
                        <path d="M13 8a4 4 0 0 1 8 0"/>
                        <path d="M17 4s1-2 3-2c1 0 2 .5 2 .5M19.75 19A8 8 0 0 0 4 21"/>
                        <path
                            d="M2 20c.6.5 1.2 1 2.5 1c2.5 0 2.5-2 5-2c2.6 0 2.4 2 5 2c2.5 0 2.5-2 5-2c1.3 0 1.9.5 2.5 1"/>
                    </g>
                </svg>
            </div>
        </section>
    )
}

export default Staff