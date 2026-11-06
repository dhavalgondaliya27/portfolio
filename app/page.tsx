import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { About, Contact, Expertise, Impact, Journey, ProofStrip, Work } from "@/components/Sections";
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
        <Impact />
        <Journey />
        <Contact />
      </main>
      <Reveal />
      <MotionToggle />
    </>
  );
}
