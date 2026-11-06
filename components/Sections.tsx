import {
  caseStudies, experience, expertise, featuredIds, highlightedMore, integrations, journey, moreWork, principles, profile, stats,
} from "@/data/profile";
import CopyEmail from "./CopyEmail";
import Sides from "./Sides";

const chapters = ["About", "Work", "Expertise", "In numbers", "Journey", "Contact"];

// Top-of-section label row: "● Work" on the left, its place in the page on the right.
function SectionLabel({ name }: { name: string }) {
  const i = chapters.indexOf(name) + 1;
  return (
    <div className="section-label">
      <span>{name}</span>
      <span>{String(i).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}</span>
    </div>
  );
}

// "2+" → "2" with the "+" in the accent colour.
function Figure({ value }: { value: string }) {
  const m = value.match(/^([\d,.]+)(.*)$/);
  if (!m) return <>{value}</>;
  return <>{m[1]}{m[2] && <span>{m[2]}</span>}</>;
}

export function ProofStrip() {
  return (
    <section aria-label="At a glance" className="proof-strip">
      <div className="wrap proof-grid">
        {stats.map((s) => (
          <div key={s.label} className="proof reveal">
            <strong className="serif"><Figure value={s.value} /></strong>
            <p>{s.label}</p>
          </div>
        ))}
        <a className="proof-link" href="#work">See the work <span aria-hidden="true">↓</span></a>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="chapter">
      <div className="wrap">
        <SectionLabel name="About" />
        <div className="about">
          <div className="reveal">
            <h2 className="serif chapter-h2">Code is where I start. <em>Products that hold up are the point.</em></h2>
            <p className="lead">{profile.about}</p>
            <a className="text-link" href="#journey">Read my journey ↓</a>
          </div>
          <Sides />
        </div>
      </div>
    </section>
  );
}

