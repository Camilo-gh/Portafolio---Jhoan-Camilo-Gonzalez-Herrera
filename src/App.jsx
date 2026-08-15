import { HashRouter, Routes, Route } from 'react-router-dom';
import CodeBackground from './components/CodeBackground';
import { LanguageProvider } from './context/LanguageContext';
import Home from './pages/Home';

function App() {
  return (
    <LanguageProvider>
      <HashRouter>
        <CodeBackground />
        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </HashRouter>
    </LanguageProvider>
  );
}

export default App;