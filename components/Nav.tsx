"use client";

import Image from "next/image";
import { useState } from "react";
import { profile } from "@/data/profile";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#journey", label: "Journey" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a href="#top" className="wordmark" aria-label={`${profile.name}, back to top`}>
          <span className="wordmark-photo">
            <Image src={profile.portrait} alt="" width={64} height={64} />
          </span>
          <span>{profile.name}</span>
        </a>

        <button
          className="menu-btn"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-nav"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>

        <nav id="primary-nav" className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} className="nav-link" href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
          ))}
          <a className="pill pill-light" href="#contact" onClick={() => setOpen(false)}>Let&apos;s talk</a>
        </nav>
      </div>
    </header>
  );
}
