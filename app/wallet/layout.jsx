import Nav from "@/components/wallet/nav";

export default function Layout({children}){
    return(
        <div className="flex space-x-2" >
            <Nav />
            {children}
        </div>
    )
}