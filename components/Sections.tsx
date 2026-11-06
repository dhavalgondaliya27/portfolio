import {
  caseStudies, experience, featuredIds, highlightedMore, integrations, journey, moreWork, principles, profile, skills, stats,
} from "@/data/profile";
import CopyEmail from "./CopyEmail";
import Sides from "./Sides";

export function Stats() {
  return (
    <section aria-label="In numbers" className="wrap">
      <dl className="stats">
        {stats.map((s) => (
          <div key={s.label} className="stat reveal">
            <dt className="serif">{s.value}</dt>
            <dd>{s.label}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="band band-alt">
      <div className="wrap about">
        <div className="reveal">
          <h2 className="serif h2">Every product has <em>two sides.</em></h2>
          <p className="lead">{profile.about}</p>
          <p className="label">Pick a side to see what I do there.</p>
        </div>
        <Sides />
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
    <section id="work" className="band">
      <div className="wrap">
        <div className="section-head reveal">
          <h2 className="serif h2">Systems that <em>hold up</em> in production.</h2>
          <p>Each one had a failure mode that mattered: double payouts, leaked tenant data, slow AI calls, million-row imports.</p>
        </div>

        <div className="work-grid">
          {featured.map((c) => (
            <article key={c.id} className="work-card reveal">
              <ol className="work-art" aria-label={`How a request flows through ${c.name}`}>
                {c.flow.map((f) => <li key={f}>{f}</li>)}
              </ol>
              <div className="work-info">
                <p className="work-kind">{c.domain}</p>
                <h3 className="serif">{c.name}</h3>
                <p>{c.problem}</p>
                <ul>{c.highlights.map((h) => <li key={h}>{h}</li>)}</ul>
                <p className="work-stack">{c.stack.join(" · ")}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="more">
          <h3>More things I&apos;ve built</h3>
          {otherCases.map((c) => (
            <div key={c.id} className="more-row reveal">
              <h4 className="serif">{c.name}</h4>
              <p>{c.problem} {c.highlights[1] ?? ""}</p>
              <p className="work-stack">{c.stack.slice(0, 4).join(" · ")}</p>
            </div>
          ))}
          {highlighted.map((w) => (
            <div key={w.name} className="more-row reveal">
              <h4 className="serif">{w.name}</h4>
              <p>{w.detail}</p>
              <p className="work-stack">{w.tags.join(" · ")}</p>
            </div>
          ))}
          <details>
            <summary>
              <span className="closed">Show {rest.length} more client projects ↓</span>
              <span className="opened">Show fewer ↑</span>
            </summary>
            {rest.map((w) => (
              <div key={w.name} className="more-row">
                <h4 className="serif">{w.name}</h4>
                <p>{w.kind}. {w.detail}</p>
                <p className="work-stack">{w.tags.join(" · ")}</p>
              </div>
            ))}
          </details>
        </div>
      </div>
    </section>
  );
}

export function HowIBuild() {
  return (
    <section id="stack" className="band band-alt">
      <div className="wrap">
        <h2 className="serif h2 reveal">How I <em>build.</em></h2>
        <ul className="rules">
          {principles.map((p) => (
            <li key={p.title} className="reveal">
              <h3 className="serif">{p.title}</h3>
              <p>{p.body}</p>
              <span className="proof">{p.proof}</span>
            </li>
          ))}
        </ul>

        <div className="stack-grid">
          {skills.map((g) => (
            <div key={g.group} className="stack-card reveal">
              <h3>{g.group}</h3>
              <div className="chips">
                {g.items.map((i) => <span key={i} className="chip">{i}</span>)}
              </div>
            </div>
          ))}
        </div>

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

export function Journey() {
  return (
    <section id="journey" className="band">
      <div className="wrap journey">
        <h2 className="serif h2 reveal">The <em>journey</em> so far.</h2>
        <ol>
          {journey.map((j) => {
            const job = j.company ? experience.find((e) => e.company === j.company) : undefined;
            return (
              <li key={j.when} className="reveal">
                <span className={`serif when ${j.next ? "next" : ""}`}>{j.when}</span>
                <div>
                  <h3>{j.title}</h3>
                  <p>{j.body}</p>
                  {job && <ul>{job.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>}
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="wrap reveal">
          <h2 className="serif">Need a product that <em>holds up?</em></h2>
          <p>{profile.availability}</p>
          <div className="contact-row">
            <CopyEmail email={profile.email} />
            <a className="text-link" href={`mailto:${profile.email}`}>{profile.email}</a>
            <a className="text-link" href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
          </div>
        </div>
      </section>
      <footer className="wrap footer">
        <span>© {new Date().getFullYear()} {profile.name} · {profile.location}</span>
        <nav aria-label="Elsewhere">
          <a className="nav-link" href={profile.github} target="_blank" rel="noopener">GitHub</a>
          <a className="nav-link" href={profile.linkedin} target="_blank" rel="noopener">LinkedIn</a>
          <a className="nav-link" href={profile.resume} target="_blank" rel="noopener">Résumé</a>
          <a className="nav-link" href="#top">Back to top ↑</a>
        </nav>
      </footer>
    </>
  );
}
