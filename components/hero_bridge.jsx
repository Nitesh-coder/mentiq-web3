'use client'
import Link from "next/link";
import Image from "next/image";


export default function HeroBridge() {
    return(
        <div className=" relative bg-white py-6 px-3 rounded-lg shadow-sm flex flex-col items-center justify-center space-y-2">
            <h1 className="text-4xl font-bold text-center text-black">Bridge Finder</h1>
            <h1 className="text-xl font-semibold opacity-85">Your Complete Web3 Portfolio, In One Place</h1>
            <p className=" opacity-85 sm:w-1/2">Discover the most efficient bridge and swap protocols tailored to your assets. Our intelligent routing engine helps you find the best rates and lowest fees to move tokens across Ethereum, Layer 2s, and EVM-compatible networks — securely and effortlessly.</p>
                        <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
                            <Image
                                className="rounded-lg"
                                src="/hero_bridge.png"
                                layout="responsive"
                                width={200}
                                height={200}
                                alt="Wallet Dashboard"
                            />
                        </div>
            <div className=" flex justify-center">
                <Link className=" px-4 w-36 text-center py-2 hover:opacity-75 transition-all ease-in bg-black text-white opacity-90 rounded-lg" href={"/swap"}>Find Now</Link>
            </div>
        </div>
    )
}