'use client'
import Connect from "@/utils/connectButton";
import Link from "next/link";
import { FaGasPump } from "react-icons/fa";
import { useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { usePathname } from "next/navigation";
import { MdSpaceDashboard } from "react-icons/md";
import { MdSwapHoriz } from "react-icons/md";
import { FaDroplet } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import Image from "next/image";

export default function Nav() {
    const pathname = usePathname()
    const navItem = [
        { label: "Portfolio", path: "/wallet", icon: <MdSpaceDashboard /> },
        { label: "Swap", path: "/swap", icon: <MdSwapHoriz /> },
        { label: "Airdrop", path: "/airdrop", icon: <FaDroplet /> },
        { label: "About Us", path: "/about", icon: <IoPerson /> },
    ]

    const navItemMobile = [
        { label: "Home", path: "/", icon: <AiFillHome size={30} /> },
        { label: "Portfolio", path: "/wallet", icon: <MdSpaceDashboard size={30} /> },
        { label: "Swap", path: "/swap", icon: <MdSwapHoriz size={30} /> },
        { label: "Airdrop", path: "/airdrop", icon: <FaDroplet size={30} /> },
    ]
    return (
        <>
                <div className="fixed top-0 w-full px-4 py-2 shadow-sm flex justify-between items-center z-10 bg-white md:px-8">
            <ul className="flex flex-wrap justify-between items-center w-full md:w-auto">
                <li><Link href="/"><Image className="px-3 py-1" src={'/logo.png'} alt="logo" width={126} height={96} /></Link></li>
            </ul>
            <ul className="hidden md:flex md:space-x-4 items-center">
                {
                    navItem.map((item, index) => (
                        <li key={index} className={`px-3 py-1 ${pathname === item.path ? 'text-blue-700 font-bold' : ''}`}>
                            <div className=" flex space-x-2 justify-center items-center">
                                {item.icon}
                                <Link href={item.path}>{item.label}</Link>

                            </div>
                        </li>
                    ))
                }


            </ul>
            <ul className="flex md:space-x-4 items-center">
                <li className="px-3 py-1"><Link href="/gas"><FaGasPump /></Link></li>
                <Connect />
            </ul>


        </div>
                    {/* for mobile screen */}
            <div className="fixed z-10 bottom-3 outline-2 outline-gray-300 px-4 rounded-full right-1/2 transform translate-x-1/2 w-fit bg-white shadow-sm md:hidden">
                <ul className="flex justify-center space-x-6 py-2">
                    {
                        navItemMobile.map((item, index) => (
                            <li key={index} className={` ${pathname === item.path ? 'text-blue-700 font-bold' : ''}`}>
                                    
                                    <Link className=" text-sm flex flex-col justify-center items-center" href={item.path}> {item.icon} {item.label} </Link>
                                
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        </>
    );
}


