// import { ContactForm } from "@/components/ContactForm";
// import { Card, CardContent } from "@/components/ui/card";
// import { MapPin, Phone, Mail, MessageCircle, Clock, Globe } from "lucide-react";
// import { SiFacebook, SiInstagram } from "react-icons/si";
// import { useLanguage } from "@/i18n";
// import { motion } from "framer-motion";
// import SideBackground from "@/components/SideBackground";

// const contactInfoBase = [
//   { icon: MapPin, labelKey: "contact.info.address.label", valueKey: "footer.address", href: null as string | null },
//   { icon: Phone, labelKey: "contact.info.phone.label", valueKey: "footer.phone", href: "tel:+21674680235" },
//   { icon: MessageCircle, labelKey: "contact.info.whatsapp.label", valueKey: "footer.whatsapp", href: "https://wa.me/21626565555" },
//   { icon: Mail, labelKey: "contact.info.email.label", valueKey: "footer.email", href: "mailto:admin@lrs.com" },
//   { icon: Clock, labelKey: "contact.info.hours.label", valueKey: "contact.info.hours.value", href: null as string | null },
// ];

// const socialLinks = [
//   { icon: SiFacebook, label: "Facebook", href: "https://www.facebook.com/laboratoiresLRS", handle: "@Lys.Intense" },
//   { icon: SiInstagram, label: "Instagram", href: "https://instagram.com/lys_intense", handle: "@lys_intense" },
// ];

// export default function Contact() {
//   const { t } = useLanguage();
//   const contactInfo = contactInfoBase.map((item) => ({
//     ...item,
//     label: t(item.labelKey),
//     value: t(item.valueKey),
//   }));

//   return (
//     <div className="min-h-screen pt-20 md:pt-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50/30">
//       <SideBackground/>

//       {/* 1. Hero Section */}
//       <section className="py-24 md:py-32 relative overflow-hidden flex flex-col items-center text-center">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-600/8 via-transparent to-blue-400/8" />
//         <div className="max-w-7xl mx-auto px-4 relative z-10">
//           <h1 className="split-title font-black mb-8">
//             {t("contact.header.title")}
//             <span>{t("contact.header.title")}</span>
//             <span>{t("contact.header.title")}</span>
//             <span>LYS INTENSE</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-blue-900/80 max-w-4xl mx-auto font-light leading-relaxed">
//             {t("contact.header.subtitle.1")}<br />
//             {t("contact.header.subtitle.2")}
//           </p>
//         </div>
//       </section>
  
     

//       {/* 2. Main Content Area */}
//       <section className="py-20 bg-transparent relative">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

//             {/* Left: Contact Form */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="order-2 lg:order-1 relative group"
//             >
//               <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000" />
//               <ContactForm />
//             </motion.div>

//             {/* Right: Info & Socials */}
//             <div className="space-y-12 order-1 lg:order-2">

//               {/* Info Details  */}
//               <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
//                 <h2 className="text-3xl font-black bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent mb-8 italic uppercase tracking-tight">
//                   {t("contact.info.title")}
//                 </h2>

//                 <div className="grid gap-6">
//                   {contactInfo.map((info, idx) => (
//                     <motion.div
//                       key={idx}
//                       whileHover={{ x: 8 }}
//                       className="group relative flex items-center gap-6 p-5 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-sm transition-all duration-300 overflow-hidden"
//                     >
//                       <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full opacity-60" />

//                       <div className="relative w-14 h-14 shrink-0 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
//                         <info.icon
//                           className="w-7 h-7 text-white scale-110"
//                           strokeWidth={2.8}
//                         />
//                       </div>

//                       <div className="relative">
//                         <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-1">{info.label}</p>
//                         {info.href ? (
//                           <a href={info.href} className="text-lg font-bold text-slate-800 hover:text-blue-600 transition-colors italic tracking-tight leading-snug">
//                             {info.value}
//                           </a>
//                         ) : (
//                           <p className="text-lg font-bold text-slate-800 italic tracking-tight leading-snug">
//                             {info.value}
//                           </p>
//                         )}
//                       </div>
//                     </motion.div>
//                   ))}
//                 </div>
//               </motion.div>              
              
//               {/* Social Links Cards */}
//               <div>
//                 <h2 className="text-3xl font-black bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent mb-8 italic uppercase tracking-tight">
//                   {t("contact.social.title")}
//                 </h2>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   {socialLinks.map((social) => (
//                     <a
//                       key={social.label}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="flex items-center gap-5 p-5 bg-white/70 backdrop-blur-md border border-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
//                     >
//                       <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700 shadow-md">
//                         <social.icon className="w-6 h-6 text-white" />
//                       </div>
//                       <div>
//                         <p className="font-black text-slate-800 tracking-tight">{social.label}</p>
//                         <p className="text-sm text-blue-500 font-medium">{social.handle}</p>
//                       </div>
//                     </a>
//                   ))}
//                 </div>
//               </div>

//               {/* Distribution Card */}
//               <motion.div whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 300 }}>
//                 <Card className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white shadow-2xl border-0 overflow-hidden rounded-[2rem]">
//                   <CardContent className="p-10 relative">
//                     <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />
//                     <div className="flex items-center gap-5 mb-6">
//                       <div className="p-3 bg-white/10 backdrop-blur-lg rounded-xl">
//                         <Globe className="w-10 h-10 text-cyan-300 animate-spin-slow" style={{ animationDuration: '10000ms' }} />
//                       </div>
//                       <h3 className="text-2xl font-black italic tracking-tighter uppercase">{t("contact.distribution.title")}</h3>
//                     </div>
//                     <p className="text-blue-50/90 text-lg leading-relaxed italic font-light">
//                       {t("contact.distribution.body")}
//                     </p>
//                   </CardContent>
//                 </Card>
//               </motion.div>

