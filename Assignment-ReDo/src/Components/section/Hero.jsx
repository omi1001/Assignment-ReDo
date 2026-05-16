import React from 'react';
import {motion} from 'framer-motion';
import {ArrowUpRight} from 'lucide-react';
const Hero = () =>{
    return(
        <section className = "bg-gradient-to-b from-white to-slate-50 pt-20 pb-16 px-6 text-center">
        <div className= "max-w-4xl mx-auto">
        {/* Simple fade-in animation for hero section */}
        <motion.div
        initial={{opacity:0, y:15}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.6, ease: "easeOut"}} >
        {/* Headline */}
        <h1 className= "text-3xl font-extrabold text-iim-navy leaing-tight tracking-tight ">
        India's first AI-Native MBA <br/>
        <span className= "text-gray-400 font-bold">for workling professionals </span>
        </h1>
        {/* Description */}
        <p className= "mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Earn an MBA degree from IIM Sirmaur without quitting your job.
        </p>
        {/* CTA button */}
        <div className= "mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
        <a href="#apply" className= "w-full sm:w-auto bg-iim-gold text-white px-8 py-3.5 rounded-lg font-bold shadow-md hover: bg-iim-navy hover: scale-105 transition-all duration-300 flex items-center justify-center gap-2">
        Download Brochure <ArrowUpRight size={16}/>
        </a>
        <a href="#feratures" className='w-full sm:w-auto bg-transaparent border-gray-300 text-iim-navy px-8 py-3.5 rounded-lg font-bold hover-bg-gray-100 transition-colors'>
        Explore Program 
        </a>
        </div>
        </motion.div>
        </div>
        </section>
    )
}
export default Hero;