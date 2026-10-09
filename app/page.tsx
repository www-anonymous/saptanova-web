"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Code2,
  Cloud,
  Cpu,
  Database,
  Headphones,
  ArrowRight,
  ShieldCheck,
  Lightbulb,
  Users,
  TrendingUp,
  Target,
  RefreshCw,
  Handshake,
  Building2,
  GraduationCap,
  ShoppingBag,
  Briefcase,
  Activity,
  Rocket,
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
    title: "ERP & CRM Solutions",
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

const solutionPaths = {
  product: {
    label: "Build a digital product",
    detail: "You have an idea or an existing platform that needs a stronger digital experience.",
    service: "Software & Web Development",
    recommendation: "Plan, build, and improve a web or mobile product around the people who will use it.",
  },
  automate: {
    label: "Make work flow better",
    detail: "Your team spends too much time on repetitive tasks or disconnected tools.",
    service: "AI & Automation",
    recommendation: "Find practical opportunities to automate workflows and connect the systems your team relies on.",
  },
  scale: {
    label: "Get ready to grow",
    detail: "Your infrastructure or systems need to keep up with a growing business.",
    service: "Cloud & DevOps",
    recommendation: "Build a more reliable cloud foundation and delivery process that can grow with your needs.",
  },
};

// Why Saptanova Features
const whyUs = [
  {
    icon: Lightbulb,
    title: "Innovative Mindset",
    desc: "Turning ideas into impactful solutions.",
  },
  {
    icon: Users,
    title: "Skilled Team",
    desc: "Passionate experts who care about your success.",
  },
  {
    icon: TrendingUp,
    title: "Scalable Solutions",
    desc: "Built to grow with your business.",
  },
  {
    icon: Target,
    title: "Client-Centric Approach",
    desc: "Your goals are our priority.",
  },
  {
    icon: RefreshCw,
    title: "Agile & Flexible",
    desc: "Fast, transparent, and adaptive.",
  },
  {
    icon: Handshake,
    title: "Long-Term Partnership",
    desc: "We're in it for the journey, not just the project.",
  },
];

// Industries
const industries = [
  { icon: Rocket, title: "Startups", desc: "Build, launch, scale." },
  {
    icon: Building2,
    title: "Small & Medium Businesses",
    desc: "Smarter tech. Bigger growth.",
  },
  {
    icon: Activity,
    title: "Healthcare",
    desc: "Better care through better technology.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Modern learning for a brighter future.",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    desc: "Create seamless customer experiences.",
  },
  {
    icon: Briefcase,
    title: "Professional Services",
    desc: "Efficiency. Accuracy. Excellence.",
  },
];

