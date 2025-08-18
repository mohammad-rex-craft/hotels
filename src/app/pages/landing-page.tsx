import LineContact from "@/app/components/sections/landingPage/lineContact";
import Home from "@/app/components/sections/landingPage/home";
import About from "@/app/components/sections/landingPage/about";
import RoomType from "@/app/components/sections/landingPage/roomType";
import HotelService from "@/app/components/sections/landingPage/hotelService";
import Video from "@/app/components/sections/landingPage/video";
import Food from "@/app/components/sections/landingPage/food";
import Offers from "@/app/components/sections/landingPage/offers";


const LandingPage = () => {


    return (
        <>
            <LineContact/>
            <Home/>
            <About/>
            <RoomType/>
            <HotelService/>
            <Video/>
            <Food/>
            <Offers/>
        </>
    )
}

export default LandingPage