//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { ContactForm } from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, MessageCircle, Clock, Globe } from "lucide-react";
import { SiFacebook, SiInstagram } from "react-icons/si";
import { useLanguage } from "@/i18n";
import { motion } from "framer-motion";
import SideBackground from "@/components/SideBackground";

const contactInfoBase = [
  { icon: MapPin, labelKey: "contact.info.address.label", valueKey: "footer.address", href: null as string | null },
  { icon: Phone, labelKey: "contact.info.phone.label", valueKey: "footer.phone", href: "tel:+21674680235" },
  { icon: MessageCircle, labelKey: "contact.info.whatsapp.label", valueKey: "footer.whatsapp", href: "https://wa.me/21626565555" },
  { icon: Mail, labelKey: "contact.info.email.label", valueKey: "footer.email", href: "mailto:admin@lrs.com" },
  { icon: Clock, labelKey: "contact.info.hours.label", valueKey: "contact.info.hours.value", href: null as string | null },
];

const socialLinks = [
  { icon: SiFacebook, label: "Facebook", href: "https://www.facebook.com/laboratoiresLRS", handle: "@Lys.Intense" },
  { icon: SiInstagram, label: "Instagram", href: "https://instagram.com/lys_intense", handle: "@lys_intense" },
];

export default function Contact() {
  const { t } = useLanguage();
  const contactInfo = contactInfoBase.map((item) => ({
    ...item,
    label: t(item.labelKey),
    value: t(item.valueKey),
  }));

  return (
    // Added dir="ltr" and overflow-x-hidden to ensure stability across languages 🌍
    <div dir="ltr" className="min-h-screen pt-20 md:pt-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50/30 overflow-x-hidden">
      <SideBackground/>

      {/* 1. Hero Section */}
         <section className="py-24 md:py-32 relative overflow-hidden flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/8 via-transparent to-blue-400/8" />
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="split-title font-black mb-8 hyphens-auto">
            {t("contact.header.title")}
            <span>{t("contact.header.title")}</span>
            <span>{t("contact.header.title")}</span>
            <span>LYS INTENSE</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-900/80 max-w-4xl mx-auto font-light leading-relaxed">
            {t("contact.header.subtitle.1")}<br />
            {t("contact.header.subtitle.2")}
          </p>
        </div>
      </section>

      {/* 2. Main Content Area */}
      <section className="py-10 md:py-20 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-start">

            {/* Left: Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1 relative group w-full"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000" />
              <ContactForm />
            </motion.div>

            {/* Right: Info & Socials */}
            <div className="space-y-10 md:space-y-12 order-1 lg:order-2">

              {/* Info Details */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent mb-6 md:mb-8 italic uppercase tracking-tight">
                  {t("contact.info.title")}
                </h2>

                <div className="grid gap-4 md:gap-6">
                  {contactInfo.map((info, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ x: 8 }}
                      className="group relative flex items-center gap-4 md:gap-6 p-4 md:p-5 min-h-[90px] md:min-h-[100px] rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60 shadow-sm transition-all duration-300 overflow-hidden"
                    >
                      <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full opacity-60" />

                      <div className="relative w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500">
                        <info.icon className="w-6 h-6 md:w-7 md:h-7 text-white" strokeWidth={2.8} />
                      </div>

                      <div className="relative flex-1 min-w-0">
                        <p className="text-[9px] md:text-[10px] font-black text-blue-500 uppercase tracking-[0.2em] mb-1 truncate">{info.label}</p>
                        {info.href ? (
                          <a href={info.href} className="text-base md:text-lg font-bold text-slate-800 hover:text-blue-600 transition-colors italic tracking-tight leading-snug break-words block">
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-base md:text-lg font-bold text-slate-800 italic tracking-tight leading-snug break-words">
                            {info.value}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>               
              
              {/* Social Links Cards */}
              <div>
                <h2 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent mb-6 md:mb-8 italic uppercase tracking-tight">
                  {t("contact.social.title")}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 md:gap-5 p-4 md:p-5 bg-white/70 backdrop-blur-md border border-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 group"
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-xl bg-blue-600 flex items-center justify-center group-hover:rotate-[360deg] transition-transform duration-700 shadow-md">
                        <social.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm md:text-base font-black text-slate-800 tracking-tight truncate">{social.label}</p>
                        <p className="text-xs md:text-sm text-blue-500 font-medium truncate">{social.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Distribution Card */}
              <motion.div whileHover={{ scale: 1.01 }} transition={{ type: "spring", stiffness: 300 }}>
                <Card className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white shadow-2xl border-0 overflow-hidden rounded-[1.5rem] md:rounded-[2rem]">
                  <CardContent className="p-8 md:p-10 relative">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-3xl -mr-16 -mt-16" />
                    <div className="flex items-center gap-4 md:gap-5 mb-4 md:mb-6">
                      <div className="p-3 bg-white/10 backdrop-blur-lg rounded-xl shrink-0">
                        <Globe className="w-8 h-8 md:w-10 md:h-10 text-cyan-300 animate-spin-slow" style={{ animationDuration: '10000ms' }} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-black italic tracking-tighter uppercase leading-tight">{t("contact.distribution.title")}</h3>
                    </div>
                    <p className="text-blue-50/90 text-base md:text-lg leading-relaxed italic font-light">
                      {t("contact.distribution.body")}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}