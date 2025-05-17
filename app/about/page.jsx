'use client'

export default function About() {
    const ADDRESS = "0x2Be343731866CA7E04CF011dB68AdbE4882026cD"
    function handleCopy() {
        navigator.clipboard.writeText(ADDRESS)
        alert("Address copied to clipboard")
    }
    return(
        <div className="flex flex-col items-center justify-center space-y-2">
            <h1 className=" text-4xl font-bold">Donate for server fee:</h1>
            <div className=" flex space-x-3">
                <h1>Address:</h1>
                <p className=" font-bold opacity-80">{ADDRESS}</p>
                <button className=" bg-white px-2 shadow-sm cursor-pointer" onClick={handleCopy}>Copy</button>
            </div>
        </div>
    )
}