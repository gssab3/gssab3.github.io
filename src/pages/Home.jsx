import { Link } from 'react-router-dom';
import {profile, heroStats, highlights, nicheProjects} from '../data';
import {useTheme} from "../components/Navbar.jsx";
import {useCallback, useEffect, useState} from "react";

export default function Home() {

  return (
    <div>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="hero-eyebrow">
              <span className="dot" />
              {profile.roleTagline}
            </span>
            <h1 className="hero-display">
              <span>Idea.</span>
              <span>Architecture.</span>
              <span className="accent">Solutions.</span>
            </h1>
            <p className="hero-tagline">{profile.tagline}</p>
            <p
              className="hero-tagline serif"
              style={{ fontStyle: 'italic', maxWidth: 560 }}
            >
              In a world full of AI problems, be the human solution.
            </p>
            <div className="hero-actions">
              <Link to="/projects" className="primary-cta">
                View projects →
              </Link>
              <Link to="/contact" className="ghost-cta">
                Contact me
              </Link>
            </div>

            <div className="hero-stats" style={{ display: 'flex', gap: 40, marginTop: 44, flexWrap: 'wrap' }}>
              {heroStats.map((s) => (
                <div key={s.label}>
                  <div style={{ fontSize: 'clamp(24px,2.6vw,30px)', fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1 }}>
                    {s.value}
                  </div>
                  <span className="mono" style={{ fontSize: 10.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: 6, display: 'block' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-photo">
            <div className="hero-photo-frame">
                <img src={profile.photo} alt={profile.name}/>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights — summary of each section */}
      <section className="page" style={{ paddingTop: 20 }}>
        {/*01 - SKILLS*/}
        <div className="container" style={{marginBottom: 56}}>
          <div className="section-label">
            <span className="idx">01 /</span>
            <span className="title">SKILLS</span>
          </div>
          <h2 className="page-heading" style={{ marginBottom: 56 }}>
            Summary of my Technical Mind
          </h2>

          <div className="card-grid three">
            {highlights.map((h, i) => (
              <article className="card" key={h.label}>
                <span className="card-label">{String(i + 1).padStart(2, '0')} · {h.label}</span>
                <h3>{h.title}</h3>
                <p>{h.body}</p>
              </article>
            ))}
          </div>

          <div className="card-grid" style={{ marginTop: 20 }}>
            <article className="card" style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
              <div>
                <span className="card-label">More</span>
                <h3 style={{ marginBottom: 0 }}>Explore my work, experience, writing and how to reach me.</h3>
              </div>
              <Link to="/cv" className="primary-cta" style={{ whiteSpace: 'nowrap' }}>
                Visit CV →
              </Link>
            </article>
          </div>
        </div>

          {/*02 - INTERESTING PROJECTS*/}
          <div className="container">
              <div className="section-label">
                  <span className="idx">02 /</span>
                  <span className="title">INTERESTING PROJECTS</span>
              </div>
              <h2 className="page-heading" style={{ marginBottom: 56 }}>
                  Niche or Interesting projects and experiments
              </h2>

              <div className="card-grid three">
                  {nicheProjects.map((h, i) => (
                      <article className="card" key={h.label}>
                          <span className="card-label">{String(i + 1).padStart(2, '0')} · {h.label}</span>
                          <h3>{h.title}</h3>
                          <p>{h.body}</p>
                      </article>
                  ))}
              </div>
          </div>
      </section>
    </div>
  );
}
