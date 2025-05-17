'use client'

import { createContext, useState } from "react";




export const ChainProvider = createContext('')

export const ChainWrapper = ({children})=>{
    const [chain, setChain] = useState('BNB')
    return(
        <ChainProvider.Provider value={{chain, setChain}}>
            {children}
        </ChainProvider.Provider>
    )
}