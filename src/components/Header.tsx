import React, { useState, useEffect } from 'react';
import { Code } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`bg-blue-600 text-white shadow-md fixed top-0 left-0 w-full z-10 transition-all duration-300 ${isScrolled ? 'header-blur' : ''}`}>
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="flex items-center space-x-2">
          <Code size={32} />
          <span className="text-2xl font-bold">YhonDev</span>
        </a>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-blue-200">Home</a></li>
            <li><a href="#about" className="hover:text-blue-200">About</a></li>
            <li><a href="#projects" className="hover:text-blue-200">Projects</a></li>
            <li><a href="#courses" className="hover:text-blue-200">Courses</a></li>
            <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;