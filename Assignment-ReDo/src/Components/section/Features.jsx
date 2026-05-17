import React from "react";
import {motion} from "framer-motion";
import { GraduationCap, Calendar, Monitor, ShieldCheck, Award, Briefcase, Section } from "lucide-react";
const Features = () => {
    return(
        <section id="features" className="py-20 px-6 max-w-6xl mx-auto scroll-mt-20">
        {/* Program highlights */}
            
            <div className="text-center mb-16">
                <h2 className="text-2xl md:text-3xl font-bold text-iim-navy uppercase tracking-tight">
                Program Features
                </h2>
                <p className="text-gray-500 mt-3 text-sm md-text-base max-w-xl mx-auto">
                    Discover why IIM Sirmaur's online AI-integrated MBA program is the best choice to elevate you career.
                </p>
            </div>
            {/* applying grid layout for mobile and desktop view both */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* First card */}
                <motion.div
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once: true}}
                whileHover={{y: -5 }}
                className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                    <div className="mb-4 bg-slate-50 text-iim-gold w-fit p-3 rounded-xl border border-gray-100">
                    <Monitor size={24}/>
                    </div>
                    <h3 className="text-lg font-bold text-iim-navy mb-2">100% Live Online Weekend Classes </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Attend live interactive sessions from anywhere, Designed completely to fit your active work schedule.
                    </p>
                </motion.div>
                {/*Second card */}
                <motion.div
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once: true}}
                whileHover={{y: -5 }}
                className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                    <div className="mb-4 bg-slate-50 text-iim-gold w-fit p-3 rounded-xl border border-gray-100">
                    <Monitor size={24}/>
                    </div>
                    <h3 className="text-lg font-bold text-iim-navy mb-2"> Direct IIM Alumni Status</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Get full IIM Sirmaur Executive Alumni status, expanding your career networks on a gloabl level.
                    </p>
                </motion.div>
                {/*Third card */}
                <motion.div
                initial={{opacity:0, y:20}}
                whileInView={{opacity:1, y:0}}
                viewport={{once: true}}
                whileHover={{y: -5 }}
                className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
                >
                    <div className="mb-4 bg-slate-50 text-iim-gold w-fit p-3 rounded-xl border border-gray-100">
                    <Monitor size={24}/>
                    </div>
                    <h3 className="text-lg font-bold text-iim-navy mb-2">24-Month Duration with campus immersions</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        Complete your coursework comprehensively across 24 months with explicit multi-industry tracks.
                    </p>
                </motion.div>
                </div>
                {/* Specialization */}
                <div className="mt-16 bg-iim-navy rounded-2xl p-8 text-white text-center shadow-lg border border-white/5">
                <h3 className="text-lg md:text-xl font-bold mb-6 text-iim-gold">
                    Specializations
                </h3>
                <div className="flex flex-wrap justify-center gap-4 relative z-10">
          {[
            " AI-Powered Business Finance",
            " Marketing & Sales Strategy",
            " Operations Management"
          ].map((track) => (
            <motion.span 
              key={track}
              whileHover={{ 
                y: -4,
                backgroundColor: "#C5A059",
                color: "White",
                boxShadow: "0 10px 25px -5px rgba(197, 160, 89, 0.4)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="cursor-pointer bg-slate-800/80 border border-slate-700/60 text-slate-200 px-6 py-3 rounded-2xl text-xs md:text-sm font-bold tracking-wide shadow-sm transition-colors duration-200"
            >
              {track}
            </motion.span>
          ))}
        </div>
            </div>
        </section>
    )
};
export default Features;