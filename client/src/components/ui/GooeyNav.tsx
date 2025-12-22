import { useLayoutEffect, useRef } from "react";
import { useLanguage } from "@/i18n";
import { cn } from "@/lib/utils";

interface GooeyNavProps {
  children: React.ReactNode;
  activeHref: string;
}

export function GooeyNav({ children, activeHref }: GooeyNavProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const { language } = useLanguage(); // مراقبة تغير اللغة

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const makeParticles = (element: HTMLElement) => {
    const particleCount = 15;
    for (let i = 0; i < particleCount; i++) {
      const t = 1000 + noise(400);
      const startX = noise(20);
      const startY = noise(20);
      const endX = noise(120);
      const endY = noise(100);

      const particle = document.createElement('span');
      particle.className = "absolute top-1/2 left-1/2 w-6 h-6 bg-white rounded-full pointer-events-none";

      particle.animate([
        { transform: `translate(-50%, -50%) translate(${startX}px, ${startY}px) scale(0.6)`, opacity: 1 },
        { transform: `translate(-50%, -50%) translate(${endX}px, ${endY}px) scale(1.8)`, opacity: 0.8, offset: 0.6 },
        { transform: `translate(-50%, -50%) translate(${endX * 0.3}px, ${endY * 0.3}px) scale(0)`, opacity: 0 }
      ], { 
        duration: t, 
        easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)' 
      });

      element.appendChild(particle);
      setTimeout(() => particle.remove(), t);
    }
  };

  // استخدمنا useLayoutEffect لأنه يعمل بمجرد تغير الـ DOM (تغير اللغة) وقبل الرسم على الشاشة
  useLayoutEffect(() => {
    const updatePosition = () => {
      const activeElement = containerRef.current?.querySelector(`[data-href="${activeHref}"]`) as HTMLElement;
      
      if (activeElement && filterRef.current && textRef.current) {
        const containerRect = containerRef.current!.getBoundingClientRect();
        const rect = activeElement.getBoundingClientRect();

        const styles = {
          left: `${rect.left - containerRect.left}px`,
          top: `${rect.top - containerRect.top}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`,
          opacity: "1"
        };

        // تحديث مكان الفقاعة والنص المحاكي
        Object.assign(filterRef.current.style, styles);
        Object.assign(textRef.current.style, styles);
        
        const linkTag = activeElement.querySelector('a');
        textRef.current.innerText = linkTag ? linkTag.innerText : activeElement.innerText;
        
        filterRef.current.classList.add("pill-active");
      }
    };

    updatePosition();
    
    // تشغيل الأنيميشن (الفقاعات) فقط عند تغيير الرابط وليس عند تغيير اللغة فقط
    // (اختياري: إذا أردت الفقاعات تظهر أيضاً عند تغيير اللغة، اترك السطر بالأسفل)
    // makeParticles(filterRef.current!); 

  }, [activeHref, language]); // التحديث يحدث عند تغيير المسار أو اللغة

  return (
    <div ref={containerRef} className="relative hidden md:flex items-center gap-2">
      <style>{`
        .gooey-filter {
          position: absolute;
          filter: blur(10px) contrast(35); 
          background: white;
          border-radius: 9999px;
          transition: all 0.6s cubic-bezier(0.5, 1.5, 0.5, 1);
          z-index: 1;
          pointer-events: none;
          transform: scale(0);
          box-shadow: 0 0 15px rgba(255,255,255,0.3);
        }

        .pill-active { 
          transform: scale(1.05); 
        }

        .active-text-layer {
          position: absolute;
          z-index: 20;
          color: #1e40af; 
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.95rem;
          pointer-events: none;
          transition: all 0.6s cubic-bezier(0.5, 1.5, 0.5, 1);
          white-space: nowrap;
          text-align: center;
        }

        /* ضمان بقاء العناصر في مكانها وسهولة حساب أبعادها */
        ul li {
          display: flex;
          justify-content: center;
          align-items: center;
          min-width: 80px; /* يعطي استقرار للمنيو */
        }

        ul li a {
          background: transparent !important;
          transition: opacity 0.3s ease;
        }
      `}</style>
      
      <span ref={filterRef} className="gooey-filter" />
      <span ref={textRef} className="active-text-layer" />
      
      <ul className="flex gap-4 list-none m-0 p-0 z-10">
        {children}
      </ul>
    </div>
  );
}