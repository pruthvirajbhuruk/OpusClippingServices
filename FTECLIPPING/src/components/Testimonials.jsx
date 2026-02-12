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
            them to make shorts for me. I'm always like, absolutely not. FTE makes shorts that are 1000x better than anything you could
            do. Thank you. You rock.
          </p>

          <div className="author">
            <div>
              <h4>Ryan Holland</h4>
              </div>
          </div>
        </div>

        {/* Right Small Cards */}
        <div className="right-column">
          <div className="testimonial-card">
            <div className="quote">“</div>
            <p className="text">I was first not sure if this would work for me but the results proved me wrong for sure.</p>

            <div className="author">
              <div>
                <h4>Amit Kulkarni</h4>
                
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="quote">“</div>
            <p className="text">I just started and i am already loving this :)</p>

            <div className="author">
            <div>
                <h4>Gauri Rao </h4>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
