'use client'
import Link from "next/link";
import Image from "next/image";


export default function HeroBridge() {
    return (
        <div className="relative bg-white py-6 px-4 rounded-lg shadow-sm flex flex-col items-center justify-center space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-black">Bridge Finder</h1>
            <h2 className="text-lg md:text-xl font-semibold opacity-85 text-center">Your Complete Web3 Portfolio, In One Place</h2>
            <p className="opacity-85 sm:w-3/4 lg:w-1/2 text-center text-sm md:text-base">
                Discover the most efficient bridge and swap protocols tailored to your assets. Our intelligent routing engine helps you find the best rates and lowest fees to move tokens across Ethereum, Layer 2s, and EVM-compatible networks — securely and effortlessly.
            </p>
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
                <Image
                    className="rounded-lg"
                    src="/hero_bridge.png"
                    layout="responsive"
                    width={300}
                    height={300}
                    alt="Bridge Finder"
                />
            </div>
            <div className="flex justify-center">
                <Link
                    className="px-4 w-36 text-center py-2 hover:opacity-75 transition-all ease-in bg-black text-white opacity-90 rounded-lg"
                    href={"/swap"}
                >
                    Find Now
                </Link>
            </div>
        </div>
    );
}