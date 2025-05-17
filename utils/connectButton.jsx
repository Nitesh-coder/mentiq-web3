'use client'

import { useSigner } from "@/context/signerProvider"
import { ethers } from "ethers"
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
        const provider = new ethers.BrowserProvider(window.ethereum)
        const signer = await provider.getSigner()
        setConnected(true)
        setSigner(signer)
        const address = await signer.getAddress();
        alert(`Connected: ${address}`);
    }
    function handleClick(){
        setIsClicked(!isCliked)
    }
    

    function handleEnterAdress(){
        if (addr.length === 42 && addr.startsWith("0x")) {
            setAddress(addr)
        }else{
            alert("Please enter a valid address")
        }   
    }
    return(
        <div>
            {
                isCliked && (
                            <div className=" absolute flex flex-col justify-center items-center right-1/2 top-10 transform translate-x-1/2 bg-white shadow-lg rounded-lg p-4">
                                <button onClick={handleConnect} className=" bg-red-700 rounded-md text-white px-6 py-1 hover:bg-red-400">Connect to wallet</button>
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
            <button onClick={handleClick} className=" bg-black rounded-md text-white px-6 py-1 hover:bg-gray-700">{connected? `Connected`:`Connect`}</button>
        </div>
    )
}