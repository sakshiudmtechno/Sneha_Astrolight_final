import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    text: "Sneha's numerology reading was incredibly accurate. She helped me find the right business name, and within months I saw positive changes in my career.",
    rating: 5,
    service: "Numerology",
  },
  {
    name: "Rahul Verma",
    text: "The Vastu consultation transformed my home's energy. I feel more peaceful and focused since making the suggested changes.",
    rating: 5,
    service: "Vastu",
  },
  {
    name: "Anjali Gupta",
    text: "Sneha's tarot reading gave me clarity during a very confusing time. Her predictions were spot-on and the remedies worked wonders.",
    rating: 5,
    service: "Tarot Reading",
  },
  {
    name: "Deepak Singh",
    text: "The Reiki healing sessions with Sneha have been life-changing. I feel more balanced and energized than ever before.",
    rating: 5,
    service: "Reiki Healing",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display text-gradient-gold mb-4">Client Testimonials</h2>
          <p className="text-lg font-body text-muted-foreground">What our clients say about their experience</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-primary/15 rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="font-body text-foreground/70 text-base mb-4 italic">"{t.text}"</p>
              <div>
                <p className="font-display text-primary text-sm">{t.name}</p>
                <p className="font-sans-clean text-xs text-muted-foreground">{t.service}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://www.google.com/search?q=Astrolight+by+Snehaa+Lucknow+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary border border-primary/20 text-primary font-sans-clean text-sm font-medium px-6 py-3 rounded-full hover:bg-primary/10 transition-all"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            View Google Reviews
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
