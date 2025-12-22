import { Link } from "wouter";
import { MapPin, Phone, Mail, ArrowUp } from "lucide-react"; // استعملنا ArrowUp كيف ما في الكود متاعك
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";

export function Footer() {
  const { t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-blue-700 to-blue-900 text-white overflow-hidden">
      
      {/* 1. Moving Glowing Line */}
      <motion.div 
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-0 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-blue-300 to-transparent opacity-40 z-10"
      />

      {/* 2. Floating Background Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -60, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div 
        className="relative max-w-7xl mx-auto px-6 pt-10 pb-6 z-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* 1. Brand Identity */}
          <motion.div variants={itemVariants} className="space-y-6">
            <Link href="/">
              <img
                src="/pictures/LRS.png"
                alt="LRS Logo"
                className="w-44 object-contain drop-shadow-md brightness-110"
              />
            </Link>
            <p className="text-white/80 text-[15px] leading-relaxed font-normal max-w-[280px]">
              {t("footer.description")}
            </p>
            <div className="flex gap-4 pt-2">
              {[
                { Icon: SiFacebook, href: "https://www.facebook.com/laboratoiresLRS", label: "Facebook" },
                { Icon: SiInstagram, href: "https://instagram.com/lys_intense", label: "Instagram" }
              ].map(({ Icon, href, label }) => (
                <motion.a 
                  key={label}
                  href={href} 
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="p-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all group"
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* 2. Navigation - Card Style */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              {t("explore") || "Menu"}
            </h4>
            <ul className="grid grid-cols-1 gap-3">
              {[
                { label: t("footer.link.about"), href: "/a-propos" },
                { label: t("footer.link.products"), href: "/produits" },
                { label: t("footer.link.contact"), href: "/contact" }
              ].map((link) => (
                <motion.li 
                  key={link.href}
                  whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}
                  className="group rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm transition-all duration-300"
                >
                  <Link href={link.href}>
                    <a className="flex items-center justify-between px-4 py-3 w-full">
                      <span className="text-[15px] text-white/70 group-hover:text-white transition-colors font-medium">
                        {link.label}
                      </span>
                      <motion.span initial={{ opacity: 0, x: -10 }} whileHover={{ opacity: 1, x: 0 }} className="text-blue-400 font-bold">→</motion.span>
                    </a>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* 3. Contact Info - Interactive Cards */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              {t("footer.contact")}
            </h4>
            <div className="grid grid-cols-1 gap-4">
              {[
                { Icon: MapPin, text: t("footer.address"), href: null, color: "bg-red-500/20 text-red-400" },
                { Icon: Phone, text: t("footer.phone"), href: "tel:+216 74 680 235", color: "bg-green-500/20 text-green-400" },
                { Icon: SiWhatsapp, text: t("footer.whatsapp"), href: "tel:+216 26 565 555", color: "bg-green-500/20 text-green-400" },
                { Icon: Mail, text: "admin@lrs.com", href: "mailto:admin@lrs.com", color: "bg-blue-500/20 text-blue-400" },
              ].map(({ Icon, text, href, color }, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="group flex items-start gap-4 p-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                >
                  <div className={`p-3 rounded-xl ${color} transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col justify-center min-h-[44px]">
                    {href ? (
                      <a href={href} className="text-[15px] text-white/70 group-hover:text-white transition-colors leading-tight font-medium">{text}</a>
                    ) : (
                      <span className="text-[15px] text-white/70 leading-tight font-medium">{text}</span>
                    )}
                    <motion.div className="h-[1px] bg-blue-400 mt-1 w-0 group-hover:w-full transition-all duration-500" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 4. Certifications - Badge Style */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h4 className="text-base font-bold text-white uppercase tracking-wider">
              {t("footer.certifications")}
            </h4>
            <div className="grid grid-cols-1 gap-3">
              {[
                { name: t("footer.cert.ph"), desc: "Skin Safety" },
                { name: t("footer.cert.recycled"), desc: "Eco Friendly" },
                { name: t("footer.cert.derm"), desc: "Clinically Proven Care" },
                { name: t("footer.cert.iso"), desc: "Global Standard" }
              ].map((cert, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ x: 10, backgroundColor: "rgba(255,255,255,0.15)", borderColor: "rgba(255,255,255,0.3)" }}
                  className="group flex items-center gap-4 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all cursor-default"
                >
                  <div className="relative flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_10px_#60a5fa]" />
                    <motion.div animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }} transition={{ duration: 2, repeat: Infinity }} className="absolute w-4 h-4 rounded-full border border-blue-400/50" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-bold text-white tracking-wider uppercase leading-none">{cert.name}</span>
                    <span className="text-[10px] text-white/40 uppercase tracking-[0.2em] mt-1 group-hover:text-blue-300 transition-colors">{cert.desc}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar - البلاصة اللي فيها الزر توة مريغلة */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <p className="text-[11px] text-white/30 uppercase tracking-widest font-medium order-2 md:order-1">
            {t("footer.bottom.copyright")}
          </p>

          {/* الزر في الوسط بالضبط */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/5 rounded-full border border-white/10 transition-colors order-1 md:order-2"
          >
            <ArrowUp size={20} className="text-blue-400" />
          </motion.button>

          <div className="flex gap-8 text-[11px] text-white/30 uppercase tracking-widest font-medium order-3">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}