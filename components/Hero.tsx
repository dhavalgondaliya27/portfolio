"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { profile } from "@/data/profile";

type Piece = { sx: number; sy: number; x: number; y: number; dx: number; dy: number; delay: number };

const clamp = (v: number) => Math.max(0, Math.min(1, v));

export default function Hero() {
  const imgRef = useRef<HTMLImageElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // On scroll the portrait is redrawn on a canvas as small square pieces that
  // crumble from left to right and drift up and away; scrolling back rebuilds it.
  // The headline block drifts up and fades at the same time.
  useEffect(() => {
    const img = imgRef.current;
    const cv = canvasRef.current;
    const text = textRef.current;
    const ctx = cv?.getContext("2d");
    if (!img || !cv || !text || !ctx) return;

    let pieces: Piece[] | null = null;
    let source: HTMLCanvasElement | null = null;
    let cell = 6;
    let raf = 0;
    let broken = false;

    const motionOn = () => document.documentElement.dataset.motion === "on";

    const build = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      cv.width = Math.round(cv.clientWidth * dpr);
      cv.height = Math.round(cv.clientHeight * dpr);
      // offsetLeft/Top ignore the intro's scale transform, so pieces line up with the photo.
      const ox = img.offsetLeft * dpr;
      const oy = img.offsetTop * dpr;
      const iw = Math.round(img.offsetWidth * dpr);
      const ih = Math.round(img.offsetHeight * dpr);

      source = document.createElement("canvas");
      source.width = iw;
      source.height = ih;
      const sctx = source.getContext("2d");
      if (!sctx) return;
      sctx.drawImage(img, 0, 0, iw, ih);
      let data: Uint8ClampedArray | null = null;
      try { data = sctx.getImageData(0, 0, iw, ih).data; } catch { data = null; }

      cell = Math.max(4, Math.round(6 * dpr));
      const half = cell >> 1;
      const list: Piece[] = [];
      for (let y = 0; y < ih; y += cell) {
        for (let x = 0; x < iw; x += cell) {
          if (data) {
            const i = (Math.min(ih - 1, y + half) * iw + Math.min(iw - 1, x + half)) * 4;
            if (data[i] + data[i + 1] + data[i + 2] < 45) continue; // the black around the figure
          }
          const angle = -0.15 - Math.random() * 0.95; // right and upward
          const dist = (0.25 + Math.random() * 0.75) * cv.width * 0.45;
          list.push({
            sx: x, sy: y, x: ox + x, y: oy + y,
            dx: Math.cos(angle) * dist, dy: Math.sin(angle) * dist,
            delay: Math.min(0.7, (x / iw) * 0.45 + (1 - y / ih) * 0.08 + Math.random() * 0.2),
          });
        }
      }
      pieces = list;
    };

    const draw = () => {
      raf = 0;
      const on = motionOn();
      const y = window.scrollY;

      const drift = on ? clamp((y - 150) / 700) : 0;
      text.style.transform = drift ? `translateY(${-70 * drift}px)` : "";
      text.style.opacity = drift ? String(1 - 0.65 * drift) : "";

      const p = on ? clamp(y / (window.innerHeight * 0.75)) : 0;
      const shatter = p > 0.003;
      if (shatter !== broken) {
        broken = shatter;
        img.classList.toggle("is-hidden", shatter);
      }
      ctx.clearRect(0, 0, cv.width, cv.height);
      if (!shatter) return;
      if (!pieces) build();
      if (!pieces || !source) return;

      for (const q of pieces) {
        let t = (p - q.delay) / 0.32;
        if (t >= 1) continue;
        if (t < 0) t = 0;
        const e = t * t;
        const size = cell * (1 - 0.55 * e);
        ctx.globalAlpha = 1 - t;
        ctx.drawImage(source, q.sx, q.sy, cell, cell, q.x + q.dx * e, q.y + q.dy * e, size, size);
      }
      ctx.globalAlpha = 1;
    };

    const schedule = () => { if (!raf) raf = requestAnimationFrame(draw); };
    const onResize = () => { pieces = null; schedule(); };

    if (img.complete && img.naturalWidth) schedule();
    else img.addEventListener("load", schedule, { once: true });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", onResize);
    window.addEventListener("motionchange", schedule);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("motionchange", schedule);
    };
  }, []);

  const [first, last] = profile.name.split(" ");

  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid" aria-hidden="true" />
      <div className="wrap hero-body">
        <div className="hero-meta">
          <span><span className="dot" />Portfolio · {new Date().getFullYear()}</span>
          <span>{profile.location}</span>
        </div>

        <div className="photo-wrap">
          <div className="photo-glow" aria-hidden="true" />
          <Image
            ref={imgRef}
            className="hero-photo"
            src={profile.portrait}
            alt={profile.name}
            width={1000}
            height={1000}
            sizes="(max-width: 800px) 92vw, 720px"
            loading="eager"
            fetchPriority="high"
          />
          <canvas ref={canvasRef} className="shatter-canvas" aria-hidden="true" />
        </div>

        <div ref={textRef} className="hero-text">
          <p className="kicker">{profile.role} · {profile.focus}</p>
          <h1 className="serif hero-name">
            <span className="line"><span>{first} <em className="name-em">{last}</em></span></span>
          </h1>
          <p className="serif hero-headline intro">
            {profile.headline[0]} <em>{profile.headline[1]}</em>
          </p>
          <p className="hero-intro intro">{profile.intro}</p>
          <div className="hero-ctas intro">
            <a className="pill" href="#work">Explore my work</a>
            <a className="text-link" href={profile.resume} target="_blank" rel="noopener">Download résumé ↗</a>
          </div>
        </div>

        <div className="hero-meta hero-meta-bottom">
          <a href="#about">Scroll to explore ↓</a>
          <span>Open to full stack roles</span>
        </div>
      </div>
    </section>
  );
}
