
"use client";

import { useFitLog } from "@/app/Context/FitlogContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { savedExercises, todaysPlan } = useFitLog();

  const pathname = usePathname();

  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  const isActive = (path: string) => {
    return pathname === path;
  };

  const navLinks = [
    {
      name: "Workouts",
      href: "/",
    },
    {
      name: "My Plan",
      href: "/myplan",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0c0d10]/95 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex min-h-[76px] items-center justify-between">

          
          <div className="flex items-center">
            <Link
              href="/"
              className="group"
              onClick={() => setMobileMenuOpen(false)}
            >
              <h3 className="text-3xl font-black tracking-tight text-white transition-transform duration-200 group-hover:scale-105 md:text-4xl">
                FIT
                <span className="text-[#ccff00]">LOG</span>
              </h3>
            </Link>
          </div>

          
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-2 rounded-full p-1.5">
              {navLinks.map((link) => {
                const active = isActive(link.href);

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`
                        block rounded-full px-6 py-2.5 text-sm font-semibold
                        transition-all duration-200
                        ${
                          active
                            ? "bg-[#ccff00] text-black shadow-[0_0_20px_rgba(204,255,0,0.15)]"
                            : "text-gray-300 hover:bg-white/10 hover:text-white"
                        }
                      `}
                    >
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          
          <div className="hidden items-center gap-3 sm:flex">

            {/* PLAN */}
            <Link
              href="/myplan"
              className="group flex items-center gap-2 rounded-full transition-transform duration-200 hover:scale-105"
            >
              <span className="text-sm font-bold text-gray-300 transition-colors group-hover:text-white">
                Plan
              </span>

              <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#ccff00] px-2 text-sm font-black text-black">
                {mounted ? todaysPlan.length : 0}
              </span>
            </Link>

            {/* SAVED */}
            <Link
              href="/myplan"
              className="group flex items-center gap-2 rounded-full transition-transform duration-200 hover:scale-105"
            >
              <span className="text-sm font-bold text-gray-300 transition-colors group-hover:text-white">
                Saved
              </span>

              <span className="flex h-8 min-w-8 items-center justify-center rounded-full border border-gray-500 px-2 text-sm font-bold text-white transition-colors duration-200 group-hover:border-[#ccff00] group-hover:text-[#ccff00]">
                {mounted ? savedExercises.length : 0}
              </span>
            </Link>
          </div>

          
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {mobileMenuOpen ? (
              /* CLOSE ICON */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              /* MENU ICON */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        
        {mobileMenuOpen && (
          <div className="border-t border-white/10 py-4 lg:hidden">

            {/* MOBILE NAV LINKS */}
            <nav>
              <ul className="space-y-2">
                {navLinks.map((link) => {
                  const active = isActive(link.href);

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`
                          block rounded-xl px-4 py-3 text-sm font-semibold
                          transition-all duration-200
                          ${
                            active
                              ? "bg-[#ccff00] text-black"
                              : "text-gray-300 hover:bg-white/10 hover:text-white"
                          }
                        `}
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

         
            <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-4">

              {/* MOBILE PLAN */}
              <Link
                href="/myplan"
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-1 items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:bg-white/10"
              >
                <span className="text-sm font-bold text-gray-300">
                  Plan
                </span>

                <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-[#ccff00] px-2 text-sm font-black text-black">
                  {mounted ? todaysPlan.length : 0}
                </span>
              </Link>

              {/* MOBILE SAVED */}
              <Link
                href="/myplan"
                onClick={() => setMobileMenuOpen(false)}
                className="flex flex-1 items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 transition-colors hover:bg-white/10"
              >
                <span className="text-sm font-bold text-gray-300">
                  Saved
                </span>

                <span className="flex h-8 min-w-8 items-center justify-center rounded-full border border-gray-500 px-2 text-sm font-bold text-white">
                  {mounted ? savedExercises.length : 0}
                </span>
              </Link>

            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
