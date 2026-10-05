"use client";

import { JSX, useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun } from "lucide-react";

type LogoComponent = (props?: {
  textColor?: string;
  subTextColor?: string;
}) => JSX.Element;

let Logo: LogoComponent;

try {
  Logo = require("./Logo").default;
} catch {
  Logo = ({
  textColor = "text-slate-900 dark:text-white",
}: {
  textColor?: string;
}) => (
  <Link
    href="/"
    className={`text-xl font-bold tracking-tight ${textColor}`}
  >
    Saptanova
  </Link>
);
}

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us & Founders", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Industries", href: "/industries" },
  { name: "Our Solutions", href: "/solutions" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("saptanova-theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Toggle theme
  const toggleDarkMode = () => {
    const newMode = !darkMode;

    setDarkMode(newMode);

    if (newMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("saptanova-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("saptanova-theme", "light");
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-[#070e1e]/95 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Brand Logo */}
        <Logo
  textColor="text-slate-900 dark:text-white"
  subTextColor="text-slate-500 dark:text-slate-400"
/>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            type="button"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            title={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            className="w-10 h-10 rounded-full flex items-center justify-center
              text-slate-600 dark:text-slate-300
              bg-slate-100 dark:bg-slate-800
              hover:bg-slate-200 dark:hover:bg-slate-700
              hover:text-blue-600 dark:hover:text-blue-400
              transition-all duration-200"
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Contact Button */}
          <Link
            href="/contact"
            className="bg-slate-900 dark:bg-blue-600
              hover:bg-slate-800 dark:hover:bg-blue-500
              text-white text-sm font-medium px-5 py-2.5
              rounded-full transition-all duration-200"
          >
            Let&apos;s Talk &rarr;
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="lg:hidden flex items-center gap-2">

          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleDarkMode}
            type="button"
            aria-label={
              darkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            className="w-10 h-10 rounded-full flex items-center justify-center
              text-slate-600 dark:text-slate-300
              bg-slate-100 dark:bg-slate-800
              hover:bg-slate-200 dark:hover:bg-slate-700
              transition-all duration-200"
          >
            {darkMode ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-slate-600 dark:text-slate-300
              hover:text-slate-900 dark:hover:text-white
              focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden
              bg-white dark:bg-[#070e1e]
              border-b border-slate-100 dark:border-slate-800
              px-6 py-4"
          >
            <div className="flex flex-col gap-4">

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium
                    text-slate-700 dark:text-slate-300
                    hover:text-blue-600 dark:hover:text-blue-400
                    transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-center
                  bg-slate-900 dark:bg-blue-600
                  hover:bg-slate-800 dark:hover:bg-blue-500
                  text-white text-sm font-medium
                  py-2.5 rounded-full"
              >
                Let&apos;s Talk &rarr;
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
