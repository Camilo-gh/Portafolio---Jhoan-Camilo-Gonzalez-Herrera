import { motion } from 'framer-motion';
import { SiReact, SiSpringboot, SiLaravel, SiMysql, SiMongodb, SiGithub, SiGit, SiDocker, SiPython } from 'react-icons/si';
import { FiArrowRight, FiDownload, FiChevronDown, FiCode } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

// Grid estable (no posiciones sueltas) de íconos del stack
const stackIcons = [
  { Icon: SiReact, color: '#61DAFB', label: 'React' },
  { Icon: SiSpringboot, color: '#6DB33F', label: 'Spring Boot' },
  { Icon: SiLaravel, color: '#FF2D20', label: 'Laravel' },
  { Icon: SiMysql, color: '#4479A1', label: 'MySQL' },
  { Icon: SiMongodb, color: '#47A248', label: 'MongoDB' },
  { Icon: SiGit, color: '#F05032', label: 'Git' },
  { Icon: SiDocker, color: '#2496ED', label: 'Docker' },
  { Icon: SiPython, color: '#3776AB', label: 'Python' },
];

export default function Hero({ onOpenProjects }) {
  const { t } = useLanguage();
  const skills = ['ITIL', 'Active Directory', 'ServiceNow', 'React', 'Laravel', 'Spring Boot', 'MySQL', 'MongoDB'];

  const socialLinks = [
    { name: 'GitHub', Icon: SiGithub, href: 'https://github.com/Camilo-gh', color: 'hover:text-gray-300' },
    { name: 'LinkedIn', Icon: FaLinkedin, href: 'https://www.linkedin.com/in/jhoan-camilo-gonzalez-herrera-255014257/', color: 'hover:text-blue-400' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="min-h-screen grid md:grid-cols-[1.1fr_0.9fr] gap-x-6 lg:gap-x-10 items-center px-6 md:px-12 lg:px-20 text-white relative overflow-hidden">

      {/* Blobs decorativos */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />

      {/* Columna izquierda: texto */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 py-20"
      >
        <motion.p
          className="text-cyan-400 font-mono mb-5 tracking-wider text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {t('hero.greeting')}
        </motion.p>

        {/* Título forzado a 2 líneas estables, tamaño responsivo para que no rompa el layout */}
        <motion.h1
          className="font-bold mb-8 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-[1.1] text-4xl sm:text-5xl lg:text-6xl"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <span className="block whitespace-nowrap">{t('hero.title1')}</span>
          <span className="block whitespace-nowrap">{t('hero.title2')}</span>
        </motion.h1>

        <motion.p
          className="text-slate-300 text-xl mb-4 leading-relaxed max-w-xl"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.p
          className="text-slate-400 text-base mb-10 leading-relaxed max-w-xl"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.3 }}
        >
          {t('hero.description')}
        </motion.p>

        {/* Skills Tags */}
        <motion.div
          className="flex flex-wrap gap-2 mb-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              variants={itemVariants}
              className="px-4 py-1.5 text-sm rounded-full bg-slate-800/50 border border-slate-700 hover:border-cyan-400 transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Botones */}
        <motion.div
          className="flex flex-wrap gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <button
            onClick={onOpenProjects}
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            {t('hero.viewProjects')}
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="/cv.pdf"
            download="Jhoan_Camilo_Gonzalez_CV.pdf"
            className="group px-8 py-4 rounded-full border-2 border-slate-600 hover:border-cyan-400 font-semibold flex items-center gap-2 hover:bg-slate-800/50 transition-all duration-300"
          >
            {t('hero.downloadCV')}
            <FiDownload className="group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {socialLinks.map(({ name, Icon, href, color }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`p-3 rounded-full bg-slate-800 border border-slate-700 ${color} transition-all hover:scale-110 hover:bg-slate-700`}
              aria-label={name}
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* Columna derecha: panel de stack, grid estable y elegante */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="hidden md:flex relative items-center justify-center"
      >
        <div className="relative w-full max-w-sm rounded-3xl bg-slate-900/40 backdrop-blur-md border border-slate-700/60 p-8 shadow-2xl shadow-purple-500/10">

          {/* Símbolo de código central, como acento */}
          <div className="flex items-center justify-center mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border border-slate-700">
              <FiCode size={36} className="text-cyan-300" />
            </div>
          </div>

          <p className="text-center text-slate-400 text-xs font-mono mb-6 tracking-widest">
            &lt;/&gt; {t('hero.stackTitle')}
          </p>

          {/* Grid fijo, sin posiciones absolutas sueltas */}
          <div className="grid grid-cols-4 gap-4">
            {stackIcons.map(({ Icon, color, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                whileHover={{ y: -4, scale: 1.08 }}
                className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-cyan-400/60 transition-colors"
                title={label}
              >
                <Icon size={26} color={color} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Indicador de Scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm text-slate-400">{t('hero.scroll')}</span>
        <FiChevronDown className="text-cyan-400" size={24} />
      </motion.div>
    </section>
  );
}