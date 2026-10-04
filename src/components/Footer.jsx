import { Link } from 'react-router-dom';
import { profile } from '../data';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <small>© {new Date().getFullYear()} {profile.name} · All rights reserved. Code MIT, content & logos reserved.</small>
        <div className="footer-links">
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <a href={profile.githubUrl} target="_blank" rel="noreferrer">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
