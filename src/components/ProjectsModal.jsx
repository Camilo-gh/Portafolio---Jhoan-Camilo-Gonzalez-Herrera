import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiExternalLink, FiArrowLeft, FiCode, FiUser, FiClock } from 'react-icons/fi';
import { projects } from '../data/projects';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectsModal({ isOpen, onClose }) {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projects.find((p) => p.id === selectedId);

  const handleClose = () => {
    onClose();
    // pequeño delay para que no se vea el cambio de lista/detalle mientras se cierra
    setTimeout(() => setSelectedId(null), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 lg:p-16 bg-slate-950/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full h-full max-w-5xl bg-slate-900 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
          >
            {/* Header fijo */}
            <div className="flex items-center justify-between px-6 md:px-8 py-5 border-b border-slate-800 shrink-0">
              {selectedProject ? (
                <button
                  onClick={() => setSelectedId(null)}
                  className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  <FiArrowLeft /> {t('projectsModal.back')}
                </button>
              ) : (
                <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {t('projectsModal.title')}
                </h2>
              )}
              <button
                onClick={handleClose}
                className="p-2 rounded-full hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
                aria-label="Cerrar"
              >
                <FiX size={22} />
              </button>
            </div>

            {/* Contenido scrolleable */}
            <div className="flex-1 overflow-y-auto px-6 md:px-8 py-6">
              {selectedProject ? (
                <ProjectDetail project={selectedProject} t={t} />
              ) : (
                <ProjectList projects={projects} onSelect={setSelectedId} t={t} />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectList({ projects, onSelect, t }) {
  return (
    <div className="grid sm:grid-cols-2 gap-5">
      {projects.map((project, i) => (
        <motion.button
          key={project.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
          onClick={() => onSelect(project.id)}
          className="text-left rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-400/60 overflow-hidden transition-colors group"
        >
          {/* Imagen o placeholder */}
          <div className="h-36 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center relative">
            {project.image ? (
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            ) : (
              <FiCode size={32} className="text-slate-500" />
            )}
            {project.status === 'in-progress' && (
              <span className="absolute top-3 right-3 text-[11px] px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40">
                {t('projectsModal.soon')}
              </span>
            )}
          </div>

          <div className="p-4">
            <h3 className="font-semibold text-white mb-1 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 text-sm mb-3 line-clamp-2">
              {project.shortDescription}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.slice(0, 3).map((tech) => (
                <span key={tech} className="text-[11px] px-2 py-0.5 rounded-full bg-slate-700/60 text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
}

function ProjectDetail({ project, t }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl"
    >
      <div className="h-56 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-6 overflow-hidden">
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        ) : (
          <FiCode size={48} className="text-slate-500" />
        )}
      </div>

      <div className="flex items-center gap-3 mb-3">
        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
        {project.status === 'in-progress' && (
          <span className="text-xs px-2 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 flex items-center gap-1">
            <FiClock size={12} /> {t('projectsModal.soon')}
          </span>
        )}
      </div>

      <p className="text-slate-300 leading-relaxed mb-6">{project.fullDescription}</p>

      <div className="mb-6">
        <p className="text-sm text-slate-400 mb-2">{t('projectsModal.stackTitle')}</p>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="text-sm px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300">
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
        <FiUser size={16} /> {t('projectsModal.createdBy')} {project.author}
      </div>

      {project.repoUrl ? (
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 font-semibold hover:scale-105 transition-transform"
        >
          {t('projectsModal.viewRepo')} <FiExternalLink />
        </a>
      ) : (
        <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed">
          {t('projectsModal.repoSoon')} <FiExternalLink />
        </span>
      )}
    </motion.div>
  );
}