import { motion as m } from "framer-motion";
const projects = [
  {
    title: "E-commerce Platform",
    description:
      "A fully responsive e-commerce website with cart functionality and payment integration.",
    image: "https://via.placeholder.com/300x200",
    techStack: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "https://example.com",
    githubLink: "https://github.com",
  },
  {
    title: "Task Management App",
    description:
      "A mobile app for managing daily tasks and projects, available on iOS and Android.",
    image: "https://via.placeholder.com/300x200",
    techStack: ["React Native", "Firebase", "Redux"],
    liveLink: "https://appstore.com",
    githubLink: "https://github.com",
  },

  // Add more projects as needed
];

function ProjectsSection() {
  return (
    <section className="py-20 bg-gray-100 dark:bg-slate-600 z-10" id="projects">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "linear" }}
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold dark:text-slate-200 mb-2">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-md text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Live
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
