import { motion } from 'framer-motion';

export default function FloatingActions() {
  return (
    <motion.div
      className="floating-actions"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-action"
        title="WhatsApp"
        aria-label="WhatsApp"
      >
        💬
      </a>
      <a
        href="mailto:mquratmehdi@gmail.com"
        className="floating-action"
        title="Email"
        aria-label="Email"
      >
        ✉
      </a>
      <a
        href="https://www.linkedin.com/in/qurat-mehdi-a15670308/"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-action"
        title="LinkedIn"
        aria-label="LinkedIn"
      >
        in
      </a>
    </motion.div>
  );
}