export function Work() {
  const featured = featuredIds.map((id) => caseStudies.find((c) => c.id === id)!).filter(Boolean);
  const otherCases = caseStudies.filter((c) => !featuredIds.includes(c.id));
  const highlighted = moreWork.filter((w) => highlightedMore.includes(w.name));
  const rest = moreWork.filter((w) => !highlightedMore.includes(w.name));

  return (
    <section id="work" className="chapter chapter-alt">
      <div className="wrap">
        <SectionLabel name="Work" />
        <div className="chapter-head reveal">
          <h2 className="serif chapter-h2">Good ideas need systems. <em>These are mine.</em></h2>
          <p>Each one had a failure mode that mattered: double payouts, leaked tenant data, slow AI calls, million-row imports.</p>
        </div>

        <div className="work-gallery">
          {featured.map((c, k) => (
            <article key={c.id} className={`work-piece reveal ${k === 0 ? "work-piece-wide" : ""}`}>
              <div className="work-artwork">
                <div className="work-browser-bar" aria-hidden="true">
                  <span><i /><i /><i /></span>
                  <span>{c.id}.request-flow</span>
                </div>
                <ol className="work-flow" aria-label={`How a request flows through ${c.name}`}>
                  {c.flow.map((f, i) => (
                    <li key={f}><span className="step">{String(i + 1).padStart(2, "0")}</span>{f}</li>
                  ))}
                </ol>
                <div className="work-artifact-label" aria-hidden="true">
                  <span>{c.domain}</span>
                  <span>{c.stack.slice(0, 3).join(" · ")}</span>
                </div>
              </div>
              <div className="work-caption">
                <span className="work-number">{String(k + 1).padStart(2, "0")}</span>
                <div>
                  <p className="eyebrow">{c.domain}</p>
                  <h3 className="serif">{c.name}</h3>
                  <p>{c.problem}</p>
                  <details className="work-details">
                    <summary>What I built <span aria-hidden="true">+</span></summary>
                    <ul>{c.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                    <p className="work-stack">{c.stack.join(" · ")}</p>
                  </details>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="work-more">
          <p className="eyebrow">More ways I build</p>
          {otherCases.map((c) => (
            <div key={c.id} className="more-row reveal">
              <div>
                <small>{c.domain}</small>
                <h4 className="serif">{c.name}<em>{c.stack[c.stack.length - 1]}</em></h4>
              </div>
              <p>{c.problem}</p>
            </div>
          ))}
          {highlighted.map((w) => (
            <div key={w.name} className="more-row reveal">
              <div>
                <small>{w.kind}</small>
                <h4 className="serif">{w.name}<em>Next.js · React</em></h4>
              </div>
              <p>{w.detail}</p>
            </div>
          ))}
          <details className="more-details">
            <summary>
              <span className="closed">{rest.length} more client projects</span>
              <span className="opened">Show fewer</span>
              <span aria-hidden="true">+</span>
            </summary>
            <div className="more-list">
              {rest.map((w) => (
                <div key={w.name}>
                  <h5>{w.name} <small>· {w.kind}</small></h5>
                  <p>{w.detail}</p>
                  <p className="work-stack">{w.tags.join(" · ")}</p>
                </div>
              ))}
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}

export function Expertise() {
  return (
    <section id="expertise" className="chapter">
      <div className="wrap">
        <SectionLabel name="Expertise" />
        <div className="expertise-grid">
          <div className="expertise-intro reveal">
            <h2 className="serif chapter-h2 small">How I work. <em>From schema to screen.</em></h2>
            <p className="lead">Backend first, with the frontend and the cloud close behind. Open a row to see what I bring and the tools I use.</p>
          </div>
          <div className="expertise-list reveal">
            {expertise.map((x, k) => (
              <details key={x.id} className="expertise-item" name="expertise" open={k === 0}>
                <summary>
                  <span>
                    <small className="eyebrow">{x.label}</small>
                    <span className="serif">{x.title}</span>
                  </span>
                  <span className="plus" aria-hidden="true">+</span>
                </summary>
                <div className="expertise-body">
                  <p>{x.body}</p>
                  <p className="strengths">{x.strengths}</p>
                  <div className="chips">{x.tools.map((t) => <span key={t} className="chip">{t}</span>)}</div>
                </div>
              </details>
            ))}
          </div>
        </div>

        <ul className="rules">
          {principles.map((p) => (
            <li key={p.title} className="reveal">
              <h3 className="serif">{p.title}</h3>
              <p>{p.body}</p>
              <span className="proof">{p.proof}</span>
            </li>
          ))}
        </ul>

        <div className="integrations reveal">
          <p className="label">Integrated in production</p>
          <div className="chips">
            {integrations.map((n) => <span key={n} className="chip">{n}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Impact() {
  const [years, codebases, platforms, gateways] = stats;
  return (
    <section className="chapter impact-stage" aria-labelledby="impact-title">
      <div className="wrap impact-content">
        <SectionLabel name="In numbers" />
        <div className="impact-title reveal">
          <h2 id="impact-title" className="serif chapter-h2">Numbers from production. <em>Not from a slide.</em></h2>
        </div>
        <div className="impact-lead reveal">
          <strong className="impact-value serif"><Figure value={codebases.value} /></strong>
          <div className="impact-context">
            <h3 className="serif">Client API codebases. Each one live.</h3>
            <p>Over {years.value} years at Equitysoft and Thinknovus: commerce, health, sports, events and social products, each with its own integrations, background jobs and infrastructure.</p>
          </div>
        </div>
        <div className="impact-pair">
          <div className="reveal">
            <strong className="serif"><Figure value={platforms.value} /></strong>
            <h3>{platforms.label}</h3>
            <p>Stripe, Razorpay, Paystack, Twilio, RingCentral, Firebase, OpenAI and more, all running in production.</p>
          </div>
          <div className="reveal">
            <strong className="serif"><Figure value={gateways.value} /></strong>
            <h3>{gateways.label}</h3>
            <p>Charges, refunds and scheduled payouts that reconcile, with idempotent writes so a retry never pays twice.</p>
          </div>
          <div className="impact-principle reveal">
            <p className="eyebrow">The common thread</p>
            <p className="serif">If the system can&apos;t be trusted with money and data, nothing on the screen matters.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="chapter chapter-alt">
      <div className="wrap">
        <SectionLabel name="Journey" />
        <div className="journey-grid">
          <div className="reveal">
            <h2 className="serif chapter-h2 small">Started with Node.js. <em>Kept building outward.</em></h2>
            <p className="lead">From REST APIs to payments, multi-tenant SaaS, AI pipelines and the cloud underneath, and now the React and Next.js screens on top.</p>
          </div>
          <div className="timeline">
            {journey.map((j) => {
              const job = j.company ? experience.find((e) => e.company === j.company) : undefined;
              return (
                <article key={j.when} className={`reveal ${j.next ? "next" : ""}`}>
                  <span className="mono">{j.when}</span>
                  <h3>{j.title}</h3>
                  <p>{j.body}</p>
                  {job && (
                    <details className="job-details">
                      <summary>What I did there <span aria-hidden="true">+</span></summary>
                      <ul>{job.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                    </details>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="chapter contact">
      <div className="wrap">
        <SectionLabel name="Contact" />
        <div className="contact-inner reveal">
          <h2 className="serif">Good products start with <em>a conversation.</em></h2>
          <a className="contact-cta" href={`mailto:${profile.email}`}>{profile.email} <span aria-hidden="true">↗</span></a>
          <p>{profile.availability}</p>
          <div className="contact-row">
            <CopyEmail email={profile.email} />
            <a className="text-link" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            <a className="text-link" href={profile.resume} target="_blank" rel="noopener">Résumé ↗</a>
          </div>
        </div>
        <footer className="footer">
          <a href="#top" className="serif footer-name">{profile.name}</a>
          <nav aria-label="Elsewhere">
            <a className="nav-link" href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a>
            <a className="nav-link" href={profile.github} target="_blank" rel="noopener">GitHub</a>
            <a className="nav-link" href="#top">Back to top ↑</a>
          </nav>
          <span>© {new Date().getFullYear()} · {profile.location}</span>
        </footer>
      </div>
    </section>
  );
}
