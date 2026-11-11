import type { Metadata, Viewport } from "next";
import { DM_Sans, Instrument_Serif } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-sans" });
const serif = Instrument_Serif({ subsets: ["latin"], variable: "--font-serif", weight: "400", style: ["normal", "italic"] });

const title = `${profile.name} · ${profile.role}`;
const description = `${profile.name}, ${profile.role} (${profile.focus}) in ${profile.location}. Production backends, multi-tenant SaaS, payment rails, real-time systems and AI/RAG pipelines on Node.js, NestJS, PostgreSQL, MongoDB and AWS, with React and Next.js on top.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description,
  keywords: ["Full Stack Developer", "Backend Developer", "Backend Engineer", "System Design", "Multi-tenant SaaS", "Microservices", "React", "Next.js", "Node.js", "NestJS", "PostgreSQL", "MongoDB", "AWS", "Ahmedabad"],
  authors: [{ name: profile.name }],
  openGraph: { title, description, type: "profile", url: profile.siteUrl, images: [profile.portrait] },
  twitter: { card: "summary_large_image", title, description, images: [profile.portrait] },
};

export const viewport: Viewport = { themeColor: "#030303", colorScheme: "dark" };

// Decide motion before first paint: off when the visitor asked for reduced motion
// or switched it off here before.
const motionScript = `(function(){var m='on';try{var s=localStorage.getItem('motion');if(s)m=s;else if(matchMedia('(prefers-reduced-motion: reduce)').matches)m='off'}catch(e){}document.documentElement.dataset.motion=m})()`;

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  email: `mailto:${profile.email}`,
  image: `${profile.siteUrl}${profile.portrait}`,
  address: { "@type": "PostalAddress", addressLocality: "Ahmedabad", addressCountry: "IN" },
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: ["React", "Next.js", "Node.js", "NestJS", "PostgreSQL", "MongoDB", "AWS", "System Design", "REST APIs"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${serif.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
