import { profile } from "@/app/data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <div className="eyebrow">Jonah Kwesi Amponsah, PhD</div>
          <p>Statistics · Machine Learning · Implementation Science</p>
        </div>
        <div className="footer-links">
          <a href={`mailto:${profile.email}`}>Email</a>
          <a href={profile.orcid} target="_blank" rel="noopener noreferrer">ORCID<span className="sr-only"> (opens in a new tab)</span></a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub<span className="sr-only"> (opens in a new tab)</span></a>
        </div>
        <p className="footer-note">Statistical thinking.<br />Meaningful evidence. Better health.</p>
      </div>
    </footer>
  );
}
