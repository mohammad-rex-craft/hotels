import SportIcon from "@/app/components/icons/SportIcon";
import SwimmingIcon from "@/app/components/icons/SwimmingIcon";
import MassageIcon from "@/app/components/icons/MassageIcon";
import JacuzziIcon from "@/app/components/icons/JacuzziIcon";
import Btn from "@/app/components/common/Btn";

const HotelService = () => {
    return (
        <section id={'service'} className={'w-full min-h-[60vh] md:min-h-[70vh] lg:min-h-[80vh] bg-gray-100 flex flex-col justify-center gap-6 sm:gap-8 md:gap-10 items-center py-8 sm:py-12 md:py-16'}>
            <div className={'flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-12 w-full justify-center items-center px-4 sm:px-6 md:px-8'}>
                <div className={'flex flex-col gap-4 sm:gap-6 w-full lg:w-1/2 xl:w-1/3'}>
                    <div className={'bg-white w-fit py-1 px-2 sm:px-3 rounded-md text-darkGreen font-bold hover:scale-110 transition-transform duration-300'}>
                        <p className="text-xs sm:text-sm md:text-base">HOTEL SERVICE</p>
                    </div>
                    <h2 className={'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight hover:text-darkGreen transition-colors duration-300'}>Get The Best Hotel Fixyland Services</h2>
                    <p className={'text-sm sm:text-base text-gray-600 leading-relaxed hover:text-gray-800 transition-colors duration-300'}>
                        is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book.
                    </p>

                    <Btn title={'View All'} bg={'bg-darkGreen'} color={'text-white'} size={'px-4 py-2 '} dis={true} />

                </div>
                <div className={'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full lg:w-1/2 xl:w-1/3'}>
                    <div className={'relative h-32 sm:h-40 md:h-48 group hover:scale-105 transition-all duration-500 cursor-pointer'}>
                        <img src={'/home.jpg'} className={'w-full h-full rounded-2xl object-cover group-hover:scale-110 transition-transform duration-500'} alt={'Fitness Center'}></img>
                        <div className={'absolute rounded-2xl top-0 left-0 darkGreenGlass w-full h-full group-hover:bg-opacity-80 transition-all duration-500'}></div>
                        <div
                            className={'p-3 sm:p-4 shadow-xl rounded-2xl absolute top-0 left-0 w-full h-full z-30 flex flex-col text-white group-hover:shadow-2xl transition-all duration-500'}>
                            <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                                <SportIcon/>
                            </div>
                            <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-gold transition-colors duration-300">Fitness Center</h4>
                            <p className={'text-xs sm:text-sm text-gray-200 leading-relaxed group-hover:text-white transition-colors duration-300'}>is simply dummy text of the printing and typesetting
                                industry.</p>
                        </div>
                    </div>
                    <div className={'p-3 sm:p-4 bg-white shadow-xl rounded-2xl h-32 sm:h-40 md:h-48 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer group'}>
                        <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                            <JacuzziIcon/>
                        </div>
                        <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-darkGreen transition-colors duration-300">Jacuzzi</h4>
                        <p className={'text-xs sm:text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300'}>is simply dummy text of the typesetting industry.</p>
                    </div>
                    <div className={'p-3 sm:p-4 bg-white shadow-xl rounded-2xl h-32 sm:h-40 md:h-48 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer group'}>
                        <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                            <SwimmingIcon/>
                        </div>
                        <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-darkGreen transition-colors duration-300">Swimming Pool</h4>
                        <p className={'text-xs sm:text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300'}>is simply dummy text of the typesetting industry.</p>
                    </div>
                    <div className={'p-3 sm:p-4 bg-white shadow-xl rounded-2xl h-32 sm:h-40 md:h-48 hover:scale-105 hover:shadow-2xl transition-all duration-500 cursor-pointer group'}>
                        <div className="mb-2 group-hover:scale-110 transition-transform duration-300">
                            <MassageIcon/>
                        </div>
                        <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 group-hover:text-darkGreen transition-colors duration-300">SPA Treatments</h4>
                        <p className={'text-xs sm:text-sm text-gray-600 leading-relaxed group-hover:text-gray-800 transition-colors duration-300'}>is simply dummy text of the typesetting industry.</p>
                    </div>
                </div>
            </div>
            <div className={'text-xs sm:text-sm md:text-base flex flex-col sm:flex-row gap-2 sm:gap-4 items-center text-center sm:text-left hover:scale-105 transition-transform duration-300'}>
                <p className="text-gray-700 hover:text-gray-900 transition-colors duration-300">Call us Today: <span className="font-semibold text-darkGreen hover:text-gold transition-colors duration-300">+20 1094221030</span></p>
                <span className="hidden sm:inline text-gray-500">or</span>
                <p className="text-gray-700 hover:text-gray-900 transition-colors duration-300">Email: <span className="font-semibold text-darkGreen hover:text-gold transition-colors duration-300">mohammad123alhalabi123@gmail.com</span></p>
            </div>
        </section>
    )
}

export default HotelService