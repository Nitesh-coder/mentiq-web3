'use client'

import { createContext, useContext, useState } from "react"

const SignerContext = createContext()

export const SignerWrapper = ({children})=>{
    const [signer, setSigner] = useState(null)
    const [address, setAddress] = useState('')
    return(
        <SignerContext.Provider value={{signer, setSigner, address, setAddress}}>
            {children}
        </SignerContext.Provider>
    )
}

export const useSigner = ()=>useContext(SignerContext)