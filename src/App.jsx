import Navbar from "./components/Navbar/Navbar";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Expertise from "./Expertise/Expertise";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Work from "./Work/Work";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Expertise />
      <Work />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
     </>
  );
}

export default App;