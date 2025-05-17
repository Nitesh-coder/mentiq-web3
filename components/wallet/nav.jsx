'use client'
import { FaCoins } from "react-icons/fa6";
import { FaEthereum } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getAssets } from "@/utils/getWalletDetails";
import { useSigner } from "@/context/signerProvider";

export default function Nav(){
    const [balance, setBalance] = useState(0);
    const {address} = useSigner()

    useEffect(() => {
        if (!address || address === '' || !address.startsWith("0x") || address.length !== 42) return
        async function getBalance() {
            try {
                const assets = await getAssets(process.env.NEXT_PUBLIC_ETH_MAINNET, address);
                setBalance(Number(assets.eth).toFixed(5));
            } catch (error) {
                console.error("Error fetching balance:", error);
            }
        }
        getBalance();
    }, [address]);

    return (
        <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-gray-800 text-white rounded-lg shadow-md space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
                <h2 className="text-2xl font-bold">Dashboard</h2>
                <p className="text-sm text-gray-300">Track your crypto portfolio and activity across chains</p>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex items-center justify-center space-x-2 w-full md:w-auto bg-gray-700 py-3 px-4 rounded-lg">
                    <FaCoins className="text-xl text-yellow-400" />
                    <h1 className="text-lg font-semibold">{balance}</h1>
                </div>
                <div className="flex items-center justify-center space-x-2 w-full md:w-auto bg-gray-700 py-3 px-4 rounded-lg">
                    <FaEthereum className="text-xl text-blue-400" />
                    <h1 className="text-lg font-semibold">Ethereum</h1>
                </div>
                <div className=" hidden md:flex items-center justify-center space-x-2 w-full md:w-auto bg-gray-700 py-3 px-4 rounded-lg overflow-hidden">
                    <FaEthereum className="text-xl text-blue-400" />
                    <h1 className="text-lg font-semibold truncate">{address}</h1>
                </div>
            </div>
        </div>
    );
}