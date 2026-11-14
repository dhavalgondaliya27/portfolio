import Image from "next/image";
import {
  aboutPoints, caseStudies, disciplines, education, experience, extraRows, featuredIds, integrations,
  profile, serviceTags, services, stats, type CaseStudy,
} from "@/data/profile";
import CopyEmail from "./CopyEmail";
import Disciplines from "./Disciplines";
import ExpertiseBlock from "./Expertise";
import Playbook from "./Playbook";
import { ArrowRight, ArrowUp, ArrowUpRight, TerminalIcon } from "./Icons";

// "■ 01 / Selected work ................ Built. Shipped. Run in production."
function SectionLabel({ n, name, tag }: { n: string; name: string; tag: string }) {
  return (
    <div className="section-label">
      <span>{n} / {name}</span>
      <span>{tag}</span>
    </div>
  );
}

// "2+" → "2" with the "+" in the accent colour.
function Figure({ value }: { value: string }) {
  const m = value.match(/^([\d,.]+)(.*)$/);
  if (!m) return <>{value}</>;
  return <>{m[1]}{m[2] && <span className="fig-suffix">{m[2]}</span>}</>;
}

/* ---------------- stats strip ---------------- */
export function ProofStrip() {
  return (
    <section aria-label="At a glance" className="proof-strip">
      <div className="wrap proof-grid">
        {stats.map((s) => (
          <div key={s.label} className="proof">
            <strong className="serif"><Figure value={s.value} /></strong>
            <p>{s.label}</p>
          </div>
        ))}
        <a className="proof-link" href="#work">
          <span>Architecture.<br />In production.</span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

/* ---------------- 01 about ---------------- */
export function About() {
  return (
    <section id="about" className="chapter">
      <div className="wrap">
        <SectionLabel n="01" name="Profile" tag="Backend-first. Full stack capable." />
        <div className="about">
          <Disciplines items={disciplines} heading="Three principles. One standard." />
          <div className="about-copy reveal">
            <h2 className="serif chapter-h2">Code is the start. <em>Reliability is the product.</em></h2>
            <ul className="points">
              {aboutPoints.map((p) => <li key={p}>{p}</li>)}
            </ul>
            <div className="about-facts">
              <div><span>Currently</span><p>{profile.status}</p></div>
              <div><span>Based in</span><p>{profile.location} · Remote-ready</p></div>
              <div><span>Focus</span><p>Distributed backends, SaaS, payments, AI</p></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 02 work ---------------- */

// A browser-framed architecture diagram standing in for a product screenshot.
function ArchArt({ c, tall }: { c: CaseStudy; tall?: boolean }) {
  return (
    <div className={`arch ${tall ? "arch-tall" : ""}`}>
      <div className="arch-bar" aria-hidden="true">
        <span className="pb-dots"><i /><i /><i /></span>
        <span>{c.id}.prod / architecture</span>
        <ArrowUpRight size={10} />
      </div>
      <div className="arch-body">
        <div className="arch-grid" aria-hidden="true" />
        <p className="arch-kicker">Request lifecycle</p>
        <ol className="arch-flow" aria-label={`How a request flows through ${c.name}`}>
          {c.flow.map((f, i) => (
            <li key={f}>
              <span className="arch-step">{String(i + 1).padStart(2, "0")}</span>
              <span>{f}</span>
            </li>
          ))}
        </ol>
        <div className="arch-stack" aria-label="Stack">
          <TerminalIcon size={13} />
          <span>{c.stack.slice(0, 5).join("  ·  ")}</span>
        </div>
      </div>
      <div className="arch-foot">
        <span>{c.domain}</span>
      </div>
      <span className="arch-btn" aria-hidden="true"><ArrowUpRight size={16} /></span>
    </div>
  );
}

function CaseCaption({ c, n }: { c: CaseStudy; n: number }) {
  return (
    <div className="case-caption">
      <span className="case-num">{String(n).padStart(2, "0")}</span>
      <div>
        <p className="case-cat">{c.category}</p>
        <h3 className="serif">{c.name}</h3>
        <p className="case-sum">{c.summary}</p>
        <ul className="points">{c.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
        <ul className="chips" aria-label="Design patterns">
          {c.patterns.map((p) => <li key={p}>{p}</li>)}
        </ul>
      </div>
    </div>
  );
}

export function Work() {
  const featured = featuredIds.map((id) => caseStudies.find((c) => c.id === id)!).filter(Boolean);
  const [lead, ...pair] = featured;
  const otherCases = caseStudies.filter((c) => !featuredIds.includes(c.id));

  const rows = [
    ...otherCases.map((c) => ({ name: c.name, kind: c.category, badge: c.stack[c.stack.length - 2], detail: c.summary })),
    ...extraRows,
  ];

  return (
    <section id="work" className="chapter">
      <div className="wrap">
        <SectionLabel n="02" name="Selected systems" tag="Designed. Shipped. Run in production." />
        <div className="chapter-head reveal">
          <h2 className="serif chapter-h2">Ideas are cheap. <em>Production is the work.</em></h2>
          <p>Systems I designed, built and operate, with the architecture decisions behind them.</p>
        </div>

        <article className="case-lead reveal">
          <ArchArt c={lead} tall />
          <CaseCaption c={lead} n={1} />
        </article>

        <div className="case-pair">
          {pair.map((c, k) => (
            <article key={c.id} className="case-card reveal">
              <ArchArt c={c} />
              <CaseCaption c={c} n={k + 2} />
            </article>
          ))}
        </div>

        <div className="work-more">
          <p className="mono-label">Also engineered</p>
          {rows.map((r, i) => (
            <div key={r.name} className="more-row reveal">
              <div className="more-title">
                <small>{String(i + 4).padStart(2, "0")} / {r.kind}</small>
                <h4 className="serif">{r.name}{r.badge && <em>{r.badge}</em>}</h4>
              </div>
              <p>{r.detail}</p>
              <ArrowUpRight size={18} className="more-arrow" />
            </div>
          ))}
          <a className="explore-all" href={profile.github} target="_blank" rel="noopener">
            More on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 03 architecture ---------------- */
export function Expertise() {
  return (
    <section id="architecture" className="chapter">
      <div className="wrap">
        <SectionLabel n="03" name="System design" tag="Principles, applied in production" />
        <ExpertiseBlock />
      </div>
    </section>
  );
}

/* ---------------- 04 experience ---------------- */
export function Experience() {
  return (
    <section id="experience" className="chapter">
      <div className="wrap">
        <SectionLabel n="04" name="Experience" tag="Since Dec 2023" />
        <div className="chapter-head reveal">
          <h2 className="serif chapter-h2">Code ships once. <em>Systems run every day.</em></h2>
        </div>

        <div className="xp">
          {experience.map((e) => (
            <div key={e.company} className="xp-row reveal">
              <div className="xp-head">
                <span className="mono">{e.period}</span>
                <h3 className="serif">{e.company}</h3>
                <p>{e.role}</p>
              </div>
              <ul className="points">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          ))}
          <div className="xp-row xp-edu reveal">
            <div className="xp-head">
              <span className="mono">{education.period}</span>
              <h3 className="serif">{education.title}</h3>
            </div>
            <p>{education.place} · {education.note}</p>
          </div>
        </div>

        <div className="integr reveal">
          <div className="integr-intro">
            <p className="mono-label">Integrated in production</p>
            <p>Payments, messaging, AI and cloud services in live revenue paths.</p>
          </div>
          <ul className="integr-list">
            {integrations.map((n) => <li key={n} className="serif">{n}</li>)}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 05 playbook ---------------- */
export function PlaybookSection() {
  return (
    <section id="playbook" className="chapter">
      <div className="wrap">
        <SectionLabel n="05" name="Engineering playbook" tag="Written down. Enforced in code." />
        <div className="chapter-head reveal">
          <h2 className="serif chapter-h2">A standard. <em>Written in code.</em></h2>
          <p>Six rules, each one earned in a production system.</p>
        </div>
        <div className="reveal"><Playbook /></div>
      </div>
    </section>
  );
}

/* ---------------- 06 services ---------------- */
export function Services() {
  return (
    <section id="services" className="chapter">
      <div className="wrap">
        <SectionLabel n="06" name="Engagements" tag="For teams & founders" />
        <div className="banner reveal">
          <div className="banner-media" aria-hidden="true">
            <Image src={profile.portrait} alt="" fill sizes="(max-width: 900px) 100vw, 700px" className="banner-img" />
          </div>
          <div className="banner-shade" aria-hidden="true" />
          <div className="banner-copy">
            <p className="mono-label">Architecture to operations</p>
            <h2 className="serif">Make it work.<br />Make it <em>scale.</em></h2>
            <a className="pill pill-glass" href="#contact">Start a project <ArrowUpRight size={13} /></a>
          </div>
          <span className="banner-note mono-label">Full-time · Contract · Freelance</span>
        </div>

        <div className="services">
          <div className="services-intro reveal">
            <h3>The engineer who owns the backend.<br />From architecture to on-call.</h3>
            <ul className="mini-tags">
              {serviceTags.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <ul className="services-list reveal">
            {services.map((s) => (
              <li key={s.name}>
                <a href="#contact">
                  <span className="svc-play" aria-hidden="true"><ArrowRight size={14} /></span>
                  <span className="svc-text">
                    <small>{s.tag}</small>
                    <strong>{s.name}</strong>
                    <span>{s.note}</span>
                  </span>
                  <ArrowUpRight size={14} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 07 contact + footer ---------------- */
export function Contact() {
  const year = new Date().getFullYear();
  return (
    <section id="contact" className="chapter contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="wrap">
        <SectionLabel n="07" name="Contact" tag="Let's build something that lasts" />
        <div className="contact-inner reveal">
          <p className="mono-label"><span className="dot" />Open to roles &amp; freelance builds</p>
          <h2 className="serif">Reliable systems<br />start with <em>a hello.</em></h2>
          <a className="contact-cta" href={`mailto:${profile.email}`}>Let&apos;s connect <ArrowUpRight size={22} /></a>
          <p>{profile.availability}</p>
          <div className="contact-row">
            <CopyEmail email={profile.email} />
            <a className="text-link" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            <a className="text-link" href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
        </div>

        <footer className="footer">
          <div className="footer-top">
            <a href="#top" className="serif footer-name">{profile.name}.</a>
            <nav aria-label="Elsewhere">
              <a href={profile.linkedin} target="_blank" rel="noopener">LinkedIn <ArrowUpRight size={10} /></a>
              <a href={profile.github} target="_blank" rel="noopener">GitHub <ArrowUpRight size={10} /></a>
              <a href={profile.resume} target="_blank" rel="noopener">Résumé <ArrowUpRight size={10} /></a>
              <a href={`mailto:${profile.email}`}>Email <ArrowUpRight size={10} /></a>
              <a href="#top" className="to-top" aria-label="Back to top"><ArrowUp /></a>
            </nav>
          </div>
          <div className="footer-bottom">
            <span>© {year} {profile.name}</span>
            <span>Engineered to scale.</span>
            <span>{profile.location} / Remote</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
