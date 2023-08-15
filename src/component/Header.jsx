import React from 'react'


const Header = () => {
    const navBar = ['Home', 'Contact', 'About', 'Skills',]
    return (
        <>
            <header
                className={`fixed  z-50 w-full  h-11  `}>

                <div className='w-[90%] min-w-[370] max-w-[900px] my-3 mx-auto flex justify-between items-center'>
                    <h1 className='text-2xl font-black underline decoration-yellow-400 decoration-4 underline-offset-4 text-white
                    hover:skew-x-12 transition-transform  cursor-default ease-in-out '>Kym Rhys Mallari</h1>
                    <nav >
                        <ul className='flex justify-end items-center gap-5'>
                            {navBar.map((navBars, index) => (

                                <li className='text-white ease-in-out 2s transition hover:[text-shadow:0_15px_15px_rgb(255,255,0)] 
                                hover:scale-[1.1]
                                hover:font-medium'
                                    key={index}><a href="#">{navBars}</a></li>

                            ))}
                            <li>
                                <button className='transition ease-in-out delay-150  px-[.8em] rounded-md py-[.2em] hover: bg-gradient-to-t font-bold from-yellow-200 via-yellow-400 to-yellow-700 text-zinc-950
                                active:bg-gradient-to-b active:from-yellow-200 active:via-yellow-400 active:to-yellow-700
                                hover:shadow-[0_20px_15px_rgb(255,255,0,0.1)]
                                hover:scale-[1.1] 
                                '>
                                    HIRE ME
                                </button>
                            </li>
                        </ul>

                    </nav>
                </div>
            </header >
        </>
    )
}

export default Header