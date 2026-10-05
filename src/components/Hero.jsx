export default function Hero({ dict }) {
  return (
    <div className="relative overflow-hidden bg-white py-12 dark:bg-slate-950 sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          
          {/* Badge adapts padding and text size text-xs on mobile -> text-sm on desktop */}
          <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 sm:px-3 sm:text-sm">
            {dict.hero.badge}
          </span>
          
          {/* Responsive Typography: text-3xl on small mobile -> text-6xl on desktops */}
          <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-6xl">
            {dict.hero.title_part1} <br />
            <span className="text-blue-600 dark:text-blue-400">{dict.hero.title_part2}</span>
          </h1>
          
          {/* Responsive Paragraph spacing */}
          <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:mt-6 sm:text-lg">
            {dict.hero.desc}
          </p>
          
          {/* Dynamic Flex Layout: Stacked buttons vertically on mobile, row layout on desktop grids */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:justify-center sm:gap-4">
            <a 
              href="/book-service" 
              className="w-full rounded-lg bg-blue-600 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition sm:w-auto sm:px-8 sm:text-base"
            >
              {dict.hero.cta_online}
            </a>
            <a 
              href="https://wa.me" 
              className="w-full rounded-lg bg-emerald-600 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-md hover:bg-emerald-700 transition sm:w-auto sm:px-8 sm:text-base"
            >
              💬 {dict.hero.cta_whatsapp}
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}
