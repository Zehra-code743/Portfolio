"use client";

import { useState } from 'react';
import Image from 'next/image';
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function Home() {
    const [isCvVisible, setIsCvVisible] = useState(false);
    
    const toggleCv = () => {
        setIsCvVisible(!isCvVisible);
    };

    const handleDownloadCv = () => {
        const cvContent = `
            Name: Shan-e-Zehra\n
            Phone: 03333232390\n
            Email: shanezehra117@gmail.com\n
            Education: M.A from University of Karachi (2021)\n
            Skills: HTML, CSS, JavaScript, Communication Skills\n
            Work Experience: Intern at PTV News as Reporter\n
        `;

        const blob = new Blob([cvContent], { type: "text/plain" });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'CV_Shan-e-Zehra.txt';  
        link.click();
    };

    return (
        <div>
            <Header />
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold text-center mb-6">Welcome to My Portfolio</h1>
                <Image 
                    src="/profile picture.jpg" 
                    alt="Profile Picture" 
                    width={200} 
                    height={200} 
                    className="profile mb-6" 
                />
                <p className="text-center text-gray-700 mb-4">Click the button below to view my CV.</p>

                <button 
                    onClick={toggleCv} 
                    className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 mb-4">
                    {isCvVisible ? 'Hide CV' : 'Show CV'}
                </button>

                {isCvVisible && (
                    <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-2">My Portfolio</h2>
                        <p className="text-gray-600"><strong>Name:</strong> Shan-e-Zehra</p>
                        <p className="text-gray-600"><strong>Phone:</strong> 03333232390</p>
                        <p className="text-gray-600"><strong>Email:</strong> <a href="mailto:shanezehra117@gmail.com" className="text-blue-500 hover:underline">shanezehra117@gmail.com</a></p>
                        <p className="text-gray-600"><strong>Education:</strong> M.A from University of Karachi (2021)</p>
                        <p className="text-gray-600"><strong>Skills:</strong> HTML, CSS, JavaScript, Communication Skills</p>
                        <p className="text-gray-600"><strong>Work Experience:</strong> Intern at PTV News as Reporter</p>
                    </div>
                )}

                <button 
                    onClick={handleDownloadCv}
                    className="w-full py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 mt-6">
                    Generate CV (Download)
                </button>
            </div>
            <Footer />
        </div>
    );
}
