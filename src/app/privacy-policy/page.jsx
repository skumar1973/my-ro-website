"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import en from "@/dictionaries/en.json";
import hi from "@/dictionaries/hi.json";
import { ShieldCheck } from "lucide-react";

export default function PrivacyPolicy() {
  const [lang, setLang] = useState("en");
  const dict = lang === "en" ? en : hi;

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-50">
      {/* Retain Navbar Layout consistency */}
      <Navbar lang={lang} setLang={setLang} dict={dict} />

      {/* Main Structural Content View */}
      <main className="flex-grow mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:py-16">
        
        {/* Header Title Space */}
        <div className="border-b border-slate-200 pb-6 dark:border-slate-800">
          <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
            <ShieldCheck size={28} />
            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              {dict.privacy.title}
            </h1>
          </div>
          <p className="mt-2 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
            {dict.privacy.updated}
          </p>
        </div>

        {/* Content Flow Nodes */}
        <div className="mt-8 space-y-8 text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300">
          
          <p>{dict.privacy.intro}</p>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white">
              {dict.privacy.sec1_title}
            </h2>
            <p>{dict.privacy.sec1_desc}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white">
              {dict.privacy.sec2_title}
            </h2>
            <p>{dict.privacy.sec2_desc}</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-bold text-slate-950 dark:text-white">
              {dict.privacy.sec3_title}
            </h2>
            <p>{dict.privacy.sec3_desc}</p>
          </div>

          {/* Contact Grievance Box */}
          <div className="rounded-xl border border-blue-100 bg-blue-50/40 p-5 dark:border-slate-800 dark:bg-slate-900/40">
            <p className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
              {dict.privacy.contact}
            </p>
          </div>

        </div>
      </main>

      {/* Footer Wrapper */}
      <Footer dict={dict} />
    </div>
  );
}
