import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/section/Hero';
import Features from './components/section/Features';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
    </div>
  );
}

export default App;