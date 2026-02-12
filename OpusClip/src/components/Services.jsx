import { useRef } from "react";
import useReveal from "../hooks/useReveal";

const steps = [
  {
    title: "Content Audit",
    desc: "We analyze your long-form content and identify high-retention moments with viral potential.",
    meta: "Research · Hooks · Positioning",
  },
  {
    title: "Clip Creation",
    desc: "Our editors craft engaging vertical videos with captions, motion, emojis and pacing built for retention.",
    meta: "Editing · Subtitles · Motion",
  },
  {
    title: "Platform Optimization",
    desc: "Every clip is formatted and optimized for Reels, Shorts and TikTok performance.",
    meta: "Formats · Captions · Delivery",
  },
  {
    title: "Weekly Delivery",
    desc: "Receive ready-to-post clips every single week so your growth never slows down.",
    meta: "Consistency · Speed · Scale",
  },
];

export default function Services() {
  const ref = useRef(null);
  useReveal(ref);

  return (
    <section id="services" ref={ref} className="how-section reveal">
      <div className="how-inner">

        {/* intro */}
        <header className="how-header">
          <span className="how-eyebrow">Our process</span>

          <h2 className="how-title">
            How our clipping system works
          </h2>

          <p className="how-subtitle">
            A simple, repeatable workflow designed to turn long content into
            consistent short-form growth.
          </p>
        </header>

        {/* steps */}
        <div className="how-steps">
          {steps.map((step, index) => (
            <article key={index} className="how-step">

              <div className="how-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="how-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>

              <div className="how-meta">
                {step.meta}
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
