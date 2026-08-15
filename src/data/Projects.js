// Rellena cada proyecto con tu información real.
// - shortDescription: se ve en la tarjeta resumen del modal de lista (1-2 líneas)
// - fullDescription: se ve en la vista de detalle (puede ser un párrafo completo)
// - repoUrl: pega aquí el link de GitHub. Si lo dejas vacío (''), el botón se muestra deshabilitado
// - image: ruta de la imagen. Ponla en /public/projects/ y referencia así: '/projects/nombre.png'
//          Si la dejas como null, se muestra un placeholder con gradiente automáticamente
// - status: 'completed' | 'in-progress'  (in-progress muestra el badge "Próximamente")
 
export const projects = [
  {
    id: 'futcol',
    title: 'Futcol',
    shortDescription: '[Descripción corta pendiente — 1 o 2 líneas sobre qué es Futcol]',
    fullDescription: '[Descripción completa: qué problema resuelve, tu rol específico, retos técnicos que enfrentaste, qué aprendiste]',
    stack: ['[Tecnología 1]', '[Tecnología 2]', '[Tecnología 3]'],
    author: 'Jhoan Camilo González Herrera',
    repoUrl: '', // <-- pega aquí el link del repo
    image: null, // <-- pon aquí la ruta cuando tengas la imagen
    status: 'completed',
  },
  {
    id: 'maxialimentos-landing',
    title: 'MaxiAlimentos — Landing Page',
    shortDescription: '[Descripción corta pendiente]',
    fullDescription: '[Descripción completa: diseñé y desarrollé el sitio web corporativo desde cero, responsable de arquitectura visual, estructura y contenido institucional]',
    stack: ['WordPress'],
    author: 'Jhoan Camilo González Herrera',
    repoUrl: '',
    image: null,
    status: 'completed',
  },
  {
    id: 'maxialimentos-intranet',
    title: 'MaxiAlimentos — Intranet Corporativa',
    shortDescription: '[Descripción corta pendiente]',
    fullDescription: '[Descripción completa: lideré la iniciativa de crear una intranet corporativa, definiendo el stack tecnológico basado en Laravel, React y APIs REST]',
    stack: ['Laravel', 'React', 'API REST', 'MySQL'],
    author: 'Jhoan Camilo González Herrera',
    repoUrl: '',
    image: null,
    status: 'completed',
  },
  {
    id: 'sistema-financiamiento',
    title: 'Sistema de Financiamiento Personal',
    shortDescription: 'Proyecto en desarrollo — próximamente más detalles.',
    fullDescription: '[Aquí irá la descripción completa cuando el proyecto avance más]',
    stack: ['[Por definir]'],
    author: 'Jhoan Camilo González Herrera',
    repoUrl: '',
    image: null,
    status: 'in-progress',
  },
];
 