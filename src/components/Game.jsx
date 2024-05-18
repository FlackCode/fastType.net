import { useEffect, useRef, useState } from "react";

const Game = () => {
    const [words, setWords] = useState('')
    const [input, setInput] = useState('')
    const inputRef = useRef(null)
    const wordString = "the be to of and a in that have it for not on with he as you do at this but his by from they we say her she or an will my one all would there their what so up out if about who get which go me when make can like time no just him know take people into year your good some could them see other than then now look only come its over think also back after use two how our work first well way even new want because any these give day most us abstruse acquiesce antediluvian apotheosis assiduous celerity circumlocution cogent deleterious elucidate exacerbate expeditious facetious garrulous idiosyncratic incontrovertible jocular juxtaposition lethargic magnanimous nefarious obfuscate plethora quixotic recalcitrant serendipity taciturn ubiquitous veracity wistful xenophobia yoke zenith";
    const wordsArray = wordString.split(' ')

    const randomWords = () => {
        let finalString = ''
        for ( let i = 0; i < 200; i++) {
            const randomIndex = Math.floor(Math.random() * wordsArray.length)
            finalString += wordsArray[randomIndex] + ' '
        }
        setWords(finalString.trim())
    }

    useEffect(() => {randomWords()}, [])
    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    return(
        <div className="flex flex-grow bg-zinc-900 p-6 h-full justify-center">
            <div className="xsm:w-full md:w-4/5 border-2 border-white p-4 flex flex-col gap-8">
                <h1 className="text-white text-3xl">Timer: 30</h1>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={handleChange}
                    className="absolute opacity-0 top-0 left-0"
                />
                <div className="relative h-28 overflow-hidden">
                    <p className="text-xl leading-10 absolute top-0 left-0 z-10 text-white">{input}</p>
                    <p className="text-xl text-gray-400 leading-10 absolute top-0 left-0 z-0">{words}</p>
                </div>
            </div>
        </div>
    )
}

export default Game