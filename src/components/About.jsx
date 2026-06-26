import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const tools = {
  'Testing Tools': ['Postman', 'Cypress', 'Selenium', 'JMeter', 'JIRA', 'TestRail'],
  'AI Tools': ['GitHub Copilot', 'Gemini Pro', 'ChatGPT', 'AI Test Generation'],
  'Technical Skills': ['REST APIs', 'SQL', 'HTML/CSS', 'JavaScript', 'Git', 'Agile/Scrum'],
  'Databases': ['MySQL', 'PostgreSQL', 'MongoDB', 'Database Validation'],
};

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <motion.div
          className="section-label"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          [02] About
        </motion.div>

        <motion.h2
          className="section-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          Quality is not an act, <br />it&apos;s a <em>habit.</em>
        </motion.h2>

        <div className="about-grid">
          <motion.div
            className="about-text"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <p>
              I&apos;m <strong>Muhammad Qurat Mehdi</strong>, a QA Engineer with a passion for 
              ensuring software quality at every layer — from the frontend UI down to 
              the database. I specialize in <strong>manual testing</strong>, <strong>API 
              validation</strong>, and <strong>end-to-end data flow verification</strong>.
            </p>
            <p>
              What sets me apart is my integration of <strong>AI-powered tools</strong> into 
              the QA workflow. I leverage GitHub Copilot and Gemini Pro to accelerate test 
              case generation, create comprehensive boundary-value test data, and optimize 
              testing processes — making me a <strong>modern, forward-thinking engineer</strong> who 
              increases testing efficiency and velocity.
            </p>
            <p>
              I believe in meticulous documentation, clear bug reporting, and close 
              collaboration with development teams in Agile environments to deliver 
              products that truly work.
            </p>
          </motion.div>

          <motion.div
            className="about-tools"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {Object.entries(tools).map(([category, items]) => (
              <div key={category} className="about-tool-category">
                <h4>{category}</h4>
                <div className="about-tool-list">
                  {items.map((tool) => (
                    <span key={tool} className="tag">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
