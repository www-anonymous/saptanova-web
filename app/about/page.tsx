"use client";

import { motion } from "framer-motion";
import { Eye, Target, Award, Sparkles } from "lucide-react";

const team = [
  { name: "Tharun S", role: "Co-Founder & HoHR", initial: "T" },
  { name: "Mukta", role: "Co-Founder & CTO", initial: "M" },
  { name: "Rosi", role: "CFO", initial: "R" },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Header */}
      <section className="hero-glow text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400">About Us</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">Who We Are. What We Do. Why It Matters.</h1>
        </div>
      </section>

      {/* Story & Values */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs uppercase font-bold text-blue-600">Our Story</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">From a simple idea to a bigger vision.</h2>
          <p className="text-slate-600 mt-4 leading-relaxed">
            Saptanova Technologies was born from a shared passion &mdash; to create meaningful technology solutions that help businesses grow, evolve, and achieve more. What started as a small team with big dreams is now a future-focused technology company built on trust, innovation, and collaboration.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-start gap-3">
            <Eye className="w-6 h-6 text-blue-600" />
            <h4 className="font-bold text-slate-900">Our Vision</h4>
            <p className="text-xs text-slate-500">To be a global technology partner powering sustainable growth.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-start gap-3">
            <Target className="w-6 h-6 text-blue-600" />
            <h4 className="font-bold text-slate-900">Our Mission</h4>
            <p className="text-xs text-slate-500">To deliver scalable, reliable, and intelligent digital products.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-start gap-3">
            <Award className="w-6 h-6 text-blue-600" />
            <h4 className="font-bold text-slate-900">Our Values</h4>
            <p className="text-xs text-slate-500">Integrity, innovation, and customer-first execution.</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-slate-900">Our Team</h2>
          <p className="text-slate-500 mt-1">Passionate minds driving forward-thinking technology.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12">
            {team.map((m) => (
              <div key={m.name} className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-blue-100 text-blue-600 font-bold text-2xl flex items-center justify-center mb-4">
                  {m.initial}
                </div>
                <h4 className="font-bold text-slate-900 text-lg">{m.name}</h4>
                <p className="text-xs text-slate-500 mt-1">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}