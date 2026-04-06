import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GallerySection from "@/components/GallerySection";
import { motion } from "framer-motion";
import snehaImg from "@/assets/sneha-about.jpeg";

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20">
        {/* Hero Banner */}
        <div className="bg-secondary/30 py-16 mb-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-display text-gradient-gold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              About Sneha Dubey
            </motion.h1>
            <motion.p
              className="text-lg font-body text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Founder of Astrolight by Snehaa
            </motion.p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          {/* Main About */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden glow-gold">
                <img src={snehaImg} alt="Sneha Dubey - Astrologer" className="w-full object-cover rounded-2xl" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-4xl font-display text-gradient-gold mb-6">My Journey</h2>
              <p className="text-lg font-body text-foreground/80 mb-4 leading-relaxed">
                Sneha Dubey is the founder of <strong className="text-primary">Astrolight by Snehaa</strong>, a professional astrology and holistic healing service based in Lucknow. With over 5 years of experience and 5000+ successful consultations, she specializes in delivering accurate predictions and effective remedies.
              </p>
              <p className="text-lg font-body text-foreground/70 mb-4 leading-relaxed">
                Her holistic approach combines traditional astrology with modern healing techniques — including Numerology, Vastu, Tarot Reading, Reiki, Angel Healing, and Crystal Therapy — to guide individuals toward a balanced, successful, and positive life.
              </p>
              <p className="text-lg font-body text-foreground/70 leading-relaxed">
                Based at A-614, Ratan Galaxy, Vrindavan Yojna Sector-12, Lucknow, Sneha serves clients from all walks of life — from individuals seeking personal guidance to business owners looking for corporate numerology solutions.
              </p>
            </motion.div>
          </div>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <motion.div
              className="bg-card border border-primary/15 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-display text-primary mb-4">🌟 Vision</h3>
              <p className="font-body text-foreground/70 text-lg leading-relaxed">
                To become a trusted name in astrology and spiritual healing by guiding individuals toward a balanced, successful, and positive life. We envision a world where everyone has access to authentic spiritual guidance.
              </p>
            </motion.div>
            <motion.div
              className="bg-card border border-primary/15 rounded-2xl p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="text-2xl font-display text-primary mb-4">🎯 Mission</h3>
              <ul className="space-y-3 font-body text-foreground/70 text-lg">
                <li>• To provide accurate and personalized consultations</li>
                <li>• To help clients overcome life challenges</li>
                <li>• To deliver practical remedies with real results</li>
                <li>• To spread awareness about holistic healing practices</li>
              </ul>
            </motion.div>
          </div>

          {/* Credentials */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display text-gradient-gold mb-4">Why Choose Us</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {[
              { icon: "✔", title: "5+ Years Experience", desc: "Professionally trained with deep knowledge across multiple spiritual disciplines." },
              { icon: "✔", title: "5000+ Consultations", desc: "A proven track record of helping thousands of clients achieve clarity and success." },
              { icon: "✔", title: "Personalized Guidance", desc: "Every consultation is tailored to your unique birth chart, numbers, and energy." },
              { icon: "✔", title: "Astrology + Healing", desc: "A holistic approach combining astrology, numerology, and energy healing." },
              { icon: "✔", title: "Practical Remedies", desc: "Remedies that are simple, effective, and designed to deliver real results." },
              { icon: "✔", title: "Client Satisfaction", desc: "Strong client trust built through accuracy, empathy, and genuine care." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                className="bg-card border border-primary/15 rounded-2xl p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <span className="text-2xl text-primary">{item.icon}</span>
                <h3 className="font-display text-primary text-lg mt-3 mb-2">{item.title}</h3>
                <p className="font-sans-clean text-sm text-foreground/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: "✨", text: "Certified Numerologist" },
              { icon: "🔮", text: "Tarot Master" },
              { icon: "🏠", text: "Vastu Consultant" },
              { icon: "💎", text: "Crystal Healer" },
              { icon: "🙏", text: "Reiki Practitioner" },
              { icon: "👼", text: "Angel Healer" },
              { icon: "📿", text: "Rudraksha Expert" },
              { icon: "⭐", text: "Spiritual Life Coach" },
            ].map((item) => (
              <motion.div
                key={item.text}
                className="flex items-center gap-3 bg-secondary/50 rounded-xl px-4 py-3"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-2xl">{item.icon}</span>
                <span className="font-sans-clean text-sm text-foreground/80">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <GallerySection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutPage;
