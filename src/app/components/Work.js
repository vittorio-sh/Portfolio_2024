"use client";

export default function Work() {
  const projects = [
    {
      title: "Circularize",
      description:
        "An event hosting app with a swipe-based UI for discovering events. It features fully functional login/signup and allows users to create, view, and join events seamlessly.",
      skills: ["React", "JavaScript", "TypeScript", "CSS", "Tailwind", "MongoDB", "APIs", "Next.js", "Node.js"],
      imageUrl: "/images/Circularize.png", 
      liveLink: "https://circularize-blush.vercel.app", 
      githubLink: "https://github.com/vittorio-sh/Circularize_", 
    },
    {
      title: "Meal Matcher",
      description:
        "A meal-matching app that helps users find recipes based on the ingredients they have, providing convenient filtering options.",
      skills: ["JavaScript", "CSS", "HTML", "React", "API", "Node.js"],
      imageUrl: "/images/mealmatch.png",
      liveLink: "https://mealmatcher2024.netlify.app",
      githubLink: "https://github.com/vittorio-sh/MealMatch", 
    },
  ];

  return (
    <div className="w-full bg-gray-900 mt-16 bg-opacity-60 text-gray-200 py-16 px-8 min-h-screen rounded-2xl">
      <h2 className="text-5xl font-bold text-center mb-12">Projects</h2>

      <div className="grid grid-cols-1 gap-8 w-full max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div key={index} className="flex flex-col md:flex-row bg-gradient-to-b from-cyan-600 via-blue-500 to-blue-900 p-6 rounded-lg shadow-lg">
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center mb-4 md:mb-0">
              <h3 className="text-3xl font-bold mb-4 text-white drop-shadow-lg text-center">{project.title}</h3>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="rounded-lg w-full h-auto object-contain"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col justify-center md:pl-6">
              <p className="mb-6 text-lg text-gray-100 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="bg-blue-700 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                    {skill}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                >
                  Live
                </a>
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
