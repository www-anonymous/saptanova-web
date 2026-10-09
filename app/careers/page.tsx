"use client";

import { Heart, Clock, Award, Users, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    icon: Heart,
    title: "Meaningful Work",
    desc: "Solve real problems with modern technology.",
  },
  {
    icon: Clock,
    title: "Flexible Culture",
    desc: "Work-life balance and autonomous teams.",
  },
  {
    icon: Award,
    title: "Growth Opportunities",
    desc: "Learn, grow, and build your career path.",
  },
  {
    icon: Users,
    title: "Supportive Team",
    desc: "A collaborative and inclusive work culture.",
  },
];

export default function CareersPage() {
  const mailtoLink = `mailto:hello@saptanova.in?subject=${encodeURIComponent("Career Application | Saptanova Technologies")}&body=${encodeURIComponent("Hi Saptanova Team,\n\nI am interested in opportunities at Saptanova Technologies. My resume is attached.\n\nFull name: \nPhone: \nRole of interest: \nPortfolio or LinkedIn: \n\nThank you!")}`;

  return (
    <div className="flex flex-col w-full bg-white dark:bg-[#070e1e] text-slate-800 dark:text-slate-200 transition-colors duration-300">

      {/* Hero */}
      <section className="hero-glow text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_.8fr] gap-12 items-center">
          <div>

          <span className="text-xs uppercase font-bold tracking-widest text-blue-400">
            Careers
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">
            Grow With Us.
          </h1>

          <p className="text-slate-300 mt-3 max-w-xl text-sm sm:text-base">
            Bring your curiosity and craft to a team building useful technology for real business challenges. We value clear thinking, ownership, and people who keep learning.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#apply" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">Share your profile <ArrowRight className="w-4 h-4" /></a>
            <Link href="/about" className="inline-flex items-center rounded-full border border-slate-600 px-6 py-3 text-sm font-semibold text-white hover:border-blue-400">Meet the team</Link>
          </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-300">Make an impact</p>
            <p className="mt-4 text-2xl font-bold text-white">Good work starts with good people.</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">Whether your strength is engineering, design, cloud, or client partnerships, we would like to hear what you can bring to the team.</p>
          </div>

        </div>
      </section>

      {/* Perks */}
      <section className="py-20 max-w-7xl mx-auto px-6">

        <div className="max-w-2xl mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">The experience</span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">Room to do thoughtful work.</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">We aim to create an environment where people can contribute, grow their skills, and see the difference their work makes.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {perks.map((p) => {
            const Icon = p.icon;

            return (
              <div
                key={p.title}
                className="
                  p-6 rounded-2xl
                  bg-slate-50 dark:bg-[#111c30]
                  border border-slate-100 dark:border-slate-800
                  flex flex-col gap-3
                  transition-all duration-300
                  hover:shadow-md dark:hover:shadow-blue-950/30
                "
              >

                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>

                <h4 className="font-semibold text-slate-900 dark:text-white">
                  {p.title}
                </h4>

                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  {p.desc}
                </p>

              </div>
            );
          })}

        </div>

        {/* Resume Submission Box */}
        <div id="apply"
          className="
            mt-16 p-10 md:p-14
            rounded-3xl
            border border-dashed
            border-blue-200 dark:border-blue-900/70
            bg-blue-50/40 dark:bg-blue-950/20
            flex flex-col items-center text-center
            max-w-3xl mx-auto
            transition-colors duration-300
          "
        >

          <div className="w-14 h-14 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-5 shadow-lg shadow-blue-500/20">
            <Mail className="w-7 h-7" />
          </div>

          <h3 className="font-bold text-slate-900 dark:text-white text-2xl">
            Send Us Your Resume
          </h3>

          <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 max-w-lg leading-relaxed">
            Tell us what kind of work you do, what you are excited to learn, and where you could contribute. Attach your resume and include a portfolio or LinkedIn profile if you have one.
          </p>

          <a
            href={mailtoLink}
            className="
              mt-6 inline-flex items-center gap-2
              px-8 py-3.5 rounded-full
              bg-blue-600 hover:bg-blue-500
              text-white font-semibold text-sm
              transition-all
              shadow-md shadow-blue-600/30
            "
          >
            <span>Send Resume via Email</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">
            Or mail us directly at:{" "}

            <a
              href={mailtoLink}
              className="font-semibold text-blue-600 dark:text-blue-400 underline hover:text-blue-700 dark:hover:text-blue-300"
            >
              hello@saptanova.in
            </a>
          </p>

        </div>

      </section>

    </div>
  );
}
