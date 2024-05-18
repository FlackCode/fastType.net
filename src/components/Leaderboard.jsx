const Leaderboard = () => {
    const tempData = [
        {
            name: "Flack1",
            words: 80,
            mistakes: 2
        },
        {
            name: "Flack2",
            words: 90,
            mistakes: 1
        },
        {
            name: "Flack3",
            words: 75,
            mistakes: 3
        },
    ]
    const sortedData = tempData.sort((a, b) => b.words - a.words)

    return (
        <div className="flex flex-grow bg-zinc-900 px-12 py-4 h-full justify-center">
            <div className="w-full p-2">
                <h1 className="text-3xl text-white font-bold">Leaderboards:</h1>
                <div className="py-2 grid grid-cols-4 text-white text-center text-2xl border-b-2">
                    <h1>Position</h1>
                    <h1>Name</h1>
                    <h1>Words Per Minute</h1>
                    <h1>Mistakes</h1>
                </div>
                {sortedData.map((item, index) => (
                    <div key={index} className="text-white py-4 grid grid-cols-4 border-b-2 border-gray-600">
                        <h1 className="text-xl text-center">#{index+1}</h1>
                        <h1 className="text-xl text-center">{item.name}</h1>
                        <p className="text-lg font-semibold text-center">{item.words} WPM</p>
                        <p className="text-lg font-semibold text-center">{item.mistakes} mistakes</p>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Leaderboard