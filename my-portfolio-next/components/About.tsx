import React from 'react';

const About = () => {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg max-w-2xl text-center">
                I am a passionate developer with a love for creating modern web applications. 
                My journey in tech has equipped me with a diverse skill set, and I thrive on 
                solving complex problems and building user-friendly interfaces.
            </p>
            <p className="text-lg max-w-2xl text-center mt-4">
                With a focus on clean code and responsive design, I aim to deliver high-quality 
                projects that not only meet client expectations but also provide a seamless user experience.
            </p>
        </section>
    );
};

export default About;