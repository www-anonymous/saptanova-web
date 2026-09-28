
import Link from "next/link";
import { Sparkles, Mail, Phone, MapPin } from "lucide-react";
import Logo from "./Logo";
export default function Footer() {
  return (
    <footer className="bg-[#070e1e] text-slate-400 py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-slate-800">
        <div>
          <div className="mb-4">
  <Logo textColor="text-white" subTextColor="text-slate-400" />
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
            <li><Link href="/solutions" className="hover:text-white transition">Solutions</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold mb-4">Get In Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-blue-500" /> reachoutsaptanova@gmail.com
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-blue-500" /> +91 7330822048
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="w-4 h-4 text-blue-500" /> Bengaluru, India
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 pt-6 flex flex-col sm:flex-row justify-between text-xs text-slate-500 gap-4">
        <p>&copy; {new Date().getFullYear()} Saptanova Technologies. All rights reserved-2026</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}