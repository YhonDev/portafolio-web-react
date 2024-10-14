import React from 'react';

interface Course {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const courses: Course[] = [
  {
    id: 1,
    title: "React Fundamentals",
    description: "Master the basics of React and build modern web applications",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "https://yhondev.com/courses/react-fundamentals"
  },
  {
    id: 2,
    title: "Node.js for Beginners",
    description: "Learn server-side JavaScript and build scalable web applications",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "https://yhondev.com/courses/nodejs-beginners"
  },
  {
    id: 3,
    title: "Full-Stack Web Development",
    description: "Comprehensive course covering both front-end and back-end technologies",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    link: "https://yhondev.com/courses/full-stack-web-development"
  },
];

const Courses: React.FC = () => {
  return (
    <section id="courses" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">My Courses</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <a
                  href={course.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300"
                >
                  Enroll Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;