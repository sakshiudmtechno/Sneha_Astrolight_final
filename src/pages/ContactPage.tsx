import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactSection from "@/components/ContactSection";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <div className="bg-secondary/30 py-16 mb-4">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-display text-gradient-gold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Get In Touch
            </motion.h1>
            <motion.p
              className="text-lg font-body text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Book your consultation today and start your journey toward clarity
            </motion.p>
          </div>
        </div>
        <ContactSection />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ContactPage;
