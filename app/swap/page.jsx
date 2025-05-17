'use client'
import UserInput from '@/components/userInput'
import bridges from '@/utils/bridge.json'
import Card from '@/components/card'
import { useContext, useState } from 'react'
import { ChainProvider } from '@/context/chainProvider'

export default function Compare(){
    
    const {chain} = useContext(ChainProvider)
    const filteredBridges = bridges.filter(item => item.supportedChains.includes(chain))
    console.log(filteredBridges)
    return(
        <div className='mt-4 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto'>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text text-center sm:text-left my-4 tracking-tight">Find Your Best Bridge</h1>

            <div className='flex justify-center'><UserInput /></div>
            <h1 className='text-lg sm:text-xl my-3 font-semibold bg-gradient-to-r from-indigo-500 to-teal-400 text-transparent bg-clip-text'>Protocols:</h1>
            <div className='flex flex-col space-y-3 sm:space-y-4'>
            {filteredBridges.map((item,id)=>(
                <Card 
                key={id}
                name={item.name} gas={item.gas} speed={item.speed} liquidity={item.liquidity} chains={item.supportedChains} url={item.url} />
            ))}
            </div>
        </div>
    )
}