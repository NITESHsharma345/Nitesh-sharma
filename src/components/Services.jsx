import { motion } from 'framer-motion';
import { SERVICES } from '../data/constants';

export default function Services({ id }) {
  return (
    <section id={id} className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">My Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Providing polished, high-performance solutions for the modern web.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
             <motion.div
               key={service.title}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.4, delay: idx * 0.15 }}
               viewport={{ once: true }}
               className="glass-card hover:-translate-y-3 transition-transform duration-500 hover:shadow-2xl hover:shadow-accent/10 border-t-4 border-t-transparent hover:border-t-accent"
             >
               <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
               <p className="text-slate-400 leading-relaxed">{service.description}</p>
             </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
