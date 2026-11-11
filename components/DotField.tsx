"use client";

import { useEffect, useRef } from "react";

export type DotMode = "wave" | "ripple" | "cells";

// Animated field of warm dots drawn on a canvas.
// wave   — a grid that ripples like fabric (structure)
// ripple — rays of dots radiating from a centre (throughput / reach)
// cells  — separate blocks that pulse independently (isolation / tenants)
// Animates only while on screen and while motion is on; otherwise draws one still frame.
export default function DotField({ mode, caption }: { mode: DotMode; caption?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv?.getContext("2d");
    if (!cv || !ctx) return;

    let raf = 0;
    let visible = false;
    let w = 0;
    let h = 0;
    const start = performance.now();

    const size = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = cv.clientWidth;
      h = cv.clientHeight;
      cv.width = Math.round(w * dpr);
      cv.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const dot = (x: number, y: number, r: number, a: number) => {
      if (a <= 0.01) return;
      ctx.globalAlpha = Math.min(1, a);
      ctx.fillRect(x - r, y - r, r * 2, r * 2);
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#e9c9a0";
      const cx = w / 2;
      const cy = h / 2;

      if (mode === "wave") {
        const cols = 46;
        const rows = 30;
        const gw = Math.min(w * 0.72, 480);
        const gh = Math.min(h * 0.82, 440);
        const x0 = cx - gw / 2;
        const y0 = cy - gh / 2;
        for (let i = 0; i < cols; i++) {
          for (let j = 0; j < rows; j++) {
            const u = i / (cols - 1);
            const v = j / (rows - 1);
            const dy = Math.sin(u * 7 + t * 1.1) * 7 + Math.sin(v * 5 - t * 0.8) * 3;
            const dx = Math.sin(v * 6 + t * 0.6) * 3;
            const x = x0 + u * gw + dx;
            const y = y0 + v * gh + dy;
            const edge = Math.min(u, 1 - u, v, 1 - v);
            const a = 0.18 + 0.55 * Math.min(1, edge * 5) * (0.6 + 0.4 * Math.sin(u * 9 - t * 1.4 + v * 3));
            dot(x, y, 0.85, a);
          }
        }
      } else if (mode === "ripple") {
        const rays = 120;
        const R = Math.min(w, h) * 0.46;
        for (let k = 0; k < rays; k++) {
          const ang = (k / rays) * Math.PI * 2;
          const cos = Math.cos(ang);
          const sin = Math.sin(ang);
          for (let r = 24; r < R; r += 6) {
            const wave = Math.sin(r * 0.06 - t * 2.2);
            const a = (0.22 + 0.6 * Math.max(0, wave)) * (1 - (r / R) * 0.75);
            dot(cx + cos * r, cy + sin * r, 0.8, a);
          }
        }
      } else {
        const blocks = [
          [0, 0], [1, 0], [2, 0],
          [0, 1], [1, 1], [2, 1],
        ];
        const bw = Math.min(w * 0.24, 150);
        const bh = Math.min(h * 0.32, 130);
        const gap = Math.min(w, h) * 0.06;
        const tw = bw * 3 + gap * 2;
        const th = bh * 2 + gap;
        blocks.forEach(([bx, by], n) => {
          const ox = cx - tw / 2 + bx * (bw + gap);
          const oy = cy - th / 2 + by * (bh + gap);
          const pulse = 0.35 + 0.45 * (0.5 + 0.5 * Math.sin(t * 1.3 + n * 1.7));
          ctx.globalAlpha = 0.18;
          ctx.strokeStyle = "#e9c9a0";
          ctx.strokeRect(ox - 6, oy - 6, bw + 12, bh + 12);
          for (let x = 0; x <= bw; x += 9) {
            for (let y = 0; y <= bh; y += 9) {
              const shimmer = 0.6 + 0.4 * Math.sin(x * 0.08 + y * 0.05 + t * 2 + n);
              dot(ox + x, oy + y, 0.8, pulse * shimmer);
            }
          }
        });
      }
      ctx.globalAlpha = 1;
    };

    const motionOn = () => document.documentElement.dataset.motion === "on";
    const loop = () => {
      draw((performance.now() - start) / 1000);
      raf = visible && motionOn() ? requestAnimationFrame(loop) : 0;
    };
    const kick = () => {
      if (!raf) loop();
    };

    size();
    draw(0);
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      if (visible) kick();
    });
    io.observe(cv);
    const onResize = () => {
      size();
      draw((performance.now() - start) / 1000);
    };
    const ro = new ResizeObserver(onResize);
    ro.observe(cv);
    window.addEventListener("motionchange", kick);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("motionchange", kick);
    };
  }, [mode]);

  return (
    <figure className="dotfield">
      <div className="dotfield-glow" aria-hidden="true" />
      <canvas ref={ref} aria-hidden="true" />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
