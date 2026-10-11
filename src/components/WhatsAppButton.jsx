import { BUSINESS_PHONE } from "@/config";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${BUSINESS_PHONE}?text=Hi%20Arya%20Water%20Works,%20I%20need%20to%20book%20an%20RO%20service%20for%20my%20home.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl transition hover:scale-110 hover:bg-emerald-600"
      aria-label="Contact on WhatsApp"
    >
      <svg className="h-7 w-7 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.969 0c3.183.001 6.177 1.24 8.43 3.496 2.253 2.256 3.491 5.253 3.491 8.438 0 6.568-5.338 11.916-11.914 11.916-1.996-.001-3.957-.502-5.707-1.455L0 24zm6.59-4.846c1.66.986 3.284 1.489 4.936 1.492 5.428 0 9.847-4.385 9.849-9.78.001-2.614-1.018-5.074-2.871-6.931C16.71 2.078 14.256.96 11.662.96 6.233.96 1.815 5.346 1.813 10.741c-.001 1.748.468 3.453 1.357 4.992L2.179 21.13l5.468-1.434z" />
      </svg>
    </a>
  );
}
