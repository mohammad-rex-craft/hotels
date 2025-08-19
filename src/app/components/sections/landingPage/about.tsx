import CheckMarkIcon from "@/app/components/icons/CheckMarkIcon";
import Tapes from "@/app/components/tapes";

const About = () => {
    return (
        <div className={'bg-lightGreen w-full h-[70vh] md:h-[80vh] flex justify-center items-center overflow-x-clip'}>
            <div className={'flex gap-8 md:gap-16 lg:gap-36 w-[95%] md:w-[80%] lg:w-[65%]'}>
                <div className={'w-[35vw] lg:w-[45vw] h-[48vh] md:h-[55vh] relative'}>
                    <div className={'absolute top-1/2 -right-[15%] lg:block hidden animate-bounce'}>
                        <div
                            className="relative flex h-36 w-36 items-center justify-center rounded-full bg-gray-100 bg-opacity-75">

                            <svg
                                className="absolute left-0 top-0 h-full w-full animate-spin"
                                style={{animationDuration: '20s'}}
                                viewBox="0 0 100 100"
                            >
                                <path
                                    id="circlePath"
                                    fill="none"
                                    d="
            M 10, 50
            a 40,40 0 1,1 80,0
            a 40,40 0 1,1 -80,0
          "
                                />
                                <text>
                                    <textPath
                                        href="#circlePath"
                                        className="fill-gray-600 text-[8px] font-semibold uppercase tracking-widest"
                                    >
                                        • 30 YEARS OF EXPERIENCE HOTEL BUSINESS
                                    </textPath>
                                </text>
                            </svg>

                            <div
                                className="relative flex h-20 w-20 items-center justify-center rounded-full bg-teal-600 animate-pulse">

                                <svg
                                    className="h-8 w-8 text-white"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10 1l2.58 6.42L19 10l-6.42 2.58L10 19l-2.58-6.42L1 10l6.42-2.58L10 1z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <img src={'/about.jpg'} className={'w-full h-full rounded-2xl object-cover hover:scale-105 transition-transform duration-500'} alt={'..'}></img>
                </div>
                <div className={'flex flex-col gap-6 w-[50vw] lg:w-[60vw]'}>
                    <div className={'bg-white w-fit py-1 px-2 rounded-md text-darkGreen font-bold hover:scale-110 transition-transform duration-300'}>
                        <p>ABOUT FIXYLAND</p>
                    </div>
                    <h2 className={'text-2xl md:text-3xl lg:text-4xl font-bold hover:text-darkGreen transition-colors duration-300'}>World Class Luxury Hotel and Resort Near City</h2>
                    <p className={'hover:text-gray-700 transition-colors duration-300'}>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                        also the leap into electronic
                    </p>
                    <div className={'grid gap-2 grid-cols-2 grid-rows-3'}>
                        <div className={'flex cursor-pointer gap-2 hover:translate-x-2 transition-transform duration-300'}>
                          <CheckMarkIcon/>
                            <p>Contrary to popular belief</p>
                        </div>
                        <div className={'flex cursor-pointer gap-2 hover:translate-x-2 transition-transform duration-300'}>
                            <CheckMarkIcon/>
                            <p>Contrary to popular belief</p>
                        </div>
                        <div className={'flex cursor-pointer gap-2 hover:translate-x-2 transition-transform duration-300'}>
                            <CheckMarkIcon/>
                            <p>Contrary to popular belief</p>
                        </div>
                        <div className={'flex cursor-pointer gap-2 hover:translate-x-2 transition-transform duration-300'}>
                            <CheckMarkIcon/>
                            <p>Contrary to popular belief</p>
                        </div>
                        <div className={'flex cursor-pointer gap-2 hover:translate-x-2 transition-transform duration-300'}>
                            <CheckMarkIcon/>
                            <p>Contrary to popular belief</p>
                        </div>
                        <div className={'flex cursor-pointer gap-2 hover:translate-x-2 transition-transform duration-300'}>
                            <CheckMarkIcon/>
                            <p>Contrary to popular belief</p>
                        </div>

                    </div>
                    <div className={'flex gap-4 hover:scale-105 transition-transform duration-300'}>
                        <img src={'/man.jpg'} className={'w-16 h-16 rounded-full object-cover hover:scale-110 transition-transform duration-300'} alt={'..'}></img>
                        <div className={'flex flex-col justify-center '}>
                            <p className={'font-bold'}>mohammad al halabi</p>
                            <p>CEO</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={'absolute self-end w-full overflow-x-clip hover:translate-y-2 transition-transform duration-500'}>
                <Tapes/>
            </div>
        </div>
    )
}

export default About