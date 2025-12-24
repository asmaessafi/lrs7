import { Leaf, Recycle, ShieldCheck, Award, Users, MapPin, Package, Calendar } from "lucide-react";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import SideBackground from "@/components/SideBackground";


const certifications = [
  {
    icon: Leaf,
    labelKey: "about.cert.ph",
    descriptionKey: "about.cert.ph.desc",
    fallbackLabel: "pH Neutral",
    fallbackDescription: "Toutes nos formules sont équilibrées pour respecter le pH naturel de votre peau et de vos cheveux."
  },
  {
    icon: Recycle,
    labelKey: "about.cert.recycled",
    descriptionKey: "about.cert.recycled.desc",
    fallbackLabel: "Recycled Plastic",
    fallbackDescription: "Nous utilisons des emballages en plastique recyclé pour réduire notre impact environnemental."
  },
  {
    icon: ShieldCheck,
    labelKey: "about.cert.derm",
    descriptionKey: "about.cert.derm.desc",
    fallbackLabel: "Dermatologically Tested",
    fallbackDescription: "Chaque produit est testé dermatologiquement pour garantir une tolérance optimale."
  },
  {
    icon: Award,
    labelKey: "about.cert.iso",
    descriptionKey: "about.cert.iso.desc",
    fallbackLabel: "ISO 22000",
    fallbackDescription: "Notre système de management de la sécurité alimentaire est certifié selon la norme internationale."
  },
];

const stats = [
  { icon: Calendar, value: "2009", labelKey: "about.stats.year" },
  { icon: MapPin, value: "200+", labelKey: "about.stats.points" },
  { icon: Package, value: "120+", labelKey: "about.stats.products" },
  { icon: Users, value: "3", labelKey: "about.stats.brands" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, ease: "easeOut" }
};

export default function About() {
  const { t } = useLanguage();

  
  return (
    <div className="min-h-screen pt-20 md:pt-24 overflow-x-hidden">
      <SideBackground/>

      {/* 1. Hero Section (Unchanged) */}
      <section className="py-24 md:py-32 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/8 via-transparent to-blue-400/8" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="split-title font-black mb-12">
            {t("about.header.title")}
            <span>{t("about.header.title")}</span>
            <span>{t("about.header.title")}</span>
            <span>LYS INTENSE</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-light">{t("about.header.subtitle")}</p>
        </div>
      </section>

      {/* 2. Passion Story  */}
      <section className="py-20 md:py-24 bg-white/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group bg-white/80 backdrop-blur-2xl rounded-3xl p-10 md:p-16 shadow-2xl border border-white/40"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000" />
            <div className="text-center mb-10 relative z-10">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent italic">
                {t("about.story.title")}
              </h2>
              <div className="mt-4 h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full opacity-40" />
            </div>

            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 text-center italic relative z-10">
              <p>{t("about.story.p1")}</p>
              <p>{t("about.story.p2")}</p>
              <div className="py-4 flex justify-center items-center gap-4">
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-200" />
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-30" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-200" />
              </div>

              <p className="font-medium text-blue-600/80">{t("about.story.p3")}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. Stats  */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative w-28 h-28 mx-auto mb-8 rounded-[2rem] bg-gradient-to-br from-blue-600/10 to-cyan-400/10 backdrop-blur-sm flex items-center justify-center shadow-xl border border-white group-hover:scale-110 transition-all duration-500">
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-400/20 to-transparent blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                  <stat.icon className="w-12 h-12 text-blue-600 group-hover:text-cyan-500 transition-colors duration-500" />
                </div>
                <p className="text-4xl md:text-5xl font-black bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent mb-2">{stat.value}</p>
                <p className="text-sm font-bold text-slate-600 uppercase tracking-widest">{t(stat.labelKey)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Company Presentation */}
      <section className="py-24 bg-white/80">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight">
              {t("about.presentation.title")}
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>{t("about.presentation.p1")}</p>
              <p>{t("about.presentation.p2")}</p>
              <p>{t("about.presentation.p3")}</p>
              <p>{t("about.presentation.p4")}</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-blue-50 group">
            <img
              src="/pictures/about1.png"
              alt="Factory"
              className="group-hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500" />
          </motion.div>
        </div>
      </section>

      {/* 5. Certifications */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-blue-50/60 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div {...fadeInUp} className="mb-20">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {t("about.commitments.title")}
            </h2>
            <div className="mt-4 h-1.5 w-24 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full opacity-20" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-16">
            {certifications.map((cert) => (
              <div key={cert.labelKey} className="text-center group">
                <div className="relative w-28 h-28 mx-auto mb-8 rounded-[2rem] bg-gradient-to-br from-blue-600/10 to-cyan-400/10 backdrop-blur-sm flex items-center justify-center shadow-xl border border-white group-hover:scale-110 transition-all duration-500">
                  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-blue-400/20 to-transparent blur-xl group-hover:opacity-100 opacity-0 transition-opacity duration-500" />
                  <cert.icon className="w-12 h-12 text-blue-600 group-hover:text-cyan-500 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-blue-700 transition-colors">
                  {t(cert.labelKey) === cert.labelKey ? cert.fallbackLabel : t(cert.labelKey)}
                </h3>
                <p className="text-[15px] text-slate-600 leading-relaxed max-w-[200px] mx-auto font-light">
                  {t(cert.descriptionKey) === cert.descriptionKey ? cert.fallbackDescription : t(cert.descriptionKey)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Mission */}
      <section className="py-24 md:py-40 bg-[#0047AB] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/20 rounded-full mix-blend-screen filter blur-[100px] animate-pulse opacity-50" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-400/20 rounded-full mix-blend-screen filter blur-[80px] animate-bounce opacity-40 duration-[10s]" />
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white italic tracking-tighter leading-none drop-shadow-2xl">
              {t("about.mission.title")}
            </h2>
            <div className="relative">
              <span className="absolute -top-10 -left-6 text-9xl text-white/10 font-serif leading-none">“</span>
              <p className="text-2xl md:text-4xl font-extralight italic text-blue-50 leading-relaxed tracking-wide relative z-10 px-6">
                {t("about.mission.body")}
              </p>
              <span className="absolute -bottom-20 -right-6 text-9xl text-white/10 font-serif leading-none rotate-180">“</span>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-300 to-transparent mx-auto rounded-full mt-12 opacity-50" />
          </motion.div>
        </div>
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-white rounded-full animate-ping" />
        <div className="absolute bottom-1/3 right-12 w-3 h-3 bg-cyan-300 rounded-full animate-pulse" />
      </section>
    </div>
  );
}