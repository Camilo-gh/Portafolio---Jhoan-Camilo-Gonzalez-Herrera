import { Link } from 'react-router-dom';
 
export default function Projects() {
  return (
    <section className="min-h-screen bg-slate-950 text-white px-8 py-16">
      <Link to="/" className="text-cyan-400 hover:underline">← Volver</Link>
      <h1 className="text-4xl font-bold mt-6 mb-8">Mis Proyectos</h1>
      <p className="text-slate-400">Aquí van tus tarjetas de proyectos...</p>
    </section>
  );
}
