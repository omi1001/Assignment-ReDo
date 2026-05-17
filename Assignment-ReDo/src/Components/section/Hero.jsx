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
        <h1 className= "text-4xl font-extrabold text-iim-navy leading-tight tracking-tight ">
        India's first AI-Native MBA <br/>
        <span className= "text-gray-400 font-bold">for workling professionals </span>
        </h1>
        {/* Description */}
        <p className= "mt-6 text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Earn an MBA degree from IIM Sirmaur without quitting your job.
        </p>
        {/* CTA button */}
        <div className= "mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
      
      <motion.a 
              href="#apply"
              whileHover={{ 
                scale: 1.04,
                backgroundColor: "#d9b46a", 
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="w-full sm:w-auto bg-iim-gold text-white px-8 py-3.5 rounded-lg font-bold shadow-md flex items-center justify-center gap-2 cursor-pointer border border-iim-gold/20"
            >
              Download Brochure <ArrowUpRight size={16} />
            </motion.a>
        <motion.a href="#features" className='w-full sm:w-auto bg-transparent border-gray-300 text-iim-navy px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition-colors'>
        Explore Program 
        </motion.a>
        </div>
        </motion.div>
        </div>
        </section>
    )
}
export default Hero;