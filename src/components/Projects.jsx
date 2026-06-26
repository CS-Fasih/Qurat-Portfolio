import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const projects = [
  {
    step: '01 / 03',
    title: 'AI-Assisted QA Workflow Integration',
    description:
      'Documented a comprehensive case study demonstrating how AI tools like GitHub Copilot and Gemini Pro are leveraged as force multipliers in QA. Showcased prompt-driven generation of complex boundary-value test data and AI-accelerated Cypress assertion writing to significantly boost testing efficiency and velocity.',
    tags: ['GitHub Copilot', 'Gemini Pro', 'AI Test Generation', 'Cypress', 'Boundary Testing'],
    visual: (
      <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="60" stroke="#c8ee44" strokeWidth="0.5" opacity="0.3" />
        <circle cx="150" cy="100" r="80" stroke="#c8ee44" strokeWidth="0.3" opacity="0.2" />
        <circle cx="150" cy="100" r="40" stroke="#c8ee44" strokeWidth="0.5" opacity="0.4" />
        <polygon points="150,60 170,90 170,110 150,140 130,110 130,90" stroke="#f5f5f5" strokeWidth="0.8" fill="none" opacity="0.6" />
        <line x1="90" y1="50" x2="130" y2="90" stroke="#c8ee44" strokeWidth="0.3" opacity="0.3" />
        <line x1="210" y1="50" x2="170" y2="90" stroke="#c8ee44" strokeWidth="0.3" opacity="0.3" />
        <line x1="90" y1="150" x2="130" y2="110" stroke="#c8ee44" strokeWidth="0.3" opacity="0.3" />
        <line x1="210" y1="150" x2="170" y2="110" stroke="#c8ee44" strokeWidth="0.3" opacity="0.3" />
        <circle cx="90" cy="50" r="3" fill="#c8ee44" opacity="0.4" />
        <circle cx="210" cy="50" r="3" fill="#c8ee44" opacity="0.4" />
        <circle cx="90" cy="150" r="3" fill="#c8ee44" opacity="0.4" />
        <circle cx="210" cy="150" r="3" fill="#c8ee44" opacity="0.4" />
        <circle cx="150" cy="100" r="4" fill="#c8ee44" opacity="0.7" />
        <text x="150" y="180" textAnchor="middle" fill="#666" fontSize="8" fontFamily="Inter">AI-POWERED TESTING</text>
      </svg>
    ),
  },
  {
    step: '02 / 03',
    title: 'User Management Portal',
    description:
      'Validated the functionality and data integrity of a User Management Portal by testing frontend forms, underlying APIs, and verifying database entries. Created and executed detailed manual test cases for account creation, profile updates, and role assignments. Tested CRUD API endpoints using Postman and performed database consistency checks.',
    tags: ['Manual Testing', 'Postman', 'CRUD APIs', 'Database Checks', 'Bug Tracking'],
    visual: (
      <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="60" width="100" height="80" rx="4" stroke="#f5f5f5" strokeWidth="0.8" fill="none" opacity="0.4" />
        <rect x="110" y="80" width="80" height="10" rx="2" stroke="#c8ee44" strokeWidth="0.5" fill="none" opacity="0.3" />
        <rect x="110" y="100" width="80" height="10" rx="2" stroke="#c8ee44" strokeWidth="0.5" fill="none" opacity="0.3" />
        <rect x="110" y="120" width="40" height="10" rx="2" fill="#c8ee44" opacity="0.2" />
        <line x1="60" y1="100" x2="100" y2="100" stroke="#c8ee44" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
        <line x1="200" y1="100" x2="240" y2="100" stroke="#c8ee44" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.4" />
        <circle cx="50" cy="100" r="15" stroke="#f5f5f5" strokeWidth="0.5" fill="none" opacity="0.3" />
        <text x="50" y="104" textAnchor="middle" fill="#f5f5f5" fontSize="10" opacity="0.5">UI</text>
        <circle cx="250" cy="100" r="15" stroke="#f5f5f5" strokeWidth="0.5" fill="none" opacity="0.3" />
        <text x="250" y="104" textAnchor="middle" fill="#f5f5f5" fontSize="10" opacity="0.5">DB</text>
        <text x="150" y="180" textAnchor="middle" fill="#666" fontSize="8" fontFamily="Inter">END-TO-END DATA FLOW</text>
      </svg>
    ),
  },
  {
    step: '03 / 03',
    title: 'E-Commerce Platform Testing',
    description:
      'Executed manual frontend testing and API validation for a web-based e-commerce platform ensuring accurate data flow between the user interface and database. Performed thorough manual testing on UI responsiveness, form validations, and checkout process. Validated REST APIs and conducted database verification for user registrations and completed orders.',
    tags: ['Frontend Testing', 'REST APIs', 'E-Commerce', 'Database Verification', 'Agile'],
    visual: (
      <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="100" y="50" width="30" height="80" rx="2" stroke="#f5f5f5" strokeWidth="0.5" fill="none" opacity="0.3" />
        <rect x="135" y="70" width="30" height="60" rx="2" stroke="#f5f5f5" strokeWidth="0.5" fill="none" opacity="0.3" />
        <rect x="170" y="40" width="30" height="90" rx="2" stroke="#f5f5f5" strokeWidth="0.5" fill="none" opacity="0.3" />
        <rect x="100" y="90" width="30" height="40" fill="#c8ee44" opacity="0.15" rx="2" />
        <rect x="135" y="100" width="30" height="30" fill="#c8ee44" opacity="0.15" rx="2" />
        <rect x="170" y="80" width="30" height="50" fill="#c8ee44" opacity="0.15" rx="2" />
        <line x1="80" y1="130" x2="220" y2="130" stroke="#333" strokeWidth="0.5" />
        <line x1="80" y1="130" x2="80" y2="35" stroke="#333" strokeWidth="0.5" />
        <circle cx="115" cy="155" r="3" fill="#c8ee44" opacity="0.5" />
        <circle cx="150" cy="155" r="3" fill="#c8ee44" opacity="0.5" />
        <circle cx="185" cy="155" r="3" fill="#c8ee44" opacity="0.5" />
        <text x="115" y="170" textAnchor="middle" fill="#666" fontSize="7">UI</text>
        <text x="150" y="170" textAnchor="middle" fill="#666" fontSize="7">API</text>
        <text x="185" y="170" textAnchor="middle" fill="#666" fontSize="7">DB</text>
        <text x="150" y="190" textAnchor="middle" fill="#666" fontSize="8" fontFamily="Inter">INTEGRATION TESTING</text>
      </svg>
    ),
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.div
          className="section-label"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          [03] Projects
        </motion.div>

        <motion.h2
          className="section-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          From <em>testing</em> to <em>delivery.</em>
        </motion.h2>

        <div className="projects-list">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="project-card-inner">
                <div className="project-card-visual">{project.visual}</div>
                <div className="project-card-content">
                  <div className="project-card-step">{project.step}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-card-tags">
                    {project.tags.map((tag) => (
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
