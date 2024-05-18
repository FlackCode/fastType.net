import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="flex flex-grow bg-zinc-900 p-6 h-full justify-center">
            <div className="md:max-w-3xl flex flex-col justify-center text-white gap-4 p-4 text-center">
                <h1 className="font-bold text-3xl">Master Your Typing Skills with Speed and Precision</h1>
                <p className="font-medium">Whether you're a seasoned typist striving for perfection or just starting to navigate the keyboard, 
                    our speedtyping platform offers engaging exercises and challenges to enhance your speed, accuracy, and overall typing efficiency.</p>
                <Link className='text-black px-4 py-2 bg-white border-2 font-bold rounded-xl transition-all duration-200
                hover:scale-105 hover:bg-zinc-900 hover:border-white  hover:text-white'
                to='/game'>Try it now!</Link>
            </div>
        </div>
    )
}

export default Header