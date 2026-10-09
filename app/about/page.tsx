"use client";

import Image from "next/image";
import { Eye, Target, Award, ArrowRight, Mail, Sparkles } from "lucide-react";

const team = [
  {
    name: "Tharun",
    role: "CO-FOUNDER, CEO & CTO",
    initial: "T",
    image: "/tharun.jpg",
    bio: "Leading Saptanova Technologies with a focus on purposeful innovation, strategic growth, and customer-first execution. With an MBA from JNTUA and experience as an Assistant Professor and HR professional at Capgemini, Tharun is focused on bridging business challenges with modern technology and software engineering.",
    linkedin: "https://www.linkedin.com/in/tharun-s-stark/",
    email: "tharun@saptanova.in",
  },
  {
    name: "Muktananda Gowd",
    role: "CO-FOUNDER, CMO & COO",
    initial: "M",
    image: null,
    bio: "Driving Saptanova Technologies through strategic marketing, operational excellence, business growth, and strong client relationships. Focused on building a collaborative organization and creating meaningful opportunities for Saptanova and its clients.",
    linkedin: "https://www.linkedin.com/in/umukthanandagowd/",
    email: "muktha@saptanova.in",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-[#070e1e] text-slate-800 dark:text-slate-200 transition-colors duration-300">

      {/* Header */}
      <section className="hero-glow text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.15fr_.85fr] gap-12 items-center">
          <div>
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400">
            About Us & Founders
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">
            Who We Are. What We Do. Why It Matters.
          </h1>
          <p className="mt-5 max-w-2xl text-slate-300 leading-relaxed">
            We bring business thinking and thoughtful engineering together to help teams move from a challenge to a digital solution they can grow with.
          </p>
          <a href="#founders" className="mt-7 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-colors">
            Meet the founders <ArrowRight className="w-4 h-4" />
          </a>
          </div>
          <div className="rounded-3xl border border-blue-400/20 bg-blue-500/10 p-8 md:p-10">
            <Sparkles className="w-8 h-8 text-blue-300" />
            <p className="mt-5 text-xl md:text-2xl font-semibold leading-relaxed text-white">“Technology should make the next step clearer, simpler, and more achievable.”</p>
            <p className="mt-4 text-sm text-blue-200">Our approach to every partnership</p>
          </div>
        </div>
      </section>

      {/* Story & Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* Our Story */}
        <div>
          <span className="text-xs uppercase font-bold text-blue-600 dark:text-blue-400">
            Our Story
          </span>

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
            From a simple idea to a bigger vision.
          </h2>

          <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
            Saptanova Technologies was born from a shared passion &mdash; to
            create meaningful technology solutions that help businesses grow,
            evolve, and achieve more.
          </p>
          <p className="text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
            We work across the full journey: understanding the need, shaping the right approach, building with care, and supporting the people who use the result. Our goal is to make technology practical, dependable, and ready for what comes next.
          </p>
        </div>

        {/* Vision / Mission / Values */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* Vision */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#111c30] border border-slate-100 dark:border-slate-800 flex flex-col items-start gap-3 transition-colors duration-300">
            <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />

            <h4 className="font-bold text-slate-900 dark:text-white">
              Our Vision
            </h4>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              To be a global technology partner powering sustainable growth.
            </p>
          </div>

          {/* Mission */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#111c30] border border-slate-100 dark:border-slate-800 flex flex-col items-start gap-3 transition-colors duration-300">
            <Target className="w-6 h-6 text-blue-600 dark:text-blue-400" />

            <h4 className="font-bold text-slate-900 dark:text-white">
              Our Mission
            </h4>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              To deliver scalable, reliable, and intelligent digital products.
            </p>
          </div>

          {/* Values */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#111c30] border border-slate-100 dark:border-slate-800 flex flex-col items-start gap-3 transition-colors duration-300">
            <Award className="w-6 h-6 text-blue-600 dark:text-blue-400" />

            <h4 className="font-bold text-slate-900 dark:text-white">
              Our Values
            </h4>

            <p className="text-xs text-slate-500 dark:text-slate-400">
              Integrity, innovation, and customer-first execution.
            </p>
          </div>

        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-16 bg-slate-50 dark:bg-[#0b1426] border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6">

          {/* Section Heading */}
          <div className="text-center md:text-left mb-12">

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Our Founders
            </h2>

            <p className="text-slate-500 dark:text-slate-400 mt-1">
              Meet the people building Saptanova Technologies.
            </p>

          </div>

          {/* Founder Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">

            {team.map((m) => (

              <div
                key={m.name}
                className="bg-white dark:bg-[#111c30] p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm dark:shadow-blue-950/20 flex flex-col items-center text-center hover:shadow-md dark:hover:shadow-blue-950/30 transition-all duration-300"
              >

                {/* Profile Photo / Avatar */}
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 shadow-sm flex items-center justify-center bg-blue-100 dark:bg-blue-950/50 border-2 border-white dark:border-slate-700 shadow-blue-500/10 relative">

                  {m.image ? (
                    <Image
                      src={m.image}
                      alt={`${m.name} - ${m.role} at Saptanova Technologies`}
                      fill
                      sizes="96px"
                      className="object-cover object-top"
                      priority
                    />
                  ) : (
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-2xl">
                      {m.initial}
                    </span>
                  )}

                </div>

                {/* Name */}
                <h4 className="font-bold text-slate-900 dark:text-white text-xl">
                  {m.name}
                </h4>

                {/* Role */}
                <p className="text-xs uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold mt-1">
                  {m.role}
                </p>

                {/* Bio */}
                <p className="text-sm text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                  {m.bio}
                </p>

                <a href={`mailto:${m.email}`} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline">
                  <Mail className="w-4 h-4" /> {m.email}
                </a>

                {/* LinkedIn */}
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                  className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-200 dark:hover:border-blue-800 hover:bg-blue-50 dark:hover:bg-blue-950/40 transition-all duration-200"
                >
                  <span className="font-bold text-blue-600 dark:text-blue-400">
                    in
                  </span>

                  View LinkedIn
                </a>

              </div>

            ))}

          </div>
        </div>
      </section>

    </div>
  );
}
