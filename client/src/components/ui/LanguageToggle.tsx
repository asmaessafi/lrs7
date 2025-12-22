import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface LanguageToggleProps {
  language: string;
  toggleLanguage: () => void;
  className?: string;
}

export function LanguageToggle({ language, toggleLanguage, className }: LanguageToggleProps) {
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className={cn(
        "flex items-center gap-2 rounded-full bg-white/10 border-white/40 text-white hover:bg-white/20 transition-all active:scale-95 z-20",
        className
      )}
    >
      <span className={cn("text-xs transition-opacity duration-300", language === "fr" ? "font-bold opacity-100" : "opacity-50")}>
        FR
      </span>
      
      <motion.div
        animate={{ rotate: language === "fr" ? 0 : 180 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        <Globe size={14} className="text-blue-200" />
      </motion.div>

      <span className={cn("text-xs transition-opacity duration-300", language === "en" ? "font-bold opacity-100" : "opacity-50")}>
        EN
      </span>
    </Button>
  );
}