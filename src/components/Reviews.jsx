import { Star, MapPin } from "lucide-react";

export default function Reviews({ dict }) {
  // Simple utility array to render 5 filled stars cleanly
  const stars = Array(5).fill(0);

  // Structural array mapping out the localized review data keys
  const reviewKeys = ["rev1", "rev2", "rev3"];

  return (
    <section id="reviews" className="bg-white py-16 transition-colors duration-300 dark:bg-slate-950 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            {dict.reviews.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-400">
            {dict.reviews.subtitle}
          </p>

          {/* Core Trust Score Badge */}
          <div className="mt-6 inline-flex flex-col items-center justify-center rounded-xl bg-blue-50/70 px-4 py-3 dark:bg-blue-950/20 sm:flex-row sm:gap-3">
            <div className="flex gap-1 text-amber-500">
              {stars.map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="mt-2 text-xs font-bold text-blue-900 dark:text-blue-300 sm:mt-0 sm:text-sm">
              {dict.reviews.rating_label}
            </span>
          </div>
        </div>

        {/* Responsive Grid: 1 column on mobile, scales smoothly to 3 columns on desktop grids */}
        <div className="mx-auto mt-14 grid max-w-md grid-cols-1 gap-8 sm:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {reviewKeys.map((key) => {
            const card = dict.reviews.cards[key];
            return (
              <div 
                key={key} 
                className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/30 p-6 shadow-sm transition-colors duration-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/30 sm:p-8"
              >
                <div>
                  {/* Individual Card Stars */}
                  <div className="flex gap-0.5 text-amber-500">
                    {stars.map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="mt-4 text-sm italic leading-relaxed text-slate-600 dark:text-slate-300">
                    "{card.comment}"
                  </p>
                </div>

                {/* Reviewer Metadata Box */}
                <div className="mt-6 border-t border-slate-200 pt-4 dark:border-slate-800">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">
                    {card.name}
                  </h4>
                  <p className="mt-1 flex items-center gap-1 text-xs font-semibold text-slate-400 dark:text-slate-500">
                    <MapPin size={12} className="text-blue-500 dark:text-blue-400" />
                    {card.society}
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
