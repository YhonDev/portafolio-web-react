import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-6">Welcome to YhonDev</h1>
        <p className="text-xl mb-8">Transforming ideas into digital realities</p>
        <Link to="/projects" className="bg-blue-600 text-white px-6 py-3 rounded-full inline-flex items-center hover:bg-blue-700 transition duration-300">
          View My Work
          <ArrowRight className="ml-2" size={20} />
        </Link>
      </div>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
          <p>Creating responsive and user-friendly websites that leave a lasting impression.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Mobile Apps</h2>
          <p>Developing innovative mobile applications for iOS and Android platforms.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">UI/UX Design</h2>
          <p>Crafting intuitive and visually appealing user interfaces for seamless experiences.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;