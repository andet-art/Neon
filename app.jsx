import React from 'react';

const projects = [
  { id: 1, title: 'Pizza Builder App', description: 'Create and customize your own pizza using HTML, CSS, and JavaScript.' },
  { id: 2, title: 'Online Game Store', description: 'A React + Bootstrap e-commerce site for buying and selling games.' },
  { id: 3, title: 'Ticket Marketplace', description: 'Buy and sell event tickets with seat selection using React and MySQL.' },
  { id: 4, title: 'Portfolio Website', description: 'A personal website to showcase your skills and projects.' }
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Programming Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <div key={project.id} className="bg-gray-800 p-5 rounded-2xl shadow-lg hover:shadow-xl transition">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-300">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
