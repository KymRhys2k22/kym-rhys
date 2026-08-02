import React, { useState } from "react";
import PortfolioChatBot from "./components/PortfolioChatBot";
import { SocialIcon } from "react-social-icons";

export default function App() {
  const [activeTab, setActiveTab] = useState("all");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const techCategories = [
    {
      title: "Frontend & Mobile",
      icon: "⚡",
      skills: [
        "ReactJS",
        "React Native",
        "Next.js",
        "Vite",
        "Tailwind CSS",
        "Expo",
      ],
    },
    {
      title: "Backend & Databases",
      icon: "🛠️",
      skills: [
        "Node.js",
        "Express",
        "Supabase",
        "PostgreSQL",
        "MongoDB Atlas",
        "SQLite",
      ],
    },
    {
      title: "Automation & AI",
      icon: "🤖",
      skills: [
        "Antigravity IDE",
        "Gemini AI",
        "n8n Workflows",
        "Python",
        "TypeScript",
        "Google Cloud",
      ],
    },
    {
      title: "Operations & Systems",
      icon: "⚙️",
      skills: [
        "E-commerce Ops",
        "Retail Workflows",
        "Linux",
        "SteamOS",
        "Planogram Matrix",
      ],
    },
  ];

  const projects = [
    {
      title: "Immersion Track Enrollment System",
      category: "web",
      tag: "Vibecoded in 3 Days",
      description:
        "Student enrollment platform featuring real-time admin monitoring dashboard built for high-speed delivery using AI-assisted workflows.",
      stack: ["ReactJS", "Supabase", "Tailwind CSS"],
    },
    {
      title: "Student Election Voting System",
      category: "web",
      tag: "FEU Alabang",
      description:
        "Secure online voting platform for student organizations with live results and export capabilities to PDF & Excel formats.",
      stack: ["ReactJS", "Supabase", "Export Utilities"],
    },
    {
      title: "Local Inventory Tracking App",
      category: "mobile",
      tag: "Mobile App",
      description:
        "Offline-first mobile application designed for structured stock data management with text file data export.",
      stack: ["React Native", "Expo", "SQLite"],
    },
    {
      title: "Real-Time Planogram Inventory Matrix",
      category: "web",
      tag: "Retail Operations",
      description:
        "Visual store layout replicator transforming Excel planograms into a real-time React table for dynamic stock control.",
      stack: ["ReactJS", "Tailwind CSS", "State Management"],
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative">
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center font-black text-slate-950 text-lg shadow-lg shadow-cyan-500/20">
              K
            </div>
            <div>
              <span className="font-bold text-slate-100 text-lg tracking-tight">
                Kym Rhys Mallari
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                Full-Stack Dev
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
            <a
              href="#about"
              className="hover:text-cyan-400 transition-colors hidden sm:block mr-1"
            >
              About
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition-colors hidden sm:block mr-2"
            >
              Projects
            </a>
            <SocialIcon
              url="https://github.com/KymRhys2k22"
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 32, width: 32 }}
              bgColor="#1e293b"
              fgColor="#f8fafc"
              className="hover:scale-110 transition-transform"
            />
            <SocialIcon
              url="https://www.linkedin.com/in/kymrhys/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 32, width: 32 }}
              bgColor="#1e293b"
              fgColor="#38bdf8"
              className="hover:scale-110 transition-transform"
            />
            <SocialIcon
              url="https://www.facebook.com/kymrhys"
              target="_blank"
              rel="noopener noreferrer"
              style={{ height: 32, width: 32 }}
              bgColor="#1e293b"
              fgColor="#60a5fa"
              className="hover:scale-110 transition-transform"
            />
          </div>
        </div>
      </nav>

      {/* Main Content Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-20">
        {/* Hero Section */}
        <section id="about" className="relative pt-6">
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Bio Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                Based in San Pedro, Laguna, Philippines
              </div>

              <h1 className="text-4xl sm:text-6xl font-black text-slate-100 tracking-tight leading-tight">
                Crafting Scalable{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Web & Mobile
                </span>{" "}
                Applications
              </h1>

              <p className="text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl">
                Hi, I'm{" "}
                <strong className="text-slate-200">
                  Kym Rhys Pluma Mallari
                </strong>
                . I am a self-driven, impact-first Full-Stack Software Engineer
                who took an unconventional path into tech. Entirely self-taught
                through rigorous programs on Coursera and hands-on building, I
                focus on building scalable web & mobile applications that turn
                complex workflows into clean, user-friendly digital products.
              </p>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  "Antigravity IDE",
                  "Gemini AI",
                  "ReactJS",
                  "React Native",
                  "Node.js",
                  "Supabase",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-slate-900/80 border border-slate-800 rounded-lg text-xs font-mono text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => setIsChatOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 transition-all active:scale-95 cursor-pointer flex items-center gap-2"
                >
                  🤖 Chat with AI Portfolio Assistant
                </button>
                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold text-sm transition-all active:scale-95"
                >
                  View Featured Projects
                </a>
              </div>
            </div>

            {/* Quick Card Badge */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-500 to-cyan-500 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                      KM
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-100">
                        Kym Rhys Mallari
                      </h3>
                      <p className="text-xs text-slate-400">
                        Full-Stack Software Engineer
                      </p>
                    </div>
                  </div>
                  <span className="text-xs px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full font-medium">
                    Available for projects
                  </span>
                </div>

                <div className="space-y-3 text-xs text-slate-300">
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-500">Engineering Path</span>
                    <span className="font-medium text-emerald-400">
                      Self-Taught (Coursera & Shipping)
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-500">Main Environment</span>
                    <span className="font-medium text-cyan-400">
                      Antigravity IDE (Gemini AI)
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-500">Core Specialty</span>
                    <span className="font-medium text-slate-200">
                      MERN Stack & BaaS (Supabase)
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-500">Mobile Dev</span>
                    <span className="font-medium text-slate-200">
                      React Native & Expo
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 border-b border-slate-800/60">
                    <span className="text-slate-500">AI Integration</span>
                    <span className="font-medium text-slate-200">
                      n8n AI Automation, Python, Gemini
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1.5">
                    <span className="text-slate-500">Fast Delivery</span>
                    <span className="font-medium text-cyan-400">
                      AI-assisted Vibecoding Workflows
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
                  <span className="text-xs font-mono text-slate-400">Connect:</span>
                  <div className="flex items-center gap-2">
                    <SocialIcon
                      url="https://github.com/KymRhys2k22"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ height: 34, width: 34 }}
                      className="hover:scale-110 transition-transform"
                    />
                    <SocialIcon
                      url="https://www.linkedin.com/in/kymrhys/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ height: 34, width: 34 }}
                      className="hover:scale-110 transition-transform"
                    />
                    <SocialIcon
                      url="https://www.facebook.com/kymrhys"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ height: 34, width: 34 }}
                      className="hover:scale-110 transition-transform"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Grid */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
              Technical Competencies
            </h2>
            <p className="text-sm text-slate-400">
              Tools and technologies Kym leverages to build production-ready
              applications.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {techCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all hover:shadow-xl hover:shadow-cyan-500/5 group"
              >
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-semibold text-slate-200 text-base mb-3 group-hover:text-cyan-400 transition-colors">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-slate-950 border border-slate-800/80 rounded-md text-[11px] font-mono text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-8 pt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
                Key Projects & Highlights
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Selected applications demonstrating speed, scalability, and
                domain expertise.
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex gap-2 bg-slate-900 p-1 rounded-xl border border-slate-800">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "all"
                    ? "bg-cyan-500 text-slate-950 font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab("web")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "web"
                    ? "bg-cyan-500 text-slate-950 font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Web
              </button>
              <button
                onClick={() => setActiveTab("mobile")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "mobile"
                    ? "bg-cyan-500 text-slate-950 font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Mobile
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                      {project.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-100">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800/60">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="text-[11px] font-mono px-2 py-0.5 bg-slate-950 rounded text-slate-300 border border-slate-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 mt-20 py-8 bg-slate-950/90 text-center text-xs text-slate-500 space-y-4">
        <div className="flex justify-center items-center gap-3">
          <SocialIcon
            url="https://github.com/KymRhys2k22"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: 32, width: 32 }}
            className="hover:scale-110 transition-transform opacity-80 hover:opacity-100"
          />
          <SocialIcon
            url="https://www.linkedin.com/in/kymrhys/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: 32, width: 32 }}
            className="hover:scale-110 transition-transform opacity-80 hover:opacity-100"
          />
          <SocialIcon
            url="https://www.facebook.com/kymrhys"
            target="_blank"
            rel="noopener noreferrer"
            style={{ height: 32, width: 32 }}
            className="hover:scale-110 transition-transform opacity-80 hover:opacity-100"
          />
        </div>
        <p>
          © 2026 Kym Rhys Pluma Mallari. Built with React, Tailwind CSS &
          Supabase.
        </p>
        <p className="text-slate-600 font-mono">
          San Pedro, Laguna, Philippines
        </p>
      </footer>

      {/* Floating Bottom-Right Chatbot Widget */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        {isChatOpen ? (
          <div className="w-[92vw] sm:w-[400px] h-[550px] max-h-[82vh] shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-4">
            <PortfolioChatBot onClose={() => setIsChatOpen(false)} />
          </div>
        ) : (
          <button
            onClick={() => setIsChatOpen(true)}
            aria-label="Open AI Assistant"
            className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-cyan-400/30"
          >
            <div className="relative">
              <span className="text-lg">🤖</span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border border-slate-950 rounded-full animate-ping"></span>
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 border border-slate-950 rounded-full"></span>
            </div>
            <span>Ask AI Assistant</span>
          </button>
        )}
      </div>
    </div>
  );
}
