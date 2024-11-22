import { Suspense } from "react";


const Hero = () => {
    return (
        <section className=" bg-gradient-to-r from-indigo-400 to-cyan-400 text-white py-20 " id='home'>
            <div className="container max-w-5xl mx-auto px-4 pt-8 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse   md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-start">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-lexend">
                            Kym Rhys {"\n"} Mallari
                        </h1>
                        <h3 className="text-xl md:text-2xl mb-6">
                            Front-End & Mobile Developer, Graphic Designer
                        </h3>
                        <p className="text-lg md:text-xl mb-8">
                            Crafting beautiful, responsive, and user-friendly digital
                            experiences
                        </p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="bg-white text-indigo-600 hover:bg-transparent hover:text-white hover:border-white hover:bg-indigo-600 border px-6 py-2 rounded-md transition duration-300">
                                View My Work
                            </button>
                            <button className="border border-white text-white hover:bg-white hover:text-purple-600 px-6 py-2 rounded-md transition duration-300">
                                Download Resume
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <Suspense fallback={<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>}>
                            <img
                                src={"https://raw.githubusercontent.com/KymRhys2k22/kym-rhys/refs/heads/main/src/assets/Profile.png"}
                                alt="Kym Rhys"
                                className="rounded-full  w-64 h-64 object-cover border-4 border-white shadow-xl"
                            />
                        </Suspense >
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
