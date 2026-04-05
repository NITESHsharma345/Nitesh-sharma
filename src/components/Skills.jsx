import { motion } from 'framer-motion';
import { SKILLS } from '../data/constants';

export default function Skills({ id }) {
  return (
    <section id={id} className="py-24 px-6 bg-slate-900/50 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-white">Technical Skills</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Technologies I work with efficiently to build and scale frontend applications.</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {SKILLS.map((skill, index) => {
             const Icon = skill.icon;
             return (
               <motion.div
                 key={skill.name}
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.3, delay: index * 0.1 }}
                 viewport={{ once: true }}
                 className="glass-card flex flex-col items-center justify-center p-8 hover:bg-slate-800/80 hover:border-accent/40 group cursor-default"
               >
                 <Icon className="text-5xl text-slate-400 group-hover:text-accent transition-colors duration-300 mb-4" />
                 <h3 className="text-lg font-medium text-slate-200">{skill.name}</h3>
                 
                 <div className="w-full bg-slate-800 rounded-full h-1.5 mt-4 overflow-hidden">
                   <motion.div 
                     initial={{ width: 0 }}
                     whileInView={{ width: `${skill.progress}%` }}
                     transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                     className="bg-gradient-to-r from-accent to-purple-500 h-1.5 rounded-full"
                   />
                 </div>
               </motion.div>
             )
          })}
        </div>
      </div>
    </section>
  );
}
