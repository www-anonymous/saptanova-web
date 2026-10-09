import type { Metadata } from "next";
import Link from "next/link";
import { Mail, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Learn how Saptanova Technologies handles information submitted through this website.",
};

const sections = [
  {
    title: "Information you share",
    body: "When you contact us through this website, we may receive the name, email address, and message you submit. If you apply for a role by email, the details and attachments you choose to send are received through your email provider. Please avoid sending sensitive personal information unless it is needed for your enquiry.",
  },
  {
    title: "How we use it",
    body: "We use enquiry details to respond to you, understand your requirements, discuss potential work, and follow up on your request. Career information is used to review and respond to your application. We do not use the information submitted through these forms to send unrelated marketing without an appropriate basis.",
  },
  {
    title: "Service providers",
    body: "The contact form is submitted through Web3Forms, a third-party form delivery service. Information you submit may be processed by that service to deliver your message to us. Its own privacy terms also apply to its handling of that information. Career applications sent by email are handled through the email services used by you and Saptanova.",
  },
  {
    title: "Storage and preferences",
    body: "This website stores your light or dark theme choice in your browser’s local storage so it can remember your display preference. We may retain messages and application details for as long as needed to respond, maintain business records, consider an application, or meet legal obligations, and then delete or anonymize them where appropriate.",
  },
  {
    title: "Your choices",
    body: "You can choose what information to include in a message. You may contact us to ask about personal information you have submitted, request a correction or deletion where applicable, or withdraw a request. We may need to retain some information where law or legitimate business recordkeeping requires it.",
  },
  {
    title: "Security and external sites",
    body: "We take reasonable steps to protect information in our care, but no website or transmission method can be guaranteed completely secure. Our website may link to third-party sites; their privacy practices are governed by their own notices.",
  },
  {
    title: "Updates to this notice",
    body: "We may update this notice when our website, services, or applicable requirements change. The latest version will be posted on this page with its effective date.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-[#070e1e] dark:text-slate-200">
      <section className="hero-glow px-6 py-16 text-white md:py-20">
        <div className="mx-auto max-w-5xl">
          <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-300"><ShieldCheck className="h-4 w-4" /> Your information</span>
          <h1 className="mt-3 text-4xl font-extrabold md:text-5xl">Privacy Policy</h1>
          <p className="mt-4 max-w-2xl leading-relaxed text-slate-300">A clear overview of the information Saptanova Technologies receives through this website and how it is used.</p>
          <p className="mt-5 text-sm text-slate-400">Effective date: 9 October 2026</p>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-6 py-14">
        <div className="mb-8 rounded-2xl border border-blue-200 bg-blue-50 p-6 text-sm leading-relaxed text-slate-700 dark:border-blue-900/60 dark:bg-blue-950/30 dark:text-slate-300">
          This policy covers the Saptanova Technologies website. If you become a client, the project agreement and any related data-processing terms may also apply to information handled while delivering that work.
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
          <div><h2 className="font-bold">Questions about privacy?</h2><p className="mt-1 text-sm text-slate-300">Contact Saptanova Technologies in Bengaluru, India.</p></div>
          <a className="inline-flex items-center gap-2 text-sm font-semibold text-blue-300 hover:text-white" href="mailto:hello@saptanova.in"><Mail className="h-4 w-4" /> hello@saptanova.in</a>
        </div>
        <p className="mt-8 text-sm text-slate-500">See also our <Link href="/terms" className="font-semibold text-blue-600 hover:underline dark:text-blue-400">Terms &amp; Conditions</Link>.</p>
      </main>
    </div>
  );
}
