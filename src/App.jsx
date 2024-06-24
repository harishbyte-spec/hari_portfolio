import React, { useState, useEffect } from 'react';
import SplashScreen from "./components/SplashScreen";
// ... other imports ...
import About from "./components/About"
import Contact from "./components/Contact"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Technologies from "./components/Technologies"
function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4200); // 3 seconds delay

    return () => clearTimeout(timer);
  }, []);

  return (
   <div>
      {loading ? (
        <SplashScreen />
      ) : (
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </div>
        </div>
      )}
    </div>
  );
}
export default App;

<div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>