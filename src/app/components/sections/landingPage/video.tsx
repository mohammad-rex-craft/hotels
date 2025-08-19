



const Video = ()=>{


    return (
        <div className={'w-full h-[40vh]'}>
            <iframe
                className={'w-full h-full'}
                src="https://www.youtube.com/embed/qemqQHaeCYo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            ></iframe>
        </div>
    )
}

export default Video