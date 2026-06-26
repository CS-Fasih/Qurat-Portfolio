import { useState } from 'react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consent: false,
  });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.consent) return;

    setStatus('sending');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Get key at https://web3forms.com with mquratmehdi@gmail.com
          subject: `Portfolio Contact — ${formData.firstName} ${formData.lastName}`,
          from_name: `${formData.firstName} ${formData.lastName}`,
          to: 'mquratmehdi@gmail.com',
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          consent: false,
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-grid">
          {/* Left Side — Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="section-label">[06] Contact</div>
            <h2 className="contact-heading">
              Let&apos;s <em>talk.</em>
            </h2>
            <p className="contact-description">
              Direct line to Muhammad Qurat Mehdi — no middleman. Tell me about your
              next project that needs quality assurance, and I&apos;ll reply
              within 24 hours with a concrete plan.
            </p>

            <div className="contact-info">
              <div className="contact-info-item">
                <span className="contact-info-label">Email</span>
                <span className="contact-info-value">
                  <a href="mailto:mquratmehdi@gmail.com">mquratmehdi@gmail.com</a>
                </span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Phone</span>
                <span className="contact-info-value">03242-194856</span>
              </div>
              <div className="contact-info-item">
                <span className="contact-info-label">Location</span>
                <span className="contact-info-value">Saadi Town Block 7, Karachi</span>
              </div>
            </div>

            <div className="contact-availability">
              Available for new projects
            </div>
          </motion.div>

          {/* Right Side — Form */}
          <motion.div
            className="contact-form-wrapper"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="contact-form-header">
              <div className="label">Briefing</div>
              <h3>
                Send me a <em>short briefing.</em>
              </h3>
            </div>

            {status === 'success' ? (
              <div className="form-success">
                <h4>Message Sent! ✓</h4>
                <p>Thank you for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button
                  className="btn btn-outline"
                  style={{ marginTop: '20px' }}
                  onClick={() => setStatus('idle')}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">
                      First Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      className="form-input"
                      placeholder="Anna"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">
                      Last Name <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      className="form-input"
                      placeholder="Smith"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="form-input"
                    placeholder="anna@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    className="form-input"
                    placeholder="+1 555 1234567"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Company Name — optional</label>
                  <input
                    type="text"
                    name="company"
                    className="form-input"
                    placeholder="Studio Inc."
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Message — optional</label>
                  <textarea
                    name="message"
                    className="form-textarea"
                    placeholder="Idea, project type, timeline — what I should know."
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                  />
                </div>

                <div className="form-checkbox">
                  <input
                    type="checkbox"
                    name="consent"
                    id="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="consent">
                    I consent to the processing of my data according to the privacy policy.
                  </label>
                </div>

                <button
                  type="submit"
                  className="form-submit"
                  disabled={status === 'sending' || !formData.consent}
                >
                  {status === 'sending' ? 'Sending...' : 'Send request →'}
                </button>

                {status === 'error' && (
                  <p style={{ color: '#ff6b6b', fontSize: '13px', marginTop: '12px', textAlign: 'center' }}>
                    Something went wrong. Please try again or email directly.
                  </p>
                )}
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
