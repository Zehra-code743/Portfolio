import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Image from "next/image"; 

export default function Projects() {
    return (
        <div>
            <Header />
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold">My Projects</h1>
                <p className="mt-4 text-gray-700">Here are some of the projects I have worked on:</p>
        
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Project 1 - Portfolio Website</h2>
                    <div className="project-item mt-4">
                        <Image 
                            src="/front end.jpg" 
                            alt="Project 1 Thumbnail"
                            width={200}
                            height={200}
                            className="rounded-lg shadow-md mr-6"
                        />
                        <p className="text-gray-700">A personal portfolio website built with React and Tailwind CSS, showcasing my web development skills and projects.</p>
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Project 2 - E-Commerce Website</h2>
                    <div className="project-item mt-4">
                        <Image 
                            src="/full stack 1.jpg" 
                            alt="Project 2 Thumbnail"
                            width={200}
                            height={200}
                            className="rounded-lg shadow-md mr-6"
                        />
                        <p className="text-gray-700">An e-commerce website with a user-friendly interface, built using Next.js and Stripe for secure payments.</p>
                    </div>
                </div>

                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Project 3 - Blogging Platform</h2>
                    <div className="project-item mt-4">
                        <Image 
                            src="/web developer.jpg" 
                            alt="Project 3 Thumbnail"
                            width={200}
                            height={200}
                            className="rounded-lg shadow-md mr-6"
                        />
                        <p className="text-gray-700">A blogging platform where users can write and share articles. Built with Node.js and MongoDB for backend and database management.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
