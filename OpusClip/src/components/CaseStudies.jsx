export default function CaseStudies() {
  return (
    <section className="case-section" id="casestudies">
      <div className="case-container">

        {/* heading */}
        <div className="case-heading">
          <span className="case-eyebrow">Case Study</span>
          <div className="theh2">
          <h2 >Real results from long-form content</h2>
          </div>
          <p>One creator. One long video. Multiple short-form winners.</p>
        </div>

        {/* case card */}
        <div className="case-card">

          {/* vertical shorts thumbnail */}
          <div className="case-media">
            <img
              src="/src/components/casestudy.jpeg"
              alt="YouTube shorts thumbnail"
              className="case-image"
            />
          </div>

          {/* content */}
          <div className="case-content">
            <span className="case-tag">YouTube Creator</span>

            <h3>From long videos to a short-form growth engine</h3>

            <p className="case-description">
              This creator was posting long YouTube videos weekly but struggled
              to stay consistent on Reels, Shorts and TikTok.
              We transformed each upload into multiple high-performing clips
              that drove massive reach and audience growth.
            </p>

            {/* stats */}
            <div className="case-stats">
              <Stat number="20+" label="Clips generated" />
              <Stat number="11.3M+" label="Views in 7 days" />
              <Stat number="3k+" label="Follower growth" />
              <Stat number="4x" label="Engagement boost" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <div className="case-stat">
      <h4>{number}</h4>
      <p>{label}</p>
    </div>
  );
}
