"use client";

import Image from "next/image";
import { Eye, Target, Award } from "lucide-react";

const team = [
  {
    name: "Tharun",
    role: "CO-FOUNDER, CEO & CTO",
    initial: "T",
    image: "/tharun.jpg",
    bio: "Leading Saptanova Technologies with a focus on purposeful innovation, strategic growth, and customer-first execution. With an MBA from JNTUA and experience as an Assistant Professor and HR professional at Capgemini, Tharun is focused on bridging business challenges with modern technology and software engineering.",
    linkedin: "https://www.linkedin.com/in/tharun-s-stark/",
  },
  {
    name: "Muktananda Gowd",
    role: "CO-FOUNDER, CMO & COO",
    initial: "M",
    image: null,
    bio: "Driving Saptanova Technologies through strategic marketing, operational excellence, business growth, and strong client relationships. Focused on building a collaborative organization and creating meaningful opportunities for Saptanova and its clients.",
    linkedin: "https://www.linkedin.com/in/umukthanandagowd/",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white">

      {/* Header */}
      <section className="hero-glow text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400">
            About Us & Founders
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">
            Who We Are. What We Do. Why It Matters.
          </h1>
        </div>
      </section>

      {/* Story & Core Values */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div>
          <span className="text-xs uppercase font-bold text-blue-600">
            Our Story
          </span>

          <h2 className="text-3xl font-bold text-slate-900 mt-2">
            From a simple idea to a bigger vision.
          </h2>

          <p className="text-slate-600 mt-4 leading-relaxed">
            Saptanova Technologies was born from a shared passion &mdash; to
            create meaningful technology solutions that help businesses grow,
            evolve, and achieve more.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-start gap-3">
            <Eye className="w-6 h-6 text-blue-600" />

            <h4 className="font-bold text-slate-900">
              Our Vision
            </h4>

            <p className="text-xs text-slate-500">
              To be a global technology partner powering sustainable growth.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-start gap-3">
            <Target className="w-6 h-6 text-blue-600" />

            <h4 className="font-bold text-slate-900">
              Our Mission
            </h4>

            <p className="text-xs text-slate-500">
              To deliver scalable, reliable, and intelligent digital products.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col items-start gap-3">
            <Award className="w-6 h-6 text-blue-600" />

            <h4 className="font-bold text-slate-900">
              Our Values
            </h4>

            <p className="text-xs text-slate-500">
              Integrity, innovation, and customer-first execution.
            </p>
          </div>

        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-100">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center md:text-left mb-12">

            <h2 className="text-3xl font-bold text-slate-900">
              Our Founders
            </h2>

            <p className="text-slate-500 mt-1">
              Meet the people building Saptanova Technologies.
            </p>

          </div>

          {/* Founder Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">

            {team.map((m) => (

              <div
                key={m.name}
                className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all duration-300"
              >

                {/* Profile Photo / Avatar */}
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4 shadow-sm flex items-center justify-center bg-blue-100 border-2 border-white shadow-blue-500/10 relative">

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
                    <span className="text-blue-600 font-bold text-2xl">
                      {m.initial}
                    </span>
                  )}

                </div>

                {/* Name */}
                <h4 className="font-bold text-slate-900 text-xl">
                  {m.name}
                </h4>

                {/* Role */}
                <p className="text-xs uppercase tracking-wider text-blue-600 font-semibold mt-1">
                  {m.role}
                </p>

                {/* Bio */}
                <p className="text-sm text-slate-600 mt-4 leading-relaxed">
                  {m.bio}
                </p>

                {/* LinkedIn */}
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                  className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 text-sm font-semibold text-slate-700 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50 transition-all duration-200"
                >
                  <span className="font-bold text-blue-600">
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