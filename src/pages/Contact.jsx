import { useState } from 'react';
import { MapPin, Mail, Clock, Send, ArrowRight } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`LANI Group Contact Inquiry: ${formData.subject}`);
    const bodyText = `Full Name: ${formData.name}\n` +
      `Email Address: ${formData.email}\n` +
      `Company/Organization: ${formData.company || 'N/A'}\n\n` +
      `Message:\n${formData.message}`;

    const mailtoBody = encodeURIComponent(bodyText);
    window.location.href = `mailto:careers@lanigroup.com?subject=${subject}&body=${mailtoBody}`;

    const whatsappMessage = `*LANI Group Contact Inquiry*\n\n` +
      `*Full Name:* ${formData.name}\n` +
      `*Email:* ${formData.email}\n` +
      `*Company/Organization:* ${formData.company || 'N/A'}\n` +
      `*Subject:* ${formData.subject}\n\n` +
      `*Message:* ${formData.message}`;

    const encodedWhatsapp = encodeURIComponent(whatsappMessage);
    const whatsappNumbers = ['2349033153480', '2347033356581'];
    const randomPhone = whatsappNumbers[Math.floor(Math.random() * whatsappNumbers.length)];
    window.open(`https://wa.me/${randomPhone}?text=${encodedWhatsapp}`, '_blank');

    setSubmitted(true);
    setFormData({ name: '', email: '', company: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative py-32 md:py-40 overflow-hidden bg-brand-gradient">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-white rounded-full blur-[120px]" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Contact Us
          </h1>
          <div className="w-12 h-[3px] bg-gold mx-auto mt-6" />
          <p className="mt-6 text-white/60 max-w-xl mx-auto">
            Let's explore how we can work together to create lasting impact
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Info */}
            <div className="lg:col-span-2">
              <SectionReveal animation="fade-right">
                <div className="space-y-8">
                  <div>
                    <span className="text-xs font-bold text-brand uppercase tracking-[0.2em]">Get In Touch</span>
                    <h2 className="mt-3 font-display text-3xl font-bold text-text-primary">We'd Love to Hear From You</h2>
                    <p className="mt-4 text-text-muted text-sm leading-relaxed">
                      Whether it's strategy, training, or tech support, we help you grow, innovate, and make real impact.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {[
                      { icon: MapPin, label: 'Office Address', value: '53b Adekunle Fajuyi Way,\nIkeja, G.R.A., Lagos, Nigeria' },
                      { icon: Mail, label: 'Email', value: 'info@lanigroup.com' },
                      { icon: Clock, label: 'Office Hours', value: 'Mon – Fri: 9:00 AM – 5:00 PM (WAT)' },
                    ].map((item) => (
                      <div key={item.label} className="card p-5 flex items-start gap-4">
                        <div className="w-11 h-11 rounded-xl bg-brand/8 flex items-center justify-center flex-shrink-0">
                          <item.icon size={18} className="text-brand" />
                        </div>
                        <div>
                          <p className="font-semibold text-text-primary text-sm">{item.label}</p>
                          <p className="text-xs text-text-muted mt-1 leading-relaxed whitespace-pre-line">{item.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <SectionReveal animation="fade-left" delay={0.15}>
                <div className="card p-8 md:p-10">
                  {submitted ? (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                        <Send size={24} className="text-emerald-600" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-text-primary">Message Sent!</h3>
                      <p className="mt-2 text-text-muted text-sm">We'll get back to you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        {[
                          { name: 'name', label: 'Full Name *', placeholder: 'John Doe', type: 'text', required: true },
                          { name: 'email', label: 'Email *', placeholder: 'john@example.com', type: 'email', required: true },
                        ].map((field) => (
                          <div key={field.name}>
                            <label className="text-xs text-text-muted uppercase tracking-wider font-semibold mb-2 block">{field.label}</label>
                            <input
                              id={`contact-${field.name}`}
                              type={field.type}
                              name={field.name}
                              value={formData[field.name]}
                              onChange={handleChange}
                              required={field.required}
                              className="w-full bg-surface-100 border border-surface-300 rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-light focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                              placeholder={field.placeholder}
                            />
                          </div>
                        ))}
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div>
                          <label className="text-xs text-text-muted uppercase tracking-wider font-semibold mb-2 block">Company</label>
                          <input id="contact-company" type="text" name="company" value={formData.company} onChange={handleChange}
                            className="w-full bg-surface-100 border border-surface-300 rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-light focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                            placeholder="Your Organization" />
                        </div>
                        <div>
                          <label className="text-xs text-text-muted uppercase tracking-wider font-semibold mb-2 block">Subject *</label>
                          <input id="contact-subject" type="text" name="subject" value={formData.subject} onChange={handleChange} required
                            className="w-full bg-surface-100 border border-surface-300 rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-light focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all"
                            placeholder="Partnership Inquiry" />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs text-text-muted uppercase tracking-wider font-semibold mb-2 block">Message *</label>
                        <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                          className="w-full bg-surface-100 border border-surface-300 rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-light focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/10 transition-all resize-none"
                          placeholder="Tell us about your project or inquiry..." />
                      </div>
                      <button type="submit" className="btn-primary w-full sm:w-auto gap-2">
                        Send Message <ArrowRight size={16} />
                      </button>
                    </form>
                  )}
                </div>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
