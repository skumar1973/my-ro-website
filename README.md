# AryaWaterWork – Responsive Bilingual RO Sales & Service Platform

A high-performance, hyper-local **Next.js (App Router)** static website built for residential RO (Reverse Osmosis) water purifier sales, repairs, and Annual Maintenance Contracts (AMCs) across high-rise societies in **Delhi/NCR (Noida, Gurgaon, Delhi)**. 

Developed by **Northstar Engineering**, this website is optimized for lightning-fast speeds, seamless mobile/desktop responsiveness, a dual **Light/Dark theme architecture**, and full **English & Hindi structural translation**.

---

## ⚡ Core Features Built-In

*   **Bilingual Matrix:** Clean client-side state hooks mapping system translations between English and Hindi (`src/dictionaries`).
*   **Tailwind v4 Theme Engine:** Unified variables utilizing next-themes to smoothly toggle Light and Dark modes without flash layout delays.
*   **Hyper-Local SEO Static Engine:** Dynamic Static Site Generation (SSG) route paths (`/societies/[slug]`) configured to target individual residential high-rises automatically.
*   **Universal WhatsApp Bridge:** Meta-compliant API path strings (`https://wa.me`) with full parameter encoding to securely bypass pop-up blockers on mobile and desktop viewports.
*   **Single Source of Truth:** Centralized operations file (`src/config.js`) to instantly deploy business mobile phone numbers site-wide.
*   **Automated Sitemap Framework:** Dynamic script generation (`sitemap.js`) that pipes fresh local landing addresses directly to Google Search Console for rapid indexing.

---

## 📁 Directory Structure Overview

```text
my-ro-website/
├── src/
│   ├── app/
│   │   ├── layout.js              # Theme provider, metadata, global styles initialization
│   │   ├── page.js                # Master client view handling dictionary hooks
│   │   ├── globals.css            # Tailwind v4 variables mapping with .dark classes
│   │   ├── sitemap.js             # Dynamic SEO sitemap engine compilation mapping
│   │   ├── book-service/
│   │   │   └── page.js            # Technician booking lead dispatch form
│   │   ├── privacy-policy/
│   │   │   └── page.js            # IT Law compliant bilingual Privacy disclosures
│   │   ├── terms-and-conditions/
│   │   │   └── page.js            # Hardware warranty and RWA discount parameters
│   │   └── societies/
│   │       └── [slug]/
│   │           └── page.js        # Dynamic SSG shell generating high-ranking complex pages
│   ├── components/
│   │   ├── Navbar.js              # Multi-device split navigation menu with structural toggles
│   │   ├── Hero.js                # Core visual above-the-fold lead capture banner
│   │   ├── Services.js            # 3-column scroll-margined technical services display
│   │   ├── ProductCatalog.js      # Custom assembled RO catalog grid with AMC cross-sells
│   │   ├── Reviews.js             # Trust-building verified rating block mapping local towers
│   │   ├── AmcPricing.js          # Tiered membership package structures with WhatsApp checkouts
│   │   ├── Faq.js                 # Smooth max-height expanding accordion system
│   │   ├── Footer.js              # Corporate info grid (CIN/GSTIN) with Northstar Engineering credits
│   │   └── WhatsAppButton.js      # Fixed thumb-friendly floating communication action button
│   ├── dictionaries/
│   │   ├── en.json                # English translation string configuration map
│   │   └── hi.json                # Hindi translation string configuration map
│   └── config.js                  # Operational phone variables hub
```

---

## 🚀 Setup & Local Execution Guide

### 1. Initialize Project & Install Tools
Clone or pull the directory framework into your environment, navigate inside, and trigger package deployment:
```bash
npm install
```

### 2. Enter Corporate Data
Open **`src/config.js`** and input your 10-digit mobile line directly behind the international calling node:
```javascript
export const BUSINESS_PHONE = "91YOURNUMBERHERE"; // Digits only, no spaces or + symbols
```
Open **`src/components/Footer.js`** (Columns 3 & 4) and insert your verified company registration parameters:
*   Update **CIN**: Corporate Identification Number
*   Update **GSTIN**: State Goods and Services Tax Identification Number

### 3. Initialize Local Development Environment
Spin up the hot-reloading bundler to check layouts locally:
```bash
npm run dev
```
Open your browser dashboard to access the live local engine: `http://localhost:3000`

---

## 🌍 Production Deployment Protocols

### Option A: Direct Deployment on Vercel (Recommended)
1. Commit your codebase to a secure repository repository (GitHub, GitLab, or Bitbucket).
2. Head to the [Vercel Dashboard](https://vercel.com) and click **Add New > Project**.
3. Import your project repository framework.
4. Leave build parameters at their default values (Next.js presets manage static extraction automatically).
5. Click **Deploy**. Vercel will process compilation, map dependencies, and provide a secure, production-ready `https://...` domain link for free.

### Option B: Local Production Compilation Check
If you need to audit static builds locally before cloud deployment, run these commands:
```bash
# Clear previous dev bundles
rm -rf .next

# Compile production-ready HTML elements
npm run build

# Boot local server mirroring production build speeds
npm run start
```

---

## 📈 Search Console & Local SEO Activation Checklist

1.  **Sitemap Submission:** Once the target production domain is configured (e.g., `https://my-ro-website.vercel.app/`), load your Google Search Console panel, navigate to the **Sitemaps** module, enter `sitemap.xml`, and hit submit to index your dynamic residential pages instantly.
2.  **Territory Scale Out:** To launch services in new housing complexes across Noida, Gurgaon, or West Delhi, add an object item block into the `SOCIETIES_DATA` array inside `src/app/societies/[slug]/page.js`. The system will automatically construct the fresh URL landing view, add it to the search sitemap, and structure the layout components upon the next deployment compile.

---

## 🛠️ Technology Maintenance
*   **Framework Architecture:** Next.js (Modern App Router Configuration)
*   **Styling Engine:** Tailwind CSS v4 Core Utility Variables Layouts
*   **Visual Assets:** Lucide React (Optimized Vector Line Framework) + Native Inline Custom SVGs

Developed with absolute modular precision by **Northstar Engineering**. For codebase revisions, custom architecture extensions, or deployment support pipelines, contact our infrastructure team.
