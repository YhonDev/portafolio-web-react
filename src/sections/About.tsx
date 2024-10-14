import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">About YhonDev</h1>
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
          <img
            src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="YhonDev Profile"
            className="w-64 h-64 rounded-full object-cover shadow-lg"
          />
          <div className="max-w-2xl">
            <p className="text-lg mb-6">
              Hello! I'm Yhon, a passionate full-stack developer with over 5 years of experience in creating web and mobile applications. My journey in the world of programming started with a curiosity for how things work on the internet, and it has evolved into a career where I help businesses and individuals bring their digital ideas to life.
            </p>
            <p className="text-lg mb-6">
              I specialize in modern web technologies like React, Node.js, and TypeScript, as well as mobile app development using React Native. My approach to development is centered around creating clean, efficient, and scalable code that not only meets the current needs but is also adaptable for future growth.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and online courses. I believe in the power of continuous learning and the importance of giving back to the developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;