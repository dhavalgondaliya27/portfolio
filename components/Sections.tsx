import { education, experience, integrations, moreWork, principles, profile, skills } from "@/data/profile";
import CopyEmail from "./CopyEmail";
import s from "./site.module.css";

export function MoreWork() {
  return (
    <section id="more" className={s.alt}>
      <div className="container">
        <span className="eyebrow">02 — also shipped</span>
        <h2 className="section-title">More production APIs I&apos;ve worked on.</h2>
        <p className="section-lead">
          Client products at Equitysoft across commerce, health, sports, events and social — each with its own integrations,
          background jobs and deployment on real infrastructure.
        </p>
        <div className={s.moreGrid}>
          {moreWork.map((w, k) => (
            <article key={w.name} className={`card reveal ${s.more}`} style={{ transitionDelay: `${(k % 3) * 70}ms` }}>
              <header>
                <h3 className="display">{w.name}</h3>
                <span className="mono">{w.kind}</span>
              </header>
              <p>{w.detail}</p>
              <div className={s.chips}>
                {w.tags.map((t) => <span key={t} className="chip">{t}</span>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Principles() {
  return (
    <section id="principles">
      <div className="container">
        <span className="eyebrow">03 — how I build</span>
        <h2 className="section-title">Six rules I don&apos;t ship without.</h2>
        <p className="section-lead">
          The difference between an API that works in Postman and one that survives production is mostly decisions like these.
        </p>
        <ol className={s.principles}>
          {principles.map((p, k) => (
            <li key={p.title} className="reveal" style={{ transitionDelay: `${(k % 3) * 70}ms` }}>
              <span className={`mono ${s.pNum}`}>{String(k + 1).padStart(2, "0")}</span>
              <h3 className="display">{p.title}</h3>
              <p>{p.body}</p>
              <span className={`mono ${s.pProof}`}>↳ {p.proof}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Stack() {
  return (
    <section id="stack" className={s.alt}>
      <div className="container">
        <span className="eyebrow">04 — toolbox</span>
        <h2 className="section-title">What I reach for, and what I&apos;ve plugged into.</h2>
        <div className={s.stackGrid}>
          {skills.map((g) => (
            <div key={g.group} className={`card reveal ${s.stackCard}`}>
              <h3 className="mono">{g.group}</h3>
              <div className={s.chips}>
                {g.items.map((i) => <span key={i} className="chip">{i}</span>)}
              </div>
            </div>
          ))}
        </div>

        <h3 className={`mono ${s.integrationsTitle}`}>integrations in production</h3>
        <div className={s.marquee} aria-label="Third-party integrations">
          <div className={s.marqueeTrack}>
            {[...integrations, ...integrations].map((n, k) => (
              <span key={k} aria-hidden={k >= integrations.length}>{n}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <span className="eyebrow">05 — experience</span>
        <h2 className="section-title">Where I&apos;ve shipped.</h2>
        <div className={s.timeline}>
          {experience.map((e) => (
            <article key={e.company} className={`reveal ${s.tlItem}`}>
              <div className={s.tlHead}>
                <div>
                  <h3 className="display">{e.role}</h3>
                  <p className={s.tlCompany}>{e.company}</p>
                </div>
                <span className="mono chip">{e.period}</span>
              </div>
              <ul className={s.csList}>
                {e.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>

        <div className={s.eduGrid}>
          {education.map((ed) => (
            <div key={ed.title} className={`card reveal ${s.edu}`}>
              <span className="mono">{ed.period}</span>
              <h3 className="display">{ed.title}</h3>
              <p>{ed.place} · <strong>{ed.note}</strong></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className={s.contact}>
      <div className="container">
        <div className={`card reveal ${s.contactCard}`}>
          <span className="eyebrow">06 — contact</span>
          <h2 className="section-title" style={{ maxWidth: "20ch" }}>
            Need a backend that holds up in production?
          </h2>
          <p className="section-lead" style={{ marginBottom: 32 }}>
            Open to backend and platform engineering roles and interesting freelance builds. I usually reply within a day.
          </p>
          <div className={s.contactRow}>
            <CopyEmail email={profile.email} />
            <a className="btn" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            <a className="btn" href={profile.linkedin} target="_blank" rel="noopener">LinkedIn ↗</a>
            <a className="btn" href={profile.github} target="_blank" rel="noopener">GitHub ↗</a>
          </div>
        </div>
      </div>
      <footer className={`container mono ${s.footer}`}>
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <span>{profile.location} · built with Next.js</span>
      </footer>
    </section>
  );
}
