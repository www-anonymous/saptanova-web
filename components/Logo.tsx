import Link from "next/link";

interface LogoProps {
  textColor?: string;
  subTextColor?: string;
}

export default function Logo({ 
  textColor = "text-slate-900", 
  subTextColor = "text-slate-500" 
}: LogoProps) {
  return (
    <Link href="/" className="inline-flex items-center gap-2.5 group">
      {/* Dual-Star Emblem */}
      <svg
        viewBox="0 0 100 100"
        className="w-8 h-8 shrink-0 text-[#0052cc] group-hover:scale-105 transition-transform"
        fill="currentColor"
      >
        <path d="M50 0 C49 32 32 49 0 50 C32 51 49 68 50 100 C51 68 68 51 100 50 C68 49 51 32 50 0 Z" />
        <path d="M82 12 C81 20 74 24 68 25 C74 26 81 30 82 38 C83 30 90 26 96 25 C90 24 83 20 82 12 Z" />
      </svg>

      {/* Brand Typography */}
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-bold tracking-tight ${textColor}`}>
          saptanova
        </span>
        <span className={`text-[9px] font-semibold tracking-[0.2em] uppercase ${subTextColor}`}>
          Technologies
        </span>
      </div>
    </Link>
  );
}