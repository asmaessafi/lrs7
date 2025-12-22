import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";

interface BrandCardProps {
  name: string;
  description: string;
  imageUrl: string;
}

export function BrandCard({ name, description, imageUrl }: BrandCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [descVisible, setDescVisible] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return; // only mobile scroll

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true); // show title
          setTimeout(() => setDescVisible(true), 500); // show description after 0.5s
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isMobile = typeof window !== "undefined" ? window.innerWidth < 768 : false;

  return (
    <Card
      ref={ref}
      className="group relative h-[32rem] rounded-3xl overflow-hidden shadow-xl transition-all duration-500 hover:shadow-2xl"
      data-testid={`card-brand-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      {/* Image */}
      <img
        src={imageUrl}
        alt={name}
        className={`
          absolute inset-0 w-full h-full object-cover transition-all duration-700
          ${isMobile
            ? visible
              ? "blur-sm scale-105"
              : "blur-0 scale-100"
            : "group-hover:blur-sm group-hover:scale-105"}
        `}
        loading="lazy"
      />

      {/* Dark overlay */}
      <div
        className={`
          absolute inset-0 transition-colors duration-500
          ${isMobile
            ? visible
              ? "bg-black/50"
              : "bg-black/0"
            : "group-hover:bg-black/50"}
        `}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 text-white">
        {/* Title */}
        <div
          className={`
            transform transition-all duration-500
            ${isMobile
              ? visible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
              : "translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"}
          `}
        >
          <h3
            className="text-3xl font-bold tracking-tight mb-2"
            data-testid={`text-brand-name-${name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {name}
          </h3>

          <div className="w-12 h-1 bg-white/30 rounded-full mb-4" />
        </div>

        {/* Description */}
        <div
          className={`
            transform transition-all duration-500
            ${isMobile
              ? descVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-6 opacity-0"
              : "translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"}
          `}
        >
          <p
            className="text-white/90 font-light leading-relaxed"
            data-testid={`text-brand-desc-${name.toLowerCase().replace(/\s+/g, "-")}`}
          >
            {description}
          </p>
        </div>
      </div>
    </Card>
  );
}
