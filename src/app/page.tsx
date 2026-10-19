import Link from "next/link";

const features = [
  {
    number: "01",
    title: "Privacy First",
    description:
      "Designed with privacy-conscious principles for the e-Health ecosystem.",
    icon: "shield",
  },
  {
    number: "02",
    title: "Clinical Focus",
    description:
      "A foundation for consultation workflows and audit readiness.",
    icon: "clinical",
  },
  {
    number: "03",
    title: "Built for Everyone",
    description:
      "Designed around accessibility, keyboard navigation, and clarity.",
    icon: "accessibility",
  },
];

function FeatureIcon({ name }: { name: string }) {
  if (name === "shield") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path
          d="M24 4 40 10v12c0 10-7 17-16 22C15 39 8 32 8 22V10L24 4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinejoin="round"
        />
        <path
          d="m17 23 5 5 10-11"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (name === "clinical") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect
          x="7"
          y="8"
          width="34"
          height="32"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
        />
        <path
          d="M24 15v18M15 24h18"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <rect
        x="5"
        y="7"
        width="38"
        height="27"
        rx="3"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
      />
      <path
        d="M17 41h14M24 34v7"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClinicalIllustration() {
  return (
    <svg
      className="clinical-illustration"
      viewBox="0 0 560 390"
      role="img"
      aria-labelledby="illustration-title"
    >
      <title id="illustration-title">
        Illustration of a protected digital healthcare record
      </title>

      <circle cx="290" cy="190" r="165" fill="#eaf3ff" />

      <rect
        x="150"
        y="65"
        width="335"
        height="240"
        rx="20"
        fill="#b9d4f0"
      />

      <rect
        x="164"
        y="79"
        width="307"
        height="212"
        rx="12"
        fill="#ffffff"
      />

      <rect
        x="184"
        y="100"
        width="162"
        height="170"
        rx="12"
        fill="#f1f7fd"
      />

      <circle cx="223" cy="141" r="25" fill="#3777c8" />

      <path
        d="M223 128v26M210 141h26"
        stroke="#ffffff"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <rect
        x="260"
        y="131"
        width="70"
        height="9"
        rx="4"
        fill="#8bb7eb"
      />

      <rect
        x="260"
        y="149"
        width="57"
        height="9"
        rx="4"
        fill="#c1d8f3"
      />

      <rect
        x="201"
        y="185"
        width="128"
        height="9"
        rx="4"
        fill="#c8ddf4"
      />

      <rect
        x="201"
        y="205"
        width="108"
        height="9"
        rx="4"
        fill="#c8ddf4"
      />

      <rect
        x="201"
        y="225"
        width="88"
        height="9"
        rx="4"
        fill="#c8ddf4"
      />

      <rect
        x="359"
        y="100"
        width="95"
        height="170"
        rx="10"
        fill="#f5f9fd"
      />

      <circle cx="380" cy="126" r="8" fill="#a6c6e9" />

      <rect
        x="395"
        y="121"
        width="42"
        height="7"
        rx="3"
        fill="#d1e0f1"
      />

      <rect
        x="395"
        y="136"
        width="30"
        height="7"
        rx="3"
        fill="#d1e0f1"
      />

      {[165, 192, 219, 246].map((y) => (
        <g key={y}>
          <rect
            x="373"
            y={y}
            width="12"
            height="12"
            rx="3"
            fill="#d8e7f7"
          />
          <rect
            x="395"
            y={y + 3}
            width="42"
            height="6"
            rx="3"
            fill="#d1e0f1"
          />
        </g>
      ))}

      <path
        d="M80 180 126 162 172 180v40c0 39-25 65-46 77-21-12-46-38-46-77Z"
        fill="#3777c8"
        stroke="#ffffff"
        strokeWidth="7"
        strokeLinejoin="round"
      />

      <rect
        x="108"
        y="218"
        width="36"
        height="31"
        rx="5"
        fill="#ffffff"
      />

      <path
        d="M115 218v-10a11 11 0 0 1 22 0v10"
        fill="none"
        stroke="#ffffff"
        strokeWidth="7"
        strokeLinecap="round"
      />

      <circle cx="126" cy="232" r="4" fill="#3777c8" />

      <path
        d="M126 235v6"
        stroke="#3777c8"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M100 320h380"
        stroke="#d9e9fa"
        strokeWidth="5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <>
      <main id="main-content">
        <section
          className="hero section-container"
          aria-labelledby="hero-heading"
        >
          <div className="hero-copy">
            <p className="eyebrow">
              DATA LIFE · DIGITAL HEALTHCARE
            </p>

            <h1 id="hero-heading">
              Welcome to the{" "}
              <span>Clinical Portal</span>
            </h1>

            <p className="hero-description">
              A privacy-conscious consultation and audit
              console for the DataLife e-Health ecosystem.
            </p>

            <div className="hero-actions">
              <Link className="button button-primary" href="#overview">
                Explore overview
                <span aria-hidden="true">→</span>
              </Link>

              <a className="text-link" href="#application-status">
                View application status
              </a>
            </div>

            <div className="trust-indicator">
              <span className="trust-dot" aria-hidden="true" />
              <span>Application foundation</span>
              <span className="trust-divider" aria-hidden="true" />
              <span>Accessibility focused</span>
            </div>
          </div>

          <div className="hero-art">
            <ClinicalIllustration />
            <div className="art-caption">
              <span className="art-caption-icon" aria-hidden="true">
                ✓
              </span>
              Privacy-conscious by design
            </div>
          </div>
        </section>

        <section
          id="application-status"
          className="status-section section-container"
          aria-labelledby="status-heading"
        >
          <div className="status-card">
            <div className="status-icon" aria-hidden="true">
              !
            </div>

            <div className="status-copy">
              <div className="status-label">
                CURRENT STATUS
              </div>

              <h2 id="status-heading">
                Application Status
              </h2>

              <p role="status">
                Clinical workflows are not available yet.
                This portal currently provides the application
                shell only.
              </p>
            </div>

            <span className="status-badge">
              <span aria-hidden="true" />
              Foundation
            </span>
          </div>
        </section>

        <section
          id="overview"
          className="features-section section-container"
          aria-labelledby="features-heading"
        >
          <div className="section-heading">
            <p className="eyebrow">OUR FOUNDATION</p>

            <h2 id="features-heading">
              Thoughtfully designed for healthcare
            </h2>

            <p>
              A clean starting point for a secure, accessible,
              and maintainable e-Health experience.
            </p>
          </div>

          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card" key={feature.number}>
                <div className="feature-card-top">
                  <div className="feature-icon">
                    <FeatureIcon name={feature.icon} />
                  </div>

                  <span className="feature-number">
                    {feature.number}
                  </span>
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="closing-section">
          <div className="section-container closing-content">
            <div>
              <p className="eyebrow">BUILT ON A STRONG FOUNDATION</p>

              <h2>Clear. Accessible. Ready to grow.</h2>

              <p>
                This initial release focuses on the user interface
                foundation, not live clinical workflows.
              </p>
            </div>

            <a className="button button-light" href="#main-content">
              Back to top <span aria-hidden="true">↑</span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}