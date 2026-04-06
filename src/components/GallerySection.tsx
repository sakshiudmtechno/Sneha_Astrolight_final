import { motion } from "framer-motion";
import workPodcast from "@/assets/work-podcast.jpeg";
import workSeminar from "@/assets/work-seminar.jpeg";
import workAward from "@/assets/work-award.jpeg";
import workConsultation from "@/assets/work-consultation.jpg";
import workWorkshop from "@/assets/work-workshop.jpg";

const gallery = [
  {
    img: workSeminar,
    title: "Keynote Speaker",
    desc: "Sneha delivering a keynote on Vedic astrology at the Maa Ashtbhuji Rashtriya Dharm Jyotish Sammelan.",
  },
  {
    img: workPodcast,
    title: "Podcast & Media",
    desc: "Featured on leading podcasts discussing the power of numerology and holistic healing in modern life.",
  },
  {
    img: workConsultation,
    title: "Private Consultations",
    desc: "Personalized one-on-one sessions combining astrology, tarot, and crystal therapy for deep insights.",
  },
  {
    img: workAward,
    title: "Awards & Recognition",
    desc: "Honored with a certificate of excellence at the Rashtriya Dharm Jyotish Kendra national-level event.",
  },
  {
    img: workWorkshop,
    title: "Healing Workshops",
    desc: "Conducting group healing workshops to spread awareness about Reiki, crystal therapy, and energy balancing.",
  },
];

const GallerySection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display text-gradient-gold mb-4">Our Work & Events</h2>
          <p className="text-lg font-body text-muted-foreground max-w-2xl mx-auto">
            Glimpses of our journey — from national events and media features to personalized consultations and healing workshops
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              // className="group relative rounded-2xl overflow-hidden border border-primary/15 aspect-square bg-secondary/30"
              className="group relative rounded-2xl overflow-hidden border border-primary/15 h-[320px] bg-secondary/30"
            >
              <img
                src={item.img}
                alt={item.title}
                // object-contain
                className="w-full h-full object-contain  group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                <h3 className="font-display text-primary text-lg mb-1">{item.title}</h3>
                <p className="font-sans-clean text-sm text-foreground/80">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
