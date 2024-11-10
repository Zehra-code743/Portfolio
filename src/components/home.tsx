"use client";

import { useState } from 'react';
import Image from 'next/image';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import '../styles/custom.css';  

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
            <div className="container">
                <h1>Welcome to My Portfolio</h1>
                <Image 
                    src="/profile.jpg" 
                    alt="Profile Picture" 
                    width={200} 
                    height={200} 
                    className="profile" 
                />
                <p>Click the button below to view my CV.</p>

                <button 
                    onClick={toggleCv} 
                    className="toggle-cv">
                    {isCvVisible ? 'Hide CV' : 'Show CV'}
                </button>

                {isCvVisible && (
                    <div className="cv-section">
                        <h2>Curriculum Vitae</h2>
                        <p><strong>Name:</strong> Shan-e-Zehra</p>
                        <p><strong>Phone:</strong> 03333232390</p>
                        <p><strong>Email:</strong> <a href="mailto:shanezehra117@gmail.com">shanezehra117@gmail.com</a></p>
                        <p><strong>Education:</strong> M.A from University of Karachi (2021)</p>
                        <p><strong>Skills:</strong> HTML, CSS, JavaScript, Communication Skills</p>
                        <p><strong>Work Experience:</strong> Intern at PTV News as Reporter</p>
                    </div>
                )}

                <button 
                    onClick={handleDownloadCv}
                    className="generate-cv">
                    Generate CV (Download)
                </button>
            </div>
            <Footer />
        </div>
    );
}
