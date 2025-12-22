import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Hero } from "@/components/Hero";
import { BrandCard } from "@/components/BrandCard";
import { ProductCard } from "@/components/ProductCard";
import { type Product } from "@shared/schema";
import { ArrowRight, Leaf, Recycle, ShieldCheck, Award } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/i18n";
import SideBackground from "@/components/SideBackground";


// ---------- Data ----------
const brands = [
  { name: "LYS", descriptionKey: "home.brand.lys.description", imageUrl: "/pictures/brand_lys.png" },
  { name: "BOOM", descriptionKey: "home.brand.boom.description", imageUrl: "/pictures/brand_boom.png" },
  { name: "AL JARA", descriptionKey: "home.brand.aljara.description", imageUrl: "/pictures/brand_al_jara.png" },
];

const certifications = [
  { icon: Leaf, labelKey: "home.cert.phNeutral.label", descriptionKey: "home.cert.phNeutral.desc" },
  { icon: Recycle, labelKey: "home.cert.recycled.label", descriptionKey: "home.cert.recycled.desc" },
  { icon: ShieldCheck, labelKey: "home.cert.derm.label", descriptionKey: "home.cert.derm.desc" },
  { icon: Award, labelKey: "home.cert.iso.label", descriptionKey: "home.cert.iso.desc" },
];

function ProductSkeleton() {
  return (
    <div className="group rounded-2xl border bg-white/80 backdrop-blur-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
      <Skeleton className="aspect-[3/4] w-full" />
      <div className="p-6 space-y-4 bg-gradient-to-t from-white/90 to-transparent">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  );
}

// ---------- Home ----------
export default function Home() {
  const { data: products = [], isLoading } = useQuery<Product[]>({ queryKey: ["/api/products"] });
  const featuredProducts = products.slice(0, 8);
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-blue-50/60 via-white to-blue-50/40" data-testid="page-home">
      <SideBackground />
      <Hero />

      {/* Intro */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/8 via-transparent to-cyan-400/8" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.15)_0%,transparent_60%)]" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl md:text-6xl font-black tracking-tight bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-10 drop-shadow-lg">
            {t("home.intro.title")}
          </h2>
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed max-w-4xl mx-auto font-light opacity-95">
            {t("home.intro.p1")}<br className="hidden md:block" />
            {t("home.intro.p2")}<br className="hidden md:block" />
            {t("home.intro.p3")}
          </p>
        </div>
      </section>

      {/* Brands */}
      <section className="pt-12 pb-16 md:pt-16 md:pb-20 bg-gradient-to-b from-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-6 drop-shadow-md">
              {t("home.brands.title")}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              {t("home.brands.subtitle")}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {brands.map((brand) => (
              <BrandCard
                key={brand.name}
                name={brand.name}
                description={t(brand.descriptionKey)}
                imageUrl={brand.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="pt-16 pb-24 md:pt-20 md:pb-32 bg-gradient-to-b from-blue-50/50 via-transparent to-blue-100/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black bg-gradient-to-r from-blue-800 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-6 drop-shadow-md">
              {t("home.featured.title")}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              {t("home.featured.subtitle")}
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
              {Array.from({ length: 8 }).map((_, i) => <ProductSkeleton key={i} />)}
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
              {featuredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
            </div>
          )}

          <div className="text-center mt-16">
            <Link href="/produits">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-700 hover:via-blue-600 hover:to-blue-800 text-white font-bold px-10 py-5 rounded-2xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.03] active:scale-95 transition-all duration-500 group text-lg flex items-center mx-auto"
                data-testid="button-view-all-products"
              >
                {t("home.featured.button")}
                <ArrowRight className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-blue-50/60 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent drop-shadow-sm transition-all duration-500">
              {t("home.quality.title")}
            </h2>
            <div className="mt-4 h-1.5 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full opacity-20" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {certifications.map((cert) => (
              <div key={cert.labelKey} className="text-center group">
                <div className="relative w-28 h-28 mx-auto mb-8 rounded-[2rem] bg-gradient-to-br from-blue-600/10 to-cyan-400/10 backdrop-blur-sm flex items-center justify-center shadow-xl border border-white group-hover:shadow-blue-200/50 group-hover:scale-110 transition-all duration-500">

                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-400/20 to-transparent blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />

                  <cert.icon className="w-12 h-12 text-blue-600 group-hover:text-cyan-500 drop-shadow-md transition-colors duration-500" />
                </div>

                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors">
                  {t(cert.labelKey)}
                </h3>
                <p className="text-[15px] text-slate-600 font-normal leading-relaxed max-w-[200px] mx-auto">
                  {t(cert.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
