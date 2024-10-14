import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Courses from './sections/Courses';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow">
        <Home />
        <About />
        <Projects />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;