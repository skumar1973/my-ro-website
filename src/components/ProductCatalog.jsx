import { Shield, Sparkles, ShoppingBag } from "lucide-react";
import { BUSINESS_PHONE } from "@/config";

export default function ProductCatalog({ dict }) {
  return (
    <section id="shop" className="bg-white py-16 transition-colors duration-300 dark:bg-slate-950 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Component Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {dict.shop.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {dict.shop.subtitle}
          </p>
        </div>

        {/* 2-Column Responsive Grid Setup */}
        <div className="mx-auto mt-12 grid max-w-md grid-cols-1 gap-8 md:max-w-5xl md:grid-cols-2">
          
          {/* Model 1: Eco Budget Model */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/40 sm:p-8">
            <div>
              {/* Product Visual Mock & Tagging */}
              <div className="relative flex h-48 w-full items-center justify-center rounded-xl bg-blue-100/60 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
                <ShoppingBag size={48} className="animate-pulse" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-white px-2.5 py-1 text-xs font-bold text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-200">
                  <Shield size={12} className="text-emerald-500" /> {dict.shop.badge_warranty}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                {dict.shop.models.eco.name}
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {dict.shop.models.eco.desc}
              </p>

              {/* Price Stack Architecture */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  {dict.shop.models.eco.price}
                </span>
                <span className="text-sm text-slate-400 line-through dark:text-slate-500">
                  {dict.shop.models.eco.original_price}
                </span>
              </div>

              {/* High-Converting AMC Bundle Banner Notification */}
              <div className="mt-4 rounded-lg bg-blue-50 p-3 text-xs font-semibold text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                {dict.shop.bundle_text}
              </div>
            </div>

            <a
              href={`https://wa.me/${BUSINESS_PHONE}?text=Hi%20Arya%20Water%20Works,%20I%20need%20to%20${encodeURIComponent(dict.shop.models.eco.name)}%20with%20the%20AMC%20Bundle.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3.5 text-center text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition"
            >
              💬 {dict.shop.cta_order}
            </a>
          </div>

          {/* Model 2: Premium Society Model */}
          <div className="relative flex flex-col justify-between rounded-2xl border-2 border-blue-500 bg-slate-50/50 p-6 shadow-xl transition-colors duration-300 dark:border-blue-400 dark:bg-slate-900/40 sm:p-8">
            <span className="absolute top-0 right-6 -translate-y-1/2 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white dark:from-blue-500 dark:to-indigo-500">
              <Sparkles size={12} /> Society Bestseller
            </span>

            <div>
              {/* Product Visual Mock & Tagging */}
              <div className="relative flex h-48 w-full items-center justify-center rounded-xl bg-indigo-100/60 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400">
                <ShoppingBag size={48} className="animate-pulse" />
                <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-md bg-white px-2.5 py-1 text-xs font-bold text-slate-700 shadow-sm dark:bg-slate-800 dark:text-slate-200">
                  <Shield size={12} className="text-emerald-500" /> {dict.shop.badge_warranty}
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
                {dict.shop.models.pro.name}
              </h3>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                {dict.shop.models.pro.desc}
              </p>

              {/* Price Stack Architecture */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-3xl font-extrabold text-slate-900 dark:text-white">
                  {dict.shop.models.pro.price}
                </span>
                <span className="text-sm text-slate-400 line-through dark:text-slate-500">
                  {dict.shop.models.pro.original_price}
                </span>
              </div>

              {/* High-Converting AMC Bundle Banner Notification */}
              <div className="mt-4 rounded-lg bg-emerald-50 p-3 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                {dict.shop.bundle_text}
              </div>
            </div>
      {/* href={`https://wa.me/${BUSINESS_PHONE}?text=Hi%20Arya%20Water%20Works,%20I%20need%20to%20book%20an%20RO%20service%20for%20my%20home.`} */}
            <a
              href={`https://wa.me/${BUSINESS_PHONE}?text=Hi%20Arya%20Water%20Works,%20I%20need%20to%20${encodeURIComponent(dict.shop.models.pro.name)}%20with%20the%20AMC%20Bundle.`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 py-3.5 text-center text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition dark:bg-blue-400 dark:text-slate-950 dark:hover:bg-blue-500"
            >
              💬 {dict.shop.cta_order}
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
