export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg" />

      {/* Graphic */}
      <div className="hero-graphic">
        <svg viewBox="0 0 600 600" aria-hidden>
          <defs>
            <radialGradient id="coreGlow">
              <stop offset="0%" stopColor="#a5b4ff" stopOpacity="1" />
              <stop offset="65%" stopColor="#a5b4ff" stopOpacity="0.25" />
              <stop offset="100%" stopColor="transparent" />
            </radialGradient>
          </defs>

          {/* Halo */}
          <circle cx="300" cy="300" r="120" fill="url(#coreGlow)" opacity="0.6" />

          {/* Orbits */}
          <ellipse cx="300" cy="300" rx="200" ry="120" className="orbit orbit-1" />
          <ellipse cx="300" cy="300" rx="150" ry="230" className="orbit orbit-2" />
          <ellipse cx="300" cy="300" rx="250" ry="170" className="orbit orbit-3" />

          {/* Sparks */}
          <circle cx="460" cy="310" r="3" className="spark" />
          <circle cx="220" cy="150" r="2" className="spark" />
          <circle cx="340" cy="470" r="2.5" className="spark" />
        </svg>
      </div>

      {/* Content */}
      <div className="hero-content">
        <h1>
          <span className="line-primary">We turn long videos</span>
          <br />
          <span className="barred bar-blue">into viral short form content</span>
        </h1>
        <p>
          We help podcasters, creators and founders grow faster with high-performing clips for Reels, Shorts & TikTok — every single week.
        </p>
      </div>
    </section>
  );
}