export default function Home() {
  const [activeChallenge, setActiveChallenge] = useState<keyof typeof solutionPaths>("product");
  const selectedSolution = solutionPaths[activeChallenge];

  return (
    <div className="flex flex-col w-full bg-white dark:bg-[#070e1e] text-slate-800 dark:text-slate-200 transition-colors duration-300">

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

            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
              }}
              className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight"
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -150 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { type: "spring", stiffness: 240, damping: 22, mass: 0.7 },
                  },
                }}
                className="block"
              >
                Building What&apos;s
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -150 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { type: "spring", stiffness: 240, damping: 22, mass: 0.7 },
                  },
                }}
                className="block text-blue-500"
              >
                Next.
              </motion.span>
            </motion.h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              We craft intelligent digital solutions that help businesses
              innovate, grow, and stay ahead. From custom software to cloud,
              AI, and beyond &mdash; we turn ideas into scalable technology.
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
            <div className="relative w-72 h-72 flex items-center justify-center">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full drop-shadow-[0_0_50px_rgba(0,102,255,0.7)]"
              >
                <motion.path
                  d="M 100,0 Q 100,100 0,100 Q 100,100 100,200 Q 100,100 200,100 Q 100,100 100,0 Z"
                  fill="url(#blue-grad)"
                  initial={false}
                  animate={{ scale: [1, 1.035, 1], opacity: [0.94, 1, 0.94] }}
                  transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                  style={{ transformBox: "fill-box", transformOrigin: "center" }}
                />
                <path
                  d="M 100,0 Q 100,100 0,100 Q 100,100 100,200 Q 100,100 200,100 Q 100,100 100,0 Z"
                  fill="none"
                  stroke="#7dd3fc"
                  strokeWidth="1.5"
                  opacity="0.38"
                />
                <path
                  d="M 100,0 Q 100,100 0,100 Q 100,100 100,200 Q 100,100 200,100 Q 100,100 100,0 Z"
                  className="star-edge-sweep"
                  fill="none"
                  stroke="#bae6fd"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeDasharray="42 546"
                  filter="url(#star-edge-glow)"
                />
                <g transform="translate(124 8) scale(.28)">
                  <motion.path
                    d="M50 0 C49 32 32 49 0 50 C32 51 49 68 50 100 C51 68 68 51 100 50 C68 49 51 32 50 0 Z"
                    fill="#38bdf8"
                    initial={false}
                    animate={{
                      x: [0, 5, 9, 4, 0],
                      y: [0, -3, 3, 6, 0],
                      scale: [0.82, 1.12, 0.9, 1.08, 0.82],
                      opacity: [0.65, 1, 0.82, 1, 0.65],
                    }}
                    transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
                    style={{ transformBox: "fill-box", transformOrigin: "center" }}
                  />
                </g>

                <defs>
                  <filter id="star-edge-glow" x="-30%" y="-30%" width="160%" height="160%">
                    <feGaussianBlur stdDeviation="2" result="softGlow" />
                    <feMerge>
                      <feMergeNode in="softGlow" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <linearGradient
                    id="blue-grad"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#0066ff" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES SECTION */}
      <section className="py-24 bg-slate-50/60 dark:bg-[#0b1426] transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400">
                Our Services
              </span>

              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">
                End-to-End Technology Solutions
              </h2>

              <p className="text-slate-500 dark:text-slate-400 mt-2">
                We help you build, scale, and transform with modern technology.
                From idea to execution, we&apos;re with you at every step.
              </p>
            </div>

            <Link
              href="/services"
              className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline mt-4 md:mt-0 flex items-center gap-1"
            >
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
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  whileHover={{ y: -6 }}
                  className="p-8 rounded-2xl
                    bg-white dark:bg-[#111c30]
                    border border-slate-200/80 dark:border-slate-800
                    shadow-sm hover:shadow-xl
                    dark:hover:shadow-blue-950/30
                    transition-all duration-300
                    flex flex-col justify-between"
                >
                  <Link
                    href="/services"
                    aria-label={`Explore ${item.title} services`}
                    className="group flex h-full flex-col justify-between rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-4 dark:focus-visible:ring-offset-[#0b1426]"
                  >
                  <div>

                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="font-semibold text-lg text-slate-900 dark:text-white mb-2">
                      {item.title}
                    </h3>

                    <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end text-blue-600 dark:text-blue-400">
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </div>
                  </Link>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* SOLUTION FINDER */}
      <section className="bg-white px-6 py-20 dark:bg-[#070e1e] md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 dark:text-blue-400">Find your next step</span>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white md:text-4xl">What would you like to move forward?</h2>
            <p className="mt-4 max-w-lg leading-relaxed text-slate-600 dark:text-slate-400">Choose the challenge that sounds closest to yours. We&apos;ll point you toward a place to start.</p>
            <div className="mt-7 flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400">✦</span>
              A useful first step, without the guesswork.
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-[#0b1426] sm:p-7">
            <div className="grid gap-3 sm:grid-cols-3">
              {Object.entries(solutionPaths).map(([key, option], index) => (
                <button
                  key={key}
                  type="button"
                  aria-pressed={activeChallenge === key}
                  onClick={() => setActiveChallenge(key as keyof typeof solutionPaths)}
                  className={`rounded-2xl border p-4 text-left transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${activeChallenge === key ? "border-blue-500 bg-white shadow-md shadow-blue-950/10 dark:bg-[#111c30]" : "border-slate-200 bg-white/60 hover:border-blue-300 dark:border-slate-800 dark:bg-[#111c30]/60 dark:hover:border-blue-800"}`}
                >
                  <span className={`mb-4 flex h-9 w-9 items-center justify-center rounded-xl text-sm font-bold ${activeChallenge === key ? "bg-blue-600 text-white" : "bg-blue-50 text-blue-600 dark:bg-blue-950/60 dark:text-blue-400"}`}>0{index + 1}</span>
                  <span className="block text-sm font-semibold leading-snug text-slate-900 dark:text-white">{option.label}</span>
                </button>
              ))}
            </div>

            <motion.div
              key={activeChallenge}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mt-5 rounded-2xl bg-[#0b132b] p-6 text-white dark:bg-[#111c30] sm:p-7"
            >
              <p className="text-sm leading-relaxed text-slate-300">{selectedSolution.detail}</p>
              <h3 className="mt-4 text-xl font-bold">Start with {selectedSolution.service}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-300">{selectedSolution.recommendation}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/services" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-500">Explore this service <ArrowRight className="h-4 w-4" /></Link>
                <Link href="/contact" className="inline-flex items-center rounded-full border border-slate-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-blue-400">Talk to our team</Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. WHY SAPTANOVA */}
      <section className="py-24 bg-white dark:bg-[#070e1e] border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          <div className="lg:col-span-4 flex flex-col gap-4">

            <span className="text-xs uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400">
              Why Saptanova
            </span>

            <h2 className="text-3xl font-bold text-slate-900 dark:text-white leading-tight">
              More Than Just Technology. <br />
              A Partner in Your Growth.
            </h2>

            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              We combine technical expertise, industry knowledge, and a passion
              for innovation to deliver solutions that create real value
              &mdash; today and tomorrow.
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
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4,
                  }}
                  className="p-6 rounded-2xl
                    bg-slate-50 dark:bg-[#111c30]
                    border border-slate-100 dark:border-slate-800
                    flex flex-col gap-3
                    transition-colors duration-300"
                >

                  <div className="w-10 h-10 rounded-lg bg-blue-100/70 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">
                    {item.title}
                  </h4>

                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES */}
      <section className="py-24 bg-slate-50/50 dark:bg-[#0b1426] border-t border-slate-100 dark:border-slate-800 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6">

          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">

            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-blue-600 dark:text-blue-400">
                Industries
              </span>

              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-1">
                Solutions for Every Industry
              </h2>
            </div>

            <Link
              href="/industries"
              className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline mt-4 md:mt-0 flex items-center gap-1"
            >
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
                  transition={{
                    delay: index * 0.05,
                    duration: 0.4,
                  }}
                  whileHover={{ y: -4 }}
                  className="bg-white dark:bg-[#111c30]
                    p-6 rounded-2xl
                    border border-slate-200/80 dark:border-slate-800
                    shadow-sm hover:shadow-md
                    dark:hover:shadow-blue-950/30
                    transition-all
                    flex flex-col justify-between h-44"
                >

                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white text-base">
                      {ind.title}
                    </h4>

                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {ind.desc}
                    </p>
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="py-16 bg-white dark:bg-[#070e1e] transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-[#0b132b] dark:bg-[#111c30]
            rounded-3xl p-10 md:p-14
            flex flex-col md:flex-row
            items-center justify-between gap-8
            text-white relative overflow-hidden
            shadow-2xl
            border border-transparent dark:border-slate-800"
          >

            <div className="relative z-10">

              <h3 className="text-2xl md:text-3xl font-bold">
                Let&apos;s Build What&apos;s Next.
              </h3>

              <p className="text-slate-400 mt-2 text-sm sm:text-base">
                Have a project in mind or just want to say hello? We&apos;d
                love to hear from you.
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
