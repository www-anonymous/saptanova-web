"use client";

import { Heart, Clock, Award, Users, Mail, ArrowRight } from "lucide-react";

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
  const mailtoLink =
    "mailto:reachoutsaptanova@gmail.com?subject=Job%20Application%20-%20Resume%20Submission&body=Hi%20Saptanova%20Team%2C%0D%0A%0D%0AI%20am%20interested%20in%20joining%20Saptanova%20Technologies.%20Please%20find%20my%20resume%20attached.%0D%0A%0D%0AFull%20Name%3A%20%0D%0APhone%20Number%3A%20%0D%0ARole%20of%20Interest%3A%20%0D%0APortfolio%20%2F%20LinkedIn%3A%20%0D%0A%0D%0AThank%20you!";

  return (
    <div className="flex flex-col w-full bg-white dark:bg-[#070e1e] text-slate-800 dark:text-slate-200 transition-colors duration-300">

      {/* Hero */}
      <section className="hero-glow text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <span className="text-xs uppercase font-bold tracking-widest text-blue-400">
            Careers
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">
            Grow With Us.
          </h1>

          <p className="text-slate-300 mt-3 max-w-xl text-sm sm:text-base">
            We&apos;re always on the lookout for talented, passionate people
            who want to build meaningful technology.
          </p>

        </div>
      </section>

      {/* Perks */}
      <section className="py-20 max-w-7xl mx-auto px-6">

        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          Why Work With Us?
        </h2>

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
        <div
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
            Interested in joining our team? Whether you are a software
            engineer, designer, or cloud architect, send your resume directly
            to our hiring team.
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
              reachoutsaptanova@gmail.com
            </a>
          </p>

        </div>

      </section>

    </div>
  );
}