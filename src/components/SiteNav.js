import './SiteNav.css';

export default function SiteNav() {
  return (
    <nav className="site-nav" aria-label="Primary">
      <div className="site-nav__inner">
        <a className="site-nav__brand" href="#/">Austin Patkos</a>
        <div className="site-nav__links">
          <a className="site-nav__link" href="#/certifications">Certifications</a>
          <a className="site-nav__link" href="/Austin Patkos - Techinical CoFounder.pdf" target="_blank" rel="noreferrer">Resume (PDF)</a>
          <a className="site-nav__link site-nav__link--cta" href="mailto:austin@mwire.co">Contact</a>
        </div>
      </div>
    </nav>
  );
}
