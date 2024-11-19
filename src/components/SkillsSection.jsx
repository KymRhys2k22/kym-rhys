import React from "react";

const skills = [
  {
    category: "Front-end",
    items: ["HTML", "CSS", "JavaScript", "React", "Vue.js", "Tailwind CSS"],
  },
  { category: "Mobile", items: ["React Native", "Swift", "Kotlin"] },
  { category: "Back-end", items: ["Node.js", "Express", "Python", "Django"] },
  { category: "Database", items: ["MongoDB", "PostgreSQL", "Firebase"] },
  { category: "Tools", items: ["Git", "Webpack", "Docker", "Jest"] },
];

function SkillsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillSet, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                {skillSet.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillSet.items.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
