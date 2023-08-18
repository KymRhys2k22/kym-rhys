import React from 'react'
import { TiSocialFacebookCircular, TiSocialGithubCircular, TiSocialTwitterCircular } from 'react-icons/ti'
import Profile from '../assets/Profile.png'


const Main = () => {
    return (
        <main className=" snap-y snap-mandatory h-screen w-screen overflow-x-hidden overflow-scroll">
            <section className='snap-start snap-normal flex items-center h-screen w-screen '>
                <div className=' flex max-md:flex-col-reverse items-center w-[90%]  justify-between mx-auto  min-w-[370px] max-w-[1224px]'>
                    <div className='flex flex-1 flex-col justify-end mr-32 max-md:mr-0'>
                        <article className='text-center'>
                            <p className='text-3xl text-[#2D334A] '>Hi there,</p>
                            <h1 className='text-5xl text-[#272343] mt-3 font-Lexend font-bold'>I'm Kym Rhys</h1>
                            <h2 className='text-[#2D334A] mt-3 text-4xl font-semibold'>a passionate front-end developer</h2>
                            <p className='text-lg text-[#2D334A]'>who's on a mission to craft captivating digital experiences that leave a lasting impact. My journey into the world of web development has been an exciting ride, filled with challenges, triumphs, and endless opportunities to learn and innovate.</p>
                        </article>
                        <div className='w-full h-[8px] mt-6 rounded-full bg-[#2D334A]'></div>
                        <div className='flex w-full  items-center justify-between mt-6'>
                            <a href='#'><TiSocialFacebookCircular size={72} className='fill-[#2D334A] ' /></a>
                            <a href='#'><TiSocialGithubCircular size={72} className='fill-[#2D334A] ' /></a>
                            <a href='#'><TiSocialTwitterCircular size={72} className='fill-[#2D334A] ' /></a>
                            <button type='button' className='rounded-full border-8 text-3xl font-semibold text-[#2D334A] border-[#2D334A] w-[300px] bg-[#FFD803] h-full'>Hire Me</button>

                        </div>


                    </div>
                    <img src={Profile} alt={Profile} className='max-md:w-[50%]' />




                </div>
            </section>
            <section className='snap-start bg-slate-300 h-screen w-screen flex items-center justify-center text-5xl'>

            </section>
            <section className='snap-start bg-slate-600 h-screen w-screen flex items-center justify-center text-5xl'>

            </section>
            <section className='snap-start bg-slate-700 h-screen w-screen flex items-center justify-center text-5xl'>

            </section>

        </main>
    )
}

export default Main