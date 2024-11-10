"use client"; 

import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [openDropdown, setOpenDropdown] = useState('');

    const toggleDropdown = (section: string) => {
        setOpenDropdown((prev) => (prev === section ? '' : section));
    };

    return (
        <header className="bg-gray-800 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">My Portfolio</h1>
                <nav>
                    <Link href="/" className="mr-4 hover:underline">Home</Link>

                    <div className="relative inline-block">
                        <button 
                            onClick={() => toggleDropdown('about')} 
                            className="mr-4 hover:underline">
                            About
                        </button>
                        {openDropdown === 'about' && (
                            <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg z-10">
                                <Link href="/about" className="block px-4 py-2 hover:bg-gray-200">About Me</Link>
                            </div>
                        )}
                    </div>

                    <div className="relative inline-block">
                        <button 
                            onClick={() => toggleDropdown('projects')} 
                            className="mr-4 hover:underline">
                            Projects
                        </button>
                        {openDropdown === 'projects' && (
                            <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg z-10">
                                <Link href="/project" className="block px-4 py-2 hover:bg-gray-200">My Projects</Link>
                            </div>
                        )}
                    </div>

                    <div className="relative inline-block">
                        <button 
                            onClick={() => toggleDropdown('contact')} 
                            className="hover:underline">
                            Contact
                        </button>
                        {openDropdown === 'contact' && (
                            <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg z-10">
                                <Link href="/contact" className="block px-4 py-2 hover:bg-gray-200">Get in Touch</Link>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;
