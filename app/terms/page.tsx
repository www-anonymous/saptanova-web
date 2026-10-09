import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, Scale } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms for using the Saptanova Technologies website.",
};

const sections = [
  {
    title: "Using this website",
    body: "You may use this website to learn about Saptanova Technologies, our services, and our work, and to contact us. Please use it lawfully and do not attempt to disrupt the website, gain unauthorized access, introduce malicious code, or misuse its forms or content.",
  },
  {
    title: "Website information",
    body: "We aim to keep the information on this website useful and current. It is general information about our company and services; it is not a proposal, guarantee of a particular result, or professional advice for your specific circumstances. Service scope, timing, fees, deliverables, and responsibilities are agreed separately in writing before work begins.",
  },
  {
    title: "Intellectual property",
    body: "Unless stated otherwise, website text, visual design, graphics, and Saptanova branding belong to Saptanova Technologies or are used with permission. You may view and share links to the website for personal or business reference. You must not reproduce, modify, distribute, or commercially use website materials or branding without prior written permission, except where the law allows it.",
  },
  {
    title: "Enquiries and submissions",
    body: "Sending an enquiry, resume, or project brief does not create a client, employment, agency, or other formal relationship. Please ensure information you submit is accurate and that you have the right to share any attached material. Any engagement or employment arrangement is subject to separate written terms.",
  },
  {
    title: "Third-party links and services",
    body: "The website may link to third-party websites or use third-party services to provide features such as contact form delivery. Those services are operated independently and may have their own terms and privacy notices. Saptanova does not control their content or policies.",
  },
  {
    title: "Availability and responsibility",
    body: "We may update, change, or temporarily suspend parts of this website. To the extent permitted by applicable law, the website is provided without a promise that it will always be uninterrupted, error-free, or suitable for a particular purpose. Nothing in these terms limits rights or remedies that cannot legally be excluded.",
  },
  {
    title: "Changes and applicable law",
    body: "We may revise these terms by posting an updated version here. Continued use after the updated terms are posted means the new terms apply to future use. These website terms are governed by the laws applicable in India, subject to any mandatory legal protections that apply to you. Specific client agreements may set separate terms for the services they cover.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-[#070e1e] dark:text-slate-200">
      <section className="hero-glow px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-300"><Scale className="h-4 w-4" /> Website terms</span>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Terms &amp; Conditions</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">These terms explain the basic rules for using the Saptanova Technologies website.</p>
          <p className="mt-5 text-sm text-slate-400">Effective date: 9 October 2026</p>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6 py-14">
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-sm leading-relaxed text-slate-700 dark:border-blue-900/60 dark:bg-blue-950/30 dark:text-slate-300">
          By using this website, you agree to these website terms. Separate written agreements govern any services Saptanova provides to a client.
        </div>
        <div className="space-y-5">
          {sections.map((section, index) => (
            <section key={section.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-[#111c30] md:p-8">
              <h2 className="text-xl font-bold text-slate-900 dark:text-white"><span className="mr-3 text-sm font-semibold text-blue-600 dark:text-blue-400">0{index + 1}</span>{section.title}</h2>
              <p className="mt-3 leading-7 text-slate-600 dark:text-slate-400">{section.body}</p>
            </section>
          ))}
        </div>
        <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-[#0b132b] p-6 text-white dark:bg-[#111c30] sm:flex-row sm:items-center sm:justify-between">
          <div><h2 className="font-bold">Want to discuss a project?</h2><p className="mt-1 text-sm text-slate-300">Contact our team to talk through your requirements.</p></div>
          <Link className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white" href="/contact">Contact us <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <p className="mt-8 text-sm text-slate-500">Read our <Link href="/privacy" className="font-semibold text-blue-600 hover:underline dark:text-blue-400">Privacy Policy</Link> to learn how website enquiries are handled.</p>
        <a className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:underline dark:text-blue-400" href="mailto:hello@saptanova.in"><Mail className="h-4 w-4" /> hello@saptanova.in</a>
      </main>
    </div>
  );
}
