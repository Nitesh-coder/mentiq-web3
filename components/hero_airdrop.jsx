'use client'
import Link from "next/link";
import Image from "next/image";

// Track your crypto assests and transactions with our wallet tracker.
export default function HeroAirdrop() {
    return(
        <div className=" relative bg-white py-6 px-4 rounded-lg shadow-sm flex flex-col items-center justify-center space-y-2">
            <h1 className="text-4xl font-bold text-center text-black">Airdrop</h1>
            <h1 className="text-xl font-semibold opacity-85">Discover, Qualify, and Check Your Airdrop Rewards</h1>
            <p className=" opacity-85 sm:w-1/2">Explore ongoing and upcoming airdrops from promising Web3 projects. Check your wallet’s eligibility, track your allocation, and access in-depth insights about each project's background, roadmap, and tokenomics — all in one streamlined dashboard.</p>
                                    <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
                                        <Image
                                            className="rounded-lg"
                                            src="/hero_airdrop.png"
                                            layout="responsive"
                                            width={200}
                                            height={200}
                                            alt="Wallet Dashboard"
                                        />
                                    </div>
            <div className=" flex justify-center">
                <Link className=" px-4 w-36 text-center py-2 hover:opacity-75 transition-all ease-in bg-black text-white opacity-90 rounded-lg" href={"/airdrop"}>Airdrop</Link>
            </div>
        </div>
    )
}