import ArrowLeft from "@/app/components/icons/ArrowLeft";
import ArrowRight from "@/app/components/icons/ArrowRight";

const CheckInForm = ({openForm,setOpenForm}:{openForm:boolean,setOpenForm:any}) => {


    return (
        <form className=" w-[95%] lg:w-[80%]  p-6 lg:flex lg:justify-between lg:items-center grid grid-cols-2 grid-rows-2 gap-4 relative">
            <div onClick={()=>(setOpenForm(!openForm))} className={'absolute lg:hidden left-0 top-0 w-4 h-full border-r-2 border-white flex justify-center items-center cursor-pointer'}>
                <ArrowLeft className={`${openForm?"-rotate-90":"rotate-90"}`}/>
            </div>
            <div className="flex flex-col">
                <label className="text-sm text-white mb-1">Check In</label>
                    <input
                        type="date"
                        className="w-40 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
            </div>

            <div className="flex flex-col">
                <label className="text-sm text-white mb-1">Check Out</label>
                    <input
                        type="date"
                        className="w-40 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
            </div>

            <div className="flex flex-col">
                <label className="text-sm text-white mb-1">Room</label>
                <select
                    className=" w-25 lg:w-28 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400">
                    <option>Room 1</option>
                    <option>Room 2</option>
                    <option>Room 3</option>
                </select>
            </div>

            <div className="flex flex-col">
                <label className="text-sm text-white mb-1">Adults</label>
                <select
                    className="w-25 lg:w-28 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                </select>
            </div>

            <div className="flex flex-col">
                <label className="text-sm text-white mb-1">Children</label>
                <select
                    className=" w-25 lg:w-28 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3+</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-sm text-white mb-1 opacity-0">.</label>
                <div className={`flex justify-center py-3 md:px-4 md:py-3 lg:px-5 lg:py-4 rounded-md  bg-gold  gap-2  font-semibold cursor-pointer text-[8px] md:text-[12px] lg:text-[16px]`}>
                    <span>Check Now</span>
                    <ArrowRight className={'rotate-[-30deg] w-4 h-4 translate-y-0'}/>
                </div>
            </div>

        </form>
    )
}

export default CheckInForm