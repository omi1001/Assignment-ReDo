import React from "react";
import { motion } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Hero from "./Components/section/Hero"

function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased text-slate-900">
     
      <Navbar />
      <section><Hero/></section>

      
      </div>
  );
}

export default App;