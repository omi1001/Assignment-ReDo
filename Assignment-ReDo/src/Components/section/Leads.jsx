import React, {useState} from "react";
import {motion } from "framer-motion";
import { User, Mail, Phone, Briefcase, Send, CheckCircle } from "lucide-react";
const Leads = () => {
    const [formData, setFormData] = React.useState ({
        name: "",
        email: "",
        Phone: "",
        experience: ""        
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    // Handling live input changes in form
    const handleChange = (e) => {    
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulating form submission
        setTimeout(() =>{
            setIsSubmitting(false);
            setIsSubmitted(true);
            console.log("Form Submitted Successfully", formData);
        },  1500);
    };
    return (
    <section id="apply" className="py-20 px-6 bg-slate-50 border-t border-gray-100 scroll-mt-20">
      <div className="max-w-md mx-auto">
        
        <div className="bg-white rounded-3xl p-8 shadow-md border border-gray-100">
          
          {/*Showing Success Screen after submission submitted */}
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="text-emerald-500 flex justify-center mb-4">
                <CheckCircle size={56} className="animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold text-iim-navy">Application Started!</h3>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                Thank you, <span className="font-semibold text-gray-800">{formData.fullName}</span>. An admissions counselor from LearningShala will contact you shortly on your provided coordinates to verify your profile.
              </p>
            </motion.div>
          ) : (
            /* Main Form Input Screen */
            <div>
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-iim-navy uppercase tracking-tight">
                  Apply Now !
                </h3>
                <p className="text-gray-500 text-xs mt-1.5">
                  Enter your details to schedule a profile evaluation call.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full Name Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Full Name</label>
                  <div className="relative flex items-center">
                    <User size={16} className="absolute left-4 text-gray-400" />
                    <input 
                      type="text"
                      name="fullName"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm transition-all focus:bg-white focus:border-iim-gold focus:ring-1 focus:ring-iim-gold"
                    />
                  </div>
                </div>

                {/* Email Address Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Email Address</label>
                  <div className="relative flex items-center">
                    <Mail size={16} className="absolute left-4 text-gray-400" />
                    <input 
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="raju123@xyz.com"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm transition-all focus:bg-white focus:border-iim-gold focus:ring-1 focus:ring-iim-gold"
                    />
                  </div>
                </div>

                {/* Contact Number Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Mobile Number</label>
                  <div className="relative flex items-center">
                    <Phone size={16} className="absolute left-4 text-gray-400" />
                    <input 
                      type="tel"
                      name="phone"
                      required
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm transition-all focus:bg-white focus:border-iim-gold focus:ring-1 focus:ring-iim-gold"
                    />
                  </div>
                </div>

                {/* Full Name Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Current Designation</label>
                  <div className="relative flex items-center">
                    <User size={16} className="absolute left-4 text-gray-400" />
                    <input 
                      type="text"
                      name="Current Designation"
                      required
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Current Designation"
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm transition-all focus:bg-white focus:border-iim-gold focus:ring-1 focus:ring-iim-gold"
                    />
                  </div>
                </div>

                {/* Experience Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block">Work Experience</label>
                  <div className="relative flex items-center">
                    <Briefcase size={16} className="absolute left-4 text-gray-400" />
                    <select 
                      name="experience"
                      required
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 bg-slate-50 border border-gray-200 rounded-xl text-sm appearance-none transition-all focus:bg-white focus:border-iim-gold focus:ring-1 focus:ring-iim-gold text-gray-700"
                    >
                      <option value="">Select your experience tier</option>
                      <option value="under_2">Less than 2 Years</option>
                      <option value="2_5">2 to 5 Years</option>
                      <option value="5_10">5 to 10 Years</option>
                      <option value="10_plus">More than 10 Years</option>
                    </select>
                  </div>
                </div>

                {/* Submission Button */}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-iim-navy text-white py-3.5 rounded-xl font-bold text-sm tracking-wide shadow-sm hover:bg-iim-gold transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed mt-2"
                >
                  {isSubmitting ? 'Processing Details...' : 'Submit Admission Request'}
                  {!isSubmitting && <Send size={14} />}
                </button>

              </form>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default Leads;
