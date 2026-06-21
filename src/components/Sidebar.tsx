import React from 'react'
import '../styles/Sidebar.css'


interface SocialProfile {
  name: string
  url: string
  icon: string
}

interface SidebarProps {
  name: string
  label: string
  image: string
  social: SocialProfile[]
}

const Sidebar: React.FC<SidebarProps> = ({ name, label, image, social }) => {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <div className="profile-section">
          <img src={image} alt={name} className="profile-image" />
          <h2 className="profile-name">{name}</h2>
          <p className="profile-label">{label}</p>
        </div>

        <div className="social-section">
          <h3 className="social-title">More About Me!</h3>
          <div className="social-links">
            {social.map((profile) => (
              <a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                title={profile.name}
              >
                <img src={profile.icon} alt={profile.name} className="social-icon" />
                <span className="social-name">{profile.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
