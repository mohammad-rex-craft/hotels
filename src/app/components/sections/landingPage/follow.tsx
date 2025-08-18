import InstaIcon from "@/app/components/icons/instaIcon";


const Follow = ()=>{


    return (
        <div className={'w-full h-[18vh] flex relative '}>
            <img className={'h-full w-1/6'} src={'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg'} alt={'...'}></img>
            <img className={'h-full w-1/6'} src={'https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg'} alt={'...'}></img>
            <img className={'h-full w-1/6'} src={'https://images.pexels.com/photos/775219/pexels-photo-775219.jpeg'} alt={'...'}></img>
            <img className={'h-full w-1/6'} src={'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg'} alt={'...'}></img>
            <img className={'h-full w-1/6'} src={'https://images.pexels.com/photos/2986231/pexels-photo-2986231.jpeg'} alt={'...'}></img>
            <img className={'h-full w-1/6'} src={'https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg'} alt={'...'}></img>
            <div className={'absolute bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2 whiteGlass text-darkGreen flex flex-col justify-center items-center gap-4 px-16 py-6 rounded-2xl font-bold'}>
                <InstaIcon classname={'w-10 h-10 stroke-darkGreen'}/>
                <h4>Follow Our</h4>
                <h4>Instagram</h4>
            </div>
        </div>
    )
}

export default Follow