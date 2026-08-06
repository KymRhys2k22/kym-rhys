import React, { useState } from "react";
import PortfolioChatBot from "./components/PortfolioChatBot";
import { SocialIcon } from "react-social-icons";
import MagneticButton from "./components/originkit/ui/magnetic-hover-button";
import RotatingText from "./components/originkit/ui/text-carousel";
import UserCursor from "./components/originkit/ui/usercursor";

export default function App() {
  const [activeTab, setActiveTab] = useState("all");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const certificates = [
    {
      title: "Crash Course on Python",
      organization: "Google",
      image:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~K3V6ACMTBJAK/CERTIFICATE_LANDING_PAGE~K3V6ACMTBJAK.jpeg",
      link: "https://coursera.org/share/11e54c903c8bb4e76f7d2ce0d78ff6e1",
    },
    {
      title: "Advanced React",
      organization: "Meta",
      image:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~GVCEH956C758/CERTIFICATE_LANDING_PAGE~GVCEH956C758.jpeg",
      link: "https://coursera.org/share/694b30610b60c32bcb16e9a145e6babe",
    },
    {
      title: "Version Control",
      organization: "Meta",
      image:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~GHQTFWP6BLFF/CERTIFICATE_LANDING_PAGE~GHQTFWP6BLFF.jpeg",
      link: "https://coursera.org/share/f564189529a6717449c7706d47e5a5c7",
    },
    {
      title: "Foundations of User Experience (UX) Design",
      organization: "Google",
      image:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~JV8773GW37SC/CERTIFICATE_LANDING_PAGE~JV8773GW37SC.jpeg",
      link: "https://coursera.org/share/12d1f59548dc2d1b8be44266ce9ecb45",
    },
    {
      title: "APIs for Web Applications",
      organization: "Meta",
      image:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~YZ4A3KHRV9A3/CERTIFICATE_LANDING_PAGE~YZ4A3KHRV9A3.jpeg",
      link: "https://coursera.org/share/30a428c68bddf74013c2a68b83de3675",
    },
    {
      title: "React Native",
      organization: "Meta",
      image:
        "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~YZ4A3KHRV9A3/CERTIFICATE_LANDING_PAGE~YZ4A3KHRV9A3.jpeg",
      link: "https://coursera.org/share/30a428c68bddf74013c2a68b83de3675",
    },
  ];

  const techCategories = [
    {
      title: "Frontend & Mobile",
      icon: "⚡",
      skills: ["ReactJS", "React Native", "Vite", "Tailwind CSS", "Expo"],
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
      websiteUrl: "https://immersion-enrollment.vercel.app/", // Paste your live website link here
      githubUrl: "https://github.com/KymRhys2k22/immersion_enrollment", // Paste your GitHub repository link here
    },
    {
      title: "Work Immersion Log (FEU Time Monitoring)",
      category: "web",
      tag: "FEU Time Monitoring",
      description:
        "Modern, responsive web application designed to track student attendance during work immersion with real-time logging, activity history, dark mode, and Google Apps Script integration.",
      stack: ["ReactJS", "Vite", "Tailwind CSS", "GSAP", "Google Apps Script"],
      websiteUrl: "https://feu-time-monitoring.vercel.app/", // Paste your live website link here
      githubUrl: "https://github.com/KymRhys2k22/feu-time-monitoring", // Paste your GitHub repository link here
    },
    {
      title: "Student Election Voting System",
      category: "web",
      tag: "FEU Alabang",
      description:
        "Secure online voting platform for student organizations with live results and export capabilities to PDF & Excel formats.",
      stack: ["ReactJS", "Supabase", "Export Utilities"],
      websiteUrl: "https://campusvote-phi.vercel.app/", // Paste your live website link here
      githubUrl: "https://github.com/KymRhys2k22/campusvote", // Paste your GitHub repository link here
    },
    {
      title: "Local Inventory Tracking App",
      category: "mobile",
      tag: "Mobile App",
      description:
        "Offline-first mobile application designed for structured stock data management with text file data export.",
      stack: ["React Native", "Expo", "SQLite"],
      websiteUrl: "https://", // Paste your live website link here
      githubUrl: "https://github.com/KymRhys2k22", // Paste your GitHub repository link here
    },
    {
      title: "Receiving & Delivery Mobile App",
      category: "mobile",
      tag: "Logistics & Retail",
      description:
        "Mobile application designed for receiving boxes and tracking inventory items efficiently at store delivery points.",
      stack: ["React Native", "Expo", "SQLite"],
      websiteUrl: "https://", // Paste your live website link here
      githubUrl: "https://github.com/KymRhys2k22/receiving-delivery-app", // Paste your GitHub repository link here
    },
    {
      title: "Stock Room Management System",
      category: "web",
      tag: "Retail Operations",
      description:
        "Inventory management platform designed for retail environments, allowing users to track stock levels, manage SKUs, and monitor inventory movement with role-based access control and audit logging.",
      stack: [
        "ReactJS",
        "Tailwind CSS",
        "Google sheets API",
        "App Script",
        "Clerk",
      ],
      websiteUrl: "https://www.daisopav.store/", // Paste your live website link here
      githubUrl: "https://github.com/KymRhys2k22/stock-room", // Paste your GitHub repository link here
    },
  ];

  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950 relative">
      <UserCursor name="Client" color="#0284c7" textColor="#ffffff" />
      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-linear-to-tr from-white-400 to-blue-600 flex items-center justify-center font-black text-slate-950 text-lg shadow-lg shadow-cyan-500/20">
              <img
                src="/favicon.svg"
                alt="Logo"
                className="w-5 h-5 object-contain"
              />
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
              className="hover:text-cyan-400 transition-colors hidden sm:block mr-1">
              About
            </a>
            <a
              href="#projects"
              className="hover:text-cyan-400 transition-colors hidden sm:block mr-1">
              Projects
            </a>
            <a
              href="#certificates"
              className="hover:text-cyan-400 transition-colors hidden sm:block mr-2">
              Certificates
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
              <a
                href="https://maps.app.goo.gl/ex4Kgc16C81trsmJ8"
                target="_blank"
                rel="noopener noreferrer">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Based in San Pedro, Laguna, Philippines
                </div>
              </a>

              <h1 className="text-4xl sm:text-6xl font-black text-slate-100 tracking-tight leading-tight flex flex-col items-start gap-2">
                <span className="whitespace-nowrap">Building Modern</span>
                <div className="my-1 inline-flex items-center whitespace-nowrap overflow-hidden max-w-full">
                  <RotatingText
                    prefix=""
                    texts={[
                      "Mobile \u00A0\u00A0\u00A0\u00A0📱Application",
                      "Web \u00A0\u00A0\u00A0\u00A0🕸️Applications",
                      "AI \u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0🤖Workflows",
                      "UI / UX \u00A0\u00A0\u00A0\u00A0🖼️Designs",
                    ]}
                    color="#38bdf8"
                    badgeBackground="transparent"
                    badgeBorder="none"
                    badgePaddingX={0}
                    badgePaddingY={0}
                    splitBy="words"
                    staggerFrom="first"
                  />
                </div>
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
                    className="px-3 py-1 bg-slate-900/80 border border-slate-800 rounded-lg text-xs font-mono text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <MagneticButton
                  label="🤖 Chat with AI Portfolio Assistant"
                  onClick={() => setIsChatOpen(true)}
                  fill="linear-gradient(to right, #06b6d4, #2563eb)"
                  textColor="#ffffff"
                  sweepColor="#0284c7"
                  sweepTextColor="#ffffff"
                  radius={12}
                  paddingX={24}
                  paddingY={14}
                  font={{ fontWeight: 600, fontSize: 14 }}
                  border={false}
                />
                <a
                  href="#projects"
                  className="px-6 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-semibold text-sm transition-all active:scale-95">
                  View Featured Projects
                </a>
              </div>
            </div>

            {/* Quick Card Badge */}
            <div className="lg:col-span-5">
              <div className="p-6 rounded-3xl bg-slate-900/70 border border-slate-800 backdrop-blur-xl shadow-2xl space-y-6">
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-linear-to-tr from-purple-500 to-cyan-500 flex items-center justify-center text-xl font-bold text-white shadow-lg">
                      <img
                        src="https://media.licdn.com/dms/image/v2/D5603AQGXK80xM0vFPw/profile-displayphoto-shrink_800_800/B56ZYlXcXfHoAg-/0/1744383625921?e=1787184000&v=beta&t=JI7gUjmFmQXq0rWq1eRZrSUyaQsQy0kI4AGJaO4AN9I"
                        alt="profile picture"
                        className="rounded-full object-cover"
                      />
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
                  <span className="text-xs font-mono text-slate-400">
                    Connect:
                  </span>
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
                className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all hover:shadow-xl hover:shadow-cyan-500/5 group">
                <div className="text-3xl mb-3">{cat.icon}</div>
                <h3 className="font-semibold text-slate-200 text-base mb-3 group-hover:text-cyan-400 transition-colors">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-slate-950 border border-slate-800/80 rounded-md text-[11px] font-mono text-slate-300">
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
                }`}>
                All
              </button>
              <button
                onClick={() => setActiveTab("web")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "web"
                    ? "bg-cyan-500 text-slate-950 font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}>
                Web
              </button>
              <button
                onClick={() => setActiveTab("mobile")}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  activeTab === "mobile"
                    ? "bg-cyan-500 text-slate-950 font-bold"
                    : "text-slate-400 hover:text-slate-200"
                }`}>
                Mobile
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-4">
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

                <div className="pt-3 border-t border-slate-800/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="text-[11px] font-mono px-2 py-0.5 bg-slate-950 rounded text-slate-300 border border-slate-800">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {project.websiteUrl && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 text-xs font-semibold transition-all active:scale-95">
                        <span>Live Demo</span>
                        <svg
                          className="w-3.5 h-3.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 text-xs font-semibold transition-all active:scale-95">
                        <span>GitHub</span>
                        <svg
                          className="w-3.5 h-3.5"
                          fill="currentColor"
                          viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certificates Section */}
        <section id="certificates" className="space-y-8 pt-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 border-b border-slate-800 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-mono mb-2">
                📜 Verified Credentials
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-100">
                Professional Certifications
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Verified courses and specializations completed through Google &
                Meta on Coursera.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  {cert.image && (
                    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 aspect-[4/3] group-hover:border-slate-700 transition-colors">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-40"></div>
                      <span className="absolute top-3 right-3 text-xs px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-800 border border-cyan-500/20 font-mono backdrop-blur-md">
                        {cert.organization}
                      </span>
                    </div>
                  )}

                  <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-mono">
                    Issuer:{" "}
                    <strong className="text-slate-200">
                      {cert.organization}
                    </strong>
                  </span>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 text-xs font-semibold transition-all active:scale-95">
                    <span>Verify</span>
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
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
            className="group relative flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer border border-cyan-400/30">
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
