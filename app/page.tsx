"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  Code2, Cloud, Cpu, Database, Headphones, ArrowRight, ShieldCheck, 
  Lightbulb, Users, TrendingUp, Target, RefreshCw, Handshake, Building2, 
  GraduationCap, ShoppingBag, Briefcase, Activity, Rocket
} from "lucide-react";

// Services Data
const services = [
  {
    icon: Code2,
    title: "Software & Web Development",
    desc: "Custom web and mobile applications built for performance, scalability, and real business impact.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Secure, scalable and cost-efficient cloud infrastructure with DevOps best practices.",
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    desc: "Intelligent solutions to automate workflows, improve productivity, and unlock new possibilities.",
  },
  {
    icon: ShieldCheck,
    title: "Salesforce & CRM Solutions",
    desc: "We help you get the most out of Salesforce with custom solutions, integrations, and ongoing support.",
  },
  {
    icon: Database,
    title: "Data & Business Solutions",
    desc: "Turn your data into insights with analytics, dashboards, and data-driven strategies.",
  },
  {
    icon: Headphones,
    title: "IT Consulting & Support",
    desc: "Strategic guidance, technical support, and long-term partnership for sustainable growth.",
  },
];

// Why Saptanova Features
const whyUs = [
  { icon: Lightbulb, title: "Innovative Mindset", desc: "Turning ideas into impactful solutions." },
  { icon: Users, title: "Skilled Team", desc: "Passionate experts who care about your success." },
  { icon: TrendingUp, title: "Scalable Solutions", desc: "Built to grow with your business." },
  { icon: Target, title: "Client-Centric Approach", desc: "Your goals are our priority." },
  { icon: RefreshCw, title: "Agile & Flexible", desc: "Fast, transparent, and adaptive." },
  { icon: Handshake, title: "Long-Term Partnership", desc: "We're in it for the journey, not just the project." },
];

// Industries
const industries = [
  { icon: Rocket, title: "Startups", desc: "Build, launch, scale." },
  { icon: Building2, title: "Small & Medium Businesses", desc: "Smarter tech. Bigger growth." },
  { icon: Activity, title: "Healthcare", desc: "Better care through better technology." },
  { icon: GraduationCap, title: "Education", desc: "Modern learning for a brighter future." },
  { icon: ShoppingBag, title: "Retail", desc: "Create seamless customer experiences." },
  { icon: Briefcase, title: "Professional Services", desc: "Efficiency. Accuracy. Excellence." },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-white text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative hero-glow text-white overflow-hidden py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold">
              Welcome to Saptanova Technologies
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Building What&apos;s <br />
              <span className="text-blue-500">Next.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              We craft intelligent digital solutions that help businesses innovate, grow, and stay ahead.
              From custom software to cloud, AI, and beyond &mdash; we turn ideas into scalable technology.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 font-semibold text-sm transition-all shadow-lg shadow-blue-600/30 flex items-center gap-2"
              >
                Get Started &rarr;
              </Link>
              <Link
                href="/services"
                className="px-8 py-3.5 rounded-full border border-slate-700 hover:border-slate-500 font-semibold text-sm transition-all text-slate-200"
              >
                Explore Our Services &rarr;
              </Link>
            </div>
          </motion.div>

          {/* SVG 4-Point Glow Star */}
          <div className="lg:col-span-5 flex justify-center relative">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.03, 1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-72 h-72 flex items-center justify-center"
            >
              <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_50px_rgba(0,102,255,0.7)]">
                <path
                  d="M 100,0 Q 100,100 0,100 Q 100,100 100,200 Q 100,100 200,100 Q 100,100 100,0 Z"
                  fill="url(#blue-grad)"
                />
                <defs>
                  <linearGradient id="blue-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#0066ff" />
                  </linearGradient>
                </defs>
              </svg>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-24 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600">Our Services</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-2">End-to-End Technology Solutions</h2>
              <p className="text-slate-500 mt-2">We help you build, scale, and transform with modern technology. From idea to execution, we&apos;re with you at every step.</p>
            </div>
            <Link href="/services" className="text-sm font-semibold text-blue-600 hover:underline mt-4 md:mt-0 flex items-center gap-1">
              View All Services &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08, duration: 0.5 }}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold text-lg text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-end text-blue-600">
                    <ArrowRight className="w-5 h-5 hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHY SAPTANOVA */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col gap-4">
            <span className="text-xs uppercase font-bold tracking-wider text-blue-600">Why Saptanova</span>
            <h2 className="text-3xl font-bold text-slate-900 leading-tight">
              More Than Just Technology. <br />
              A Partner in Your Growth.
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              We combine technical expertise, industry knowledge, and a passion for innovation to deliver solutions that create real value &mdash; today and tomorrow.
            </p>
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-500 transition-colors shadow-sm"
              >
                Learn More &rarr;
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {whyUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="p-6 rounded-2xl bg-slate-50 border border-slate-100 flex flex-col gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-100/70 text-blue-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-semibold text-slate-900 text-sm">{item.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES */}
      <section className="py-24 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600">Industries</span>
              <h2 className="text-3xl font-bold text-slate-900 mt-1">Solutions for Every Industry</h2>
            </div>
            <Link href="/industries" className="text-sm font-semibold text-blue-600 hover:underline mt-4 md:mt-0 flex items-center gap-1">
              Explore All Industries &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((ind, index) => {
              const Icon = ind.icon;
              return (
                <motion.div
                  key={ind.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between h-44"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-base">{ind.title}</h4>
                    <p className="text-xs text-slate-500 mt-1">{ind.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#0b132b] rounded-3xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8 text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold">Let&apos;s Build What&apos;s Next.</h3>
              <p className="text-slate-400 mt-2 text-sm sm:text-base">
                Have a project in mind or just want to say hello? We&apos;d love to hear from you.
              </p>
            </div>
            <Link
              href="/contact"
              className="relative z-10 px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 font-semibold text-sm transition-all whitespace-nowrap shadow-lg shadow-blue-600/40"
            >
              Get In Touch &rarr;
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}