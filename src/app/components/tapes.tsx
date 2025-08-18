import StarIcon from "@/app/components/icons/StarIcon";

const Tapes = () => {

    const marqueeItems = [
        'Luxury Hotel',
        'Hotel & Resort',
        'Holiday Booking',
        'Relax & Enjoy',
        'Special Offers',
    ];

    const MarqueeContent = () => (
        <>
            {marqueeItems.map((item, index) => (
                <div key={index} className="mx-4 flex shrink-0 items-center justify-center gap-4">
                    <span className="text-xl font-bold tracking-wide text-transparent [-webkit-text-stroke:1px_white]">
            {item}
          </span>
                    <StarIcon />
                </div>
            ))}
        </>
    );
    return (
        <div className="relative w-full  ">
            <div className="absolute h-[80px] -rotate-[1.8deg] flex w-full select-none items-center overflow-hidden bg-gray-900 py-3">
                <div className="flex w-max shrink-0 animate-marquee-reverse">
                    <MarqueeContent />
                    <MarqueeContent />
                </div>
            </div>
                <div className="absolute h-[80px] rotate-[1.8deg] flex w-full select-none items-center overflow-hidden bg-teal-600 py-3">
                    <div className="flex w-max shrink-0 animate-marquee">
                        <MarqueeContent />
                        <MarqueeContent />
                    </div>
                </div>

        </div>
    )
}

export default Tapes