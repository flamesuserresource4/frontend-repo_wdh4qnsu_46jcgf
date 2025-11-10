import React from 'react';
import Hero3D from './components/Hero3D';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#home" className="text-sm font-semibold text-white">DS Portfolio</a>
        <nav className="hidden items-center gap-6 text-white/80 sm:flex">
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>
        <a href="#contact" className="rounded-md bg-emerald-500 px-3 py-1.5 text-sm font-semibold text-slate-900 hover:bg-emerald-400">
          Hire Me
        </a>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-white">
      <Navbar />
      <main>
        <Hero3D />
        <Projects />
        <Skills />
        <Contact />
        <footer className="border-t border-white/10 bg-slate-950 py-8 text-center text-sm text-white/60">
          © {new Date().getFullYear()} Your Name — Data Scientist. Built with React & Tailwind.
        </footer>
      </main>
    </div>
  );
}
