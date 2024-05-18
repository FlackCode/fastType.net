import { useEffect, useRef, useState } from "react";
import { db } from "../lib/firebase"
import { addDoc, collection } from "firebase/firestore";
const Game = () => {
    const [words, setWords] = useState('')
    const [input, setInput] = useState('')
    const [timer, setTimer] = useState(30)
    const [gameActive, setGameActive] = useState(false)
    const [wordCount, setWordCount] = useState(0)
    const [mistake, setMistake] = useState(0)
    const [name, setName] = useState('')
    const inputRef = useRef(null)
    const wordString = "the and for you with are this have from they that will your can what when make just more about know like time than look also back after use how our first way even new want because any these give most us all one would there their so up out if get which go me my people into year them some could see other then now only come its over work well good day two may take still use think own last long right many such where those before each same think most next help lot same around great life might world find tell much few never always those something want without another while still company game man part child leave stop once old between need many home different high small large end another great hand old head stand show face start move city put area thing hold few must most long young really story every month place lot begin year woman number set night course let however case around book offer increase really reason almost early next business country system program question during against social understand better lead best body toward provide service ago friend father sit away until possible become family keep health never idea whole group music appear mind close hand learn change minute near right result door face others certain open second reason course level remain reason figure education policy later effect hard door case community second story market important minute goal result form less recent report effort wait decide list hear several simple love develop quality plan current already create strong develop explain moment voice order minute five center inside grow spend level sure long week show fact deal cost product less expect build full recent drive report thank call reason industry maybe away early base let success along remain simple project slow short relate minute personal condition choose experience understand arm next grow along"
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

    useEffect(() => {
        if(gameActive && timer > 0) {
            const timer = setInterval(() => {
                setTimer(prevTime => prevTime - 1)
            }, 1000)
            return () => clearInterval(timer)
        } else if (timer == 0) {
            setGameActive(false)
            calcWPM()
        }
    }, [gameActive, timer])

    const handleChange = (event) => {
        if (!gameActive) {
            setGameActive(true)
        }
        setInput(event.target.value)
    }

    const calcWPM = () => {
        const wordsTyped = input.trim().split(' ')
        const totalWords = wordsTyped.length
        setWordCount(totalWords)
        const shownWords = words.split(' ')
        let mistakes = 0
        wordsTyped.forEach((word, index) => {
            if (word !== shownWords[index]) {
                for (let i = 0; i < Math.min(word.length, shownWords[index].length); i++) {
                    if (word[i] !== shownWords[index][i]) {
                        mistakes++
                    }
                }
            }
        })
        setMistake(mistakes)
        }

    const restartGame = () => {
        location.reload()
    }

    const getHighlightedText = (input, words) => {
        const inputWords = input.split('')
        const wordArray = words.split('')
        return wordArray.map((char, index) => {
            if (inputWords[index] === char) {
                return <span key={index} className="text-white">{char}</span>
            } else if (inputWords[index] !== undefined) {
                return <span key={index} className="text-red-500">{char}</span>
            } else {
                return <span key={index} className="text-gray-400">{char}</span>
            }
        })
    }

    const handleForm = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const { name } = Object.fromEntries(formData)
        try {
            await addDoc(collection(db, 'leaderboard'), {
                name: name,
                words: Number(wordCount) * 2,
                mistakes: Number(mistake)
            })
        } catch(err) {
            console.error("Error: ", err)
        }
        restartGame()
    }

    return(
        <div className="flex flex-grow bg-zinc-900 p-6 h-full justify-center">
            <div className="xsm:w-full md:w-4/5 border-2 border-gray-500 p-4 flex flex-col gap-4 rounded-xl">
                <h1 className="text-white text-3xl">Timer: {timer}</h1>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={handleChange}
                    className="absolute opacity-0 top-0 left-0"
                    disabled={timer === 0}
                />
                <div className="relative h-32 overflow-hidden">
                    <p className="text-xl leading-10 absolute top-0 left-0 z-10 text-white">{getHighlightedText(input, words)}</p>
                    <p className="text-xl text-gray-400 leading-10 absolute top-0 left-0 z-0">{words}</p>
                </div>
                {timer == 0 && (
                    <div className="flex flex-col items-center gap-4">
                        <div className="p-2 xl:w-1/3 xsm:w-full">
                            <h1 className="text-white text-3xl border-b-2 border-gray-500 py-2 text-center">Statistics: </h1>
                            <div className="text-white text-2xl border-b-2 border-gray-500 py-2">
                                Words per minute: {wordCount*2} WPM
                            </div>
                            <div className="text-red-500 text-2xl border-b-2 border-gray-500 py-2">
                                Mistakes: {mistake}
                            </div>
                        </div>
                        <div className="xl:w-1/3 xsm:w-full">
                            <form onSubmit={handleForm} className="flex flex-col gap-4 items-center w-full">
                                <h1 className="text-2xl text-white font-bold">Submit your score!</h1>
                                <input type="text" placeholder="Name..." name="name" className="p-2 w-full" value={name} onChange={e => setName(e.target.value)}/>
                                <div className="flex gap-4 w-full">
                                    <button className='px-4 py-2 bg-white border-2 font-bold rounded-xl transition-all duration-200
                                    hover:scale-110 hover:bg-zinc-900 hover:border-white hover:text-white self-center w-1/2'
                                    >Submit</button>
                                    <button className='px-4 py-2 bg-white border-2 font-bold rounded-xl transition-all duration-200
                                    hover:scale-110 hover:bg-zinc-900 hover:border-white hover:text-white self-center w-1/2'
                                    onClick={restartGame}>Play again!</button>
                                </div>
                            </form>
                        </div>
                        <div className="flex justify-center">
                            
                        </div>
                    </div>
                    
                )}
            </div>
        </div>
    )
}

export default Game