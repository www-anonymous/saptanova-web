import Link from "next/link";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070e1e] text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2 text-white font-bold text-lg mb-4">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <span>saptanova</span>
          </div>
          <p className="text-sm leading-relaxed max-w-sm">
            Building What&apos;s Next. Crafting high-impact digital solutions for companies worldwide.
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-white transition">Services</Link></li>
            <li><Link href="/work" className="hover:text-white transition">Our Work</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-500" /> hello@saptanova.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-blue-500" /> +91 98765 43210
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-blue-500" /> Bengaluru, India
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col sm:flex-row justify-between text-xs text-slate-500 gap-4">
        <p>&copy; {new Date().getFullYear()} Saptanova Technologies. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}