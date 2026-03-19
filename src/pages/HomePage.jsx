import Contact from "../Contact/Contact";
import Experience from "../Experience/Experience";
import Expertise from "../Expertise/Expertise";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Projects from "../Projects/Projects";
import Work from "../Work/Work";

function HomePage() {
  return (
    <>
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

export default HomePage;
