import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="premium-header">
      {/* LEFT – Brand */}
      <div className="header-brand">
  <span className="brand-mark">✦</span>
  <span className="brand-text">FTE</span>
</div>

      {/* CENTER – Navigation in floating pill */}
      <nav className="header-nav-pill">
        <a href="#">Home</a>
        <a href="#casestudies">Case Studies</a>
        <a href="https://wa.me/8482907927?text=Hi%2C%20I%20found%20your%20website%20and%20want%20to%20book%20a%20strategy%20call%20for%20short-form%20video%20clipping%20services."> Contact </a>
      </nav>

      {/* RIGHT – CTA */}
      <div className="header-cta">
        <button className="cta-pill"><a href="https://wa.me/8482907927?text=Hi%2C%20I%20found%20your%20website%20and%20want%20to%20book%20a%20call%20for%20short-form%20video%20clipping%20services."> Book a Call </a></button>
      </div>

      {/* MOBILE TOGGLE */}
      <button
        className={`mobile-toggle ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* MOBILE MENU */}
      <div className={`mobile-menu ${open ? "open" : ""}`}>
        <a href="#home" onClick={() => setOpen(false)}>Home</a>
        <a href="#cases" onClick={() => setOpen(false)}>Case Studies</a>
        <a href="#contact" onClick={() => setOpen(false)}><a href="https://wa.me/8482907927?text=Hi%2C%20I%20found%20your%20website%20and%20want%20to%20book%20a%20call%20for%20short-form%20video%20clipping%20services."> Contact </a></a>
        <button className="cta-pill mobile-cta"><a href="https://wa.me/8482907927?text=Hi%2C%20I%20found%20your%20website%20and%20want%20to%20book%20a%20call%20for%20short-form%20video%20clipping%20services."> Book a Call </a></button>
      </div>
    </header>
  );
}
