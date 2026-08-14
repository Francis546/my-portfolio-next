import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="flex items-center justify-center h-screen bg-black text-white">
            <div className="text-center">
                <h1 className="text-5xl font-bold mb-4">Welcome to My Portfolio</h1>
                <p className="text-lg mb-8">I am a passionate developer specializing in modern web technologies.</p>
                <a href="#projects" className="inline-block px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition">
                    View My Work
                </a>
            </div>
        </section>
    );
};

export default Hero;