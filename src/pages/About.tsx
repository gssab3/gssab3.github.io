import React from 'react'
import '../styles/About.css'

const About: React.FC = () => {
  return (
    <div className="page about-page">
      <h1>About Me</h1>
      <div className="academic-story">
        <h2>My Academic Story</h2>
        <p>
        I am a young man born in 2003. <br /> I was never particularly talented until I started secondary school, where I discovered a hunger for knowledge, experiences, and mastery of mathematics and computer science, both educational and otherwise.
        <br />Mathematics captivated me, it enslaved me. I became truly passionate about computer science thanks to security algorithms and the decomposition of object-oriented programmes.<br />
        Unfortunately, I am someone who lives life too fast, trying to be productive every second that passes and making the most of every second that passes.<br />
        I have increasingly appreciated the engineering courses in my degree programme, from software system design to their maintainability, efficiency and deployment. I care tremendously about the higher stages of design because, especially in this historical period, the foundation is fundamental: my bachelor's thesis presents a support for the generation of security requirements, given a Problem Statement.
        <br />I decided to pursue a master's degree in Software Engineering and IT Management not only because I care about software management, but also because I value the sustainability (social, environmental, technical and economic) of software, software data, privacy and user usability, as I am also a user myself, before being a software engineering enthusiast.
      </p>
      </div>
      <div className="story">
        <h2>My Personal Story</h2>
        <p>
          Talent may exist, but I was born with grit—sangue agli occhi. A relentless drive that's measurable, with its clear advantages and challenges.<br />
          I am a humble person (even if it doesn't show in my portfolio) who loves art, philosophy and critical thinking. My favourite artist is Gabriele D'Annunzio, not because of his narcissism, but because of his interpretation of life, being someone who lived every moment of his life intensely, seeking to get the most out of it in terms of experience and knowledge.<br />
          When I feel really down, I take refuge in the classic jazz notes of Piero Piccioni and the experimental jazz musician James Kirby, aka “The Caretaker”.<br />
          I love socialising and connecting with people from all walks of life, as it enriches my perspective and fuels my passion for continuous learning. When I make a mistake, I am not afraid to consciously admit my errors.<br />
          Every week I come up with a different idea for a possible brand, software or life-changing algorithm, and I write it down, studying its feasibility, technology and time/economic management, and then, according to my plans for the future, I decide when to implement it. Productivity is a conundrum for me: positive in that it makes me satisfied with who I am, negative in terms of the effort required, but you have to roll up your sleeves if you're wearing a shirt on a sunny day.</p>
      </div>
    </div>
  )
}

export default About
