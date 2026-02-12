export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* Brand block */}
        <div className="footer-brand">
          <h3>FTE MEDIA</h3>
          <p>
            Turning long-form videos into a consistent
            short-form growth engine.
          </p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            
 <a href="https://wa.me/8482907927?text=Hi%2C%20I%20found%20your%20website%20and%20want%20to%20book%20a%20strategy%20call%20for%20short-form%20video%20clipping%20services."> Get Samples For Your Business </a>
          </div>

          
        </div>

        {/* bottom line */}
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} FTE Media</p>
          <p>Built for creators who want consistency</p>
        </div>

      </div>
    </footer>
  );
}
