const Header =  () => {
    return (
        <div className="flex flex-grow bg-zinc-900 p-24 h-full">
            <div className="w-1/2 flex flex-col justify-center text-white gap-4 p-4">
                <h1 className="font-bold text-3xl">Master Your Typing Skills with Speed and Precision</h1>
                <p className="font-medium w-3/4">Whether you're a seasoned typist striving for perfection or just starting to navigate the keyboard, 
                    our speedtyping platform offers engaging exercises and challenges to enhance your speed, accuracy, and overall typing efficiency.</p>
                <button className='text-black px-4 py-2 bg-white border-2 font-bold rounded-xl transition-all duration-200
                hover:scale-105 hover:bg-zinc-900 hover:border-white  hover:text-white'>Try it now!</button>
            </div>
            <div className="w-1/2 p-4 flex items-center justify-center">
                <img src="./keyboard.jpg" alt="" className="object-cover w-4/6 h-3/4"/>
            </div>
        </div>
    )
}

export default Header