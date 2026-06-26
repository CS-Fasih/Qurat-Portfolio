export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-name">
              Qurat-ul-Ain <span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <div className="footer-copy">
              © {currentYear} Qurat-ul-Ain. All rights reserved.
            </div>
          </div>
          <div className="footer-links">
            <a
              href="https://linkedin.com/in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
            <a href="/Qurat_QA_Resume.pdf" target="_blank" rel="noopener noreferrer">
              Resume ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
