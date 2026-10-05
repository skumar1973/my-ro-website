import { Wrench, RefreshCw, PenTool } from "lucide-react";

export default function Services({ dict }) {
  return (
    // The id="services" here binds directly to your navbar anchor link
    <section id="services" className="bg-slate-50 py-16 transition-colors duration-300 dark:bg-slate-900 sm:py-24 scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {dict.services.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {dict.services.subtitle}
          </p>
        </div>

        {/* Responsive Grid: 1 column on mobile, scales to 3 columns on desktop */}
        <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          
          {/* Service 1: Repair */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white dark:bg-blue-500">
                <Wrench size={24} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                {dict.services.repair.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {dict.services.repair.desc}
              </p>
            </div>
          </div>

          {/* Service 2: Filter */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white dark:bg-blue-500">
                <RefreshCw size={24} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                {dict.services.filter.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {dict.services.filter.desc}
              </p>
            </div>
          </div>

          {/* Service 3: Installation */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950 sm:col-span-2 lg:col-span-1">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white dark:bg-blue-500">
                <PenTool size={24} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">
                {dict.services.install.title}
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                {dict.services.install.desc}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
