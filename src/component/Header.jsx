import React from 'react'


const Header = () => {
    const navBar = ['Home', 'About', 'Portfolio', 'Contact',]
    return (
        <>
            <header
                className={`fixed bg-[#BAE8E8]  z-10 w-full  h-11 shadow-lg  `}>
                <div className='w-[90%] h-full min-w-[370] max-w-[1224px]  mx-auto flex justify-between items-center'>
                    <h1 className='text-2xl font-black underline decoration-yellow-400 decoration-4 underline-offset-4 text-white
                    hover:skew-x-12 transition-transform  cursor-default ease-in-out '>Kym Rhys Mallari</h1>
                    <nav >
                        <ul className='flex justify-end items-center gap-5'>
                            {navBar.map((navBars, index) => (
                                <li className='text-[#2D334A] font-semibold ease-in-out 2s transition hover:[text-shadow:0_15px_15px_rgb(255,255,0)] 
                                hover:scale-[1.1]
                                hover:font-medium'
                                    key={index}><a href="#">{navBars}</a></li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </header >
        </>
    )
}

export default Header