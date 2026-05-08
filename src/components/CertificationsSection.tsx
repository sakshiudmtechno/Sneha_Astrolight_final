import { motion } from "framer-motion";
import { useState } from "react";
import { X } from "lucide-react";

import certNumerology from "@/assets/cert-numerology.jpeg";
import certRudraksha from "@/assets/cert-rudraksha.jpeg";
import certCrystal from "@/assets/cert-crystal.jpeg";
import certTarot from "@/assets/cert-tarot.jpeg";
import certNumerologyFoundation from "@/assets/cert-numerology-foundation.jpeg";
import certHumkara from "@/assets/cert-humkara.jpeg";
import certVastu from "@/assets/cert-vastu.jpeg";
import certPredictive from "@/assets/cert-predictive.jpeg";
import certi1 from "@/assets/certi1.jpeg";
import certi2 from "@/assets/certi2.png";

const certs = [
  { img: certi1, title: "Money Reiki" },
  { img: certi2, title: "Astro Numerology" },
  { img: certNumerology, title: "Diploma in Numerology Research" },
  { img: certPredictive, title: "Advance Predictive Course in Numerology" },
  { img: certTarot, title: "Masters Course in Tarot Card Reading" },
  { img: certCrystal, title: "Crystal Therapy Professional Course" },
  { img: certRudraksha, title: "Rudraksha Professional Course" },
  { img: certNumerologyFoundation, title: "Numerology Foundation Course" },
  { img: certVastu, title: "Vastushastra Advanced Course" },
  { img: certHumkara, title: "Humkara with Haleem Workshop" },
];

const CertificationsSection = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section id="certifications" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display text-gradient-gold mb-4">
            Certifications
          </h2>
          <p className="text-lg font-body text-muted-foreground">
            Professionally trained & certified across multiple disciplines
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
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
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full aspect-[4/3]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-3">
                <p className="text-center text-sm font-sans-clean text-primary font-medium">
                  {cert.title}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-[100] bg-background/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-6 right-6 text-primary"
          >
            <X size={32} />
          </button>

          <img
            src={certs[selected].img}
            alt={certs[selected].title}
            className="max-w-full max-h-[85vh] object-contain rounded-xl"
          />
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;