'use client'
import { ethers, JsonRpcProvider } from "ethers"
import { useState } from "react"
import { Loader2 } from "lucide-react"
import { useSigner } from "@/context/signerProvider"
const CONTRACT_ADDRESS = '0x347F5d0D32ABD4e9C10AAA808ca9057e282DDAfd'

const ABI = [
        "function claim(address receiver) external",
    ]
export default function Gas(){
    const [bal, setBalance] = useState(0)
    const [claimed, setClaimed] = useState(false)
    const [claiming, setClaiming] = useState(false)

    const {address} = useSigner()
    const provider = new JsonRpcProvider(process.env.NEXT_PUBLIC_MONAD_TESTNET)
    const wallet = new ethers.Wallet(process.env.NEXT_PUBLIC_PRIVATE_KEY, provider)

    provider.getBalance(wallet.address).then((balance) => {
        setBalance(ethers.formatEther(balance))
    })

    async function handleClick(){
        setClaiming(true)
        setClaimed(false)
        if (!address || address === '' || !address.startsWith("0x") || address.length !== 42) {
            alert("Please connect your wallet with the correct address")
            setClaiming(false)
            return
        }
        try{
            const tx = await wallet.sendTransaction({
                to: address,
                value: ethers.parseEther("0.01"),
            })
            await tx.wait()
        }catch (error){
            console.error("Error sending transaction:", error)
            alert("Transaction failed")
            return
        }finally{
            setClaimed(true)
            setClaiming(false)
        }
    }

    return(
        <div className=" flex flex-col justify-center items-center ">
            <div className=" sm:text-3xl text-xl font-bold">Claim 0.01 Monad</div>
            <div className=" px-1 py-2 rounded-md flex justify-center space-x-1">
                <div className="flex justify-center flex-col items-center bg-white p-1 rounded-md">
                    {address && (
                        <div className=" text-sm font-medium">Your Address: {address}</div>
                    )}
                    <div className=" text-sm font-medium">Claim 0.01 MON</div>
                    <button onClick={handleClick} className=" bg-blue-600 rounded-md text-white px-6 py-1 hover:bg-blue-400">Claim</button>
                </div>
                
            </div>
            
            {claiming && (
                <div className="flex items-center gap-2 text-blue-600 font-medium animate-pulse">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Claiming your tokens...
                </div>
            )}
            {claimed && (
                <div className="flex items-center gap-2 text-green-600 font-medium">
                    Tokens claimed successfully!
                </div>
            )}
            <div> Remaining Balance: {bal} MON</div>
        </div>
    )
}