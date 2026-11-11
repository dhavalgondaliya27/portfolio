import Image from "next/image";
import {
  caseStudies, disciplines, experience, featuredIds, highlightedMore, impact, integrations, journey,
  moreWork, profile, services, stats, travels, type CaseStudy,
} from "@/data/profile";
import CopyEmail from "./CopyEmail";
import Disciplines from "./Disciplines";
import ExpertiseBlock from "./Expertise";
import Playbook from "./Playbook";
import { ArrowRight, ArrowUp, ArrowUpRight, FileIcon, GitHubIcon, LinkedInIcon, TerminalIcon } from "./Icons";

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
          <span>The systems.<br />The production impact.</span>
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
        <SectionLabel n="01" name="The engineer behind the systems" tag="A backend-first perspective" />
        <div className="about">
          <Disciplines items={disciplines} heading="Three disciplines. One standard." />
          <div className="about-copy reveal">
            <h2 className="serif chapter-h2">Code is the starting point. <em>Reliability is the product.</em></h2>
            <p className="about-lead">I connect product requirements, system design and cloud operations.</p>
            <p className="about-body">
              Since 2023 I&apos;ve owned backends end to end at Thinknovus and Equitysoft, across{" "}
              <strong>the API, the data layer and the infrastructure it runs on.</strong>{" "}
              Payment rails, multi-tenant SaaS, real-time leaderboards and AI pipelines, plus the React and Next.js screens on top.
            </p>
            <div className="about-facts">
              <div><span>Currently</span><p>{profile.status}</p></div>
              <div><span>Based in</span><p>{profile.location} · Remote-ready</p></div>
              <div><span>Focus</span><p>Distributed backends, SaaS, payments, AI</p></div>
            </div>
            <a className="text-link" href="#journey">Read my story <ArrowUpRight size={12} /></a>
            <p className="mono-label about-motto">Systems mind. &nbsp; Product instinct. &nbsp; Operator&apos;s discipline.</p>
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
        <details className="case-details">
          <summary className="text-link">Explore the build <ArrowUpRight size={12} /></summary>
          <ul>{c.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
          <p className="case-stack">{c.stack.join(" · ")}</p>
        </details>
      </div>
    </div>
  );
}

export function Work() {
  const featured = featuredIds.map((id) => caseStudies.find((c) => c.id === id)!).filter(Boolean);
  const [lead, ...pair] = featured;
  const otherCases = caseStudies.filter((c) => !featuredIds.includes(c.id));
  const highlighted = moreWork.filter((w) => highlightedMore.includes(w.name));
  const rest = moreWork.filter((w) => !highlightedMore.includes(w.name));

  const rows = [
    ...otherCases.map((c) => ({ name: c.name, kind: c.category, badge: c.stack[c.stack.length - 2], detail: c.summary })),
    ...highlighted.map((w) => ({ name: w.name, kind: w.kind, badge: w.badge ?? "", detail: w.detail })),
  ];

  return (
    <section id="work" className="chapter">
      <div className="wrap">
        <SectionLabel n="02" name="Selected work" tag="Designed. Shipped. Run in production." />
        <div className="chapter-head reveal">
          <h2 className="serif chapter-h2">Ideas are cheap. <em>Production is the work.</em></h2>
          <p>From payment rails to multi-tenant SaaS and AI pipelines: a few of the systems I&apos;ve designed, built and kept running.</p>
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
          <p className="mono-label">More ways I build</p>
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
          <details className="more-details">
            <summary>
              <span>Inside {rest.length} more client builds</span>
              <span className="plus" aria-hidden="true">+</span>
            </summary>
            <div className="more-list">
              {rest.map((w) => (
                <div key={w.name}>
                  <h5>{w.name} <small>· {w.kind}</small></h5>
                  <p>{w.detail}</p>
                  <p className="case-stack">{w.tags.join(" · ")}</p>
                </div>
              ))}
            </div>
          </details>
          <a className="explore-all" href={profile.github} target="_blank" rel="noopener">
            Explore all work on GitHub <ArrowRight size={16} />
          </a>
        </div>

        <nav className="link-row" aria-label="Work shortcuts">
          <a className="text-link" href={profile.github} target="_blank" rel="noopener">All code <ArrowUpRight size={11} /></a>
          <a className="text-link" href="#impact">Experience <ArrowUpRight size={11} /></a>
          <a className="text-link" href="#playbook">Engineering playbook <ArrowUpRight size={11} /></a>
          <a className="text-link" href={profile.resume} target="_blank" rel="noopener">Résumé (PDF) <ArrowUpRight size={11} /></a>
        </nav>
      </div>
    </section>
  );
}

