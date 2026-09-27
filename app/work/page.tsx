"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "Web & Mobile", "Cloud", "AI & Automation", "UI/UX"];

const projects = [
  { id: 1, title: "TaskFlow", category: "Web & Mobile", desc: "Productivity app for team collaboration and task delegation." },
  { id: 2, title: "InsightAI", category: "AI & Automation", desc: "Analytics dashboard powered by AI forecasting." },
  { id: 3, title: "CloudOps Pro", category: "Cloud", desc: "Infrastructure monitoring and automated scaling workflows." },
  { id: 4, title: "EduNest", category: "Web & Mobile", desc: "Modern learning management platform for higher education." },
];

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState("All");

  const filtered = activeTab === "All" ? projects : projects.filter((p) => p.category === activeTab);

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="hero-glow text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400">Our Work</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">Ideas. Projects. Impact.</h1>
          <p className="text-slate-300 mt-3 max-w-xl text-sm sm:text-base">
            Explore internal projects and innovation initiatives that showcase our capabilities.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        {/* Category Pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                activeTab === cat ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((proj) => (
            <motion.div
              layout
              key={proj.id}
              className="rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
            >
              <div className="h-48 bg-gradient-to-tr from-slate-900 to-slate-800 flex items-center justify-center p-6 text-slate-400 text-xs font-medium">
                [Project Preview / Screenshot]
              </div>
              <div className="p-6">
                <span className="text-[11px] font-semibold text-blue-600 uppercase tracking-wider">{proj.category}</span>
                <h3 className="font-bold text-xl text-slate-900 mt-1">{proj.title}</h3>
                <p className="text-slate-600 text-sm mt-2">{proj.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}