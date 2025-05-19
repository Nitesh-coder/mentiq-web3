


export default function Transactions() {
    return (
        <div className="flex flex-col space-y-5">
            <h1 className="text-2xl font-bold">Transactions</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold">Transaction Overview</h2>
                    <p>Overview of your transactions.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold">Recent Transactions</h2>
                    <p>List of recent transactions.</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold">Transaction History</h2>
                    <p>History of all transactions.</p>
                </div>
            </div>
        </div>
    );
}