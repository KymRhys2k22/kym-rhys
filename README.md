# 🚀 Kym Rhys Pluma Mallari — Personal Portfolio & AI Assistant

Welcome to the official repository of **Kym Rhys**, a Full-Stack Software Developer based in San Pedro, Laguna, Philippines. This web application showcases Kym's projects, tech stack, and features an integrated **AI Assistant** powered by Supabase Edge Functions.

---

## 🌟 About Kym

Kym specializes in high-speed, modern web and mobile application development. Leveraging the **MERN stack**, **Supabase**, and **Agentic AI workflows**, Kym builds pragmatic, scalable, and high-performance applications.

- 📍 **Location:** San Pedro, Laguna, Philippines
- 💼 **Specialization:** Full-Stack Web Development, Mobile Apps, Automation & AI Integration
- ⚡ **Approach:** Rapid prototyping and delivery using BaaS & AI-assisted development workflows

---

## 🛠️ Tech Stack & Capabilities

- **Frontend & Mobile:** ReactJS, React Native, Next.js, Vite, Tailwind CSS, Expo
- **Backend & Database:** Node.js, Express, Supabase (Edge Functions, DB, Auth), PostgreSQL, MongoDB Atlas, SQLite
- **Automation & AI:** n8n workflow automation, Python, TypeScript, Google Cloud, Supabase Edge Functions (Deno), TokenRouter/OpenAI API streaming
- **E-Commerce & Retail Ops:** Inventory control systems, planograms, and retail workflow automation

---

## 🚀 Highlighted Projects

1. **🎓 Immersion Track Enrollment System**
   - Student enrollment platform with administrative monitoring dashboards built in 3 days using ReactJS, Supabase, and AI-driven workflows.
2. **🗳️ Student Election Voting System**
   - Online voting platform for FEU Alabang featuring real-time tallying and direct export to PDF & Excel formats.
3. **📦 Local Inventory Tracking App**
   - Mobile application built with React Native and Expo SQLite for offline-first structured data management and text file exports.
4. **📊 Real-Time Planogram Inventory System**
   - Web tool translating store layouts and Excel planograms into dynamic, real-time React tables for store inventory control.

---

## 🤖 Features of this Portfolio App

- **AI Portfolio Assistant**: An interactive chat widget that answers questions about Kym's experience, stack, and availability in real time.
- **Supabase Edge Function Backend**: Chat requests are processed by a Deno TypeScript Edge Function (`supabase/functions/chat/index.ts`) deployed on Supabase's global edge network, proxying SSE streaming responses with zero server overhead.
- **Modern Responsive Design**: Built with React, Vite, and Tailwind CSS for smooth animations and dark-mode aesthetics.

---

## ⚡ Local Development Setup

### 1. Clone & Install Dependencies

```bash
git clone https://github.com/KymRhys2k22/kym-rhys.git
cd kym-rhys
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL="https://ngwyczzqsquzuwcehbia.supabase.co"
VITE_SUPABASE_ANON_KEY="your-supabase-anon-key"
```

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

---

## 📬 Contact & Connect

- **GitHub:** [@KymRhys2k22](https://github.com/KymRhys2k22)
- **Portfolio Website:** [Live Portfolio](https://kym-rhys.vercel.app) _(or updated deployment URL)_
