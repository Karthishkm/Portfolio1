import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Skills } from './pages/Skills';
import { Projects } from './pages/Projects';
import { Achievements } from './pages/Achievements';
import { About } from './pages/About';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900">
        <Navbar />
        <main className="scroll-smooth">
          <section id="home" className="min-h-screen">
            <Home />
          </section>
          <section id="skills" className="min-h-screen">
            <Skills />
          </section>
          <section id="projects" className="min-h-screen">
            <Projects />
          </section>
          <section id="achievements" className="min-h-screen">
            <Achievements />
          </section>
          <section id="about" className="min-h-screen">
            <About />
          </section>
          <section id="contact" className="min-h-screen">
            <Contact />
          </section>
        </main>
      </div>
    </Router>
  );
}

export default App