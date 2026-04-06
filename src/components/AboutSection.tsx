import { motion } from "framer-motion";
import snehaImg from "@/assets/sneha-about.jpeg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden glow-gold">
              <img
                src={snehaImg}
                alt="Sneha Dubey - Astrologer"
                className="w-full object-cover rounded-2xl"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-display text-gradient-gold mb-6">
              About Sneha Dubey
            </h2>
            <p className="text-lg font-body text-foreground/80 mb-4 leading-relaxed">
              Sneha Dubey is the founder of <strong className="text-primary">Astrolight by Snehaa</strong>, a professional astrology and holistic healing service based in Lucknow. With over 5 years of experience and 5000+ successful consultations, she specializes in delivering accurate predictions and effective remedies.
            </p>
            <p className="text-lg font-body text-foreground/70 mb-6 leading-relaxed">
              Her holistic approach combines traditional astrology with modern healing techniques — including Numerology, Vastu, Tarot Reading, Reiki, Angel Healing, and Crystal Therapy — to guide individuals toward a balanced, successful, and positive life.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;