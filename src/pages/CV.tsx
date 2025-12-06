import React from 'react'
import { timeline } from '../data/timeline'
import { skills } from '../data/skills'
import '../styles/CV.css';

const CV: React.FC = () => {
  return (
    <div className="page cv-page">
      <h1>Curriculum Vitae</h1>
      <div>
        <br />
        {/* Not Timeline component but the list of my academic and work career using experiences constants */}
        <h2>Academic Experiences</h2>
        <ul>
          {timeline.filter(exp => exp.tipo === 'uni').map(exp => (
            <li key={exp.id}>
              <strong>{exp.titolo}</strong> - {exp.sottoTitolo} ({exp.periodo})
              <p>{exp.descrizione}</p>
            </li>
          ))}
        </ul>
        <br />
        <h2>Work Experiences</h2>
        <ul>
          {timeline.filter(exp => exp.tipo === 'lavoro').map(exp => (
            <li key={exp.id}>
              <strong>{exp.titolo}</strong> - {exp.sottoTitolo} ({exp.periodo})
              <p>{exp.descrizione}</p>
            </li>
          ))}
        </ul>
      </div>
      <br></br>
      <h2>Soft Skills</h2>
      <ul>
        <li><b>Project coordination and operational management</b> - During my three-year degree course in Computer Science, I improved team productivity and interactivity by optimising task allocation and promoting effective task management.</li>
        <li><b>Teamwork</b> - To improve productivity and interactivity among colleagues, it was essential to divide tasks and delegate appropriate responsibilities.</li>
        <li><b>Critical thinking</b> - For each solution, I try to identify advantages and disadvantages, requirements, feasibility and computability.</li>
        <li><b>Effective public communication</b> - I have presented projects on several occasions and, for each presentation, I prepared myself on the topic, potential questions and division of the speech by team based on background.</li>
        <li><b>Emotional resilience</b> - During the various design phases, I maintained clarity and focus even under pressure.</li>
      </ul>
      <h2>Hard Skills</h2>
      <div className="skills-section">
      <h2>Skills & Tecnologie</h2>
      {skills.map((category, catIndex) => (
        <div key={catIndex} className="category-card">
          <div className="category-header">
            <h3>{category.category}</h3>
            <span className="skill-count">
              {category.subgroups.reduce((acc, sg) => acc + sg.skills.length, 0)} tools
            </span>
          </div>
          
          <div className="subgroups-container">
            {category.subgroups.map((subgroup, sgIndex) => (
              <div key={sgIndex} className="subgroup">
                <div className="subgroup-header">
                  <strong>{subgroup.title}</strong>
                  <span>({subgroup.skills.length} skills)</span>
                </div>
                <div className="skills-list">
                  {subgroup.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex} 
                      className="skill-badge"
                      title={subgroup.description}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="subgroup-description">
                  {subgroup.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div> 
    </div>
  )
}

export default CV
