import HeroAirdrop from "@/components/hero_airdrop";
import HeroBridge from "@/components/hero_bridge";
import HeroWallet from "@/components/hero_wallet";
import Hot from "@/components/hot";

export default function Home(){
  return(
    <div className=" flex flex-col space-y-2">
      <Hot />
      <HeroWallet />
      <HeroBridge />
      <HeroAirdrop />
    </div>
  )
}