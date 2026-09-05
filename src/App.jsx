import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Service from './components/Service';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-[#4A8FD0]/20 selection:text-[#4A8FD0]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Project />
        <Service />
        <Contact />
      </main>
    </div>
  );
}