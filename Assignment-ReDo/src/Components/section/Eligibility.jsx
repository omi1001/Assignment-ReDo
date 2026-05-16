import React from 'react';
import {motion} from 'framer-motion';
import { CheckCircle2, Calendar, AlertCircle } from 'lucide-react';
const Eligibility = () => {
    return (
        <section id= "eligibility" className="py-20 px-6 bg-white scroll-mt-20">
            <div className= "max-w-5xl mx-auto">
            {/* section header */}
            <div className= " text-center mb-16 ">
                <h2 className= "text-2xl md:text-3xl font-bold text-iim-navy uppercase tracking-tight">
                    Admission & Eligibility
                </h2>
                <p className= "text-gray-500 mt-3 text-sm md:text-base max-w-xl mx-auto ">
                    Review the requirements below to confirm your qualifications for the executive track.
                </p>
            </div>
             {/* eligibility criteria */}
             <div className= "grid grid-cols-1 md-grid-cols-2 gap-12 items-start">
                {/* requirements */}

                <motion.div
                initial={{opacity:0, x:-20}}
                whileInView={{opacity:1, x:0}}
                viewport={{once: true}}
                transition={{duration: 0.5}}
                className= "space-y-6" >

                    <h3 className= "text-xl font-bold text-iim-navy flex items-center gap-2">
                        Who can apply ? 
                    </h3>

                    <div className= "space-y-4">
                        <div className= "flex gap-3 items-start">
                            <div className= "text-emerald-600 mt-1 flex-shrink-0">
                                <CheckCircle2 size={20}/>
                            </div>
                            <div>
                                <h4 className= "font-bold text-gray-800 text-sm md:text-base">
                                    Academic Degree </h4>
                                    <p className= "text-gray-600 mt-0.5 text-sm">
                                        A Bachelor's degree or equivalent in any discipline with at least 50% marks or any equivalent CGPA
                                    </p>
                            </div>

                        </div>
                        <div className="flex gap-3 items-start">
                <div className="text-emerald-600 mt-1 flex-shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm md:text-base">Work Experience</h4>
                  <p className="text-gray-600 text-sm mt-0.5">
                    Minimum of 2 years of full-time professional work experience after completing your graduation degree.
                  </p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="text-emerald-600 mt-1 flex-shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 text-sm md:text-base">No CAT/GMAT Required</h4>
                  <p className="text-gray-600 text-sm mt-0.5">
                    Admissions are based entirely on corporate experience profiles and an internal evaluation interview.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-50 border border-gray-100 rounded-2xl p-8 shadow-sm"
          >
            <h3 className="text-xl font-bold text-iim-navy mb-6 flex items-center gap-2">
              Important Timelines
            </h3>

            <div className="space-y-6">
              {/* Deadline */}
              <div className="bg-white border-l-4 border-iim-gold p-4 rounded-r-xl shadow-xs flex items-start gap-4">
                <div className="text-iim-gold mt-1">
                  <Calendar size={22} />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">
                    Application Deadline
                  </span>
                  <span className="text-lg font-extrabold text-iim-navy block mt-0.5">
                    July 31, 2026
                  </span>
                </div>
              </div>

              {/* Notice */}
              <div className="flex gap-3 bg-amber-50/60 border border-amber-100 p-4 rounded-xl">
                <div className="text-amber-600 mt-0.5 flex-shrink-0">
                  <AlertCircle size={18} />
                </div>
                <p className="text-xs text-amber-800 leading-relaxed font-medium">
                  Seats are allocated on a first-come, first-served review cycle. Applications may close early if the executive cohort limits are reached.
                </p>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
export default Eligibility;