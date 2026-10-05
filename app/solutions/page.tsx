"use client";

import {
  Cloud,
  Cpu,
  Code2,
  ShieldCheck,
  Database,
  Smartphone,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

const solutions = [
  {
    title: "Enterprise Cloud & DevOps",
    category: "Infrastructure",
    icon: Cloud,
    description:
      "Modernize legacy workloads with scalable multi-cloud architectures, Kubernetes orchestration, and automated CI/CD pipelines designed for zero downtime.",
    features: [
      "AWS & Azure cloud migration strategies",
      "Infrastructure as Code (Terraform, Ansible)",
      "Continuous integration & deployment pipelines",
      "24/7 cloud monitoring, logging & cost optimization",
    ],
    highlight: "Up to 40% reduction in cloud infrastructure costs",
  },
  {
    title: "AI & Intelligent Automation",
    category: "Cognitive Tech",
    icon: Cpu,
    description:
      "Empower your business workflows with tailored machine learning models, natural language processing tools, and predictive business intelligence.",
    features: [
      "Custom generative AI & LLM implementations",
      "Predictive analytics and demand forecasting",
      "Intelligent document and workflow automation",
      "Secure private data fine-tuning pipelines",
    ],
    highlight: "Automate repetitive data tasks with 99% accuracy",
  },
  {
    title: "Custom Web & Mobile Platforms",
    category: "Full-Stack Dev",
    icon: Smartphone,
    description:
      "High-performance responsive web portals and native cross-platform mobile apps built on modern frameworks for maximum speed and engagement.",
    features: [
      "Next.js, React, and TypeScript web ecosystems",
      "Cross-platform iOS and Android mobile apps",
      "High-speed API development (REST & GraphQL)",
      "SEO-optimized, mobile-first responsive design",
    ],
    highlight: "Sub-second load times and 100/100 Lighthouse scores",
  },
  {
    title: "Cybersecurity & Compliance",
    category: "Security",
    icon: ShieldCheck,
    description:
      "Safeguard mission-critical systems and confidential customer data with robust perimeter defense, zero-trust access, and compliance auditing.",
    features: [
      "Zero-trust architecture and identity governance",
      "Vulnerability assessment & penetration testing",
      "Regulatory compliance auditing (GDPR, ISO 27001)",
      "Automated vulnerability scanning & threat mitigation",
    ],
    highlight: "Enterprise-grade data security & threat defense",
  },
  {
    title: "Data Engineering & Analytics",
    category: "Big Data",
    icon: Database,
    description:
      "Transform disconnected company datasets into centralized, actionable reporting intelligence with modern data warehouses and real-time dashboards.",
    features: [
      "ETL/ELT pipeline design and maintenance",
      "Data lake and modern data warehouse warehousing",
      "Real-time business intelligence dashboards",
      "Data governance, lineage, and deduplication",
    ],
    highlight: "Actionable executive business metrics in real time",
  },
  {
    title: "Bespoke Enterprise Software",
    category: "Custom Systems",
    icon: Code2,
    description:
      "Tailor-made internal business software, ERP extensions, CRM tools, and partner portals designed around your exact operational workflows.",
    features: [
      "Bespoke ERP & CRM software modules",
      "Third-party SaaS API bridges and connectors",
      "Role-based access control and admin tools",
      "Scalable microservices backend architectures",
    ],
    highlight: "Designed 100% to your organizational workflow",
  },
];

export default function SolutionsPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-[#070e1e] min-h-screen text-slate-800 dark:text-slate-200 transition-colors duration-300">

      {/* Hero Header */}
      <section className="bg-slate-900 dark:bg-[#070e1e] text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400">
            What We Build
          </span>

          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 tracking-tight">
            Our Technology Solutions
          </h1>

          <p className="mt-4 text-slate-300 max-w-2xl text-base md:text-lg leading-relaxed">
            We architect and deploy scalable, cloud-native digital solutions
            engineered to accelerate operational efficiency and drive
            sustainable business growth.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {solutions.map((sol) => {
            const Icon = sol.icon;

            return (
              <div
                key={sol.title}
                className="bg-white dark:bg-[#111c30] rounded-2xl border border-slate-200/80 dark:border-slate-800 shadow-sm dark:shadow-blue-950/20 hover:shadow-md dark:hover:shadow-blue-950/30 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-8">

                  {/* Top Bar with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full">
                      {sol.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {sol.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 text-sm mt-3 leading-relaxed">
                    {sol.description}
                  </p>

                  {/* Core Features List */}
                  <div className="mt-6 pt-6 border-t border-slate-100 dark:border-slate-800">
                    <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3">
                      Key Capabilities
                    </p>

                    <ul className="space-y-2">
                      {sol.features.map((feat) => (
                        <li
                          key={feat}
                          className="flex items-start text-xs text-slate-700 dark:text-slate-300"
                        >
                          <CheckCircle2 className="w-4 h-4 text-blue-500 dark:text-blue-400 mr-2 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Highlight Banner */}
                <div className="bg-slate-50 dark:bg-[#0b1426] px-8 py-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    <strong className="text-slate-800 dark:text-slate-200">
                      Benefit:
                    </strong>{" "}
                    {sol.highlight}
                  </div>

                  <Link
                    href="/contact"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold text-xs flex items-center gap-1 shrink-0 ml-4 group-hover:translate-x-1 transition-transform"
                  >
                    Inquire
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}

        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-white dark:bg-[#0b1426] border-t border-slate-200 dark:border-slate-800 py-16 px-6 transition-colors duration-300">
        <div className="max-w-4xl mx-auto text-center space-y-6">

          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Need a tailored enterprise solution?
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Our engineering team will assess your current architecture and
            map out a custom implementation roadmap suited to your timeline
            and budget.
          </p>

          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-200 text-sm shadow-sm"
            >
              Schedule a Technical Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}