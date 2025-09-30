import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import WordPressProjects from './components/WordPressProjects';
import Contact from './components/Contact';

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <WordPressProjects />
          <Contact />
        </main>
      </div>
    </Provider>
  );
}

export default App;