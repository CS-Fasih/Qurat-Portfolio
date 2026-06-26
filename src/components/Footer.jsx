export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-name">
              Muhammad Qurat Mehdi <span style={{ color: 'var(--accent)' }}>.</span>
            </div>
            <div className="footer-copy">
              © {currentYear} Muhammad Qurat Mehdi. All rights reserved.
            </div>
          </div>
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/qurat-mehdi-a15670308/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://github.com/mqurat"
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
