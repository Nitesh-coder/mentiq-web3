'use client'
import { AlignJustify, ArrowLeftRight, BriefcaseBusiness, ChartArea, Gem } from "lucide-react";
import { useState } from "react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(true);
    return(
        <div className="p-1 flex flex-col space-y-3 transform transition-all duration-300 ease-in-out">
            <div className="flex space-x-12 items-center">
                <p className={`${isOpen?'block':'hidden'} text-2xl font-bold opacity-85`}>Dashboard</p>
                <AlignJustify className=" cursor-pointer" onClick={()=>setIsOpen(!isOpen)} />
            </div>
            <ul className=" flex flex-col space-y-5">
                <li className=" flex space-x-1"><BriefcaseBusiness /><p className={`${isOpen?'block':'hidden'}`}>Portfolio</p></li>
                <li className=" flex space-x-1"><Gem /><p className={`${isOpen?'block':'hidden'}`}>NFTs</p></li>
                <li className=" flex space-x-1"><ArrowLeftRight /><p className={`${isOpen?'block':'hidden'}`}>Transactions</p></li>
                <li className=" flex space-x-1"><ChartArea /> <p className={`${isOpen?'block':'hidden'}`}>Analysis</p></li>
            </ul>
        </div>
    )
}