import {BsWind} from 'react-icons/bs'

const Navbar = () => {
    return (
        <div className="px-12 py-6 bg-zinc-900 flex justify-between items-center border-b-2 border-zinc-700">
            <div className='flex items-center gap-2 select-none'>
                <BsWind className='text-white text-xl'/>
                <h1 className='text-3xl text-white font-bold'>fastType.net</h1>
            </div>
            <div>
                <button className='px-4 py-2 bg-white border-2 font-bold rounded-xl transition-all duration-200
                hover:scale-110 hover:bg-zinc-900 hover:border-white  hover:text-white'>Play Now!</button>
            </div>
        </div>
    )
}

export default Navbar