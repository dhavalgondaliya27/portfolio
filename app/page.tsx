import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { About, Contact, Experience, Expertise, PlaybookSection, ProofStrip, Services, Work } from "@/components/Sections";
import Reveal from "@/components/Reveal";
import MotionToggle from "@/components/MotionToggle";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <ProofStrip />
        <About />
        <Work />
        <Expertise />
        <Experience />
        <PlaybookSection />
        <Services />
        <Contact />
      </main>
      <Reveal />
      <MotionToggle />
    </>
  );
}
