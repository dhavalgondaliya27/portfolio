"use client";

import { useState } from "react";
import { expertise, profile } from "@/data/profile";
import { ArrowUpRight } from "./Icons";

// Left: heading and the numbered steps of the open discipline.
// Right: one-open-at-a-time accordion of disciplines.
export default function Expertise() {
  const [open, setOpen] = useState(expertise[0].id);
  const current = expertise.find((x) => x.id === open) ?? expertise[0];

  return (
    <div className="how-grid">
      <div className="how-left reveal">
        <h2 className="serif chapter-h2">System design. <em>From first principles to production.</em></h2>
        <p className="how-sub">Pick a domain. See the principles.</p>
        <div className="how-steps" aria-live="polite">
          <p className="eyebrow">{current.area}</p>
          <ol>
            {current.steps.map((s, i) => (
              <li key={s}>
                <span className="how-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="serif">{s}</span>
              </li>
            ))}
          </ol>
          <a className="text-link" href={profile.resume} target="_blank" rel="noopener">
            Full stack in my résumé <ArrowUpRight size={11} />
          </a>
        </div>
      </div>

      <div className="how-list reveal">
        {expertise.map((x, k) => {
          const isOpen = x.id === open;
          return (
            <div key={x.id} className={`how-item ${isOpen ? "open" : ""}`}>
              <button
                className="how-summary"
                aria-expanded={isOpen}
                aria-controls={`how-${x.id}`}
                onClick={() => setOpen(x.id)}
              >
                <span>
                  <small>{String(k + 1).padStart(2, "0")} / {x.area}</small>
                  <span className="serif">{x.title}</span>
                </span>
                <span className="how-plus" aria-hidden="true">{isOpen ? "−" : "+"}</span>
              </button>
              <div id={`how-${x.id}`} className="how-body" hidden={!isOpen}>
                <ul className="points">{x.points.map((pt) => <li key={pt}>{pt}</li>)}</ul>
                <p className="how-tools">{x.tools}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
