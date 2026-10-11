import Link from 'next/link';
import { ShieldCheck, MapPin, CheckCircle, Clock } from 'lucide-react';
import { BUSINESS_PHONE } from "@/config";
// 1. Pre-defined dataset of societies you want to target in Delhi/NCR
const SOCIETIES_DATA = {
  "gaur-city-noida": {
    name: "Gaur City 2",
    location: "Noida Extension (Greater Noida West)",
    tdsRange: "1200 - 1800 PPM (High Hardness)",
    recommendedRO: "100 GPD Heavy-Duty Custom Alkaline RO",
    popularPlan: "Premium Shield AMC"
  },
  "dlf-phase-5-gurgaon": {
    name: "DLF Phase 5",
    location: "Golf Course Road, Gurgaon",
    tdsRange: "800 - 1400 PPM (Medium-High Hardness)",
    recommendedRO: "Havells Mirak / Custom RO with Copper Tech",
    popularPlan: "Premium Shield AMC"
  },
  "ats-pristine-noida": {
    name: "ATS Pristine",
    location: "Sector 150, Noida",
    tdsRange: "1400 - 2000 PPM (Very High Borewell Water)",
    recommendedRO: "100 GPD Multi-Stage RO + Water Softener Combo",
    popularPlan: "Premium Shield AMC"
  },
  "subham-apartments-dwarka": {
    name: "Subham Apartments",
    location: "Sector 22, Dwarka, Delhi",
    tdsRange: "400 - 700 PPM (Municipal + Borewell Mix)",
    recommendedRO: "Eco Custom RO + UV System",
    popularPlan: "Basic Care Plan"
  },
  "royal-nest-techzone-4": {
    name: "Royal Nest",
    location: "Sector Techzone 4, Greater Noida. West",
    tdsRange: "400 - 700 PPM (Municipal + Borewell Mix)",
    recommendedRO: "Eco Custom RO + UV System",
    popularPlan: "Basic Care Plan"
  },
  "apex-golf-avenue": {
    name: "Apex Golf Avenue",
    location: "Sector Techzone 4, Greater Noida. West",
    tdsRange: "400 - 700 PPM (Municipal + Borewell Mix)",
    recommendedRO: "Eco Custom RO + UV System",
    popularPlan: "Basic Care Plan"
  }
};

// 2. This tells Next.js exactly which static pages to generate during compilation
export async function generateStaticParams() {
  return Object.keys(SOCIETIES_DATA).map((slug) => ({
    slug: slug,
  }));
}

// 3. Dynamic Metadata for Hyper-Local SEO optimization
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const society = SOCIETIES_DATA[slug];
  
  if (!society) return { title: "RO Service | PureAqua NCR" };

  return {
    title: `Best RO Service & Repair in ${society.name}, ${society.location}`,
    description: `Professional residential RO installation, filter replacement, and AMC plans tailored for ${society.name}. Average water TDS is ${society.tdsRange}. Same-day service.`,
  };
}

// 4. The actual Page UI layout (Responsive & Light/Dark Theme ready)
export default async function SocietyPage({ params }) {
  const { slug } = await params;
  const society = SOCIETIES_DATA[slug];

  // Fallback UI if a society slug does not exist
  if (!society) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-6 bg-white dark:bg-slate-950">
        <h1 className="text-2xl font-bold">Society Not Found</h1>
        <Link href="/" className="mt-4 text-blue-600 dark:text-blue-400 underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      
      {/* Hero Header Block Specific to the Society */}
      <section className="bg-white border-b border-slate-200 py-16 dark:bg-slate-900 dark:border-slate-800 md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            <MapPin size={12} /> {society.location}
          </span>
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
            RO Service & Repair in <br />
            <span className="text-blue-600 dark:text-blue-400">{society.name}</span>
          </h1>
          <p className="mt-6 text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Get 2-hour technician deployment right to your tower block. We specialize in configuring water purifiers for your society's specific groundwater conditions.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a 
              href={`https://wa.me/${BUSINESS_PHONE}?text=Hi%20Arya%20Water%20Works,I%20need%20RO%20Service%20at%20${encodeURIComponent(society.name)}%20society.`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-emerald-600 px-8 py-3.5 text-center text-sm font-semibold text-white shadow-md hover:bg-emerald-700 transition"
            >
              💬 WhatsApp Book Technician
            </a>
          </div>
        </div>
      </section>

      {/* Local Water Diagnostics Insight Section */}
      <section className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <h2 className="text-2xl font-bold text-slate-950 dark:text-white text-center">
          Water Quality Overview for {society.name}
        </h2>
        
        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
          
          {/* Card 1 */}
          <div className="rounded-xl bg-white border border-slate-200 p-6 dark:bg-slate-900 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Average Tap TDS</span>
            <p className="mt-2 text-xl font-bold text-blue-600 dark:text-blue-400">{society.tdsRange}</p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Requires multi-stage reverse osmosis filtration to reach pure drinking levels.</p>
          </div>

          {/* Card 2 */}
          <div className="rounded-xl bg-white border border-slate-200 p-6 dark:bg-slate-900 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Recommended Setup</span>
            <p className="mt-2 text-sm font-bold text-slate-900 dark:text-white">{society.recommendedRO}</p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Protects internal filters from heavy clogging and maintains long-term water minerals.</p>
          </div>

          {/* Card 3 */}
          <div className="rounded-xl bg-white border border-slate-200 p-6 dark:bg-slate-900 dark:border-slate-800">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Most Popular Service</span>
            <p className="mt-2 text-sm font-bold text-slate-900 dark:text-white">{society.popularPlan}</p>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Includes complete replacement cover for heavy metal damage due to hard water.</p>
          </div>

        </div>
      </section>

      {/* Quick Society Group Discount Callout */}
      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-center text-white shadow-xl dark:from-blue-900/60 dark:to-indigo-950/60 dark:border dark:border-slate-800">
          <h3 className="text-xl font-bold sm:text-2xl">⚡ RWA & Neighbors Group Offer</h3>
          <p className="mt-3 text-sm text-blue-100 max-w-xl mx-auto sm:text-base">
            Club your maintenance requests with 3 or more neighbors in {society.name} to unlock an instant **15% discount** on your filter replacements or yearly AMC plan fees!
          </p>
          <div className="mt-6">
            <a 
              href={`https://wa.me/${BUSINESS_PHONE}?text=Hi%20Arya%20Water%20Works,We%20want%20to%20do%20RO%20Service%20at%20${encodeURIComponent(society.name)}%20in%20group%20and%20claim%20discount.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-md bg-white px-6 py-2.5 text-sm font-semibold text-blue-700 hover:bg-blue-50 transition"
            >
              Claim Group Discount
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
