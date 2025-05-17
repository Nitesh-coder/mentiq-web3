

import axios from 'axios'


export async function getTransactions(rpcUrl, address) {
    try{
        const res = await axios.post(rpcUrl,{
            jsonrpc: "2.0",
            id: 1,
            method: "alchemy_getAssetTransfers",
            params: [
                {
                    fromBlock: "0x0",
                    toBlock: "latest",
                    fromAddress: address,
                    category: ["external", "erc20", "erc721", "erc1155"],
                    maxCount: "0x10"
                },
            ],
        })
        return res.data.result.transfers || []
    }catch(err){
        console.error("Error fetching transactions:", err)
        return []
    }
}

export async function getAssets(rpcUrl,address) {
    
    try{
        const ethRes = await axios.post(rpcUrl,{
            jsonrpc: "2.0",
            id: 1,
            method: "eth_getBalance",
            params: [
                address,
                "latest"
            ],
            
        })
        const ethBalance = parseInt(ethRes.data.result, 16) / 1e18

        const tokenRes = await axios.post(rpcUrl,{
            jsonrpc: "2.0",
            id: 1,
            method: "alchemy_getTokenBalances",
            params: [address],
        })
        const tokens = tokenRes.data.result.tokenBalances

        const detailsToken = await Promise.all(
            tokens.map(async (token) => {
                if (token.tokenBalance === '0x0') return null
                const metaRes = await axios.post(rpcUrl,{
                    jsonrpc: "2.0",
                    id: 1,
                    method: "alchemy_getTokenMetadata",
                    params: [token.contractAddress],
                })
                const metadata = metaRes.data.result
                return {
                    contractAddress: token.contractAddress,
                    tokenBalance: parseInt(token.tokenBalance, 16) / 1e18,
                    name: metadata.name || 'Unknown',
                    symbol: metadata.symbol || 'Unknown',
                }
            })
            
        )
        return {
            eth: ethBalance,
            token: detailsToken.filter(Boolean),
            
        }
    }catch(err){
        console.error("Error fetching transactions:", err)
        return {
            eth: 0,
            token: []
        }
    }
}

export async function getNfts(address) {
    const url = `https://monad-testnet.g.alchemy.com/nft/v3/w-wQs45gIoLvNUxNZZi2370mxAFLPP9C/getNFTsForOwner?owner=${address}&withMetadata=true`
    const res = await axios.get(url);
    return res.data.ownedNfts
}
