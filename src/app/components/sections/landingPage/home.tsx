import Nav from "@/app/components/nav";

const Home = () => {


    return (
        <div className={'w-full relative '}>
            <div className={'w-full h-[60vh]'}>
                <div className={'absolute w-full h-full  z-10'}>
                    <img src={'/home.jpg'} className={'w-full h-full object-cover'} alt={'..'}></img>
                </div>
                <div className={'absolute w-full h-full bg-black opacity-40 z-20 '}></div>
                <Nav/>
            </div>
        </div>
    )
}

export default Home