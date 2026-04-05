import { MY_DETAILS } from '../data/constants';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-8 text-center text-slate-500 border-t border-white/10 mt-12 glass-nav">
      <p className="text-sm font-medium">
        &copy; {year} {MY_DETAILS.name}. Built with React, Vite & Tailwind.
      </p>
    </footer>
  );
}
