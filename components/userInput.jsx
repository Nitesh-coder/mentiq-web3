'use client'
import { useContext, useState } from "react"
import Select from "react-select"
import chain from "@/utils/chain.json"
import coin from "@/utils/coin.json"
import { FaExchangeAlt } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { ChainProvider } from "@/context/chainProvider"




export default function UserInput(){
    const [mode, setMode] = useState('SWAP')
    const {setChain} = useContext(ChainProvider)
    return(
        <div className="bg-white shadow-md rounded-md border-cyan-200 border-2 flex flex-col sm:flex-row px-2 w-full max-w-full sm:max-w-lg md:max-w-xl lg:max-w-2xl mx-auto">
            <div className="flex justify-center items-center py-2 sm:py-0">
                <select name="" id="" className="text-lg sm:text-xl md:text-2xl font-bold text-pink-700" onChange={(e)=>setMode(e.target.value)} >
                    <option value="SWAP">Swap</option>
                    <option value="BRIDGE">Bridge</option>
                </select>
            </div>
            <div className="w-full">
                <div className="flex justify-center">
                    <div className='my-2 sm:my-3 text-sm sm:text-md md:text-xl flex flex-wrap justify-center items-center space-x-1 sm:space-x-2 py-1 sm:py-2 px-2 sm:px-4 w-full sm:w-fit rounded-md bg-white'> 
                        <div><p>Select Network</p></div>
                    {mode === "SWAP"?(
                        <>
                            <Select options={chain} onChange={(selectedOption)=>setChain(selectedOption.value)} defaultValue={chain.find( c => c.value === 'ETHEREUM')} name="ETH" id="" className="w-full sm:w-auto text-sm sm:text-md md:text-xl font-bold text-yellow-700" />
                        </>
                    ):(
                        <>
                            <Select options={chain} defaultValue={chain.find( c=>c.value === 'ETHEREUM')} name="ETH" id="" className="w-full sm:w-auto text-sm sm:text-md md:text-xl font-bold text-yellow-700 mb-2 sm:mb-0" />
                            <div className="w-full sm:w-auto flex justify-center sm:block mb-2 sm:mb-0">
                                <FaExchangeAlt />
                            </div>
                            <Select options={chain} defaultValue={chain.find( c =>c.value === 'SOLONA')} name="ETH" id="" className="w-full sm:w-auto text-sm sm:text-md md:text-xl font-bold text-yellow-700" />
                        </>
                    )}
                   
                    </div>
                </div>
                <div className=" flex justify-center">
                    <div className='my-2 sm:my-3 text-sm sm:text-md md:text-xl flex flex-wrap justify-center items-center space-x-1 sm:space-x-2 py-1 sm:py-2 px-2 sm:px-4 w-full sm:w-fit rounded-md bg-white'> 
                    <div><p>Select Coin:</p></div>
                    <Select options={coin} defaultValue= {coin.find(c => c.value === "ETH")} name="ETH" id="" className="w-full sm:w-auto text-sm sm:text-md md:text-xl font-bold text-yellow-700 mb-2 sm:mb-0" />
                    <div className="w-full sm:w-auto flex justify-center sm:block mb-2 sm:mb-0">
                        <FaLongArrowAltRight />
                    </div>
                    <Select options={coin} defaultValue={coin.find( c => c.value === 'USDT')} name="ETH" id="" className="w-full sm:w-auto text-sm sm:text-md md:text-xl font-bold text-yellow-700" />
                    </div>
                </div>
            </div>
        </div>
    )
}


