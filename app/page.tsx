import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import { Contact, Experience, MoreWork, Principles, Stack } from "@/components/Sections";
import Reveal from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <CaseStudies />
        <MoreWork />
        <Principles />
        <Stack />
        <Experience />
        <Contact />
      </main>
      <Reveal />
    </>
  );
}
