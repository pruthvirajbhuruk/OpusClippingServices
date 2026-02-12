export default function Results() {
  return (
    <section id="results" className="results">
      <div className="results-inner">

        {/* Intro */}
        <header className="results-header">
          <span className="results-eyebrow">Results</span>
          <h2 className="results-title">
            One long video becomes weeks of content
          </h2>
          <p className="results-subtitle">
            We turn every long-form upload into multiple high-performing clips
            ready for Reels, Shorts and TikTok.
          </p>
        </header>

        {/* Visual Flow */}
        <div className="results-flow">

          {/* MAIN VIDEO */}
          <div className="main-video">
            <img src="/FTECLIPPING/src/youtubet.jpg" alt="YouTube Video" />
            <div className="youtube-badge">Full Episode</div>
          </div>

          {/* ARROWS */}
          <div className="arrows">
            <span className="arrow a1" />
            <span className="arrow a2" />
            <span className="arrow a3" />
            <span className="arrow a4" />
          </div>

          {/* CLIPS GRID */}
          <div className="clips-grid">
            <div className="clip">
              <img src="/src/clip1.jpeg" alt="Clip 1" />
              <span>Shorts</span>
            </div>

            <div className="clip">
              <img src="/src/clip2.jpeg" alt="Clip 2" />
              <span>Reels</span>
            </div>

            <div className="clip">
              <img src="/src/clip3.jpeg" alt="Clip 3" />
              <span>TikTok</span>
            </div>

            <div className="clip">
              <img src="/src/clip4.jpeg" alt="Clip 4" />
              <span>+ More</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
