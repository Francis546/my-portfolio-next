import React from 'react';

const skills = [
  { name: 'JavaScript', level: 'Expert' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'Next.js', level: 'Intermediate' },
  { name: 'Node.js', level: 'Intermediate' },
  { name: 'CSS', level: 'Expert' },
  { name: 'Tailwind CSS', level: 'Advanced' },
];

const Skills: React.FC = () => {
  return (
    <section className="bg-black text-white py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <ul className="space-y-4">
          {skills.map((skill) => (
            <li key={skill.name} className="flex justify-between">
              <span>{skill.name}</span>
              <span className="font-semibold">{skill.level}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;