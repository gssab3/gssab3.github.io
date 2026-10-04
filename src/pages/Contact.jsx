import { useEffect, useState } from 'react';
import { contact as contactData } from '../data';

function useRomeClock() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  return new Intl.DateTimeFormat('it-IT', {
    weekday: 'long',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'Europe/Rome',
    hour12: false,
  }).format(now);
}

function Icon({ type }) {
  const props = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8 };
  switch (type) {
    case 'email':
      return <svg {...props}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" /></svg>;
    case 'github':
      return <svg {...props}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></svg>;
    case 'linkedin':
      return <svg {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-13h4v2a6 6 0 0 1 2-2z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>;
    case 'pin':
      return <svg {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>;
    default:
      return null;
  }
}

export default function Contact() {
  const time = useRomeClock();

  return (
    <div className="page">
      <div className="container">
        <div className="section-label">
          <span className="idx">06 /</span>
          <span className="title">Contact Me</span>
        </div>
        <h1 className="page-heading">Let's build something together.</h1>
        <p className="page-intro">
          I'm based in Italy. it's currently <strong style={{ color: 'var(--fg)' }}>{time}</strong> there.
          The fastest way to reach me is email or any of the channels below. I always respond!
        </p>

        <div className="contact-list">
          {contactData.map((c) => (
            <a key={c.label} className="contact-row" href={c.href || '#'} target={c.href?.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
              <Icon type={c.label === 'Email' ? 'email' : c.label === 'GitHub' ? 'github' : c.label === 'LinkedIn' ? 'linkedin' : 'pin'} />
              <div>
                <div className="meta">{c.label}</div>
                <div className="value">{c.value}</div>
              </div>
              {c.href && <span className="arrow">→</span>}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
