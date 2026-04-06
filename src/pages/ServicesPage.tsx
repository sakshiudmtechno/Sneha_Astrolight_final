import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Astrology",
    desc: "Vedic astrology provides profound insights into your life through the study of celestial bodies. Our birth chart analysis reveals your strengths, challenges, and timing of important life events.",
    items: [
      "Birth Chart Analysis",
      "Career & Finance Guidance",
      "Relationship & Marriage Consultation",
      "Dasha Analysis & Predictions",
      "Remedial Measures & Gemstone Advice",
    ],
  },
  {
    title: "Numerology",
    desc: "Numbers carry powerful vibrations that influence every aspect of your life. Our numerology services help you understand your life path and make decisions aligned with your destiny.",
    items: [
      "Personal Numerology Reading",
      "Corporate Numerology",
      "Name Correction & Business Name Analysis",
      "Lucky Number & Date Selection",
      "Mobile Number & Vehicle Number Analysis",
    ],
  },
  {
    title: "Vastu Consultation",
    desc: "Harmonize your living and working spaces with the ancient science of Vastu Shastra. Proper alignment brings prosperity, health, and peace into your environment.",
    items: [
      "Home Vastu Correction",
      "Office & Business Vastu Guidance",
      "Factory & Industrial Vastu",
      "Plot Selection & Analysis",
      "Vastu Remedies Without Demolition",
    ],
  },
  {
    title: "Tarot Reading",
    desc: "Tarot cards serve as a mirror to your subconscious, revealing hidden truths and potential outcomes. Our readings provide clarity for life's most pressing questions.",
    items: [
      "Love & Relationship Guidance",
      "Career Insights & Direction",
      "Decision-making Clarity",
      "Yes/No Readings",
      "Monthly & Yearly Predictions",
    ],
  },
  {
    title: "Healing Services",
    desc: "Energy healing restores balance to your mind, body, and spirit. Our healing modalities address the root cause of physical and emotional ailments.",
    items: [
      "Reiki Healing",
      "Angel Healing",
      "Crystal Healing",
      "Chakra Balancing",
      "Aura Cleansing & Protection",
    ],
  },
  {
    title: "Remedies & Solutions",
    desc: "Personalized spiritual remedies designed to address specific life challenges. Our solutions are practical, effective, and tailored to your unique situation.",
    items: [
      "Personalized Remedies",
      "Energy Balancing Techniques",
      "Spiritual Guidance",
      "Rudraksha Recommendation",
      "Gemstone & Crystal Prescription",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="pt-24 pb-20">
        {/* Header */}
        <div className="bg-secondary/30 py-16 mb-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-display text-gradient-gold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Our Services
            </motion.h1>
            <motion.p
              className="text-lg font-body text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Comprehensive spiritual guidance to address every aspect of your life
            </motion.p>
          </div>
        </div>

        {/* Services List */}
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="bg-card border border-primary/15 rounded-2xl p-8 hover:glow-gold transition-all duration-500"
              >
                <h2 className="text-2xl font-display text-primary mb-3">
                  {service.title}
                </h2>

                <p className="font-body text-foreground/70 text-lg mb-4 leading-relaxed">
                  {service.desc}
                </p>

                <div className="grid sm:grid-cols-2 gap-2">
                  {service.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 text-foreground/70 font-sans-clean text-sm"
                    >
                      <span className="text-primary mt-0.5">•</span>
                      {item}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/contact"
              className="bg-gradient-gold text-primary-foreground font-sans-clean font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-all hover:scale-105 inline-block"
            >
              Book a Consultation
            </Link>
          </motion.div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ServicesPage;