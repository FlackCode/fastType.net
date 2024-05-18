import GamePage from "./components/GamePage"
import Landing from "./components/Landing"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing/>
  },
  {
    path: '/game',
    element: <GamePage/>
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
