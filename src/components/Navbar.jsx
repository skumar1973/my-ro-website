"use client";
import { useTheme } from "next-themes";
import { Sun, Moon, Languages, Menu, X, Droplet } from "lucide-react";
import { useEffect, useState } from "react";

export default function Navbar({ lang, setLang, dict }) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Prevent hydration mismatch errors
  useEffect(() => setMounted(true), []);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/90">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center gap-2.5 cursor-pointer select-none transition hover:opacity-95 group"
            >
              {/* Custom Vector Brand Logo Shield Graphic */}
              <svg 
                className="h-9 w-9 text-blue-600 dark:text-blue-400 group-hover:scale-105 transition-transform duration-200" 
                viewBox="0 0 40 40" 
                fill="none" 
                xmlns="http://w3.org"
              >
                {/* Outer Hexagonal Shield Layer */}
                <path 
                  d="M20 2L35 10.5V27.5L20 36L5 27.5V10.5L20 2Z" 
                  className="stroke-blue-600 dark:stroke-blue-400" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                {/* Inner Hydro-Wave Vector Curves */}
                <path 
                  d="M10 21C13 18 16 23 20 21C24 19 27 24 30 21" 
                  className="stroke-blue-500 dark:stroke-blue-300" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                <path 
                  d="M12 26C15 24 17 28 20 26C23 24 25 28 28 26" 
                  className="stroke-blue-400 dark:stroke-blue-500" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                {/* Purity Droplet Core Core */}
                <path 
                  d="M20 9C20 9 15 14 15 16.5C15 19.25 17.25 21.5 20 21.5C22.75 21.5 25 19.25 25 16.5C25 14 20 9 20 9Z" 
                  className="fill-blue-600 dark:fill-blue-400"
                />
              </svg>
              
              {/* Typographic Brand Identity */}
              <div className="flex flex-col justify-center leading-none">
                <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white uppercase sm:text-xl">
                  Arya Water <span className="text-blue-600 dark:text-blue-400">Works</span>
                </span>
                <span className="text-[9px] font-bold tracking-widest text-slate-400 dark:text-slate-500 uppercase mt-0.5">
                  Delhi NCR Service
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation & Controls */}
          <div className="hidden md:flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
              <a href="/#services" className="hover:text-blue-600 dark:hover:text-blue-400">{dict.nav.services}</a>
              <a href="/#shop" className="hover:text-blue-600 dark:hover:text-blue-400">{dict.nav.shop}</a>
              <a href="/#pricing" className="hover:text-blue-600 dark:hover:text-blue-400">{dict.nav.pricing}</a>
              <a href="/#reviews" className="hover:text-blue-600 dark:hover:text-blue-400">{dict.nav.reviews}</a>
            </div>

            {/* SEPARATE Desktop Controls */}
            <div className="flex items-center gap-4 border-l border-slate-200 pl-4 dark:border-slate-700">
              
              {/* Separate Language Switcher Button */}
              <button 
                onClick={() => setLang(lang === "en" ? "hi" : "en")}
                className="flex items-center gap-1.5 rounded-md border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                <Languages size={14} />
                <span>{lang === "en" ? "हिंदी" : "English"}</span>
              </button>

              {/* Separate Dark/Light Toggler Button */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="rounded-md border border-slate-200 p-1.5 text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
                  aria-label="Toggle Theme"
                >
                  {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                </button>
              )}

              <a href="/book-service" className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700">
                {dict.nav.book_now}
              </a>
            </div>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-300"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {isOpen && (
        <div className="border-b border-slate-200 bg-white px-4 pt-2 pb-4 shadow-lg dark:border-slate-800 dark:bg-slate-900 md:hidden">
          <div className="space-y-1 pt-2 pb-3">
            <a href="/#services" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800">
              {dict.nav.services}
            </a>
            <a href="/#shop" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800">
              {dict.nav.shop}
            </a>
            <a href="/#pricing" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800">
              {dict.nav.pricing}
            </a>
            <a href="/#reviews" onClick={() => setIsOpen(false)} className="block rounded-md px-3 py-2 text-base font-medium text-slate-700 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800">
              {dict.nav.reviews}
            </a>
          </div>

          {/* SEPARATE Mobile Controls Configuration */}
          <div className="border-t border-slate-200 pt-4 pb-2 dark:border-slate-800">
            <div className="flex flex-col gap-3">
              
              {/* Separate Mobile Language Button */}
              <button
                onClick={() => { setLang(lang === "en" ? "hi" : "en"); setIsOpen(false); }}
                className="flex w-full items-center justify-between rounded-md border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-300"
              >
                <span className="flex items-center gap-2"><Languages size={16} /> Language / भाषा</span>
                <span className="font-bold text-blue-600 dark:text-blue-400">{lang === "en" ? "हिंदी" : "English"}</span>
              </button>

              {/* Separate Mobile Dark/Light Toggler Button */}
              {mounted && (
                <button
                  onClick={() => { setTheme(theme === "dark" ? "light" : "dark"); setIsOpen(false); }}
                  className="flex w-full items-center justify-between rounded-md border border-slate-200 px-4 py-2.5 text-sm font-medium text-slate-700 dark:border-slate-700 dark:text-slate-300"
                >
                  <span className="flex items-center gap-2">
                    {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                    Theme Mode
                  </span>
                  <span className="capitalize text-slate-500">{theme} Mode</span>
                </button>
              )}

              <a href="/book-service" onClick={() => setIsOpen(false)} className="mt-2 block w-full rounded-md bg-blue-600 py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-blue-700">
                {dict.nav.book_now}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
