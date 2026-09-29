"use client";

import { useState } from "react";
import { caseStudies } from "@/data/profile";
import s from "./site.module.css";

export default function CaseStudies() {
  const [active, setActive] = useState(0);
  const cs = caseStudies[active];

  return (
    <section id="work">
      <div className="container">
        <span className="eyebrow">01 — selected systems</span>
        <h2 className="section-title">Five systems, five different hard problems.</h2>
        <p className="section-lead">
          Each one had a failure mode that mattered — double payouts, leaked tenant data, slow AI calls, million-row imports.
          Here&apos;s what I built and how the request actually flows.
        </p>

        <div className={`reveal ${s.csWrap}`}>
          <div className={s.csTabs} role="tablist" aria-label="Case studies">
            {caseStudies.map((c, k) => (
              <button
                key={c.id}
                role="tab"
                id={`tab-${c.id}`}
                aria-selected={k === active}
                aria-controls={`panel-${c.id}`}
                className={`${s.csTab} ${k === active ? s.csTabOn : ""}`}
                onClick={() => setActive(k)}
              >
                <span className="mono">{String(k + 1).padStart(2, "0")}</span>
                <span>
                  <strong>{c.name}</strong>
                  <small>{c.domain}</small>
                </span>
              </button>
            ))}
          </div>

          <article key={cs.id} id={`panel-${cs.id}`} role="tabpanel" aria-labelledby={`tab-${cs.id}`} className={`card ${s.csPanel}`}>
            <p className="mono" style={{ color: "var(--accent)", fontSize: 13, margin: 0 }}>{cs.domain}</p>
            <h3 className="display">{cs.name}</h3>
            <p className={s.csTagline}>{cs.tagline}</p>

            <div className={s.csProblem}>
              <span className="mono">the problem</span>
              <p>{cs.problem}</p>
            </div>

            <div className={s.flow} aria-label="Request flow">
              {cs.flow.map((f, k) => (
                <div key={f} className={s.flowNode} style={{ animationDelay: `${k * 90}ms` }}>
                  <span className="mono">{f}</span>
                  {k < cs.flow.length - 1 && <i aria-hidden>→</i>}
                </div>
              ))}
            </div>

            <ul className={s.csList}>
              {cs.highlights.map((h) => <li key={h}>{h}</li>)}
            </ul>

            <div className={s.chips}>
              {cs.stack.map((t) => <span key={t} className="chip">{t}</span>)}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
