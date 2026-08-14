import { motion } from 'framer-motion';

// Fragmentos de código reales de tu stack, se repiten en columnas
const codeSnippets = [
  'const [state, setState] = useState()',
  'public class Controller {',
  '@RestController',
  'SELECT * FROM usuarios;',
  'npm run dev',
  'function App() {',
  '@Autowired',
  'return <div>{children}</div>',
  'public ResponseEntity<?> get() {',
  'db.collection.find({})',
  'import React from "react"',
  '@Service',
  'git commit -m "feat: hero"',
  'async function fetchData() {',
  'export default function() {',
  'CREATE TABLE proyectos (',
  '@RequestMapping("/api")',
  'const response = await fetch(url)',
];

// Genera columnas de texto con snippets repetidos aleatoriamente
function generateColumn(seed) {
  const lines = [];
  for (let i = 0; i < 25; i++) {
    lines.push(codeSnippets[(seed + i * 3) % codeSnippets.length]);
  }
  return lines.join('\n');
}

export default function CodeBackground() {
  const columns = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none select-none bg-slate-950">
      <div className="absolute inset-0 flex justify-between opacity-20">
        {columns.map((col) => (
          <motion.pre
            key={col}
            className="font-mono text-xs md:text-sm text-cyan-300 whitespace-pre leading-relaxed flex-1"
            style={{ animation: `scroll 40s linear infinite` }}
            initial={{ y: 0 }}
            animate={{ y: ['0%', '-50%'] }}
            transition={{
              duration: 40 + col * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {generateColumn(col) + '\n' + generateColumn(col)}
          </motion.pre>
        ))}
      </div>

      {/* Degradado para que se desvanezca en los bordes y no compita con el contenido */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 pointer-events-none" />
    </div>
  );
}