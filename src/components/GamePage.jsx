import Game from "./Game"
import Navbar from "./Navbar"

const GamePage = () => {
    return(
        <div className="h-screen flex flex-col">
            <Navbar/>
            <Game/>
        </div>
    )
}

export default GamePage