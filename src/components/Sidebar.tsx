import React from 'react'
import '../styles/Sidebar.css'


interface SocialProfile {
  name: string
  url: string
  icon: string
  display?: string
}

interface SidebarProps {
  name: string
  label: string
  image: string
  social: SocialProfile[]
}

const Sidebar: React.FC<SidebarProps> = ({ name, label, image, social }) => {
  const [copiedText, setCopiedText] = React.useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, text: string) => {
    e.preventDefault();
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

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
            {social.map((profile) => {
              const isMail = profile.url.startsWith('mailto:');
              const displayInfo = profile.display || profile.name;
              const isCopied = copiedText === displayInfo;

              return (
              <div className="social-item" key={profile.name}>
                <a
                  href={profile.url}
                  target={isMail ? "_self" : "_blank"}
                  rel={isMail ? undefined : "noopener noreferrer"}
                  onClick={(e) => {
                    if (isMail) {
                      e.preventDefault();
                      window.location.href = profile.url;
                    }
                  }}
                  className="social-link"
                  title={profile.name}
                >
                  <img src={profile.icon} alt={profile.name} className="social-icon" />
                  <span className="social-name">{displayInfo}</span>
                </a>
                <button
                  className={`copy-btn ${isCopied ? 'copied' : ''}`}
                  onClick={(e) => handleCopy(e, displayInfo)}
                  title={`Copy ${profile.name}`}
                  aria-label={`Copy ${profile.name}`}
                >
                  {isCopied ? '✓' : '📋'}
                </button>
              </div>
            )})}
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
