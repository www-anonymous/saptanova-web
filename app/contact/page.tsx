"use client";

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  const [result, setResult] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setResult("Sending...");

    const formData = new FormData(e.currentTarget);
    // Replace with your Web3Forms access key from web3forms.com
    formData.append("access_key", "639f234a-9ab9-4016-852f-ba075743317f");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setResult("Thank you! Your message has been sent successfully.");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setResult("Failed to send message. Please check your connection.");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column: Get in Touch Info */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-8">
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900">Get in Touch</h2>
              <p className="mt-3 text-slate-600 text-base leading-relaxed">
                Have a project in mind, a question, or just want to say hello? We&apos;d love to hear from you.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</div>
                  <a 
                    href="mailto:tharunofficial.edu@gmail.com" 
                    className="font-medium text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    hello@saptanova.in
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone</div>
                  <a 
                    href="tel:+917330822048" 
                    className="font-medium text-slate-800 hover:text-blue-600 transition-colors"
                  >
                    +91-7330822048
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Location</div>
                  <div className="font-medium text-slate-800">Bengaluru, India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Active Submission Form */}
          <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none text-slate-800 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Your Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none text-slate-800 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  required
                  placeholder="Tell us about your project or inquiry..."
                  className="w-full px-4 py-2.5 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none text-slate-800 transition"
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition duration-200 disabled:opacity-50"
              >
                {status === "loading" ? "Sending Message..." : "Send Message"}
              </button>

              {result && (
                <div className={`p-4 rounded-xl text-sm font-medium ${
                  status === "success" 
                    ? "bg-green-50 text-green-700 border border-green-200" 
                    : "bg-red-50 text-red-600 border border-red-200"
                }`}>
                  {result}
                </div>
              )}
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}