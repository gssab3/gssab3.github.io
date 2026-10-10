import { experience, education, certifications } from '../data';
import Logo from '../components/Logo';

const currentYear = new Date().getFullYear();

function itemStatus(...values) {
  if (values.some((v) => v && v.includes('Present'))) {
    return 'timeline-item is-current';
  }
  if (values.some((v) => v && v.includes(String(currentYear)))) {
    return 'timeline-item is-expiring';
  }
  return 'timeline-item';
}

export default function CV() {
  return (
    <div className="page">
      <div className="container">
        <div className="section-label">
          <span className="idx">02 /</span>
          <span className="title">Curriculum Vitae</span>
        </div>
        <h1 className="page-heading">Experience, education & the path that got me here.</h1>
        <p className="page-intro">
          A short look at my professional history, academic background and what I focus on.
        </p>

          {/*
        <div style={{ display: 'flex', gap: 12, marginBottom: 48, flexWrap: 'wrap' }}>
          <a href="/cv-placeholder.pdf" download className="primary-cta">
            Download CV ↓
          </a>
          <a href="/cv-placeholder.pdf" target="_blank" rel="noreferrer" className="ghost-cta">
            Open PDF
          </a>
        </div>
        */}

        {/* Bio */}
        <div className="cv-section">
          <h2>Bio</h2>
          <div className="prose">
            <p>
              Grown up with passion for math, I started enjoying tech because of the possibility to solve real-world problems through something you can't even touch.
              I'm an ethical person that considers sustainability, security by design and software engineering as the 3 fundamentals for his path.
            </p>
          </div>
        </div>

        {/* Experience */}
        <div className="cv-section">
          <h2>Experience</h2>
          <div className="timeline">
            {experience.map((job) => (
              <div className={itemStatus(job.period)} key={job.role}>
                <div className="timeline-row">
                  <Logo src={job.logo} name={job.org} />
                  <div style={{ flex: 1 }}>
                    <div className="timeline-head">
                      <h3>{job.role}</h3>
                      <span className="timeline-date">{job.period}</span>
                    </div>
                    <div className="timeline-org">{job.org}</div>
                    <p className="timeline-desc">{job.desc}</p>
                    <ul className="timeline-desc" style={{ paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {job.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                    {job.tech && job.tech.length > 0 && (
                      <div className="timeline-tags">
                        {job.tech.map((t) => (
                          <span className="timeline-tag" key={t}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="cv-section">
          <h2>Education</h2>
          <div className="timeline">
            {education.map((ed) => (
              <div className={itemStatus(ed.period)} key={ed.degree}>
                <div className="timeline-row">
                  <Logo src={ed.logo} name={ed.org} />
                  <div style={{ flex: 1 }}>
                    <div className="timeline-head">
                      <h3>{ed.degree}</h3>
                      <div className="timeline-head-right">
                        <span className="timeline-date">{ed.period}</span>
                        {ed.grade && <span className="timeline-grade">{ed.grade}</span>}
                      </div>
                    </div>
                    <div className="timeline-org">{ed.org}</div>
                    <p className="timeline-desc">{ed.detail}</p>
                    {ed.tech && ed.tech.length > 0 && (
                      <div className="timeline-tags">
                        {ed.tech.map((t) => (
                          <span className="timeline-tag" key={t}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="cv-section">
          <h2>Certifications</h2>
          <div className="timeline">
            {certifications.map((cert) => (
              <div className={itemStatus(cert.expires)} key={cert.name}>
                <div className="timeline-row">
                  <Logo src={cert.logo} name={cert.issuer} />
                  <div style={{ flex: 1 }}>
                    <div className="timeline-head">
                      <h3>{cert.name}</h3>
                      <span className="timeline-date">
                        {cert.issued}
                        {cert.expires && ` · Expires ${cert.expires}`}
                      </span>
                    </div>
                    <div className="timeline-org">{cert.issuer}</div>
                    {cert.credentialId && (
                      <div className="timeline-meta">Credential ID: {cert.credentialId}</div>
                    )}
                    <p className="timeline-desc">{cert.desc}</p>
                    {cert.tech && cert.tech.length > 0 && (
                      <div className="timeline-tags">
                        {cert.tech.map((t) => (
                          <span className="timeline-tag" key={t}>{t}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="cv-section">
          <h2>Core focus</h2>
          <div className="card-grid three">
            {[
              { t: 'Requirements Engineering', d: 'What and How the software will work.' },
              { t: 'Software Engineering', d: 'Full-stack development and solid engineering practices.' },
              { t: 'Security Analysis', d: '\"Secure\" is not just a buzzword to add to your product. I analyse and eventually put it by myself.' },
            ].map((s) => (
              <article className="card" key={s.t}>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}