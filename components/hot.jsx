import Image from "next/image";
import Link from "next/link";


export default function Hot() {
    return (
        <div className="relative bg-white py-6 px-4 rounded-lg shadow-sm flex flex-col items-center justify-center space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-black">HOT</h1>
            <h2 className="text-lg md:text-xl font-semibold opacity-85 text-center">Claim Free Monad Testnet Gas — Instantly!</h2>
            <p className="opacity-85 sm:w-3/4 lg:w-1/2 text-center text-sm md:text-base">
                Ready to explore the Monad testnet? Users can now claim free testnet gas with ease. Simply put your wallet.
            </p>
            <Image
                className="absolute top-4 left-4 w-12 h-12 md:w-16 md:h-16"
                src="https://cdn.prod.website-files.com/667c57e6f9254a4b6d914440/67b135627be8437b3cda15ae_Monad%20Logomark.svg"
                width={44}
                height={44}
                alt="Monad Logo"
            />
            <div className="flex justify-center">
                <Link
                    className="px-6 w-32 text-center py-2 hover:opacity-75 transition-all ease-in bg-black text-white opacity-90 rounded-lg"
                    href={"/gas"}
                >
                    Claim
                </Link>
            </div>
        </div>
    );
}