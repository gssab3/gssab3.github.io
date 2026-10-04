import { useState } from 'react';
import { projects, projectTags } from '../data';

export default function Projects() {
  const [activeTag, setActiveTag] = useState('All');

  const tags = ['All', ...projectTags.filter((t) => t !== 'All')];
  const filtered = activeTag === 'All' ? projects : projects.filter((p) => p.tags.includes(activeTag));

  return (
    <div className="page">
      <div className="container">
        <div className="section-label">
          <span className="idx">03 /</span>
          <span className="title">Projects</span>
        </div>
        <h1 className="page-heading">Overview of My Projects</h1>
        <p className="page-intro">
          A list of my most important Projects on GitHub
        </p>

        <div className="tag-filter" role="tablist" aria-label="Filter projects by tag">
          {tags.map((tag) => (
            <button
              key={tag}
              className={`tag-chip ${activeTag === tag ? 'active' : ''}`}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="card-grid two">
          {filtered.map((p) => (
            <a
              key={p.repo}
              href={`https://github.com/${p.repo}`}
              target="_blank"
              rel="noreferrer"
              className="card project-card"
            >
              {p.pinned && (
                <span className="pin-badge" title="Highlighted">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="pin-tooltip">Highlighted</span>
                </span>
              )}
              <span className="card-label">{p.tech}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              {p.tags && p.tags.length > 0 && (
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
              )}
              <div className="card-meta">
                <span>{p.repo}</span>
                <span className="link-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mono" style={{ color: 'var(--muted-2)', marginTop: 20 }}>
            No projects with the “{activeTag}” tag yet.
          </p>
        )}
      </div>
    </div>
  );
}
