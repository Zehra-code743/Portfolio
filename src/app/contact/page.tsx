"use client";

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { useState } from "react";

export default function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("Form submitted", { name, email, message });

        setFormSubmitted(true);
        setName("");
        setEmail("");
        setMessage("");
    };

    return (
        <div>
            <Header />
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold">Contact Me</h1>
                <p className="mt-4 text-gray-700">
                    You can reach me via email at{" "}
                    <a href="mailto:shanezehra117@gmail.com" className="text-blue-500 hover:underline">
                        shanezehra117@gmail.com
                    </a>.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-lg font-semibold text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-lg font-semibold text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-lg font-semibold text-gray-700">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>

                {formSubmitted && (
                    <p className="mt-4 text-green-500 font-semibold">Thank you for your message! I will get back to you soon.</p>
                )}
            </div>
            <Footer />
        </div>
    );
}
