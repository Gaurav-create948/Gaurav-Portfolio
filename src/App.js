import Header from  "./Components/Headers/Header.js";
import About from "./Components/About.js";
import Skills from "./Components/Skills.js";
import Footer from "./Components/Footer.js";
import Contact from "./Components/Contact.js";
import { motion } from 'framer-motion';

function App() {
  return (
    <div className=''>
      <Header />
      <About />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
