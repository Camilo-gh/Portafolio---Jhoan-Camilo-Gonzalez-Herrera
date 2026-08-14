import { HashRouter, Routes, Route } from 'react-router-dom';
import CodeBackground from './components/CodeBackground';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <HashRouter>
      <CodeBackground />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<Projects />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;