import React from 'react';
import Navbar from './Components/layout/Navbar';
import Hero from './Components/section/Hero';
import Features from './Components/section/Features';
import Eligibility from './Components/section/Eligibility';
import Leads from './Components/section/Leads';
import BacktoTop from './Utility/BacktoTop';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar />
      <main><Hero/>
      <section><Features/></section>
      <Eligibility/>
      <Leads/>
      </main>
      <footer className="bg-[#002147] text-white py-12 px-6 border-t border-[#C5A059]/30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold uppercase tracking-wider">
            IIM <span className="text-[#C5A059]">Sirmaur</span>
          </div>
          <div className="text-center md:text-right">
            <p className="text-slate-300 text-sm">
              Questions? Contact Admissions
            </p>
            <p className="text-[#C5A059] font-bold text-lg">+91 98765 43210</p>
          </div>
        </div>
        <div className="mt-8 text-center text-slate-400 text-xs">
          © {new Date().getFullYear()} IIM Sirmaur Online MBA. All rights
          reserved.
        </div>
      </footer>
      <BacktoTop/>
    </div>
  );
}

export default App;