"use client";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function Faq({ dict }) {
  // Manage which question card is currently expanded on the client side
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  const faqItems = [
    { q: dict.faq.q1, a: dict.faq.a1 },
    { q: dict.faq.q2, a: dict.faq.a2 },
    { q: dict.faq.q3, a: dict.faq.a3 },
    { q: dict.faq.q4, a: dict.faq.a4 },
  ];

  return (
    <section id="faq" className="bg-slate-50 py-16 transition-colors duration-300 dark:bg-slate-900 sm:py-24 scroll-mt-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {dict.faq.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-400">
            {dict.faq.subtitle}
          </p>
        </div>

        {/* Accordion Stack Box Wrapper */}
        <div className="mt-12 space-y-4">
          {faqItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx}
                className="rounded-xl border border-slate-200 bg-white shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 overflow-hidden"
              >
                {/* Clickable Header Accordion Element */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left text-sm sm:text-base font-bold text-slate-900 dark:text-white focus:outline-none transition hover:bg-slate-50/50 dark:hover:bg-slate-900/30"
                >
                  <span className="flex items-center gap-2.5">
                    <HelpCircle size={18} className="text-blue-600 dark:text-blue-400 flex-shrink-0" />
                    {item.q}
                  </span>
                  <ChevronDown 
                    size={18} 
                    className={`text-slate-400 transition-transform duration-200 flex-shrink-0 ${isOpen ? "rotate-180 text-blue-600 dark:text-blue-400" : ""}`} 
                  />
                </button>

                {/* Animated Body Paragraph Expand Collapse Box */}
                <div 
                  className={`transition-all duration-300 ease-in-out border-slate-200 dark:border-slate-800 ${
                    isOpen ? "max-h-[500px] border-t p-5 opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <p className="text-xs sm:text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
