"use client";

import { useEffect, useState } from "react";

// Turns every animation on the page on or off and remembers the choice.
export default function MotionToggle() {
  const [on, setOn] = useState(true);

  useEffect(() => {
    setOn(document.documentElement.dataset.motion !== "off");
  }, []);

  const toggle = () => {
    const next = on ? "off" : "on";
    document.documentElement.dataset.motion = next;
    try { localStorage.setItem("motion", next); } catch {}
    window.dispatchEvent(new Event("motionchange"));
    setOn(!on);
  };

  return (
    <button className="motion-btn" onClick={toggle} aria-pressed={on}>
      {on ? "MOTION ON" : "MOTION OFF"}
    </button>
  );
}
