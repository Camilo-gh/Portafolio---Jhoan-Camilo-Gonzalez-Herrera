import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiAward, FiMail, FiMapPin, FiExternalLink } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

const skillsGrid = [
  'MySQL', 'MongoDB', 'SAP', 'Windows', 'Linux', 'Python',
  'Git', 'CI/CD', 'Scrum', 'Microsoft O365', 'Azure', 'ServiceNow',
];

export default function Resume() {
  const { t } = useLanguage();
  const jobs = t('resume.jobs');
  const education = t('resume.education');
  const certifications = t('resume.certifications');

  return (
    <section id="cv" className="relative px-6 md:px-12 lg:px-20 py-24 text-white scroll-mt-20">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mb-16"
      >
        <p className="text-cyan-400 font-mono text-sm mb-3 tracking-wider">&lt;/&gt; {t('resume.tag')}</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
          {t('resume.title')}
        </h2>
        <p className="text-slate-300 leading-relaxed">{t('resume.summary')}</p>
      </motion.div>

      <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12">

        {/* Experiencia */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-2 mb-8">
            <FiBriefcase className="text-cyan-400" size={20} />
            <h3 className="text-xl font-semibold">{t('resume.experienceTitle')}</h3>
          </div>

          <div className="relative border-l border-slate-700 ml-3 space-y-10">
            {jobs.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="pl-8 relative"
              >
                <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-cyan-400" />
                <p className="text-xs font-mono text-slate-400 mb-1">{job.period}</p>
                <h4 className="text-lg font-semibold text-white">{job.role}</h4>
                <p className="text-cyan-400 text-sm mb-3">{job.company}</p>
                <ul className="space-y-1.5">
                  {job.points.map((point, j) => (
                    <li key={j} className="text-slate-400 text-sm leading-relaxed flex gap-2">
                      <span className="text-purple-400 mt-1.5">▹</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Columna derecha */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          {/* Formación */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FiBookOpen className="text-cyan-400" size={20} />
              <h3 className="text-xl font-semibold">{t('resume.educationTitle')}</h3>
            </div>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.title} className="p-4 rounded-xl bg-slate-800/40 border border-slate-700">
                  <p className="font-medium text-white text-sm">{edu.title}</p>
                  <p className="text-slate-400 text-xs mt-1">{edu.place} · {edu.period}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certificaciones como tarjetas visuales con insignia */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <FiAward className="text-cyan-400" size={20} />
              <h3 className="text-xl font-semibold">{t('resume.certificationsTitle')}</h3>
            </div>
            <div className="grid gap-3">
              {certifications.map((cert) => (
                <motion.div
                  key={cert.title}
                  whileHover={{ y: -2 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-slate-700 hover:border-cyan-400/50 transition-colors"
                >
                  <div className="shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                    <FiAward size={18} className="text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white leading-snug">{cert.title}</p>
                    <p className="text-xs text-slate-400 mt-1">{cert.period}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-xl font-semibold mb-4">{t('resume.skillsTitle')}</h3>
            <div className="flex flex-wrap gap-2">
              {skillsGrid.map((skill) => (
                <span key={skill} className="px-3 py-1.5 text-xs rounded-full bg-slate-800/50 border border-slate-700 text-slate-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contacto */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-slate-700">
            <h3 className="text-lg font-semibold mb-4">{t('resume.contactTitle')}</h3>
            <div className="space-y-3 text-sm text-slate-300">
              <a href="mailto:camilogonzalezherrera661@gmail.com" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                <FiMail size={16} /> camilogonzalezherrera661@gmail.com
              </a>
              <a href="https://wa.me/573236643023" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                <FaWhatsapp size={16} /> {t('resume.whatsapp')}
              </a>
              <div className="flex items-center gap-3">
                <FiMapPin size={16} /> Bogotá, Colombia
              </div>
              <a
                href="https://github.com/Camilo-gh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-cyan-400 transition-colors"
              >
                <FiExternalLink size={16} /> {t('resume.viewGithub')}
              </a>
            </div>
            <p className="text-xs text-slate-500 mt-4">{t('resume.references')}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}