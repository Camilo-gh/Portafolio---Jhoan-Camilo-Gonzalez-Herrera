import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Resume from '../components/Resume';
import Footer from '../components/Footer';
import ProjectsModal from '../components/ProjectsModal';

export default function Home() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <>
      <Navbar onOpenProjects={() => setShowProjects(true)} />
      <Hero onOpenProjects={() => setShowProjects(true)} />
      <Resume />
      <Footer />
      <ProjectsModal isOpen={showProjects} onClose={() => setShowProjects(false)} />
    </>
  );
}