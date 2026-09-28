"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full bg-white">
      <section className="hero-glow text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-400">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-3">Let&apos;s Build Something Great Together.</h1>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Get in Touch</h2>
              <p className="text-slate-500 text-sm mt-2">Have a project in mind, a question, or just want to say hello? We&apos;d love to hear from you.</p>
            </div>

            <div className="flex flex-col gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Email</div>
                  <div className="font-medium text-slate-800">tharunofficial.edu@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Phone</div>
                  <div className="font-medium text-slate-800">+91 7330822048</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="font-medium text-slate-800">Bengaluru, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 bg-slate-50/70 p-8 sm:p-10 rounded-3xl border border-slate-200">
            {submitted ? (
              <div className="text-center py-16">
                <h3 className="text-xl font-bold text-slate-900">Thank you for reaching out!</h3>
                <p className="text-slate-500 text-sm mt-2">We received your message and will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-semibold text-slate-700">Name *</label>
                  <input required type="text" placeholder="Your name" className="w-full mt-1.5 px-4 py-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-blue-600 bg-white" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">Email *</label>
                  <input required type="email" placeholder="your@email.com" className="w-full mt-1.5 px-4 py-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-blue-600 bg-white" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">Subject *</label>
                  <input required type="text" placeholder="Select or enter subject" className="w-full mt-1.5 px-4 py-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-blue-600 bg-white" />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700">Message *</label>
                  <textarea required rows={4} placeholder="Tell us what you're looking for..." className="w-full mt-1.5 px-4 py-3 rounded-xl border border-slate-300 text-sm outline-none focus:border-blue-600 bg-white" />
                </div>
                <button type="submit" className="mt-2 w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}