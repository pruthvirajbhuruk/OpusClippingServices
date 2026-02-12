import { useEffect, useRef, useState } from "react";

function Counter({ end, suffix = "" }) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const animate = () => {
    let start = 0;
    const duration = 1600;
    const startTime = performance.now();

    const step = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * end));

      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <span ref={ref}>
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="stats">
      <div className="stats-grid">
        <div className="stat">
          <h3>
            <Counter end={399} suffix="M+" />
          </h3>
          <p>Views</p>
        </div>

        <div className="stat">
          <h3>
            <Counter end={1800} suffix="+" />
          </h3>
          <p>Videos Created</p>
        </div>

        <div className="stat">
          <h3>
            <Counter end={40} suffix="+" />
          </h3>
          <p>Relationships Built</p>
        </div>
      </div>
    </section>
  );
}
