'use client'

import { useSigner } from "@/context/signerProvider"
import { ethers } from "ethers"
import { Wallet } from "lucide-react"
import { useState } from "react"



export default function Connect(){
    const [addr, setAdr] = useState('')
    const {setSigner,setAddress} = useSigner()
    const [connected, setConnected] = useState(false)
    const [isCliked, setIsClicked] = useState(false)
    
    async function handleConnect(){
        if(!window.ethereum){
            alert("Please install MetaMask")
            return
        }
        
        try{
            const provider = new ethers.BrowserProvider(window.ethereum)
            const signer = await provider.getSigner()
            setSigner(signer)
            setConnected(true)
        }catch(err){
            alert("Please connect to the correct network")
            return
        }

        const address = await signer.getAddress();
        setAddress(address)
        setIsClicked(false)
        alert(`Connected: ${address}`);
    }

    function handleEnterAdress(){
        if (addr.length === 42 && addr.startsWith("0x")) {
            setAddress(addr)
            setConnected(true)
            setIsClicked(false)
            setAdr('')
        }else{
            alert("Please enter a valid address")
        }
    }
    return(
        <div>
            {
                isCliked && (
                            <div className=" absolute flex flex-col justify-center items-center right-1/2 top-10 transform translate-x-1/2 bg-white shadow-lg rounded-lg p-4">
                                <button onClick={handleConnect} className=" bg-red-700 rounded-md text-white px-6 py-1 hover:bg-red-400">{connected? `Connect another wallet`:`Connect wallet`}</button>
                                <h3>Or</h3>
                                <div className="flex space-x-2">
                                    <input type="text"
                                    placeholder="Enter your wallet address"
                                    className="border-2 border-gray-300 rounded-md p-1"
                                    onChange={(e) => setAdr(e.target.value)}
                                    value={addr}
                                    />
                                    <button onClick={handleEnterAdress} className=" px-3 py-1 bg-black text-white rounded-md opacity-80">Submit</button>
                                </div>

                            </div>
                )
            }
            <button onClick={()=>setIsClicked(!isCliked)} className={`${connected? 'bg-green-700': 'bg-red-700'} flex rounded-md text-white px-2 space-x-1 py-1 hover:bg-gray-700`}><Wallet /><p>{connected? `Connected`:`Connect`}</p></button>
        </div>
    )
}