import { useState } from 'react';
import { publications, talks } from '../data';

const filters = ['All', 'Publications', 'Talks'];

export default function Publications() {
  const [filter, setFilter] = useState('All');

  const showPub = filter === 'All' || filter === 'Publications';
  const showTalk = filter === 'All' || filter === 'Talks';

  return (
    <div className="page">
      <div className="container">
        <div className="section-label">
          <span className="idx">04 /</span>
          <span className="title">Publications & Talks</span>
        </div>
        <h1 className="page-heading">Publications & Talks.</h1>
        <p className="page-intro">
          Scientific papers, articles, and conference talks.
        </p>

        <div className="pub-filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`pub-filter-btn${filter === f ? ' active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        {showPub && (
          <div className="pub-section">
            {filter === 'All' && <h2 className="pub-section-title">Publications</h2>}
            <div className="pub-list">
              {publications.map((p, i) => (
                <div className="pub-row" key={p.title}>
                  <span className="pub-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="pub-body">
                    <h3>{p.title}</h3>
                    <div className="pub-authors">{p.authors}</div>
                    <div className="pub-venue">{p.venue}</div>
                    <div className="pub-links">
                      <a href={p.link} target="_blank" rel="noreferrer">PDF ↗</a>
                      <a href={p.doi} target="_blank" rel="noreferrer">DOI ↗</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {showTalk && (
          <div className="pub-section">
            {filter === 'All' && <h2 className="pub-section-title">Talks</h2>}
            <div className="pub-list">
              {talks.map((t, i) => (
                <div className="pub-row" key={t.title}>
                  <span className="pub-num">{String(i + 1).padStart(2, '0')}</span>
                  <div className="pub-body">
                    <h3>{t.title}</h3>
                    <div className="pub-authors">{t.speakers}</div>
                    <div className="pub-venue">{t.event}{t.date && `, ${t.date}`}</div>
                    <div className="pub-links">
                      <a href={t.link} target="_blank" rel="noreferrer">Slides / Video ↗</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
