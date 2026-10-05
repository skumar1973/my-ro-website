"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import en from "@/dictionaries/en.json";
import hi from "@/dictionaries/hi.json";
import { Scale } from "lucide-react";

export default function TermsAndConditions() {
  const [lang, setLang] = useState("en");
  const dict = lang === "en" ? en : hi;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
      {/* Navbar instance passing functional parameters */}
      <Navbar lang={lang} setLang={setLang} dict={dict} />

      {/* Primary Legal Paragraph Container Layout */}
      <main className="flex-grow mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        
        {/* Title Bar Block */}
        <div className="border-b border-slate-200 pb-6 dark:border-slate-800">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <Scale size={28} />
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              {dict.terms.title}
            </h1>
          </div>
          <p className="mt-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            {dict.terms.updated}
          </p>
        </div>

        {/* Dynamic Multi-lingual Legal Text Flow */}
        <div className="mt-8 space-y-8 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
          
          <p>{dict.terms.intro}</p>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white">
              {dict.terms.sec1_title}
            </h2>
            <p>{dict.terms.sec1_desc}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white">
              {dict.terms.sec2_title}
            </h2>
            <p>{dict.terms.sec2_desc}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white">
              {dict.terms.sec3_title}
            </h2>
            <p>{dict.terms.sec3_desc}</p>
          </div>

          {/* Operational Contact Box Layout */}
          <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-5 dark:border-slate-800 dark:bg-slate-900/40">
            <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
              {dict.terms.contact}
            </p>
          </div>

        </div>
      </main>

      {/* Footer rendering structural corporate strings */}
      <Footer dict={dict} />
    </div>
  );
}
