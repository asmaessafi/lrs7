import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { GooeyNav } from "./ui/GooeyNav";
import { LanguageToggle } from "./ui/LanguageToggle";

const navItems = [
  { key: "home", href: "/" },
  { key: "products", href: "/produits" },
  { key: "about", href: "/a-propos" },
  { key: "contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [location] = useLocation();
  const { language, toggleLanguage, t } = useLanguage();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsVisible(current === 0 || current < lastScrollY);
      setLastScrollY(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (isOpen && menuRef.current && !menuRef.current.contains(target) &&
        buttonRef.current && !buttonRef.current.contains(target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-transform duration-500 ease-out",
      isVisible ? "translate-y-0" : "-translate-y-full"
    )}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 backdrop-blur-3xl shadow-2xl opacity-95" />

      <div className="relative max-w-7xl mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
        <Link href="/" className="z-20 transition-transform hover:scale-105 duration-300">
          <img src="/pictures/LRS.png" className="h-20 md:h-24 object-contain" alt="Logo" />
        </Link>

        {/* Desktop Navigation with Gooey Effect */}
        <div className="hidden md:flex items-center gap-6">
          <GooeyNav activeHref={location}>
            {navItems.map((item) => (
              <li key={item.href} data-href={item.href}>
                <Link href={item.href}>
                  <a className={cn(
                    "px-6 py-2 text-base font-medium rounded-full transition-colors",
                    location === item.href ? "text-transparent" : "text-white hover:text-white/80"
                  )}>
                    {t(`nav.${item.key}`)}
                  </a>
                </Link>
              </li>
            ))}
          </GooeyNav>
          <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
        </div>

        {/* Mobile Toggle Button with Animation Presence */}
        <Button
          ref={buttonRef}
          variant="ghost"
          size="icon"
          className="md:hidden relative z-50 text-white w-12 h-12 rounded-full hover:bg-white/10"
          onClick={() => setIsOpen(!isOpen)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </motion.div>
          </AnimatePresence>
        </Button>
      </div>

      {/* Mobile Menu Enhanced Background */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="md:hidden fixed inset-x-0 top-20 bg-gradient-to-b from-blue-600 to-blue-800 shadow-2xl border-t border-white/10 overflow-hidden z-40"
          >
            <div className="px-6 py-10 space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link href={item.href}>
                    <Button
                      variant={location === item.href ? "secondary" : "ghost"}
                      className={cn(
                        "w-full justify-start text-xl py-7 rounded-2xl transition-all duration-300",
                        location === item.href
                          ? "bg-white text-blue-900 shadow-lg"
                          : "text-white hover:bg-blue-500/50" // hover خفيف يتناسب مع الخلفية الصلبة
                      )}
                      onClick={() => setIsOpen(false)}
                    >
                      {t(`nav.${item.key}`)}
                    </Button>
                  </Link>
                </motion.div>
              ))}

              {/* Language Toggle */}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-6 border-t border-white/10"
              >
                <LanguageToggle
                  language={language}
                  toggleLanguage={toggleLanguage}
                  className="w-full h-14 justify-center bg-blue-900/40 rounded-2xl border border-white/10 text-white"
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>    </nav>
  );
}