import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SiReact, SiSpringboot, SiLaravel, SiMysql, SiMongodb, SiGithub } from 'react-icons/si';
import { FiArrowRight, FiDownload, FiChevronDown } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';
 
const stackIcons = [
  { Icon: SiReact, color: '#61DAFB', top: '10%', left: '20%', delay: 0 },
  { Icon: SiSpringboot, color: '#6DB33F', top: '55%', left: '10%', delay: 0.3 },
  { Icon: SiLaravel, color: '#FF2D20', top: '75%', left: '45%', delay: 0.6 },
  { Icon: SiMysql, color: '#4479A1', top: '20%', left: '65%', delay: 0.9 },
  { Icon: SiMongodb, color: '#47A248', top: '50%', left: '75%', delay: 1.2 },
];
 
export default function Hero() {
  const skills = ['ITIL', 'Active Directory', 'ServiceNow', 'React', 'Laravel', 'Spring Boot', 'MySQL', 'MongoDB'];

  const socialLinks = [
    { name: 'GitHub', Icon: SiGithub, href: 'https://github.com', color: 'hover:text-gray-300' },
    { name: 'LinkedIn', Icon: FaLinkedin, href: 'https://linkedin.com', color: 'hover:text-blue-400' },
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
    <section className="min-h-screen grid md:grid-cols-2 items-center px-8 md:px-16 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
 
      {/* Blobs decorativos */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-0 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
 
      {/* Columna izquierda: texto */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 py-20"
      >
        <motion.p 
          className="text-cyan-400 font-mono mb-4 tracking-wider text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          👋 Bienvenido
        </motion.p>

        <motion.h1 
          className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent leading-tight"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          De resolver tickets a construir soluciones.
        </motion.h1>

        <motion.p 
          className="text-slate-300 text-lg mb-8 leading-relaxed max-w-lg"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
        >
          Analista de Soporte TI en FRACTALIA, aprendiendo a diario para convertirme en desarrollador full stack. Manejo tanto el lado del soporte como el desarrollo.
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
              className="px-3 py-1 text-xs rounded-full bg-slate-800/50 border border-slate-700 hover:border-cyan-400 transition-colors"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>

        {/* Botones mejorados */}
        <motion.div 
          className="flex flex-wrap gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/proyectos"
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            Ver proyectos
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <a
            href="/cv.pdf"
            download="Jhoan_Camilo_Gonzalez_CV.pdf"
            className="group px-8 py-4 rounded-full border-2 border-slate-600 hover:border-cyan-400 font-semibold flex items-center gap-2 hover:bg-slate-800/50 transition-all duration-300"
          >
            Descargar CV
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

      {/* Columna derecha: íconos flotantes del stack */}
      <div className="relative h-[400px] md:h-[500px] hidden md:block">
        {stackIcons.map(({ Icon, color, top, left, delay }, i) => (
          <motion.div
            key={i}
            className="absolute p-4 rounded-2xl bg-slate-800/60 backdrop-blur-sm border border-slate-700"
            style={{ top, left }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -12, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay },
              scale: { duration: 0.5, delay },
              y: { duration: 3, repeat: Infinity, delay: delay + 0.5, ease: 'easeInOut' },
            }}
          >
            <Icon size={40} color={color} />
          </motion.div>
        ))}
      </div>

      {/* Indicador de Scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm text-slate-400">Scroll</span>
        <FiChevronDown className="text-cyan-400" size={24} />
      </motion.div>
    </section>
  );
}
 