import ArrowRight from "@/app/components/icons/ArrowRight";


const Btn = ({size='px-3 py-1 md:px-4 md:py-3 lg:px-5 lg:py-4',width='w-fit',bg='bg-white' , color='text-black',title='Book Your Stay',textSize='text-[8px] md:text-[12px] lg:text-[16px]',dis=false})=>{
    return (
        <div className={`${size} rounded-md ${width} ${bg} flex gap-2 ${color} font-semibold cursor-pointer ${textSize}`}>
            <span>{title}</span>
            <ArrowRight className={`rotate-[-30deg] w-4 h-4 md:translate-y-0 ${dis?"":"translate-y-3"}`}/>
        </div>
    )
}

export default Btn