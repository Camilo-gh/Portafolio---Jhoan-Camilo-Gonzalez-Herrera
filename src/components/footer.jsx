import { SiGithub } from 'react-icons/si';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="relative border-t border-slate-800 px-6 md:px-12 lg:px-20 py-12 text-slate-400">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        <div>
          <p className="font-mono text-cyan-400 font-semibold mb-2">&lt;JCGH /&gt;</p>
          <p className="text-sm text-slate-500">{t('footer.tagline')}</p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">{t('footer.linksTitle')}</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="hover:text-cyan-400 transition-colors">{t('nav.home')}</a></li>
            <li><a href="#cv" className="hover:text-cyan-400 transition-colors">{t('nav.about')}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3 text-sm">{t('footer.contactTitle')}</h4>
          <div className="flex gap-3">
            <a href="https://github.com/Camilo-gh" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors" aria-label="GitHub">
              <SiGithub size={18} />
            </a>
            <a href="https://www.linkedin.com/in/jhoan-camilo-gonzalez-herrera-255014257/" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={18} />
            </a>
            <a href="https://wa.me/573236643023" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors" aria-label="WhatsApp">
              <FaWhatsapp size={18} />
            </a>
            <a href="mailto:camilogonzalezherrera661@gmail.com" className="p-2.5 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors" aria-label="Email">
              <FiMail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-slate-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-600">
        <p>© {year} Jhoan Camilo González Herrera. {t('footer.rights')}</p>
        <p>{t('footer.builtWith')}</p>
      </div>
    </footer>
  );
}