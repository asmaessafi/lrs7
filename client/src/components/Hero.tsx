import React, { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n";
import Aurora from "./ui/Aurora";

export function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const sideImage = isMobile ? "/pictures/2.png" : "/pictures/4.png";

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600">

      {/* ✨ soft radial glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-500/30 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-indigo-400/20 rounded-full blur-[140px]" />
      </div>

      {/* 🔮 Aurora overlay */}
      <div className="absolute inset-0 z-[1] opacity-60 pointer-events-none">
        <Aurora
          colorStops={["#0F172A", "#3B82F6", "#2DD4BF"]}
          blend={0.1} 
          amplitude={1.2}
          speed={1}
        />
      </div>

      {/* 🌑 contrast overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30 z-[2]" />

      {/* Side image */}
      <div className="hidden md:block absolute top-10 left-0 h-full pointer-events-none z-[3]">
        <img
          src={sideImage}
          alt="Side hero"
          className="w-full h-full object-contain opacity-90"
        />
      </div>

      {/* Hero content */}
      <div className="relative z-[4] max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-10">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 mb-12 mt-20">
          <h1
            className="overflow-hidden whitespace-nowrap text-white text-lg sm:text-xl md:text-2xl font-medium animate-type"
            style={{
              borderRight: '2px solid white',
              animation: 'type 3.5s steps(40, end), blink-caret .75s step-end infinite'
            }}
          >
            {t("hero.badge")}
          </h1>
        </div>

        {/* Logo */}
        <div className="animate-bounce-slow">
          <img
            src="/pictures/lys.png"
            alt="LYS INTENSE"
            className="inline-block w-auto max-h-64 drop-shadow-2xl"
          />
        </div>

        {/* Subtitle */}
        <p className="mt-6 text-2xl sm:text-3xl md:text-4xl font-light text-white/90 animate-fade-up">
          {t("hero.subtitle")}
        </p>

        {/* Description */}
        <p className="mt-12 text-lg sm:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed animate-fade-up delay-200">
          {t("hero.description.1")}<br />
          {t("hero.description.2")}
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 animate-fade-up delay-400">
          <Link href="/produits">
            <Button
              size="lg"
              className="bg-white text-blue-900 hover:bg-white/95 px-8 py-4 rounded-full shadow-xl transition-all duration-500 group"
            >
              {t("hero.cta.products")}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
            </Button>
          </Link>

          <Link href="/a-propos">
            <Button
              size="lg"
              variant="outline"
              className="border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-full backdrop-blur-sm transition-all duration-500"
            >
              {t("hero.cta.about")}
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[4]">
        <div className="w-6 h-12 rounded-full border border-white/30 flex items-start justify-center pt-2">
          <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>

    </section>
  );
}