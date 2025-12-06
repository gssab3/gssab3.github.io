import React from 'react'
import '../styles/Home.css'

type PageType = 'home' | 'about' | 'projects' | 'cv' | 'publications'

interface HomeProps {
  onNavigate: (page: PageType) => void
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const navCards = [
    {
      page: 'about' as PageType,
      icon: '👤',
      title: 'About Me',
      description: 'My academic and personal story',
      color: '#6b9bd1'
    },
    {
      page: 'projects' as PageType,
      icon: '💻',
      title: 'Projects',
      description: 'Software I\'ve built and contributed to',
      color: '#c4956b'
    },
    {
      page: 'cv' as PageType,
      icon: '📄',
      title: 'Curriculum Vitae',
      description: 'Experience, skills and achievements',
      color: '#6b9bd1'
    },
    {
      page: 'publications' as PageType,
      icon: '📚',
      title: 'Publications',
      description: 'Research papers and articles',
      color: '#c4956b'
    }
  ]

  return (
    <div className="page home-page">
      <section className="hero-section">
        <h1>Ciao, sono Giuseppe 👋</h1>
        <p className="hero-subtitle">
          Software Engineering Student & Full Stack Developer
        </p>
        <p className="hero-text">
          Passionate about software design, sustainability, and building meaningful solutions.
          <br />
          Currently pursuing a Master's in Software Engineering and IT Management at UniSA.
        </p>
      </section>

      <section className="nav-cards-section">
        <h2>Explore</h2>
        <div className="nav-cards-grid">
          {navCards.map((card) => (
            <div
              key={card.page}
              className="nav-card"
              style={{ borderColor: card.color }}
              onClick={() => onNavigate(card.page)}
            >
              <span className="nav-card-icon">{card.icon}</span>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <span className="nav-card-arrow" style={{ color: card.color }}>→</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
