"use client"
import { ExternalLink } from "lucide-react";
import VisitorCounter from "@/components/VisitorCounter";

export default function Footer({ dict }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-600 transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        
        {/* Main 4-Column Layout Responsive Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Column 1: Brand Info & Social Media Profiles */}
          <div className="space-y-4">
            <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white uppercase">
              Arya Water <span className="text-blue-600 dark:text-blue-400">Works</span>
            </span>
            <p className="text-xs sm:text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              {dict.footer.desc}
            </p>
            
            {/* 🟢 SOCIAL MEDIA LINKS (Completely Fixed with Inline SVGs) */}
            <div className="flex gap-4 pt-2">
              
              {/* Facebook */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition" aria-label="Facebook">
                <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-600 dark:hover:text-pink-400 transition" aria-label="Instagram">
                <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              
              {/* Twitter / X */}
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-500 dark:hover:text-sky-400 transition" aria-label="Twitter">
                <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 dark:hover:text-blue-500 transition" aria-label="LinkedIn">
                <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              
            </div>
          </div>

          {/* Column 2: In the Middle Quick Links Navigation */}
            <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
                {dict.footer.quick_links}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm font-medium">
                <li><a href="/#services" className="hover:text-blue-600 dark:hover:text-blue-400 transition">{dict.nav.services}</a></li>
                <li><a href="/#shop" className="hover:text-blue-600 dark:hover:text-blue-400 transition">{dict.shop.title}</a></li>
                <li><a href="/#pricing" className="hover:text-blue-600 dark:hover:text-blue-400 transition">{dict.nav.pricing}</a></li>
                <li><a href="/#reviews" className="hover:text-blue-600 dark:hover:text-blue-400 transition">{dict.reviews.title}</a></li>
            </ul>
            </div>

          {/* Column 3: Legal Terms Documentation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {dict.footer.legal}
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm font-medium">
              <li><a href="/privacy-policy" className="hover:text-blue-600 dark:hover:text-blue-400 transition">{dict.footer.privacy}</a></li>
              <li><a href="/terms-and-conditions" className="hover:text-blue-600 dark:hover:text-blue-400 transition">{dict.footer.terms}</a></li>
            </ul>
          </div>

          {/* Column 4: Corporate Registration Details */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              {dict.footer.corporate}
            </h4>
            <div className="mt-4 space-y-2 text-xs font-semibold tracking-wide text-slate-500 dark:text-slate-400">
              <p className="rounded bg-slate-200/50 px-2 py-1.5 dark:bg-slate-900/50">{dict.footer.cin}</p>
              <p className="rounded bg-slate-200/50 px-2 py-1.5 dark:bg-slate-900/50">{dict.footer.gstin}</p>
              <p className="rounded bg-slate-200/50 px-2 py-1.5 dark:bg-slate-900/50">{dict.footer.officeaddress}</p>
              <p className="rounded bg-slate-200/50 px-2 py-1.5 dark:bg-slate-900/50">{dict.footer.phone}</p>
              <p className="rounded bg-slate-200/50 px-2 py-1.5 dark:bg-slate-900/50">{dict.footer.email}</p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: License and Developer Credit Anchor */}
        <div className="mt-12 border-t border-slate-200 pt-8 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-400 dark:text-slate-500">
          <p>© {currentYear} Arya Water Works {dict.footer.rights}</p>
          <span>{dict.footer.visitors}: <VisitorCounter /></span> 
          <div className="flex items-center gap-1">
            <span>{dict.footer.developed_by}</span>
            <a 
              href="https://engineering-services-site.onrender.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-0.5 font-bold text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 transition group"
            >
              Northstar Engineering 
              <ExternalLink size={10} className="opacity-70 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
