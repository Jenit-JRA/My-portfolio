import About from "../features/About/About";
import Contact from "../features/Contact/Contact";
import Experience from "../features/Experience/Experience";
import Hero from "../features/Hero/Hero";
import Projects from "../features/Projects/Projects";
import Skills from "../features/Skills/Skills";


function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;