import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { About, Contact, HowIBuild, Journey, Stats, Work } from "@/components/Sections";
import Reveal from "@/components/Reveal";
import MotionToggle from "@/components/MotionToggle";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Stats />
        <About />
        <Work />
        <HowIBuild />
        <Journey />
        <Contact />
      </main>
      <Reveal />
      <MotionToggle />
    </>
  );
}
