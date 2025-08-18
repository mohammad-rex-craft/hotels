import ArrowRight from "@/app/components/icons/ArrowRight";


const Btn = ({size='px-5 py-4',width='w-fit',bg='bg-white' , color='text-black',title='Book Your Stay'})=>{
    return (
        <div className={`${size} rounded-md ${width} ${bg} flex gap-2 ${color} font-semibold cursor-pointer`}>
            <span>{title}</span>
            <ArrowRight className={'rotate-[-30deg] w-4 h-4 '}/>
        </div>
    )
}

export default Btn