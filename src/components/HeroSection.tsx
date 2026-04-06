import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.img
          src={logo}
          alt="Astrolight by Sneha"
          className="w-32 h-32 md:w-44 md:h-44 mx-auto mb-8 rounded-full animate-pulse-gold"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
        />

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-display text-gradient-gold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Astrolight by Sneha
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-body text-foreground/80 mb-4 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Guiding You Toward Clarity, Positivity & Transformation
        </motion.p>

        <motion.p
          className="text-base font-sans-clean text-muted-foreground mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Astrology • Numerology • Vastu • Tarot • Reiki & Angel Healing
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <Link
            to="/contact"
            className="bg-gradient-gold text-primary-foreground font-sans-clean font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-all hover:scale-105"
          >
            Book a Consultation
          </Link>
          <Link
            to="/services"
            className="border border-primary/40 text-primary font-sans-clean font-semibold px-8 py-3 rounded-full hover:bg-primary/10 transition-all hover:scale-105"
          >
            Explore Services
          </Link>
        </motion.div>

        <motion.div
          className="mt-12 flex justify-center gap-8 md:gap-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          {[
            { num: "5+", label: "Years Experience" },
            { num: "5000+", label: "Consultations" },
            { num: "100%", label: "Client Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-display text-primary font-bold">{stat.num}</div>
              <div className="text-xs md:text-sm font-sans-clean text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
