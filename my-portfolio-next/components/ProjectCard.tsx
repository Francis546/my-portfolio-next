import React from 'react';

interface ProjectData {
    title: string;
    description: string;
    imageUrl?: string;
    link: string;
}

interface ProjectCardProps {
    project: ProjectData;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
    const { title, description, imageUrl, link } = project;

    return (
        <div className="bg-black text-white rounded-lg shadow-lg overflow-hidden">
            {imageUrl ? (
                <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            ) : null}
            <div className="p-4">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="mt-2">{description}</p>
                <a href={link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-blue-400 hover:underline">
                    View Project
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;