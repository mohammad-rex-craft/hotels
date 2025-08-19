import LocationIcon from "@/app/components/icons/LocationIcon";
import MailIcon from "@/app/components/icons/mailIcon";
import PhoneIcon from "@/app/components/icons/phoneIcon";
import FacebookIcon from "@/app/components/icons/FacebookIcon";
import InstaIcon from "@/app/components/icons/instaIcon";
import TwiterIcon from "@/app/components/icons/twiterIcon";


const LineContact = () => {


    return (
        <section className={'w-full h-12 bg-darkGreen flex justify-between items-center px-4 md:px-10 text-white text-[6px] md:text-[9px] lg:text-[12px]'}>
            <div className="flex gap-6 ">
                <div className={'flex gap-2 '}>
                    <LocationIcon />
                    <span>Egypt ,Ciro 218</span>
                </div>
                <div className={'flex gap-2 items-center'}>
                    <MailIcon/>
                    <span>mohammad123alhalabi123@gmail.com</span>
                </div>
                <div className={'flex gap-2 items-center'}>
                    <PhoneIcon/>
                    <span>+20 1094221030</span>
                </div>
            </div>
            <div className={'flex gap-6 '}>
                <FacebookIcon/>
                <InstaIcon/>
                <TwiterIcon/>
            </div>
        </section>
    )
}

export default LineContact