import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white py-4 text-center">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
            <div className="flex justify-center space-x-4">
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="mailto:your.email@example.com">Email</a>
            </div>
        </footer>
    );
};

export default Footer;