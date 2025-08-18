



const Video = ()=>{


    return (
        <div className={'w-full h-[40vh]'}>
            <iframe
                className={'w-full h-full'}
                src="https://www.youtube.com/watch?v=lkEoQWO0uLc&list=RDQ9Vp7O_8ZKU&index=27&ab_channel=kinanzaitouni"
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