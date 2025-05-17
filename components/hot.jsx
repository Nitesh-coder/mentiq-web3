import Image from "next/image";
import Link from "next/link";


export default function Hot(){
    return(
        <div className=" relative bg-white py-3 px-3 rounded-lg shadow-sm flex flex-col items-center justify-center space-y-2">
            <h1 className=" text-4xl font-bold text-center text-black">
                HOT
            </h1>

            <p className=" text-xl font-semibold opacity-85">Claim Free Monad Testnet Gas — Instantly!</p>
            <p className=" opacity-80 sm:w-1/2">Ready to explore the Monad testnet? Eligible users can now claim free testnet gas with ease. To qualify, simply put your wallet and verify that you hold at least 0.01 ETH on Ethereum Mainnet. </p>
            <Image className=" absolute top-1 left-1" src={"https://cdn.prod.website-files.com/667c57e6f9254a4b6d914440/67b135627be8437b3cda15ae_Monad%20Logomark.svg"} width={44} height={44} alt="Monad Logo" />
            <div className=" flex justify-center">
                <Link className=" px-6 w-32 text-center py-2 hover:opacity-75 transition-all ease-in bg-black text-white opacity-90 rounded-lg" href={"/gas"}>Claim</Link>
            </div>
        </div>
    )
}