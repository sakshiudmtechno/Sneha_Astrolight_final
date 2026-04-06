import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import certNumerology from "@/assets/cert-numerology.jpeg";
import certRudraksha from "@/assets/cert-rudraksha.jpeg";
import certCrystal from "@/assets/cert-crystal.jpeg";
import certTarot from "@/assets/cert-tarot.jpeg";
import certNumerologyFoundation from "@/assets/cert-numerology-foundation.jpeg";
import certHumkara from "@/assets/cert-humkara.jpeg";
import certVastu from "@/assets/cert-vastu.jpeg";
import certPredictive from "@/assets/cert-predictive.jpeg";
import { useState } from "react";
import { X } from "lucide-react";

const certs = [
  { img: certNumerology, title: "Diploma in Numerology Research" },
  { img: certPredictive, title: "Advance Predictive Course in Numerology" },
  { img: certTarot, title: "Masters Course in Tarot Card Reading" },
  { img: certCrystal, title: "Crystal Therapy Professional Course" },
  { img: certRudraksha, title: "Rudraksha Professional Course" },
  { img: certNumerologyFoundation, title: "Numerology Foundation Course" },
  { img: certVastu, title: "Vastushastra Advanced Course" },
  { img: certHumkara, title: "Humkara with Haleem Workshop" },
];

const CertificationsPage = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="bg-secondary/30 py-16 mb-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-display text-gradient-gold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Certifications
            </motion.h1>
            <motion.p
              className="text-lg font-body text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Professionally trained & certified across multiple disciplines
            </motion.p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {certs.map((cert, i) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelected(i)}
                className="group relative rounded-xl overflow-hidden border border-primary/15 cursor-pointer"
              >
                <img src={cert.img} alt={cert.title} className="w-full aspect-[4/3] object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                  <p className="text-center text-sm font-sans-clean text-primary font-medium">{cert.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div className="fixed inset-0 z-[100] bg-background/90 flex items-center justify-center p-4" onClick={() => setSelected(null)}>
          <button onClick={() => setSelected(null)} className="absolute top-6 right-6 text-primary">
            <X size={32} />
          </button>
          <img src={certs[selected].img} alt={certs[selected].title} className="max-w-full max-h-[85vh] object-contain rounded-xl" />
        </div>
      )}

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CertificationsPage;
