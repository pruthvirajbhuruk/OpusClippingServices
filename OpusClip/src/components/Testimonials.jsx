export default function Testimonials() {
  return (
    <section className="testimonials">
      <h2 className="testimonials-title">What our clients say</h2>

      <div className="testimonials-grid">
        {/* Left Large Card */}
        <div className="testimonial-card large">
          <div className="quote">“</div>
          <p className="text">
            Every week another agency like yours reaches out to see if I want
            them to make shorts for me. I'm always like, absolutely not. Atomik
            Growth makes shorts that are 1000x better than anything you could
            do. Thank you. You rock.
          </p>

          <div className="author">
            <img src="/avatar1.jpg" alt="Jack Rhysider" />
            <div>
              <h4>Jack Rhysider</h4>
              <span>Darknet Diaries</span>
            </div>
          </div>
        </div>

        {/* Right Small Cards */}
        <div className="right-column">
          <div className="testimonial-card">
            <div className="quote">“</div>
            <p className="text">This is awesome! Great to see.</p>

            <div className="author">
              <img src="/avatar2.jpg" alt="Jason Shuman" />
              <div>
                <h4>Jason Shuman</h4>
                <span>Primary VC</span>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote">“</div>
            <p className="text">Glanced at the trailer and loved it :)</p>

            <div className="author">
              <img src="/avatar3.jpg" alt="Guy Podjarny" />
              <div>
                <h4>Guy Podjarny</h4>
                <span>Tessl</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
