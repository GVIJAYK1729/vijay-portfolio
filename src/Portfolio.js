import React from 'react';

export default function Portfolio() {
  return (
    <div className="max-w-5xl mx-auto p-6 text-gray-800 font-sans">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-blue-700">VIJAY KUMAR GUNDLA</h1>
        <p className="text-lg"> Summary </p>
        <p>📍 Tirupati, India | 📞 +91 9502200798 | ✉️ gundlavijaykumar.24@gmail.com</p>
        <a className="text-blue-600 underline" href="https://linkedin.com/in/vijay-kumar-gundla-1a54bb1a6" target="_blank">LinkedIn Profile</a>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">About Me</h2>
        <p>
          Innovative and detail-oriented Front-End Developer with 3.7+ years of experience designing, developing,
          and optimizing high-performance web applications. Proficient in React, JavaScript, TypeScript, HTML, CSS,
          and modern UI frameworks. Known for enhancing user engagement and collaborating effectively within Agile teams.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Technical Skills</h2>
        <ul className="list-disc list-inside">
          <li><strong>Languages:</strong> HTML5, CSS3, JavaScript, TypeScript, Java, C</li>
          <li><strong>Frameworks/Libraries:</strong> React, React Native, Node.js, Angular, AEM</li>
          <li><strong>Databases:</strong> MongoDB</li>
          <li><strong>Tools:</strong> Git, Jira, Zeplin, Agile/Scrum</li>
          <li><strong>Other:</strong> Responsive Design, Cross-Browser Compatibility, Web Performance Optimization</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Professional Experience</h2>
        <div>
          <h3 className="font-semibold">Capgemini, Bangalore — Web Developer</h3>
          <p className="italic mb-2">Dec 2021 – Present</p>
          <ul className="list-disc list-inside">
            <li>Developed responsive web apps using React, HTML, CSS, and JavaScript</li>
            <li>Collaborated with UI/UX teams to enhance interface quality and accessibility</li>
            <li>Ensured cross-browser compatibility and performance optimization</li>
            <li>Practiced Agile Scrum with sprint planning, daily stand-ups, and retrospectives</li>
          </ul>
        </div>
        <div className="mt-4">
          <h4 className="font-semibold">Key Projects</h4>
          <ul className="list-disc list-inside">
            <li><strong>Dentsply Sirona:</strong> Created e-commerce UI features that boosted engagement and satisfaction</li>
            <li><strong>DeVry University:</strong> Refined online learning UI, improved accessibility, and reduced bugs</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Education</h2>
        <ul className="list-disc list-inside">
          <li><strong>B.Tech (CSE)</strong> – JNTU Anantapur, 2021 | CGPA: 8.0</li>
          <li><strong>Intermediate (MPC)</strong> – Sri Gayatri Jr College, Tirupati, 2017 | Marks: 95%</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Certifications</h2>
        <ul className="list-disc list-inside">
          <li>React Native – Meta / Coursera – 2025</li>
          <li>Animation with JavaScript – UC Davis / Coursera – 2025</li>
          <li>JavaScript Programming Essentials – IBM / Coursera – 2025</li>
          <li>JavaScript Basics – UC Davis / Coursera – 2023</li>
          <li>Agile Software Development – University of Minnesota – 2022</li>
          <li>Agile with Jira – Atlassian / Capgemini – 2022</li>
          <li>Communication Strategies – University of Minnesota – 2023</li>
          <li>English for Effective Business Speaking – HKUST – 2023</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-600 mb-2">Project Links</h2>
        <ul className="list-disc list-inside">
          <li><a className="text-blue-500 underline" href="https://www.dentsplysirona.com/en-us" target="_blank">Dentsply Sirona</a></li>
          <li><a className="text-blue-500 underline" href="https://www.devry.edu" target="_blank">DeVry University</a></li>
        </ul>
      </section>
    </div>
  );
}
