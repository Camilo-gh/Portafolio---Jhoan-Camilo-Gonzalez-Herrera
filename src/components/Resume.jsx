import { motion } from 'framer-motion';
import { FiBriefcase, FiBookOpen, FiAward, FiMail, FiPhone, FiMapPin, FiExternalLink } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

const experience = [
    {
        company: 'FRACTALIA',
        role: 'Analista de Soporte TI',
        period: 'Marzo 2026 – Presente',
        points: [
            'Soporte técnico avanzado en Windows y macOS, resolución de incidencias vía ServiceNow y soporte remoto con TeamViewer.',
            'Administración de usuarios y credenciales en Active Directory / Entra ID (altas, bajas, MFA).',
            'Diagnóstico y resolución de incidentes N2 bajo metodologías ITIL, garantizando cumplimiento de SLA.',
            'Administración y soporte de Microsoft Azure en entornos productivos.',
        ],
    },
    {
        company: 'MaxiAlimentos S.A.S.',
        role: 'Desarrollador Junior',
        period: 'Julio 2025 – Diciembre 2025',
        points: [
            'Diseño y desarrollo del sitio web corporativo desde cero con WordPress.',
            'Lideré la iniciativa de una intranet corporativa con Laravel, React y APIs REST.',
            'Personalización avanzada de módulos en Odoo para automatización de procesos internos.',
            'Implementación y administración de bases de datos MySQL con queries optimizadas.',
        ],
    },
    {
        company: 'Revive Residuos S.A.S.',
        role: 'Analista de Soporte Técnico TI',
        period: 'Agosto 2024 – Junio 2025',
        points: [
            'Mantenimiento correctivo de software y hardware de equipos e impresoras.',
            'Gestión de sistemas Linux y Windows.',
            'Soporte de primer nivel y gestión de incidentes bajo ITIL.',
            'Soporte a bases de datos, corrección de errores en consultas SQL.',
        ],
    },
];

const education = [
    { title: 'Tecnólogo en Análisis y Desarrollo de Software', place: 'SENA', period: '2023 – 2025' },
    { title: 'Técnico en Contabilidad y Finanzas', place: 'SENA', period: '2020 – 2022' },
];

const certifications = [
    'Aplicación del marco de trabajo Scrum para proyectos de desarrollo de software (2026)',
    'Desarrollo backend con Node.js y MongoDB (2026)',
];

const skillsGrid = [
    'MySQL', 'MongoDB', 'SAP', 'Windows', 'Linux', 'Python',
    'Git', 'CI/CD', 'Scrum', 'Microsoft O365', 'Azure', 'ServiceNow',
];

export default function Resume() {
    return (
        <section id="cv" className="relative px-6 md:px-12 lg:px-20 py-24 text-white">

            {/* Encabezado de sección */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl mb-16"
            >
                <p className="text-cyan-400 font-mono text-sm mb-3 tracking-wider">&lt;/&gt; sobre-mi</p>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                    Experiencia y Formación
                </h2>
                <p className="text-slate-300 leading-relaxed">
                    Desarrollador Backend con experiencia en Spring Boot, Laravel y React, manejo de bases de
                    datos relacionales y no relacionales, e integración de sistemas vía API REST y SOAP.
                    Complemento mi perfil con experiencia en soporte y administración de aplicaciones en
                    ambientes productivos, gestión de incidentes y documentación técnica.
                </p>
            </motion.div>

            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12">

                {/* Columna izquierda: timeline de experiencia */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-2 mb-8">
                        <FiBriefcase className="text-cyan-400" size={20} />
                        <h3 className="text-xl font-semibold">Experiencia laboral</h3>
                    </div>

                    <div className="relative border-l border-slate-700 ml-3 space-y-10">
                        {experience.map((job, i) => (
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

                {/* Columna derecha: educación, skills, contacto */}
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
                            <h3 className="text-xl font-semibold">Formación académica</h3>
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

                    {/* Certificaciones */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <FiAward className="text-cyan-400" size={20} />
                            <h3 className="text-xl font-semibold">Certificaciones</h3>
                        </div>
                        <ul className="space-y-2">
                            {certifications.map((cert) => (
                                <li key={cert} className="text-slate-400 text-sm flex gap-2">
                                    <span className="text-cyan-400 mt-0.5">✓</span>
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Skills grid */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Habilidades técnicas</h3>
                        <div className="flex flex-wrap gap-2">
                            {skillsGrid.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 text-xs rounded-full bg-slate-800/50 border border-slate-700 text-slate-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Contacto */}
                    <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-slate-700">
                        <h3 className="text-lg font-semibold mb-4">Contacto</h3>
                        <div className="space-y-3 text-sm text-slate-300">
                            <a href="mailto:camilogonzalezherrera661@gmail.com" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                                <FiMail size={16} /> camilogonzalezherrera661@gmail.com
                            </a>
                            <a href="tel:+573236643023" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                                <FiPhone size={16} /> +57 323 664 3023
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
                                <FiExternalLink size={16} /> Ver GitHub
                            </a>
                            <a href="https://wa.me/573236643023" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-cyan-400 transition-colors">
                                <FaWhatsapp size={16} /> Escríbeme por WhatsApp
                            </a>
                        </div>
                        <p className="text-xs text-slate-500 mt-4">
                            Referencias profesionales disponibles a solicitud.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}