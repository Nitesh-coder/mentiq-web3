import axios from "axios";



export default async function getPrice(coin) {
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coin}&x_cg_demo_api_key=${process.env.NEXT_PUBLIC_CG_DEMO_API_KEY}`;
    const res = await axios.get(url)
    const d = await res.data;
    return d;
}