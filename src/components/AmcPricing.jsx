import { Check } from "lucide-react";
import { BUSINESS_PHONE } from "@/config";

export default function AmcPricing({ dict }) {
  return (
    <section id="pricing" className="bg-slate-50 py-16 transition-colors duration-300 dark:bg-slate-900 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {dict.amc.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {dict.amc.subtitle}
          </p>
        </div>

        {/* Pricing Layout Grid */}
        <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-8 md:max-w-4xl md:grid-cols-2">
          
          {/* Card 1: Basic Plan */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{dict.amc.plans.basic.name}</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{dict.amc.plans.basic.desc}</p>
              <p className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">{dict.amc.plans.basic.price}</span>
                <span className="ml-1 text-sm font-semibold text-slate-500 dark:text-slate-400">/year</span>
              </p>
              
              <ul className="mt-8 space-y-4">
                {dict.amc.plans.basic.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                    <span className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                      <Check size={14} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={`https://wa.me/${BUSINESS_PHONE}?text=Hi%20Arya%20Water%20Works,%20I%20need%20to%20order%20${dict.amc.plans.basic.name}%20AMC%20plan.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full rounded-lg border border-blue-600 px-4 py-3 text-center text-sm font-semibold text-blue-600 transition hover:bg-blue-50 dark:border-blue-400 dark:text-blue-400 dark:hover:bg-slate-900"
            >
              {dict.amc.cta_buy}
            </a>
          </div>

          {/* Card 2: Premium Plan (With "Most Popular" Ribbon) */}
          <div className="relative flex flex-col justify-between rounded-2xl border-2 border-blue-600 bg-white p-8 shadow-xl transition-colors duration-300 dark:border-blue-400 dark:bg-slate-950">
            <span className="absolute top-0 right-6 -translate-y-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white dark:bg-blue-400 dark:text-slate-950">
              {dict.amc.recommended}
            </span>
            
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{dict.amc.plans.premium.name}</h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{dict.amc.plans.premium.desc}</p>
              <p className="mt-6 flex items-baseline">
                <span className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">{dict.amc.plans.premium.price}</span>
                <span className="ml-1 text-sm font-semibold text-slate-500 dark:text-slate-400">/year</span>
              </p>
              
              <ul className="mt-8 space-y-4">
                {dict.amc.plans.premium.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-sm text-slate-600 dark:text-slate-300">
                    <span className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white dark:bg-blue-400 dark:text-slate-950">
                      <Check size={14} />
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href={`https://wa.me/${BUSINESS_PHONE}?text=Hi%20Arya%20Water%20Works,%20I%20need%20to%20order%20${dict.amc.plans.premium.name}%20AMC%20plan.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block w-full rounded-lg bg-blue-600 px-4 py-3 text-center text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition dark:bg-blue-400 dark:text-slate-950 dark:hover:bg-blue-500"
            >
              {dict.amc.cta_buy}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
