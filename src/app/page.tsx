import FAQs from "@/sections/FAQs";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Terminal from "@/sections/Terminal";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Expertise from "@/sections/Expertise";
import Services from "@/sections/Services";
import TechStack from "@/sections/TechStack";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Intro />
      <Terminal />
      <About />
      <Expertise />
      <Services />
      <TechStack />
      <Projects />
      <FAQs />
      <Footer />
    </>
  );
}
