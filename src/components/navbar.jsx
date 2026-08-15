import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiMenu, FiX } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar({ onOpenProjects }) {
  const { language, toggleLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToId = (id) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-cyan-400 font-semibold tracking-wide"
        >
          &lt;JCGH /&gt;
        </button>

        {/* Links desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm">
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-slate-300 hover:text-cyan-400 transition-colors">
            {t('nav.home')}
          </button>
          <button onClick={() => scrollToId('cv')} className="text-slate-300 hover:text-cyan-400 transition-colors">
            {t('nav.about')}
          </button>
          <button onClick={onOpenProjects} className="text-slate-300 hover:text-cyan-400 transition-colors">
            {t('nav.projects')}
          </button>
          <button onClick={() => scrollToId('footer')} className="text-slate-300 hover:text-cyan-400 transition-colors">
            {t('nav.contact')}
          </button>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-colors text-xs font-mono"
          >
            <FiGlobe size={14} />
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>

        {/* Botón mobile */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          className="md:hidden text-slate-300"
          aria-label="Menú"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Menú mobile desplegable */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden flex flex-col gap-4 px-6 py-6 bg-slate-950/95 border-t border-slate-800"
        >
          <button onClick={() => { setMobileOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="text-left text-slate-300">
            {t('nav.home')}
          </button>
          <button onClick={() => scrollToId('cv')} className="text-left text-slate-300">
            {t('nav.about')}
          </button>
          <button onClick={() => { setMobileOpen(false); onOpenProjects(); }} className="text-left text-slate-300">
            {t('nav.projects')}
          </button>
          <button onClick={() => scrollToId('footer')} className="text-left text-slate-300">
            {t('nav.contact')}
          </button>
          <button onClick={toggleLanguage} className="flex items-center gap-1.5 text-cyan-400 text-sm font-mono">
            <FiGlobe size={14} /> {language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}