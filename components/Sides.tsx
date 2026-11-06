"use client";

import { useState } from "react";
import { sides } from "@/data/profile";

// Frontend / Backend / Cloud switcher in the About section.
export default function Sides() {
  const [active, setActive] = useState("back");
  const side = sides.find((s) => s.id === active) ?? sides[0];

  return (
    <div className="reveal">
      <div className="side-tabs" role="tablist" aria-label="What I do">
        {sides.map((s) => (
          <button
            key={s.id}
            id={`side-tab-${s.id}`}
            role="tab"
            aria-selected={s.id === active}
            aria-controls="side-panel"
            className="side-tab"
            onClick={() => setActive(s.id)}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div id="side-panel" role="tabpanel" aria-labelledby={`side-tab-${side.id}`} className="side-card">
        <h3 className="serif">{side.title}</h3>
        <p>{side.body}</p>
        <div className="chips">
          {side.tags.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>
      </div>
    </div>
  );
}
