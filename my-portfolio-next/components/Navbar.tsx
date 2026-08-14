import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-black text-white p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-lg font-bold">
                    <Link href="/">My Portfolio</Link>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <Link href="#about">About</Link>
                    </li>
                    <li>
                        <Link href="#projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="#skills">Skills</Link>
                    </li>
                    <li>
                        <Link href="#contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;