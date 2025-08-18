import FacebookIcon from "@/app/components/icons/FacebookIcon";
import InstaIcon from "@/app/components/icons/instaIcon";
import TwiterIcon from "@/app/components/icons/twiterIcon";
import Link from "next/link";

const Footer = () => {


    return (
        <footer className={'w-full h-[40vh] bg-[#191a19] text-white flex  justify-center items-center'}>
            <div className={'w-[85%] gap-8 flex justify-between '}>
                <div className={'flex flex-col gap-4 justify-between'}>
                    <div className={'flex gap-4 items-center'}>
                        <img className={'w-20 h-20'} src={'/logo.jpg'} alt={'..'}></img>
                        <h2 className={'text-3xl font-bold'}>Fixyland</h2>
                    </div>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>
                    <div className={'flex gap-4 w-fit'}>
                        <div className={'p-4 rounded-xl bg-[#282928] w-fit'}>
                            <FacebookIcon/>
                        </div>
                        <div className={'p-4 rounded-xl bg-[#282928] w-fit'}>
                            <InstaIcon/>
                        </div>
                        <div className={'p-4 rounded-xl bg-[#282928] w-fit'}>
                            <TwiterIcon/>
                        </div>
                    </div>
                </div>
                <div className={'flex flex-col gap-4 justify-between'}>
                    <h4 className={'text-3xl font-semibold'}>EXPLORE</h4>
                    <Link className={'text-[14px]'} href={'#'}>About</Link>
                    <Link className={'text-[14px]'} href={'#'}>Price</Link>
                    <Link className={'text-[14px]'} href={'#'}>Hostel Stuff</Link>
                    <Link className={'text-[14px]'} href={'#'}>Lac</Link>
                    <Link className={'text-[14px]'} href={'#'}>Contact</Link>
                </div>
                <div className={'flex flex-col gap-4 justify-between'}>
                    <h4 className={'text-3xl font-semibold'}>Contact</h4>
                    <p>is simply dummy text of the printing and typwhen an unknown printer took a galley</p>
                    <p className={'text-xl font-bold'}>+201094221030</p>
                    <p className={'text-xl font-bold'}>mohammad@gmail.com</p>
                </div>
                <div className={'w-[40%] h-auto px-6 py-8 rounded-2xl bg-[#282928] flex flex-col gap-6'}>
                    <h4 className={'text-3xl font-semibold'}>NEWSLETTER</h4>
                    <input type={'text'} className={'bg-transparent border-b-2 border-white text-[12px]'} placeholder={'EX : mohammad@gmail.com'}></input>
                    <div className="flex items-center">
                        <input id="link-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label htmlFor="link-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer