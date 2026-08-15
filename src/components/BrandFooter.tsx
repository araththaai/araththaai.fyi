import React from 'react';

interface BrandFooterProps {
  contactUrl?: string;
  privacyUrl?: string;
  termsUrl?: string;
}

export const BrandFooter: React.FC<BrandFooterProps> = ({
  contactUrl = "#contact",
  privacyUrl = "#privacy",
  termsUrl = "#terms",
}) => {
  return (
    <footer className="site-footer animate-fade-in" aria-label="Araththaai Institutional Footer">
      {/* Assistance callout */}
      <div className="assistance-section">
        <span className="assistance-title">Need immediate assistance?</span>
        <a href={contactUrl} className="text-link assistance-action-link">
          Contact AKM Associates & Legal Consultants
        </a>
      </div>

      <hr className="footer-hairline" aria-hidden="true" />

      {/* Standard copyright and navigation links */}
      <div className="footer-bottom">
        <div className="footer-brand-info">
          <span className="footer-title">Araththaai</span>
          <span className="footer-subtitle">AKM Associates & Legal Consultants</span>
        </div>

        <div className="footer-legal">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Araththaai. All rights reserved.
          </p>
          <nav className="footer-nav" aria-label="Footer Legal Navigation">
            <a href={privacyUrl} className="text-link footer-nav-link">Privacy</a>
            <span className="bullet-separator" aria-hidden="true">&bull;</span>
            <a href={termsUrl} className="text-link footer-nav-link">Terms</a>
            <span className="bullet-separator" aria-hidden="true">&bull;</span>
            <a href={contactUrl} className="text-link footer-nav-link">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default BrandFooter;
