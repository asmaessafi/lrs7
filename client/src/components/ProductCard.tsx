import type { Product } from "@shared/schema";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { useLanguage } from "@/i18n";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const brandColors: Record<string, { bg: string; text: string }> = {
  "LYS INTENSE": { bg: "from-purple-600 to-pink-600", text: "text-white" },
  "BOOM": { bg: "from-gray-700 to-gray-900", text: "text-white" },
  "AL JARA": { bg: "from-rose-600 to-purple-700", text: "text-white" },
};

export function ProductCard({ product, onClick }: ProductCardProps) {
  const [badgeVisible, setBadgeVisible] = useState(false);
  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;
  const brandColor = brandColors[product.brand] || { bg: "from-blue-600 to-blue-700", text: "text-white" };
  const { tProductText } = useLanguage();

  const handleTouchStart = () => {
    setBadgeVisible(true);
    setTimeout(() => setBadgeVisible(false), 2000); // تبقى 2s ثم تختفي
  };

  return (
    <Card
      onClick={onClick}
      onTouchStart={isMobile ? handleTouchStart : undefined}
      className={cn(
        "group relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur-md shadow-lg transition-all duration-700 cursor-pointer",
        isMobile
          ? "hover:shadow-lg hover:-translate-y-1"
          : "hover:shadow-2xl hover:-translate-y-3 hover:ring-4 hover:ring-blue-400/30 hover:ring-offset-4 hover:ring-offset-white/50",
        "border border-blue-100/50"
      )}
      data-testid={`card-product-${product.id}`}
    >
      {/* Image */}
      <div className={cn("relative aspect-[3/4] overflow-hidden", isMobile ? "" : "bg-gradient-to-br from-blue-50/50 to-blue-100/30")}>
        <img
          src={product.imageUrl}
          alt={tProductText(product.id, "name", product.name)}
          className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Brand Badge */}
        <div
          className={cn(
            "absolute top-4 left-4 z-20 text-xs sm:text-sm font-bold px-3 py-1 rounded shadow transition-all duration-300",
            isMobile
              ? badgeVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
              : "opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100",
            "bg-gradient-to-r", brandColor.bg, brandColor.text,
            "ring-2 ring-white/50"
          )}
          data-testid={`badge-brand-${product.id}`}
        >
          {product.brand}
        </div>
      </div>

      {/* Content */}
      <CardContent className="p-4 sm:p-7 space-y-3 sm:space-y-5 bg-gradient-to-b from-white/95 to-blue-50/30">
        <h3 className="font-extrabold text-lg sm:text-xl leading-tight line-clamp-2 text-blue-950">
          {tProductText(product.id, "name", product.name)}
        </h3>
        <p className="text-sm sm:text-base text-blue-800/80 leading-relaxed line-clamp-3 font-light">
          {tProductText(product.id, "description", product.description)}
        </p>
      </CardContent>
    </Card>
  );
}
