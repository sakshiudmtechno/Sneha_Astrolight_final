import { motion } from "framer-motion";
import { Star, Hash, Home, Layers, Heart, Sparkles } from "lucide-react";
import { useEffect } from "react";

const services = [
  {
    icon: Star,
    title: "Astrology",
    items: ["Birth Chart Analysis", "Career & Finance Guidance", "Relationship & Marriage Consultation"],
  },
  {
    icon: Hash,
    title: "Numerology",
    items: ["Personal Numerology Reading", "Corporate Numerology", "Name Correction & Business Name Analysis"],
  },
  {
    icon: Home,
    title: "Vastu Consultation",
    items: ["Home Vastu Correction", "Office & Business Vastu Guidance"],
  },
  {
    icon: Layers,
    title: "Tarot Reading",
    items: ["Love & Relationship Guidance", "Career Insights", "Decision-making Clarity"],
  },
  {
    icon: Heart,
    title: "Healing Services",
    items: ["Reiki Healing", "Angel Healing", "Crystal Healing"],
  },
  {
    icon: Sparkles,
    title: "Remedies & Solutions",
    items: ["Personalized Remedies", "Energy Balancing Techniques", "Spiritual Guidance"],
  },
];

const ServicesSection = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <section id="services" className="py-20 md:py-28 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display text-gradient-gold mb-4">
              Our Services
            </h2>
            <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
              Comprehensive spiritual guidance to address every aspect of your life
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card border border-primary/15 rounded-2xl p-6 hover:glow-gold transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center mb-5 group-hover:animate-float">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-display text-primary mb-3">
                  {service.title}
                </h3>
                <ul className="space-y-2">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-foreground/70 font-sans-clean text-sm"
                    >
                      <span className="text-primary mt-0.5">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Instagram Widget */}
      <div
        className="elfsight-app-8cd83220-719f-4074-8f2d-b41a29faab33"
        data-elfsight-app-lazy
      ></div>
    </>
  );
};

export default ServicesSection;