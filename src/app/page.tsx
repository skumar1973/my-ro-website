"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services"; 
import ProductCatalog from "@/components/ProductCatalog";
import Reviews from "@/components/Reviews"; 
import AmcPricing from "@/components/AmcPricing";
import Footer from "@/components/Footer"; 
import Faq from "@/components/Faq";

import en from "@/dictionaries/en.json";
import hi from "@/dictionaries/hi.json";

export default function Home() {
  const [lang, setLang] = useState("en");
  const dict = lang === "en" ? en : hi;

  return (
    <>
      <Navbar lang={lang} setLang={setLang} dict={dict} />
      <Hero dict={dict} />
      <Services dict={dict} /> 
      <ProductCatalog dict={dict} />
      <Reviews dict={dict} /> 
      <AmcPricing dict={dict} />
      <Faq dict={dict} />
      <Footer dict={dict} />
    </>
  );
}
