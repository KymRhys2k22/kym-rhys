import { Cloud, Clouds, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

import { motion as m } from "framer-motion";



const Hero = ({ darkMode }) => {
    return (
        <section className="group  bg-gradient-to-b overflow-hidden from-blue-500 dark:from-slate-600 dark:to-slate-900  to-blue-300 text-white py-20 " id='home'>
            <div className="container max-w-5xl mx-auto px-4 pt-8 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse   md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0 text-center z-40 md:text-start">
                        <m.h1
                            initial={{ opacity: -1, y: 10 }}
                            transition={{ duration: 1, delay: 0.7, ease: "anticipate" }}
                            whileInView={{ opacity: 1, y: 0 }}

                            className="text-4xl md:text-6xl font-extrabold mb-4 dark:text-indigo-200 text-slate-800">
                            Kym Rhys {"\n"} Mallari
                        </m.h1>
                        <m.h3
                            initial={{ opacity: -1, y: 50 }}
                            transition={{ duration: 1, delay: 0.6, ease: "easeInOut" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-xl md:text-2xl mb-6 dark:text-slate-100 text-slate-600">
                            Front-End & Mobile Developer, Graphic Designer
                        </m.h3>
                        <m.p
                            initial={{ opacity: 0, y: 10 }}
                            transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-lg md:text-xl mb-8 dark:text-slate-50 text-slate-700">
                            Crafting beautiful, responsive, and user-friendly digital
                            experiences
                        </m.p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 z-40 sm:space-x-4">
                            <m.button
                                initial={{ opacity: 0 }}
                                transition={{ duration: 1, delay: 0.4, ease: "easeInOut" }}
                                whileInView={{ opacity: 1, }}
                                className="bg-white md:text-sm text-indigo-600 hover:bg-transparent hover:text-white hover:border-white hover:bg-indigo-600 border px-6 py-2 rounded-md transition duration-300 ">
                                View My Work
                            </m.button>
                            <m.button
                                initial={{ opacity: 0 }}
                                transition={{ duration: 1, delay: 0.3, ease: "easeInOut" }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className=" tooltip-container border-2 transition duration-200 ease-in-out hover:border-white px-6 py-2 text-indigo-600">
                                <span className="tooltip text-xs animate-bounce">HIRE ME</span>
                                <span className="text hover:text-white">Download Resume</span>
                            </m.button>
                        </div>
                    </div>
                    <m.div
                        initial={{ opacity: -1, y: 50 }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeInOut" }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="md:w-1/2 flex justify-center md:justify-end">

                        <img
                            src={"https://raw.githubusercontent.com/KymRhys2k22/kym-rhys/refs/heads/main/src/assets/Profile.png"}
                            alt="Kym Rhys"
                            className="rounded-full z-10 mb-12 md:mb-0 lg:w-96 lg:h-96 md:h-72 md:w-72  w-64 h-64 object-cover border-4 border-white shadow-xl"
                        />

                    </m.div>
                    <div className=" duration-500 h-[835px]  md:h-[450px] group-hover:scale-105 overflow-hidden absolute lg:h-[570px] w-screen   z-0 top-0 left-0 right-0 bottom-0">
                        {darkMode ? (<Canvas >
                            <Stars radius={30} depth={10} count={5000} factor={4} saturation={100} fade speed={1} />
                        </Canvas>)
                            : (<Canvas>
                                <Clouds material={THREE.MeshBasicMaterial}>
                                    <Cloud segments={1} bounds={[10, 2, 2]} volume={1} color="white" />
                                    <Cloud segments={2} bounds={[10, 3, 4]} volume={4} color="white" />
                                    <Cloud segments={3} bounds={[10, 3, 4]} volume={4} color="white" />
                                    <Cloud segments={4} bounds={[10, 3, 4]} volume={4} color="white" />
                                    <Cloud seed={1} scale={1} bounds={[10, 2, 2]} volume={5} color="white" fade={1000} />
                                </Clouds>
                            </Canvas >)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