/* ---------------- 03 how I work ---------------- */
export function Expertise() {
  return (
    <section id="expertise" className="chapter">
      <div className="wrap">
        <SectionLabel n="03" name="How I think & work" tag="Depth meets discipline" />
        <ExpertiseBlock />
      </div>
    </section>
  );
}

/* ---------------- 04 impact ---------------- */
export function Impact() {
  const now = experience[0];
  return (
    <section id="impact" className="chapter impact">
      <div className="wrap">
        <SectionLabel n="04" name="The work, in production" tag="Systems. Teams. Trust." />
        <div className="chapter-head reveal">
          <h2 className="serif chapter-h2">Code ships once. <em>Systems run every day.</em></h2>
          <p>Every endpoint, job and integration is something a business depends on at 3 a.m. That&apos;s the standard I build to.</p>
        </div>

        <div className="impact-lead reveal">
          <strong className="impact-value serif"><Figure value={impact.lead.value} /></strong>
          <div className="impact-context">
            <h3 className="serif">{impact.lead.title[0]}<br />{impact.lead.title[1]}</h3>
            <p>{impact.lead.body}</p>
            <a className="text-link" href="#work">The work behind the number <ArrowUpRight size={11} /></a>
          </div>
        </div>

        <div className="impact-pair">
          {impact.pair.map((p) => (
            <div key={p.title} className="reveal">
              <strong className="serif"><Figure value={p.value} /></strong>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
          <div className="impact-thread reveal">
            <p className="mono-label">The common thread</p>
            <p className="serif">{impact.thread[0]}<br />{impact.thread[1]}<br /><em>{impact.thread[2]}</em></p>
          </div>
        </div>

        <div className="story">
          <div className="story-copy reveal">
            <p className="mono-label">{now.company} / Where I build now</p>
            <h3 className="serif chapter-h2 small">From one API. <em>To a portfolio of products.</em></h3>
            <p>
              At {now.company} I own backend delivery for client products across commerce, healthcare, sports, events and social:{" "}
              <strong>API design, data modelling, background processing, AWS deployments and production support.</strong>
            </p>
            <details className="case-details">
              <summary className="text-link">What I own there <ArrowUpRight size={12} /></summary>
              <ul>{now.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </details>
          </div>
          <ol className="story-line reveal">
            {[...experience].reverse().map((e) => (
              <li key={e.company}>
                <span className="mono">{e.when}</span>
                <p><strong>{e.lead}</strong> {e.role}, {e.company}. {e.summary}</p>
              </li>
            ))}
            <li>
              <span className="mono">Today</span>
              <p><strong>Building for what comes next.</strong> Distributed backends, SaaS platforms, AI features and the cloud underneath.</p>
              <a className="text-link" href={profile.linkedin} target="_blank" rel="noopener">Full record on LinkedIn <ArrowUpRight size={11} /></a>
            </li>
          </ol>
        </div>

        <Disciplines items={travels} heading="How the work travels" layout="split" defaultId="deliver" />

        <div className="integr reveal">
          <div className="integr-intro">
            <p className="mono-label">Integrated in production.<br />Across 18 codebases.</p>
            <p>The third-party platforms I&apos;ve wired into live revenue, messaging and AI paths.</p>
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
          <div>
            <p>Six rules I build by, each one earned in a production system, not read in a blog post.</p>
            <a className="text-link" href={profile.github} target="_blank" rel="noopener">See my code on GitHub <ArrowUpRight size={11} /></a>
          </div>
        </div>
        <div className="reveal"><Playbook /></div>

        <div className="channels">
          <div className="channels-intro reveal">
            <p className="mono-label">The conversation continues</p>
            <h3 className="serif">Different channels. <em>The same standards.</em></h3>
          </div>
          <a className="channel reveal" href={profile.github} target="_blank" rel="noopener">
            <GitHubIcon />
            <p className="mono-label">GitHub / dhavalgondaliya27</p>
            <h4 className="serif">Code, <em>in the open.</em></h4>
            <p>Repositories, experiments and the patterns behind this site.</p>
            <span className="channel-cta">Explore my GitHub <ArrowUpRight size={13} /></span>
          </a>
          <a className="channel reveal" href={profile.linkedin} target="_blank" rel="noopener">
            <LinkedInIcon />
            <p className="mono-label">LinkedIn / {profile.name}</p>
            <h4 className="serif">The career <em>behind the code.</em></h4>
            <p>Roles, recommendations and what I&apos;m building now.</p>
            <span className="channel-cta">Connect on LinkedIn <ArrowUpRight size={13} /></span>
          </a>
        </div>
        <a className="resume-row reveal" href={profile.resume} target="_blank" rel="noopener">
          <FileIcon />
          <span>Download my résumé: experience, stack and education on one page</span>
          <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

/* ---------------- 06 services ---------------- */
export function Services() {
  return (
    <section id="services" className="chapter">
      <div className="wrap">
        <SectionLabel n="06" name="From idea to production" tag="For teams & founders" />
        <div className="banner reveal">
          <div className="banner-media" aria-hidden="true">
            <Image src={profile.portrait} alt="" fill sizes="(max-width: 900px) 100vw, 700px" className="banner-img" />
          </div>
          <div className="banner-shade" aria-hidden="true" />
          <div className="banner-copy">
            <p className="mono-label">A different kind of hire</p>
            <h2 className="serif">Make it work.<br />Make it <em>scale.</em></h2>
            <a className="pill pill-glass" href="#contact">Start a project <ArrowUpRight size={13} /></a>
          </div>
          <span className="banner-note mono-label">Full-time · Contract · Freelance</span>
        </div>

        <div className="services">
          <div className="services-intro reveal">
            <h3>Taking a product to production.<br />Or taking one further.</h3>
            <p>
              I join as the engineer who owns the backend: architecture, delivery and the operations after launch.
              Startups get a builder who has shipped payments, SaaS and AI to production; teams get someone who
              writes the runbook as well as the code.
            </p>
            <ul className="mini-tags">
              <li>Node.js &amp; NestJS</li><li>PostgreSQL &amp; MongoDB</li><li>AWS</li><li>System design</li>
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

/* ---------------- interlude: journey ---------------- */
export function Journey() {
  return (
    <section id="journey" className="chapter">
      <div className="wrap">
        <SectionLabel n="Interlude" name="Still building" tag="A journey in production" />
        <div className="journey-grid">
          <h2 className="serif journey-h2 reveal">Started with Node.js. <em>Kept asking why.</em></h2>
          <ol className="timeline">
            {journey.map((j) => (
              <li key={j.when + j.title} className={`reveal ${j.next ? "next" : ""}`}>
                <span className="mono">{j.when}</span>
                <h3>{j.title}</h3>
                <p>{j.body}</p>
              </li>
            ))}
          </ol>
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
        <SectionLabel n="07" name="The next chapter" tag="Let's build something that lasts" />
        <div className="contact-inner reveal">
          <p className="mono-label"><span className="dot" />Open to roles &amp; freelance builds</p>
          <h2 className="serif">Reliable products<br />start with <em>a hello.</em></h2>
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
            <span>Engineered to last. Always shipping.</span>
            <span>{profile.location} / Remote</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
