import { type Category, categoryLabels, allCategories } from "@shared/schema";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";

interface FilterBarProps {
  activeCategory: Category | "all";
  onCategoryChange: (category: Category | "all") => void;
}

export function FilterBar({ activeCategory, onCategoryChange }: FilterBarProps) {
  const { t, tCategoryLabel } = useLanguage();
  const categoriesWithAll: (Category | "all")[] = ["all", ...allCategories];

  return (
    <>
      {/* Horizontal Filter Bar - Visible on md and below */}
      <div className="md:hidden relative mb-8">
        <div className="overflow-x-auto pb-4 premium-scrollbar-horizontal">
          <div className="flex items-center gap-4 px-4 min-w-max">
            {categoriesWithAll.map((category, index) => {
              const isActive = activeCategory === category;
              const label =
                category === "all"
                  ? t("products.filter.all")
                  : tCategoryLabel(category, categoryLabels[category]);

              return (
                <motion.button
                  key={category}
                  onClick={() => {
                    onCategoryChange(category);
                    document
                      .getElementById("products-section")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className={cn(
                    "relative px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wider",
                    "whitespace-nowrap transition-all duration-500",
                    "group overflow-hidden flex-shrink-0"
                  )}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {/* Active Background */}
                  {isActive && (
                    <>
                      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600" />
                      <span className="absolute -inset-1 rounded-full bg-blue-500/30 blur-xl animate-pulse" />
                    </>
                  )}

                  {/* Inactive Hover */}
                  {!isActive && (
                    <span className="absolute inset-0 rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300" />
                  )}

                  <span
                    className={cn(
                      "relative z-10",
                      isActive ? "text-white" : "text-blue-800/80 group-hover:text-blue-900"
                    )}
                  >
                    {label}
                  </span>

                  {/* Shine effect */}
                  <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="md:relative md:h-full md:flex md:flex-col hidden">
        {/* Scrollable Vertical Navigation */}
        <nav className="flex-1 overflow-y-auto pr-4 custom-scrollbar space-y-2">
          {categoriesWithAll.map((category, index) => {
            const isActive = activeCategory === category;

            return (
              <motion.button
                key={category}
                onClick={() => {
                  onCategoryChange(category);
                  // scroll to top of products section 
                  const productsSection = document.getElementById("products-section");
                  if (productsSection) {
                    productsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className={cn(
                  "relative w-full px-6 py-4 rounded-2xl",
                  "text-left text-base font-medium",
                  "transition-all duration-500 ease-out",
                  "group overflow-hidden",
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.06 }}
              >
                {/* Glassmorphism Background + Glow */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl transition-all duration-500",
                    isActive
                      ? "bg-gradient-to-r from-blue-100/80 to-indigo-100/60 shadow-xl shadow-blue-300/40"
                      : "bg-white/0 group-hover:bg-blue-50/60 group-hover:shadow-lg group-hover:shadow-blue-200/30"
                  )}
                />

                {/* Premium Left Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-blue-500 to-indigo-600 rounded-r-full shadow-lg"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                {/* Content with Subtle Icon Dot */}
                <div className="relative z-10 flex items-center gap-4">
                  <div
                    className={cn(
                      "w-2.5 h-2.5 rounded-full transition-all duration-500 shadow-md",
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-indigo-600 scale-110"
                        : "bg-blue-300/50 group-hover:bg-blue-500/80 group-hover:scale-110"
                    )}
                  />
                  <span
                    className={cn(
                      "transition-colors duration-500",
                      isActive
                        ? "text-blue-900 font-semibold"
                        : "text-blue-700/70 group-hover:text-blue-900 font-medium"
                    )}
                  >
                    {category === "all"
                      ? t("products.filter.all")
                      : tCategoryLabel(category, categoryLabels[category])}
                  </span>
                </div>

                {/* Subtle Shine Overlay for Premium Depth */}
                <div
                  className={cn(
                    "absolute inset-0 rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                    "bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  )}
                />
              </motion.button>
            );
          })}
        </nav>
      </div>

      {/* Global Styles for Both Scrollbars */}
      <style jsx>{`
        /* Horizontal Premium Scrollbar (mobile) */
        .premium-scrollbar-horizontal::-webkit-scrollbar {
          height: 6px;
        }
        .premium-scrollbar-horizontal::-webkit-scrollbar-track {
          background: rgba(99, 102, 241, 0.15);
          border-radius: 9999px;
          margin: 0 16px;
        }
        .premium-scrollbar-horizontal::-webkit-scrollbar-thumb {
          background: linear-gradient(90deg, #c7d2fe, #e0e7ff);
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
        }
        .premium-scrollbar-horizontal::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(90deg, #a5b4fc, #c7d2fe);
        }

        /* Vertical Custom Scrollbar (desktop sidebar) */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(99, 102, 241, 0.3);
          border-radius: 4px;
          transition: background 0.3s;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background: rgba(79, 70, 229, 0.6);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(67, 56, 202, 0.8);
        }
      `}</style>
    </>
  );
}




