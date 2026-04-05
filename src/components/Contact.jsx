import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';
import { MY_DETAILS } from '../data/constants';

export default function Contact({ id }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const text = `Hello Nitesh, my name is ${name}.%0A%0AEmail: ${email}%0AMessage: ${message}`;
    window.open(`https://wa.me/919873589608?text=${text}`, '_blank');
  };

  return (
    <section id={id} className="py-24 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
        <p className="text-slate-400">Have a question or want to work together? Leave a message.</p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col gap-4 mb-8">
            <a href={`mailto:${MY_DETAILS.email}`} className="flex items-center gap-4 text-slate-300 hover:text-accent transition-colors">
              <FaEnvelope className="text-xl" /> {MY_DETAILS.email}
            </a>
          </div>

          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/nitesh-sharma-hify-tech?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-accent hover:text-dark transition-all duration-300 text-xl text-slate-300">
              <FaLinkedin />
            </a>
            <a href="https://github.com/NITESHsharma345" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-accent hover:text-dark transition-all duration-300 text-xl text-slate-300">
              <FaGithub />
            </a>
            <a href="https://www.instagram.com/nitesh_sharama/" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-accent hover:text-dark transition-all duration-300 text-xl text-slate-300">
              <FaInstagram />            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <form className="glass-card flex flex-col gap-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-400">Name</label>
              <input type="text" id="name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="bg-slate-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="John Doe" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-400">Email</label>
              <input type="email" id="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="bg-slate-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent transition-colors" placeholder="john@example.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
              <textarea id="message" rows="4" required value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="bg-slate-900/50 border border-white/10 rounded-lg p-3 text-white focus:outline-none focus:border-accent transition-colors resize-none" placeholder="Hello..." />
            </div>
            <button type="submit" className="btn-primary w-full mt-2">
              Send via WhatsApp
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
