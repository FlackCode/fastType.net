import { Link } from 'react-router-dom'
import { BsWind } from 'react-icons/bs'

const Navbar = () => {
    return (
        <div className="md:px-12 xsm:px-4 py-6 bg-zinc-900 flex justify-between items-center border-b-2 border-zinc-700">
            <div className='flex items-center gap-2 select-none transition-all duration-200 hover:scale-110'>
                <BsWind className='text-white text-xl'/>
                <Link className='md:text-3xl text-white font-bold ' to='/'>fastType.net</Link>
            </div>
            <div className='flex items-center gap-4'>
                <Link className='text-white md:text-xl font-bold cursor-pointer transition-all duration-200 hover:scale-110'
                to='/leaderboard'>Leaderboards</Link>
                <Link className='md:px-4 xsm:px-2 py-2 md:text-base xsm:text-sm bg-white border-2 font-bold rounded-xl transition-all duration-200
                hover:scale-110 hover:bg-zinc-900 hover:border-white  hover:text-white'
                to='/game'>Play Now!</Link>
            </div>
        </div>
    )
}

export default Navbar