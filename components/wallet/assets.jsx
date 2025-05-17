'use client'
import { useSigner } from "@/context/signerProvider"
import getPrice from "@/utils/getPrice"
import { getAssets } from "@/utils/getWalletDetails"
import { useEffect, useState } from "react"

function TokenHeading(){
    return(
        <div className="grid grid-cols-5 border-b-2 border-gray-500 opacity-75 gap-4 px-4 py-2 text-center text-sm md:text-base">
            <div>
                <h2>Asset</h2>
            </div>
            <div>
                <h2>Balance</h2>
            </div>
            <div>
                <h2>Price</h2>
            </div>
            <div>
                <h2>Value</h2>
            </div>
            <div>
                <h2>Chain</h2>
            </div>
        </div>
    )
}

function Token({assest, balance, price, value, chain}){
    return(
        <div className="grid grid-cols-5  border-b-2 border-gray-200 font-semibold opacity-95 gap-4 px-4 py-2 text-center text-sm md:text-base">
            <div>
                <h2>{assest}</h2>
            </div>
            <div>
                <h2>{balance}</h2>
            </div>
            <div>
                <h2>{price}</h2>
            </div>
            <div>
                <h2>{value}</h2>
            </div>
            <div>
                <h2>{chain}</h2>
            </div>
        </div>
    )
}

export default function Assets(){
    const [assets, setAssets] = useState({
        eth: {eth: 0, token: []},
        base: {eth: 0, token: []},
        arb: {eth: 0, token: []},
        op: {eth: 0, token: []}
    })
    const [allAssets, setAllAssets] = useState({
        eth: 0,
        token: []
    })
    const {address} = useSigner()
    useEffect(()=>{
        if (!address || address === '' || !address.startsWith("0x") || address.length !== 42) return
        async function get(){
            try{
                const [eth, base, arb, op] = await Promise.all([
                    getAssets(process.env.NEXT_PUBLIC_ETH_MAINNET,address),
                    getAssets(process.env.NEXT_PUBLIC_BASE_MAINNET,address),
                    getAssets(process.env.NEXT_PUBLIC_ARB_MAINNET,address),
                    getAssets(process.env.NEXT_PUBLIC_OP_MAINNET,address)
                ])
                setAssets({eth, base, arb, op})
                setAllAssets(
                    {eth: eth.eth+base.eth+arb.eth+op.eth,
                    token: [...eth.token.map((token)=>{return {...token, chain: 'Ethereum'}}),
                        ...base.token.map((token)=>{return {...token, chain: 'Base'}}), 
                        ...arb.token.map((token)=>{return {...token, chain: 'Arbitrum'}}),
                        ...op.token.map((token)=>{return {...token, chain: 'Optimism'}})]}
                )
            }catch(err){
                console.log(err)
            }
        }
        get()
    }, [address])
    if (!assets || !assets.eth) {
        return <div>Loading assets...</div>;
    }
    async function get(){
        const price = await getPrice('bitcoin')
        console.log(price);
    }

    console.log(assets);
    return(
        <div className="flex flex-col space-y-6 p-4 bg-gray-50 rounded-lg shadow-md md:p-8">
            <h1 className="text-2xl font-bold text-gray-800">Assets</h1>
            <div className="overflow-x-auto">
                <div className=" bg-white rounded-lg shadow-md">
                    <TokenHeading />
                    <Token assest={"ETH"} balance={Number(allAssets.eth).toFixed(3)} price={0} value={0} chain={'Ethereum'} />
                    {allAssets.token.map((token, index) => (
                        <div key={index} className="border-t border-gray-200">
                            <Token assest={token.symbol} balance={Number(token.tokenBalance).toFixed(3)} price={0} value={0} chain={token.chain} />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}