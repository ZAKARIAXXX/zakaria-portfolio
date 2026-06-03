import FAQs from "@/sections/FAQs";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Projects from "@/sections/Projects";
import Expertise from "@/sections/Expertise";
import Services from "@/sections/Services";
import TechStack from "@/sections/TechStack";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return <>
    <Header />
    <Hero />
    <Intro />
    <Expertise />
    <Services />
    <TechStack />
    <Projects />
    <Testimonials />
    <FAQs />
    <Footer />
  </>;
}
