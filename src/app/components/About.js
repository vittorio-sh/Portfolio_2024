"use client";

export default function About() {
  return (
    <div className="w-full  text-gray-200 min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto p-8 bg-gray-900 bg-opacity-60 rounded-2xl shadow-lg">
        
        <div className="col-span-1 md:col-span-2 text-center">
          <h2 className="text-5xl font-bold mb-8">About</h2>
        </div>

        <div className="w-full flex justify-center items-center">
          <img
            src="/images/profilePhoto.jpg"
            alt="Vittorio Shiffman"
            className="rounded-full w-64 h-64 object-cover shadow-lg"
          />
        </div>

        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-4">Education</h3>
          <p className="mb-2">
            <strong>B.Sc. in Computer Science</strong> <br />
            Ontario Tech University – Ontario, Canada (2022 – 2024) <br />
            Deans List (2022-2024)
          </p>
          <p className="mb-4">
            <strong>Computer Programming Diploma</strong> <br />
            Algonquin College – Ontario, Canada (2020 – 2022)
          </p>
          <p className="mb-4">
            <strong>Scrimba Full Front-End Course</strong> <br />
            Completed in 2024
          </p>
        </div>

        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-4 pt-4">Skills</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Languages: JavaScript, Java, HTML, NodeJs</li>
            <li>Style Sheets: CSS, Tailwind CSS</li>
            <li>Frameworks/Libraries: React, Next.js</li>
            <li>Databases: MongoDB, Firebase, SQL</li>
            <li>Tools: Git, GitHub, Figma, Vercel</li>
          </ul>
        </div>

        <div className="w-full">
          <h3 className="text-2xl font-semibold mb-4">Experience</h3>
          <div className="mb-4">
            <strong>Front-End Developer Intern</strong> <br />
            Virtumed - <a href="https://virtumed2.vercel.app" target="_blank" rel="noopener noreferrer" className="text-cyan-300 underline">Link</a> <br />
            March 2024 – June 2024
          </div>
          <ul className="list-disc pl-5 space-y-2">
          <li>
            Developed and maintained UI components for a healthcare startup using React, JavaScript, and Next.js.
        </li>
            <li>
            Helped fix small UI issues, improved the interfaces responsiveness, and linked API endpoints for smoother data integration.
            </li>
            <li>
            Refactored React components to be more reusable and resolved prop drilling issues for better state management.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
