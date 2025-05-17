import Link from "next/link";

export default function Card({name,gas,speed,liquidity, chains, url }){
    return(
        <div className="flex flex-col sm:flex-row justify-between items-center bg-white shadow-sm py-4 sm:py-6 px-2 sm:px-4 rounded-md space-y-3 sm:space-y-0">
            <ul className="flex items-center w-full sm:w-60 justify-center sm:justify-start">
                <li className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-amber-300 mr-2"></li>
                <li className="text-sm sm:text-base md:text-lg font-medium">{name}</li>
            </ul>
            <ul className="flex flex-wrap justify-center w-full sm:w-auto space-x-3 sm:space-x-4 md:space-x-8"> 
                <li className="text-center">
                    <h2 className="opacity-60 text-xs sm:text-sm md:text-base">Supported Chains</h2>
                    <h3 className="text-sm sm:text-base md:text-lg w-36 overflow-x-scroll">{chains+''}</h3>
                </li>
            </ul>


            <ul className="flex flex-wrap justify-center w-full sm:w-auto space-x-3 sm:space-x-4 md:space-x-8">
                <li className="text-center">
                    <h2 className="opacity-60 text-xs sm:text-sm md:text-base">Gas</h2>
                    <h3 className="text-sm sm:text-base md:text-lg">${gas}</h3>
                </li>
                <li className="text-center">
                    <h2 className="opacity-60 text-xs sm:text-sm md:text-base">Speed</h2>
                    <h3 className="text-sm sm:text-base md:text-lg">{speed} Sec</h3>
                </li>
                <li className="text-center">
                    <h2 className="opacity-60 text-xs sm:text-sm md:text-base">Liquidity</h2>
                    <h3 className="text-sm sm:text-base md:text-lg">${liquidity}M</h3>
                </li>
            </ul>
            <ul className="flex space-x-2 w-full sm:w-auto justify-center sm:justify-end">
                <li className="px-2 sm:px-3 py-1 text-xs sm:text-sm cursor-pointer"><Link href={url}>Visit</Link></li>
                <li className="px-2 sm:px-3 py-1 bg-blue-700 rounded-lg text-amber-50 text-xs sm:text-sm cursor-pointer">Details</li>
            </ul>
        </div>
    )
}