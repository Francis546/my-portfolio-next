import React from 'react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
            <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
            <form className="flex flex-col w-full max-w-md">
                <input
                    type="text"
                    placeholder="Your Name"
                    className="mb-4 p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="mb-4 p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
                <textarea
                    placeholder="Your Message"
                    className="mb-4 p-2 rounded bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={4}
                    required
                />
                <button
                    type="submit"
                    className="p-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
                >
                    Send Message
                </button>
            </form>
        </section>
    );
};

export default Contact;