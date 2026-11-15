import { projects } from '../data';

export default function Projects() {
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

        <div className="card-grid two">
          {projects.map((p) => (
            <a
              key={p.repo}
              href={`https://github.com/${p.repo}`}
              target="_blank"
              rel="noreferrer"
              className="card project-card"
            >
              <span className="card-label">{p.tech}</span>
              <div className="project-title-row">
                <h4>{p.title}</h4>
                {p.role && <h4 className="project-role">{p.role}</h4>}
              </div>
              <p>{p.desc}</p>
              <div className="card-meta">
                <span>{p.repo}</span>
                <span className="link-arrow">↗</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}
