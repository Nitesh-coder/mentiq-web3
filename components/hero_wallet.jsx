'use client'
import Image from "next/image";
import Link from "next/link";

// Track your crypto assets and transactions with our wallet tracker.
export default function HeroWallet() {
    return (
        <div className="h-auto relative bg-white py-6 px-4 rounded-lg shadow-sm flex flex-col items-center justify-center space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-black">Wallet Dashboard</h1>
            <h2 className="text-lg md:text-xl font-semibold opacity-85 text-center">Your Complete Web3 Portfolio, In One Place</h2>
            <p className="opacity-85 sm:w-3/4 lg:w-1/2 text-center text-sm md:text-base">
                Track and manage all your digital assets seamlessly — from tokens and NFTs to detailed onchain activity. Gain insights through real-time analytics, wallet reports, and personalized transaction history across multiple chains. Designed to help you understand, optimize, and take control of your Web3 journey.
            </p>
            <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
                <Image
                    className="rounded-lg"
                    src="/hero_wallet.png"
                    layout="responsive"
                    width={300}
                    height={300}
                    alt="Wallet Dashboard"
                />
            </div>
            <div className="flex justify-center">
                <Link
                    className="px-4 w-36 text-center py-2 hover:opacity-75 transition-all ease-in bg-black text-white opacity-90 rounded-lg"
                    href={"/wallet"}
                >
                    Go to dashboard
                </Link>
            </div>
        </div>
    );
}