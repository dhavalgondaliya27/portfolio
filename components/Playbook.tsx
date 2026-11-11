"use client";

import { useState } from "react";
import { playbook, playbookFilters } from "@/data/profile";

// Filter pills over a grid of code cards — one card per engineering rule.
export default function Playbook() {
  const [filter, setFilter] = useState(playbookFilters[0]);
  const shown = filter === playbookFilters[0] ? playbook : playbook.filter((p) => p.group === filter);

  return (
    <>
      <div className="pb-bar">
        <div className="pb-filters" role="group" aria-label="Filter rules">
          {playbookFilters.map((f) => (
            <button key={f} className="pb-filter" aria-pressed={f === filter} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>
        <span className="mono-label">{String(shown.length).padStart(2, "0")} rules in production</span>
      </div>

      <div className="pb-grid">
        {shown.map((p) => (
          <article key={p.title} className="pb-card">
            <div className="pb-code">
              <div className="pb-code-bar">
                <span className="pb-dots" aria-hidden="true"><i /><i /><i /></span>
                <span>{p.file}</span>
              </div>
              <pre><code>{p.code}</code></pre>
              <span className="pb-tag">{p.group}</span>
            </div>
            <p className="pb-meta">{p.meta}</p>
            <h3 className="serif">{p.title}</h3>
            <p className="pb-sub">{p.sub}</p>
            <p className="pb-proof">{p.proof}</p>
          </article>
        ))}
      </div>
    </>
  );
}
