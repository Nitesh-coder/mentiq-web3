
export default function Nft() {
    return (
        <div className="flex flex-col space-y-5">
            <h1 className="text-2xl font-bold">NFTs</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold">NFT Overview</h2>
                    <p>Overview of your NFTs.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold">NFT Collection</h2>
                    <p>Your NFT collection details.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold">NFT Transactions</h2>
                    <p>History of NFT transactions.</p>
                </div>
            </div>
        </div>
    );
}