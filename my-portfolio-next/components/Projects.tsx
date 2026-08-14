import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  {
    title: 'Project One',
    description: 'A brief description of project one.',
    link: 'https://example.com/project-one',
  },
  {
    title: 'Project Two',
    description: 'A brief description of project two.',
    link: 'https://example.com/project-two',
  },
  {
    title: 'Project Three',
    description: 'A brief description of project three.',
    link: 'https://example.com/project-three',
  },
];

const Projects = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;