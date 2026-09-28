"use client";

import { 
  HeartPulse, 
  Landmark, 
  ShoppingCart, 
  Truck, 
  GraduationCap, 
  Building2, 
  ArrowRight, 
  CheckCircle2 
} from "lucide-react";
import Link from "next/link";

const industries = [
  {
    title: "Healthcare & Life Sciences",
    category: "HealthTech",
    icon: HeartPulse,
    accent: "from-blue-600 to-cyan-500",
    description:
      "Transforming patient care with HIPAA-compliant digital workflows, telemedicine platforms, and AI-assisted clinical data analytics.",
    solutions: [
      "EHR/EMR integration & interoperability",
      "Telehealth & remote patient monitoring",
      "AI diagnostics and predictive medical analytics",
      "Secure patient portal mobile applications",
    ],
    impact: "99.9% uptime for critical medical data workflows",
  },
  {
    title: "Banking, Financial Services & Insurance",
    category: "FinTech",
    icon: Landmark,
    accent: "from-indigo-600 to-blue-500",
    description:
      "Modernizing financial ecosystems with secure payment gateways, automated compliance tracking, and fraud detection algorithms.",
    solutions: [
      "Custom neo-banking & micro-lending portals",
      "Real-time fraud prevention & AML monitoring",
      "PCI-DSS compliant payment gateway integrations",
      "Automated ledger & reporting dashboards",
    ],
    impact: "Sub-second transaction processing speeds",
  },
  {
    title: "Retail & E-Commerce",
    category: "Consumer Tech",
    icon: ShoppingCart,
    accent: "from-violet-600 to-indigo-500",
    description:
      "Delivering high-conversion omnichannel commerce experiences powered by personalized recommendations and inventory intelligence.",
    solutions: [
      "Headless storefronts (Next.js & Shopify/Medusa)",
      "Dynamic pricing & personalized AI recommendations",
      "Unified multi-channel inventory management",
      "Optimized 1-click mobile checkout funnels",
    ],
    impact: "40%+ average increase in mobile checkout conversions",
  },
  {
    title: "Logistics & Supply Chain",
    category: "Operations",
    icon: Truck,
    accent: "from-sky-600 to-blue-600",
    description:
      "Empowering distributors and fleet managers with end-to-end route optimization, telematics, and automated warehouse management.",
    solutions: [
      "Real-time GPS tracking & dynamic fleet routing",
      "Smart warehouse inventory automation",
      "Vendor and carrier self-service portals",
      "Supply chain bottleneck prediction models",
    ],
    impact: "Up to 25% reduction in last-mile transit delays",
  },
  {
    title: "Education & EdTech",
    category: "Learning",
    icon: GraduationCap,
    accent: "from-blue-500 to-teal-500",
    description:
      "Building engaging virtual classrooms, adaptive learning management systems (LMS), and gamified student assessment platforms.",
    solutions: [
      "Scalable LMS & multi-tenant institutional portals",
      "Interactive video streaming & assessment engines",
      "AI study assistants & personalized curricula",
      "Student progress and engagement tracking",
    ],
    impact: "Seamlessly scales to 100k+ concurrent learners",
  },
  {
    title: "Real Estate & PropTech",
    category: "Property",
    icon: Building2,
    accent: "from-emerald-600 to-teal-600",
    description:
      "Digitizing commercial and residential property management with virtual tours, lease automation, and tenant communication portals.",
    solutions: [
      "Interactive 3D listing & digital tour viewers",
      "Automated digital leasing & KYC verification",
      "Tenant rent collection and maintenance desks",
      "Facility energy & smart building IoT hubs",
    ],
    impact: "60% faster lease execution turnaround times",
  },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col w-full bg-slate-50 min-h-screen">
      {/* Hero Header */}
      <section className="bg-slate-900 text-white py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400">
            Industries We Empower
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3 tracking-tight">
            Tailored Engineering for Industry Leaders
          </h1>
          <p className="mt-4 text-slate-300 max-w-2xl text-base md:text-lg leading-relaxed">
            Every sector faces distinct challenges and regulations. We design customized,
            compliant, and future-proof digital architectures built specifically for your domain.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16 max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.title}
                className="bg-white rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-8">
                  {/* Top Bar with Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 bg-slate-100 px-3 py-1 rounded-full">
                      {ind.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-3 leading-relaxed">
                    {ind.description}
                  </p>

                  {/* Key Capabilities List */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                      Core Solutions
                    </p>
                    <ul className="space-y-2">
                      {ind.solutions.map((item) => (
                        <li key={item} className="flex items-start text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 mr-2 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Impact Banner & Link */}
                <div className="bg-slate-50 px-8 py-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="text-xs font-medium text-slate-500">
                    <strong className="text-slate-800">Impact:</strong> {ind.impact}
                  </div>
                  <Link
                    href="/contact"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-xs flex items-center gap-1 shrink-0 ml-4 group-hover:translate-x-1 transition-transform"
                  >
                    Discuss <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action Bar */}
      <section className="bg-white border-t border-slate-200 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">
            Don&apos;t see your industry listed?
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Our modular engineering frameworks and cloud-native practices adapt to any complex
            business workflow. Let&apos;s build a custom solution for your specific requirements.
          </p>
          <div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition duration-200 text-sm shadow-sm"
            >
              Consult with Our Engineers <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}