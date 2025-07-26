import React from 'react';

// Main App component that renders the resume
const App = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-8">
            <div className="container mx-auto bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-200">
                {/* Contact Information */}
                <header className="text-center mb-8 pb-6 border-b-2 border-gray-200">
                    <h1 className="text-gray-900 text-4xl font-bold leading-tight tracking-tight mb-2">VIJAY KUMAR GUNDLA</h1>
                    <p className="text-gray-600 text-base mb-3">Tirupati, Andhra Pradesh, India</p>
                    <div className="contact-info text-sm text-gray-700 flex flex-wrap justify-center gap-x-6 gap-y-2">
                        <p>Email: <a href="mailto:gundlavijaykumar.24@gmail.com" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">gundlavijaykumar.24@gmail.com</a></p>
                        <p>Phone: 8919794452</p>
                        <p>LinkedIn: <a href="https://linkedin.com/in/vijay-kumar-gundla-1a54bb1a6" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">linkedin.com/in/vijay-kumar-gundla-1a54bb1a6</a></p>
                        <p>GitHub: <a href="https://github.com/GVIJAYK1729" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors duration-200">github.com/GVIJAYK1729</a></p>
                    </div>
                </header>

                {/* Summary */}
                <section className="mb-8">
                    <h2 className="text-gray-800 text-2xl font-bold border-b-2 border-gray-200 pb-3 mb-5 mt-9">SUMMARY</h2>
                    <p className="text-gray-700 leading-relaxed">Front-end web developer with 3.7+ years of proven experience designing and implementing user-friendly, high-performance web applications. Skilled in HTML, CSS, JavaScript, TypeScript, React, and modern frameworks. Adept at collaborating with cross-functional teams in Agile environments to deliver solutions that drive customer engagement and satisfaction. Strengths include web optimization, leading UI redesigns, and technical leadership.</p>
                </section>

                {/* Skills - Optimized for compactness */}
                <section className="mb-8">
                    <h2 className="text-gray-800 text-2xl font-bold border-b-2 border-gray-200 pb-3 mb-5 mt-9">SKILLS</h2>
                    <div className="text-gray-700">
                        <p className="mb-2"><span className="font-semibold text-gray-700">Languages:</span> HTML, CSS, JavaScript, TypeScript</p>
                        <p className="mb-2"><span className="font-semibold text-gray-700">Frameworks & Libraries:</span> React, React Native</p>
                        <p className="mb-2"><span className="font-semibold text-gray-700">Tools & Platforms:</span> Git, GitHub, Node.js</p>
                        <p className="mb-2"><span className="font-semibold text-gray-700">Databases:</span> MongoDB</p>
                        <p className="mb-2"><span className="font-semibold text-gray-700">Methodologies:</span> Agile, Scrum</p>
                        <p className="mb-0"><span className="font-semibold text-gray-700">Soft Skills:</span> Analytical thinking, Leadership, Teamwork</p>
                    </div>
                </section>

                {/* Experience */}
                <section className="mb-8">
                    <h2 className="text-gray-800 text-2xl font-bold border-b-2 border-gray-200 pb-3 mb-5 mt-9">EXPERIENCE</h2>
                    <div className="mb-7 pb-2 border-b border-dashed border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="text-lg font-semibold text-gray-700">Sr Software Engineer / Web Developer</h3>
                            <span className="text-sm text-gray-600 font-medium">Dec 2021 – Present</span>
                        </div>
                        <p className="text-gray-700 font-medium mb-2">Capgemini | <span className="text-gray-600">Bangalore, India</span></p>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>Redesigned a major client e-commerce platform (Dentsply Sirona), leading to increased user engagement and customer satisfaction.</li>
                            <li>Integrated advanced technologies, reducing site load time and improving performance.</li>
                            <li>Collaborated with UX/UI teams to deliver intuitive and accessible interfaces.</li>
                            <li>Ensured project delivery with a focus on cross-browser compatibility and responsive design.</li>
                            <li>Led legacy system modernization, boosting engagement metrics through current technologies.</li>
                        </ul>
                    </div>
                </section>

                {/* Key Projects */}
                <section className="mb-8">
                    <h2 className="text-gray-800 text-2xl font-bold border-b-2 border-gray-200 pb-3 mb-5 mt-9">KEY PROJECTS</h2>
                    <div className="mb-7 pb-2 border-b border-dashed border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="text-lg font-semibold text-gray-700">Dentsply Sirona (E-commerce Platform)</h3>
                        </div>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>Led UI development using React, HTML, CSS, and JavaScript.</li>
                            <li>Collaborated with design teams for optimal UX and visual consistency.</li>
                            <li>Applied web performance best practices and achieved cross-browser compatibility.</li>
                            <li>Developed new features that increased user engagement and contributed to sales growth.</li>
                        </ul>
                    </div>
                    <div className="mb-7 pb-2 border-b border-dashed border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="text-lg font-semibold text-gray-700">DeVry University (Online Learning Platform)</h3>
                        </div>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>Developed and maintained web pages (HTML, CSS, JavaScript) to enhance online learning.</li>
                            <li>Improved interface designs in collaboration with senior developers and designers.</li>
                            <li>Provided ongoing support, debugging, and agile scrum updates.</li>
                        </ul>
                    </div>
                </section>

                {/* Certifications */}
                <section className="mb-8">
                    <h2 className="text-gray-800 text-2xl font-bold border-b-2 border-gray-200 pb-3 mb-5 mt-9">CERTIFICATIONS</h2>
                    <ul className="list-disc ml-6 text-gray-700">
                        <li>Animation with JavaScript and jQuery – University of California, Davis</li>
                        <li>React Native – Coursera, Meta (2025)</li>
                        <li>Agile Software Development – University of Minnesota / Capgemini (2022)</li>
                        <li>Scrum (Software Development)</li>
                    </ul>
                </section>

                {/* Education */}
                <section>
                    <h2 className="text-gray-800 text-2xl font-bold border-b-2 border-gray-200 pb-3 mb-5 mt-9">EDUCATION</h2>
                    <div className="mb-7 pb-2 border-b border-dashed border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="text-lg font-semibold text-gray-700">Bachelor of Technology (Computer Science & Engineering)</h3>
                            <span className="text-sm text-gray-600 font-medium">2021</span>
                        </div>
                        <p className="text-gray-700 font-medium mb-2">Jawaharlal Nehru Technological University, Anantapur, India</p>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>CGPA: 8.0 (80%), First rank in academic year</li>
                        </ul>
                    </div>
                    <div className="mb-7 pb-2 border-b border-dashed border-gray-200 last:border-b-0 last:mb-0 last:pb-0">
                        <div className="flex justify-between items-baseline mb-1">
                            <h3 className="text-lg font-semibold text-gray-700">Intermediate (M.P.C, 95%)</h3>
                            <span className="text-sm text-gray-600 font-medium">2017</span>
                        </div>
                        <p className="text-gray-700 font-medium mb-2">Sri Gayatri Jr College, Tirupati</p>
                        <ul className="list-disc ml-6 text-gray-700">
                            <li>Student of the Year Award</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default App;
git add src/Portfolio.js
