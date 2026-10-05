import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Professional RO Service & Repair in Delhi/NCR | Same Day Fix",
  description: "Fast, reliable residential RO sales, service, and AMC contracts across Noida, Gurgaon, and Delhi. 100% genuine parts, 2-hour response time.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en" suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 antialiased transition-colors duration-200">
        <ThemeProvider attribute="class" defaultTheme="light">
          <main>{children}</main>
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
