"use client";

import { Rocket, Building2, Activity, GraduationCap, ShoppingBag, Briefcase } from "lucide-react";

const indList = [
  { icon: Rocket, title: "Startups", desc: "Build MVP, scale product development, and launch with speed." },
  { icon: Building2, title: "Small & Medium Businesses", desc: "Automate manual tasks and build tools that spur organic business growth." },
  { icon: Activity, title: "Healthcare", desc: "Compliant, highly secure systems for patient management and data privacy." },
  { icon: GraduationCap, title: "Education", desc: "Interactive digital learning platforms and educational portals." },
  { icon: ShoppingBag, title: "Retail", desc: "Omnichannel inventory sync, seamless checkout flows, and analytics." },
  { icon: Briefcase, title: "Professional Services", desc: "Secure document portals, billing software, and custom dashboards." },
];

export default function IndustriesPage() {
  return (
    <div className="flex flex-col w-full bg-white">
      <section className="hero-glow text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400">Industries</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">Different Industries. Same Commitment.</h1>
          <p className="text-slate-300 mt-3 max-w-xl text-sm sm:text-base">
            We adapt our tech expertise to the unique challenges of your market.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {indList.map((ind) => {
            const Icon = ind.icon;
            return (
              <div key={ind.title} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg text-slate-900">{ind.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}