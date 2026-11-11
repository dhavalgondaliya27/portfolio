"use client";

import { useState } from "react";
import DotField, { type DotMode } from "./DotField";
import { ArrowUpRight } from "./Icons";

type Item = {
  id: string;
  label: string;
  visual: DotMode;
  caption: string;
  title: string;
  body: string;
  link: { href: string; text: string };
};

// Square tabs that swap a dot-field visual and a short statement.
// "stack": visual on top, tabs and copy below (About).
// "split": bordered panel, copy on the left, visual on the right (Impact).
export default function Disciplines({
  items, heading, layout = "stack", defaultId,
}: { items: readonly Item[]; heading: string; layout?: "stack" | "split"; defaultId?: string }) {
  const [active, setActive] = useState(defaultId ?? items[0].id);
  const idx = Math.max(0, items.findIndex((i) => i.id === active));
  const item = items[idx];
  const tabsId = `tabs-${items[0].id}`;

  const head = (
    <div className="disc-head">
      <span>{heading}</span>
      <span>{String(idx + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
    </div>
  );

  const tabs = (
    <div className="disc-tabs" role="tablist" aria-label={heading}>
      {items.map((it) => (
        <button
          key={it.id}
          id={`${tabsId}-${it.id}`}
          role="tab"
          aria-selected={it.id === active}
          aria-controls={`${tabsId}-panel`}
          className="disc-tab"
          onClick={() => setActive(it.id)}
        >
          <span>{it.label}</span>
          <ArrowUpRight size={11} />
        </button>
      ))}
    </div>
  );

  const copy = (
    <div id={`${tabsId}-panel`} role="tabpanel" aria-labelledby={`${tabsId}-${item.id}`} className="disc-copy" key={item.id}>
      <h3 className="serif">{item.title}</h3>
      <p>{item.body}</p>
      <a className="text-link" href={item.link.href}>{item.link.text} <ArrowUpRight size={11} /></a>
      <small>Choose a perspective.</small>
    </div>
  );

  if (layout === "split") {
    return (
      <div className="disc disc-split reveal">
        <div className="disc-split-left">
          {head}
          {tabs}
          {copy}
        </div>
        <DotField mode={item.visual} caption={item.caption} />
      </div>
    );
  }

  return (
    <div className="disc reveal">
      {head}
      <DotField mode={item.visual} caption={item.caption} />
      {tabs}
      {copy}
    </div>
  );
}
