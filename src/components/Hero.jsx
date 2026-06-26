import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-gradient" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <motion.div
              className="section-label"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={0}
            >
              [01] QA Engineer
            </motion.div>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              I ensure <em>quality</em> at every <em>layer</em> of the stack.
            </motion.h1>

            <motion.p
              className="hero-subtitle"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
            >
              Manual testing, API validation, and database verification —
              delivering bug-free digital products with AI-powered QA workflows
              and meticulous attention to detail.
            </motion.p>

            <motion.div
              className="hero-actions"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
            >
              <a href="#contact" className="btn btn-primary">
                Hire Me →
              </a>
              <a href="#projects" className="btn btn-outline">
                <span style={{ color: 'var(--accent)', fontSize: '8px' }}>●</span>
                View Projects
              </a>
              <a 
                href="/Qurat_QA_Resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline"
                style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--accent)' }}>
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Resume
              </a>
            </motion.div>

            <motion.div
              className="hero-stats"
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={4}
            >
              <div className="hero-stat">
                <div className="hero-stat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="hero-stat-value">3+</div>
                  <div className="hero-stat-label">Projects Tested</div>
                </div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <div>
                  <div className="hero-stat-value">AI-Powered</div>
                  <div className="hero-stat-label">QA Workflows</div>
                </div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                    <polyline points="2 17 12 22 22 17"></polyline>
                    <polyline points="2 12 12 17 22 12"></polyline>
                  </svg>
                </div>
                <div>
                  <div className="hero-stat-value">Full Stack</div>
                  <div className="hero-stat-label">Testing Coverage</div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="hero-image-glow" />
            <div className="hero-image-ring" />
            <div className="hero-image-wrapper">
              <img
                src="/Qurat_formal_image.jpeg"
                alt="Muhammad Qurat Mehdi — QA Engineer"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
