import ArrowRight from "@/app/components/icons/ArrowRight";

const CheckInForm = () => {


    return (
        <form className=" w-[80%] p-6 flex justify-between items-center gap-4">

            <div className="flex flex-col">
                <label className="text-sm text-white mb-1">Check In</label>
                <div className="relative">
                    <input
                        type="date"
                        className="w-40 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <span className="absolute right-2 top-2 text-gray-500">📅</span>
                </div>
            </div>

            <div className="flex flex-col">
                <label className="text-sm text-white mb-1">Check Out</label>
                <div className="relative">
                    <input
                        type="date"
                        className="w-40 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
                    />
                    <span className="absolute right-2 top-2 text-gray-500">📅</span>
                </div>
            </div>

            <div className="flex flex-col">
                <label className="text-sm text-white mb-1">Room</label>
                <select
                    className="w-28 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400">
                    <option>Room 1</option>
                    <option>Room 2</option>
                    <option>Room 3</option>
                </select>
            </div>

            <div className="flex flex-col">
                <label className="text-sm text-white mb-1">Adults</label>
                <select
                    className="w-24 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4+</option>
                </select>
            </div>

            <div className="flex flex-col">
                <label className="text-sm text-white mb-1">Children</label>
                <select
                    className="w-28 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400">
                    <option>0</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3+</option>
                </select>
            </div>
            <div className="flex flex-col">
                <label className="text-sm text-white mb-1 opacity-0">.</label>
                <div className={'px-4 py-3 rounded-md bg-gold text-[14px] flex gap-2 font-semibold cursor-pointer'}>
                    <span>Book Your Stay</span>
                    <ArrowRight className={'rotate-[-30deg] w-4 h-4 '}/>
                </div>
            </div>

        </form>
    )
}

export default CheckInForm