"use client";

import {
  Code2,
  Cloud,
  Cpu,
  Database,
  Headphones,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const serviceList = [
  {
    icon: Code2,
    title: "Software & Web Development",
    desc: "Build high-performance web and mobile applications that are scalable, secure, and user-focused.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Migrate, manage, and optimize your infrastructure with secure and automated cloud solutions.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    desc: "Leverage AI and automation to increase productivity, reduce manual work, and unlock new opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "Salesforce & CRM Solutions",
    desc: "Get the most out of Salesforce with custom solutions, integrations, and ongoing support.",
  },
  {
    icon: Database,
    title: "Data & Business Solutions",
    desc: "Turn your data into actionable insights with analytics, dashboards, and data-driven strategies.",
  },
  {
    icon: Headphones,
    title: "IT Consulting & Support",
    desc: "Strategic guidance, technical support, and long-term partnership for sustainable growth.",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-[#070e1e] text-slate-800 dark:text-slate-200 min-h-screen transition-colors duration-300">

      {/* Hero */}
      <section className="hero-glow text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400">
            Our Services
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">
            Custom Solutions. Real Impact.
          </h1>

          <p className="text-slate-300 mt-3 max-w-xl text-sm sm:text-base">
            We offer a comprehensive range of technology services to help
            businesses build, scale, and transform.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {serviceList.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="p-8 rounded-2xl bg-white dark:bg-[#111c30] border border-slate-200/80 dark:border-slate-800 shadow-sm dark:shadow-blue-950/20 hover:shadow-lg dark:hover:shadow-blue-950/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Link */}
                <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1 hover:text-blue-700 dark:hover:text-blue-300 hover:underline transition-colors"
                  >
                    Inquire Now
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}

        </div>
      </section>
    </div>
  );
}