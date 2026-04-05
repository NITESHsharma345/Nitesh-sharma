import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../data/constants';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function Projects({ id }) {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', ...new Set(PROJECTS.map(p => p.category))];
  
  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <section id={id} className="py-24 px-6 max-w-7xl mx-auto min-h-[800px]">
      <motion.div
         initial={{ opacity: 0, y: 20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
         viewport={{ once: true }}
         className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
        <p className="text-slate-400">Selected works demonstrating my core capabilities.</p>
      </motion.div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
              ${filter === category 
                ? 'bg-accent text-dark shadow-lg shadow-accent/20' 
                : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.id}
              className="glass-card group flex flex-col overflow-hidden p-0 border-white/5 hover:border-accent/30"
            >
              <div className="relative h-64 overflow-hidden mask mask-b">
                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-6 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-semibold bg-white/10 text-accent px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a href={project.liveLink} className="flex items-center gap-2 text-slate-300 hover:text-accent font-medium transition-colors">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                  <a href={project.githubLink} className="flex items-center gap-2 text-slate-300 hover:text-accent font-medium transition-colors">
                    <FaGithub /> Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
