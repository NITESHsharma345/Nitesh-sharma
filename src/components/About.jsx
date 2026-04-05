import { motion } from 'framer-motion';
import { MY_DETAILS } from '../data/constants';

export default function About({ id }) {
  return (
    <section id={id} className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true, margin: "-100px" }}
           className="relative aspect-square md:aspect-[4/5] max-w-md mx-auto w-full"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-accent to-purple-500 rounded-2xl transform rotate-3 scale-105 opacity-50 blur-lg" />
          <img 
            src="/profile.png" 
            alt="Profile" 
            className="rounded-2xl w-full h-full object-cover relative z-10 shadow-2xl glass-card p-2"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <h2 className="text-4xl font-bold mb-6 text-white">About Me</h2>
          <p className="text-slate-300 text-lg leading-relaxed mb-8">
            {MY_DETAILS.bio}
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="glass-card hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-accent text-3xl font-bold mb-2">3+</h3>
              <p className="text-slate-400 font-medium">Years Experience</p>
            </div>
            <div className="glass-card hover:-translate-y-2 transition-transform duration-300">
              <h3 className="text-accent text-3xl font-bold mb-2">20+</h3>
              <p className="text-slate-400 font-medium">Projects Completed</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
             <div className="w-12 h-[1px] bg-slate-600"></div>
             <p className="text-slate-400 tracking-widest text-sm uppercase">Based in {MY_DETAILS.location}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
