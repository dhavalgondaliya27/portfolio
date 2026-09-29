"use client";

import { useEffect, useState } from "react";
import { traces } from "@/data/profile";
import s from "./site.module.css";

// Animated request trace: steps light up one by one, then the response lands.
export default function TracePanel() {
  const [i, setI] = useState(0);
  const [step, setStep] = useState(0);
  const trace = traces[i];
  const done = step > trace.steps.length;

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) { setStep(trace.steps.length + 1); return; }
    const delay = done ? 2600 : step === 0 ? 500 : 420;
    const t = setTimeout(() => {
      if (done) { setStep(0); setI((i + 1) % traces.length); }
      else setStep(step + 1);
    }, delay);
    return () => clearTimeout(t);
  }, [step, i, done, trace.steps.length]);

  // Deterministic per-step durations that sum to the trace total.
  const weights = trace.steps.map((_, k) => ((k * 37 + i * 11) % 5) + 1);
  const total = weights.reduce((a, b) => a + b, 0);

  return (
    <div className={`card ${s.trace}`} aria-label="Illustration of an API request trace" role="img">
      <div className={s.traceBar}>
        <span /><span /><span />
        <em className="mono">trace · live</em>
      </div>
      <div className={`mono ${s.traceBody}`}>
        <div className={s.traceReq}>
          <span className={trace.method === "GET" ? s.get : s.post}>{trace.method}</span>
          <span>{trace.path}</span>
        </div>
        <ul className={s.traceSteps}>
          {trace.steps.map((name, k) => {
            const ms = Math.max(1, Math.round((weights[k] / total) * trace.ms));
            const active = step > k;
            return (
              <li key={name + k} className={active ? s.stepOn : ""}>
                <span className={s.stepName}>{k === trace.steps.length - 1 ? "└─" : "├─"} {name}</span>
                <span className={s.stepBar}><i style={{ width: active ? `${Math.max(8, (weights[k] / 5) * 100)}%` : 0 }} /></span>
                <span className={s.stepMs}>{active ? `${ms}ms` : ""}</span>
              </li>
            );
          })}
        </ul>
        <div className={`${s.traceRes} ${done ? s.resOn : ""}`}>
          <span className={s.ok}>200 OK</span>
          <span>{trace.ms}ms</span>
          <span className={s.traceMeta}>idempotent · logged · retried 0×</span>
        </div>
      </div>
    </div>
  );
}
