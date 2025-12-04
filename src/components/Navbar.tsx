import React from 'react'
import '../styles/Navbar.css'

interface NavbarProps {
  onNavigate: (page: 'home' | 'about' | 'projects' | 'cv' | 'publications') => void
  currentPage: string
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const isActive = (page: string) => currentPage === page ? 'active' : ''

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a onClick={() => onNavigate('home')} style={{ cursor: 'pointer' }}>
            Portfolio
          </a>
        </div>
        <ul className="nav-menu">
          <li className="nav-item">
            <a
              onClick={() => onNavigate('projects')}
              className={`nav-link ${isActive('projects')}`}
              style={{ cursor: 'pointer' }}
            >
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => onNavigate('about')}
              className={`nav-link ${isActive('about')}`}
              style={{ cursor: 'pointer' }}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => onNavigate('publications')}
              className={`nav-link ${isActive('publications')}`}
              style={{ cursor: 'pointer' }}
            >
              Publications
            </a>
          </li>
          <li className="nav-item">
            <a
              onClick={() => onNavigate('cv')}
              className={`nav-link ${isActive('cv')}`}
              style={{ cursor: 'pointer' }}
            >
              CV
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
