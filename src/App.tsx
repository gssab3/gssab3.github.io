// Styles
import './App.css'

import { useState } from 'react'

// Components
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Timeline from './components/Timeline'

// Pages
import Home from './pages/Home.tsx'
import About from './pages/About.tsx'
import Projects from './pages/Projects.tsx'
import CV from './pages/CV.tsx'
import Publications from './pages/Publications.tsx'

// Data
import { profile } from './data/experiences'

type PageType = 'home' | 'about' | 'projects' | 'cv' | 'publications'

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'cv':
        return <CV />
      case 'publications':
        return <Publications />
      default:
        return <Home />
    }
  }

  return (
    <div className="app">
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      <Sidebar {...profile} />
      <div className="app-content" style={{ width: "75%" }}>
        {renderPage()}
      </div>
      <div className="timeline-section" style={{ width: "25%" }}>
      <h2 style={{ textAlign: "center", margin: "10px 10px", gap: 8, top: 3, bottom: 5 }}>My Journey</h2>
      <br />
      <Timeline />
      </div>
    </div>
  )
}

export default App