import Nav from "@/components/wallet/nav";

export default function Layout({children}){
    return(
        <div className="flex" >
            <Nav />
            {children}
        </div>
    )
}