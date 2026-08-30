import { useState, useEffect } from 'react';
import { siteConfig } from '../../config/site.config';
import { sendContactFormEmail, initEmailJS } from '../../lib/emailjs';
import Button from '../ui/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [message, setMessage] = useState('');

  useEffect(() => {
    initEmailJS();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!siteConfig.emailjs.serviceId) {
      setStatus('error');
      setMessage('Email service not configured');
      return;
    }

    setStatus('loading');
    const success = await sendContactFormEmail(formData);

    if (success) {
      setStatus('success');
      setMessage('Thank you! We\'ll be in touch soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } else {
      setStatus('error');
      setMessage('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="bg-white">
      <div className="section-container max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-ink mb-8 text-center">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-ink font-semibold mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="block text-ink font-semibold mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="block text-ink font-semibold mb-2">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold"
            />
          </div>

          <div>
            <label className="block text-ink font-semibold mb-2">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-gold resize-none"
            ></textarea>
          </div>

          {status !== 'idle' && (
            <div className={`p-4 rounded-lg text-center ${
              status === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}>
              {message}
            </div>
          )}

          <div className="flex justify-center">
            <Button type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </form>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-ink/70 mb-4">Or reach out directly:</p>
          <div className="space-y-2">
            <p>
              <a href={`tel:${siteConfig.business.phone}`} className="text-gold font-semibold hover:text-rust">
                {siteConfig.business.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteConfig.business.email}`} className="text-gold font-semibold hover:text-rust">
                {siteConfig.business.email}
              </a>
            </p>
            <p className="text-ink/60">{siteConfig.business.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
