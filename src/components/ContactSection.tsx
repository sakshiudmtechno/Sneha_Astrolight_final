import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";

const WHATSAPP_NUMBER = "919235889025";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*New Consultation Request*%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Email:* ${form.email}%0A*Service:* ${form.service}%0A*Message:* ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display text-gradient-gold mb-4">Get In Touch</h2>
          <p className="text-lg font-body text-muted-foreground">Book your consultation today and start your journey</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            {[
              { name: "name" as const, label: "Your Name", type: "text", required: true },
              { name: "phone" as const, label: "Phone Number", type: "tel", required: true },
              { name: "email" as const, label: "Email Address", type: "email", required: false },
            ].map((field) => (
              <div key={field.name}>
                <label className="block text-sm font-sans-clean text-foreground/70 mb-1.5">{field.label}</label>
                <input
                  type={field.type}
                  required={field.required}
                  value={form[field.name]}
                  onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                  className="w-full bg-secondary/50 border border-primary/20 rounded-xl px-4 py-3 text-foreground font-sans-clean text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
                />
              </div>
            ))}

            <div>
              <label className="block text-sm font-sans-clean text-foreground/70 mb-1.5">Service Interested In</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                required
                className="w-full bg-secondary/50 border border-primary/20 rounded-xl px-4 py-3 text-foreground font-sans-clean text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all"
              >
                <option value="">Select a service</option>
                <option value="Astrology">Astrology</option>
                <option value="Numerology">Numerology</option>
                <option value="Vastu Consultation">Vastu Consultation</option>
                <option value="Tarot Reading">Tarot Reading</option>
                <option value="Reiki Healing">Reiki Healing</option>
                <option value="Crystal Healing">Crystal Healing</option>
                <option value="Name Correction">Name Correction</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-sans-clean text-foreground/70 mb-1.5">Your Message</label>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary/50 border border-primary/20 rounded-xl px-4 py-3 text-foreground font-sans-clean text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-gold text-primary-foreground font-sans-clean font-semibold py-3 rounded-xl hover:opacity-90 transition-all hover:scale-[1.02]"
            >
              Send via WhatsApp
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                lines: ["A-614, Ratan Galaxy", "Vrindavan Yojna Sector-12", "Lucknow, 226029"],
              },
              {
                icon: Phone,
                title: "Call Us",
                lines: ["9235889025", "9792536534"],
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: ["Snehasastrolight@gmail.com"],
              },
            ].map((info) => (
              <div key={info.title} className="flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-primary text-lg mb-1">{info.title}</h3>
                  {info.lines.map((line) => (
                    <p key={line} className="font-sans-clean text-sm text-foreground/70">{line}</p>
                  ))}
                </div>
              </div>
            ))}

            <div className="mt-8 rounded-2xl overflow-hidden border border-primary/15 h-56">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.5!2d81.0!3d26.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUxJzAuMCJOIDgxwrAwJzAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
