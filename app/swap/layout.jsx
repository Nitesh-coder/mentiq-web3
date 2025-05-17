import { ChainWrapper } from "@/context/chainProvider";



export default function Layout({children}){
    return(
        <div>
            <ChainWrapper>{children}</ChainWrapper>
        </div>
    )
}