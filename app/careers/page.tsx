"use client";

import { Heart, Clock, Award, Users } from "lucide-react";

const perks = [
  { icon: Heart, title: "Meaningful Work", desc: "Solve real problems with modern technology." },
  { icon: Clock, title: "Flexible Culture", desc: "Work-life balance and autonomous teams." },
  { icon: Award, title: "Growth Opportunities", desc: "Learn, grow, and build your career path." },
  { icon: Users, title: "Supportive Team", desc: "A collaborative and inclusive work culture." },
];

export default function CareersPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="hero-glow text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400">Careers</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">Grow With Us.</h1>
          <p className="text-slate-300 mt-3 max-w-xl text-sm sm:text-base">
            We&apos;re always on the lookout for talented, passionate people who want to build meaningful technology.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Why Work With Us?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-semibold text-slate-900">{p.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Current Openings */}
        <div className="mt-16 p-10 rounded-3xl border border-dashed border-slate-300 bg-slate-50/50 flex flex-col items-center text-center">
          <h3 className="font-bold text-slate-900 text-xl">Current Openings</h3>
          <p className="text-slate-500 text-sm mt-2 max-w-md">
            We don&apos;t have any formal positions open right now, but we are always open to great talent. Send us your resume!
          </p>
          <a
            href="mailto:careers@saptanova.com"
            className="mt-6 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all"
          >
            Send Your Resume &rarr;
          </a>
        </div>
      </section>
    </div>
  );
}