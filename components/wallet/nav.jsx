'use client'
import { AlignJustify, ArrowLeftRight, BriefcaseBusiness, ChartArea, Gem } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(true);
    const pathname = usePathname()
    return(
        <div className="p-1 border-r-2 border-gray-400 h-screen flex flex-col space-y-3 transform transition-all duration-300 ease-in-out">
            <div className="flex space-x-12 items-center">
                <p className={`${isOpen?'block':'hidden'} text-2xl font-bold opacity-85`}>Dashboard</p>
                <AlignJustify className=" cursor-pointer" onClick={()=>setIsOpen(!isOpen)} />
            </div>
            <ul className=" flex flex-col space-y-1">
                <li><Link className={`flex space-x-5 px-2 py-2 ${pathname === `/wallet`?'bg-white shadow-md font-semibold text-blue-700 rounded-lg':'bg-none'}`} href={"/wallet"}><BriefcaseBusiness /><p className={`${isOpen?'block':'hidden'}`}>Portfolio</p></Link></li>
                <li><Link className={`flex space-x-5 px-2 py-2 ${pathname === `/wallet/nft`?'bg-white shadow-md font-semibold text-blue-700 rounded-lg':'bg-none'}`} href={"/wallet/nft"}><Gem  /><p className={`${isOpen?'block':'hidden'}`}>NFTs</p></Link></li>
                <li><Link className={`flex space-x-5 px-2 py-2 ${pathname === `/wallet/transactions`?'bg-white shadow-md font-semibold text-blue-700 rounded-lg':'bg-none'}`} href={"/wallet/transactions"}><ArrowLeftRight /><p className={`${isOpen?'block':'hidden'}`}>Transactions</p></Link></li>
                <li><Link className={`flex space-x-5 px-2 py-2 ${pathname === `/wallet/analysis`?'bg-white shadow-md font-semibold text-blue-700 rounded-lg':'bg-none'}`} href={"/wallet/analysis"}><ChartArea /> <p className={`${isOpen?'block':'hidden'}`}>Analysis</p></Link></li>
            </ul>
        </div>
    )
}