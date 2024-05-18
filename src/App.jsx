import GamePage from "./components/GamePage"
import Landing from "./components/Landing"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LeaderboardPage from "./components/LeaderboardPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>
  },
  {
    path: '/game',
    element: <GamePage/>
  },
  {
    path: '/leaderboard',
    element: <LeaderboardPage/>
  }
])

const App = () => {
  return (
    <>
    <div className="h-screen">
      <RouterProvider router={router}/>
    </div>
    </>
  )
}
export default App
