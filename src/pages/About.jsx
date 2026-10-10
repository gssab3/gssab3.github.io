import { profile, aboutInterests } from '../data';

export default function About() {
  return (
    <div className="page">
      <div className="container">
        <div className="section-label">
          <span className="idx">05 /</span>
          <span className="title">About</span>
        </div>
        <h1 className="page-heading">Who I am outside the code.</h1>

        <div className="about-grid">
          <div>
            <p className="page-intro about-intro">
              The person behind the projects, repos and study
            </p>
            <div className="prose">
              <p>
                  In addition to my studies, I’m a person with a wide range of interests, open to conversation, friendly, and quick to laugh.
              </p>
              <p>
                  I’ve been full of energy ever since I was a child, and at age 11, I was introduced to the world of technology and video games, a passion
                  that will remain in my heart forever. I love sports, going to the gym, running, playing soccer, badminton, and volleyball. You could say I’m a very competitive person,
                  but not easily angered: defeat always shows there’s room for improvement.
              </p>
                <p>
                    My favorite video game series are Halo, Call of Duty, and Europa Universalis. Halo, in particular, taught me the value of loyalty, brotherhood, romance, and platonic love, while the others taught me that strategy and planning are everywhere.
                </p>
                <p>
                    My favorite film is Backrooms, a profound reflection on the audiovisual reification of memory and on an entity that governs its essence, featuring the splendid musical production of The Caretaker, experimental jazz, essential for evoking a sense of nostalgia
                </p>
                <p>
                    Other than that, I'm not really a movie enthusiast, but I enjoy just about every genre, like romance, action, comedy, horror, and thrillers. The important thing is that it's entertaining, whether in a positive or negative way.
                </p>
              <p>
                  I haven't traveled much outside of Italy. I visited Prague and fell in love with it. My goal is to travel throughout Europe and get to know people and cultures, while living in the harmony of our society.
              </p>
            </div>
          </div>

          <div className="about-side">
            <figure className="about-photo">
              <img src={profile.photo2} alt={`${profile.name} - outside of work`} loading="lazy" />
            </figure>
            <aside className="card side-card">
            <h3>Outside of work</h3>
            <ul>
              {aboutInterests.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <div style={{ borderTop: '1px solid var(--hair)', marginTop: 20, paddingTop: 16 }}>
              <span className="mono" style={{ fontSize: 10.5, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted-2)' }}>
                Based in {profile.github === 'gssab3' ? 'Salerno, Italy' : 'Your city'}
              </span>
            </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
}
