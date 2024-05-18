import Leaderboard from "./Leaderboard"
import Navbar from "./Navbar"

const LeaderboardPage = () => {
    return(
        <div className="h-screen flex flex-col">
            <Navbar/>
            <Leaderboard/>
        </div>
    )
}
export default LeaderboardPage