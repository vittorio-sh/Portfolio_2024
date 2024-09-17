"use client";

export default function Title() {
  const skills = [
    "HTML",
    "React",
    "JavaScript",
    "TypeScript",
    "CSS",
    "Next.js",
    "MongoDB",
    "Firebase",
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen text-white overflow-hidden">
      <h1 className="text-4xl sm:text-6xl font-bold mb-8 text-cyan-100 drop-shadow-3xl shadow-black text-center">
        Vittorio Shiffman
      </h1>
      <p className="text-xl sm:text-2xl mb-16 text-blue-200 drop-shadow-2xl shadow-black text-center">
        Front-End Developer based in Canada
      </p>

      {/* Alternating Scroll Carousel */}
      <div className="w-full max-w-2xl overflow-hidden">
        <div className="flex justify-start items-center whitespace-nowrap animate-alternate-scroll">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="inline-block mx-8 text-2xl sm:text-4xl font-semibold text-blue-200 hover:text-cyan-100 drop-shadow-lg shadow-black"
            >
              {skill}
            </div>
          ))}
          {skills.map((skill, index) => (
            <div
              key={index + skills.length}
              className="inline-block mx-8 text-2xl sm:text-4xl font-semibold text-blue-200 hover:text-cyan-100 drop-shadow-lg shadow-black"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
