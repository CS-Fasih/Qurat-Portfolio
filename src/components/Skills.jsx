import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const skills = [
  {
    icon: '🔍',
    title: 'Manual Testing',
    description:
      'Thorough manual testing of frontend components — verifying UI responsiveness, form validations, and user experience across the entire application.',
    tags: ['Functional Testing', 'UI/UX Testing', 'Regression', 'Cross-browser'],
    number: '01',
  },
  {
    icon: '⚡',
    title: 'API Testing',
    description:
      'Comprehensive REST API validation using Postman — testing CRUD endpoints, verifying status codes, JSON payloads, and data processing accuracy.',
    tags: ['Postman', 'REST APIs', 'CRUD Validation', 'Status Codes'],
    number: '02',
  },
  {
    icon: '🗄️',
    title: 'Database Validation',
    description:
      'Data integrity verification through SQL queries — confirming records are accurately saved, modified, and reflected across UI, API, and database layers.',
    tags: ['SQL Queries', 'Data Integrity', 'CRUD Checks', 'Consistency'],
    number: '03',
  },
];

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <motion.div
          className="section-label"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          [02] Expertise
        </motion.div>

        <motion.h2
          className="section-heading"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          Three <em>disciplines.</em> One <em>mission.</em>
        </motion.h2>

        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              className="skill-card"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="skill-card-number">{skill.number}</div>
              <div className="skill-card-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <div className="skill-card-tags">
                {skill.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
