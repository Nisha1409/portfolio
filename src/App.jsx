import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects/Project"
import homebg from '../src/assets/homebg.jpg'; // Adjust the path as necessary
import Skills from "./components/Skills"

function App() {
  return (
    <div className="h-auto w-full h-full">
      {/* Ensure Navbar is above all elements */}
      <Navbar className="relative z-50" />  

      <div className="relative w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${homebg})` }}>
        {/* Overlay behind main content, not affecting navbar */}
        <div className="absolute inset-0 bg-black bg-opacity-80 z-0"></div> 
        
        <div className="relative z-20">
          <Home />
        </div>
      </div>

      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}


export default App
