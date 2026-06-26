import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const steps = [
  {
    number: '01 / 04',
    title: 'Requirements Analysis',
    description:
      'Understanding the project scope, user stories, and acceptance criteria. Identifying test scenarios, edge cases, and defining the test strategy for comprehensive coverage.',
    tags: ['Requirement Review', 'Scope Analysis', 'Test Strategy', 'Risk Assessment'],
    visual: (
      <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="50" stroke="#c8ee44" strokeWidth="0.5" opacity="0.2" />
        <circle cx="150" cy="100" r="70" stroke="#c8ee44" strokeWidth="0.3" opacity="0.15" />
        <circle cx="150" cy="100" r="30" stroke="#c8ee44" strokeWidth="0.5" opacity="0.3" />
        <polygon points="150,70 170,95 165,120 135,120 130,95" stroke="#f5f5f5" strokeWidth="0.8" fill="none" opacity="0.5" />
        <circle cx="150" cy="100" r="5" fill="#c8ee44" opacity="0.5" />
        <line x1="150" y1="70" x2="150" y2="40" stroke="#c8ee44" strokeWidth="0.3" opacity="0.3" />
        <line x1="170" y1="95" x2="200" y2="80" stroke="#c8ee44" strokeWidth="0.3" opacity="0.3" />
        <line x1="130" y1="95" x2="100" y2="80" stroke="#c8ee44" strokeWidth="0.3" opacity="0.3" />
      </svg>
    ),
  },
  {
    number: '02 / 04',
    title: 'Test Planning',
    description:
      'Designing detailed test cases and test suites. Setting up Postman collections for API testing, preparing SQL queries for database validation, and configuring test environments.',
    tags: ['Test Cases', 'Postman Setup', 'SQL Queries', 'Environment Config'],
    visual: (
      <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="50" width="100" height="100" rx="4" stroke="#f5f5f5" strokeWidth="0.5" fill="none" opacity="0.3" />
        <line x1="120" y1="75" x2="180" y2="75" stroke="#c8ee44" strokeWidth="0.5" opacity="0.3" />
        <line x1="120" y1="90" x2="170" y2="90" stroke="#c8ee44" strokeWidth="0.5" opacity="0.3" />
        <line x1="120" y1="105" x2="175" y2="105" stroke="#c8ee44" strokeWidth="0.5" opacity="0.3" />
        <line x1="120" y1="120" x2="160" y2="120" stroke="#c8ee44" strokeWidth="0.5" opacity="0.3" />
        <circle cx="112" cy="75" r="2" fill="#c8ee44" opacity="0.5" />
        <circle cx="112" cy="90" r="2" fill="#c8ee44" opacity="0.5" />
        <circle cx="112" cy="105" r="2" fill="#c8ee44" opacity="0.5" />
        <circle cx="112" cy="120" r="2" fill="#c8ee44" opacity="0.5" />
      </svg>
    ),
  },
  {
    number: '03 / 04',
    title: 'Execution & Reporting',
    description:
      'Executing test cases across UI, API, and database layers. Running Postman collections, performing manual UI testing, validating data consistency, and documenting all findings with clear reproduction steps.',
    tags: ['Test Execution', 'Bug Reporting', 'Defect Tracking', 'Reproduction Steps'],
    visual: (
      <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="90" y="50" width="40" height="60" rx="3" stroke="#f5f5f5" strokeWidth="0.5" fill="none" opacity="0.3" />
        <rect x="90" y="80" width="40" height="30" rx="0" fill="#c8ee44" opacity="0.1" />
        <rect x="140" y="40" width="40" height="70" rx="3" stroke="#f5f5f5" strokeWidth="0.5" fill="none" opacity="0.3" />
        <rect x="140" y="70" width="40" height="40" rx="0" fill="#c8ee44" opacity="0.1" />
        <rect x="190" y="55" width="40" height="55" rx="3" stroke="#f5f5f5" strokeWidth="0.5" fill="none" opacity="0.3" />
        <rect x="190" y="75" width="40" height="35" rx="0" fill="#c8ee44" opacity="0.1" />
        <line x1="80" y1="110" x2="240" y2="110" stroke="#333" strokeWidth="0.5" />
        <text x="110" y="125" textAnchor="middle" fill="#666" fontSize="7">UI</text>
        <text x="160" y="125" textAnchor="middle" fill="#666" fontSize="7">API</text>
        <text x="210" y="125" textAnchor="middle" fill="#666" fontSize="7">DB</text>
        <line x1="110" y1="140" x2="150" y2="140" stroke="#c8ee44" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4" />
        <line x1="160" y1="140" x2="200" y2="140" stroke="#c8ee44" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.4" />
        <circle cx="155" cy="140" r="3" fill="#c8ee44" opacity="0.3" />
      </svg>
    ),
  },
  {
    number: '04 / 04',
    title: 'Delivery & Handoff',
    description:
      'Compiling comprehensive test reports with metrics, defect summaries, and quality assessments. Collaborating with the development team for fix verification and final sign-off.',
    tags: ['Test Reports', 'Quality Metrics', 'Fix Verification', 'Sign-off'],
    visual: (
      <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="90" r="35" stroke="#c8ee44" strokeWidth="0.5" opacity="0.3" />
        <polyline points="135,90 145,100 168,77" stroke="#c8ee44" strokeWidth="2" fill="none" opacity="0.6" />
        <circle cx="150" cy="90" r="50" stroke="#f5f5f5" strokeWidth="0.3" opacity="0.15" strokeDasharray="4 6" />
        <line x1="100" y1="150" x2="200" y2="150" stroke="#333" strokeWidth="0.5" />
        <circle cx="120" cy="150" r="4" fill="#c8ee44" opacity="0.3" />
        <circle cx="150" cy="150" r="4" fill="#c8ee44" opacity="0.5" />
        <circle cx="180" cy="150" r="4" fill="#c8ee44" opacity="0.7" />
      </svg>
    ),
  },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <motion.div
          className="section-label"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          [04] Process / How I Work
        </motion.div>

        <motion.h2
          className="section-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          From <em>briefing</em> to <em>launch.</em>
        </motion.h2>

        <div className="process-steps">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="process-step"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="process-step-inner">
                <div className="process-step-visual">{step.visual}</div>
                <div className="process-step-content">
                  <div className="process-step-number">{step.number}</div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <div className="process-step-tags">
                    {step.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
