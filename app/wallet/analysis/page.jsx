

export default function Analysis() {
    return (
        <div className="flex flex-col space-y-5">
            <h1 className="text-2xl font-bold">Analysis</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold">Portfolio Overview</h2>
                    <p>Overview of your portfolio performance.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold">Asset Allocation</h2>
                    <p>Distribution of assets in your portfolio.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold">Transaction History</h2>
                    <p>History of transactions made in your wallet.</p>
                </div>
            </div>
        </div>
    );
}