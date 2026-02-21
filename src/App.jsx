import React from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Techstack from "./components/Techstack"
import Projects from "./components/Projects"
import { Email } from "./components/Email"
import Achievements from "./components/Achievements"
// import Dummy from "./components/Dummy.jsx";
import { useEffect } from "react"
import Certifications from "./components/Certifications";
import GoToTop from "./components/GoToTop";
function App() {
useEffect(() => {
  AOS.init({
    duration: 1000,
    once: false,
    easing: 'ease-in-out',
    delay: 100,
  });

  window.addEventListener('load', () => {
    AOS.refresh();
  });

  setTimeout(() => {
    AOS.refresh();
  }, 500);

  return () => window.removeEventListener('load', AOS.refresh);
}, []);

  return (
  
    <div className="overflow-hidden bg-template">
      <Navbar/>
      <Hero/>
      <Skills/>
      <Techstack/>
      <Projects/>
      {/* <Achievements/> */}
      <Certifications/>
      <Email/>
      <GoToTop/>
    </div>
  
  )
}

export default App
