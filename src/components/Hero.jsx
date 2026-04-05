import { motion } from 'framer-motion';
import { MY_DETAILS } from '../data/constants';

export default function Hero({ id }) {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">
      {/* Background glowing blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-accent font-medium mb-4 tracking-wide"
        >
          {MY_DETAILS.shortIntro}
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white leading-tight"
        >
          Hi, I am <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">
            {MY_DETAILS.name}
          </span>
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-2xl md:text-3xl text-slate-400 mb-10 font-light"
        >
          {MY_DETAILS.role}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#projects" className="btn-primary">
            View My Work
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 rounded-lg border border-slate-600 hover:border-accent hover:text-accent transition-colors duration-300 font-medium bg-dark/50 backdrop-blur"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
