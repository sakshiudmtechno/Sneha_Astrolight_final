import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-primary/15 py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Astrolight" className="w-10 h-10 rounded-full" />
              <span className="font-display text-primary text-lg">Astrolight by Snehaa</span>
            </div>
            <p className="font-sans-clean text-sm text-foreground/60 mb-4">
              Guiding individuals toward clarity, positivity, and transformation through astrology and holistic healing.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/tarotbysnehaa/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <Instagram size={22} />
              </a>
              <a href="https://www.facebook.com/share/14VWRhykTr5/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook size={22} />
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors">
                <Youtube size={22} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-primary mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "Home", to: "/" },
                { label: "About", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Certifications", to: "/certifications" },
                { label: "Blog", to: "/blog" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="block font-sans-clean text-sm text-foreground/60 hover:text-primary transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display text-primary mb-4">Services</h4>
            <div className="space-y-2">
              {["Astrology", "Numerology", "Vastu", "Tarot Reading", "Reiki Healing", "Crystal Healing"].map((s) => (
                <p key={s} className="font-sans-clean text-sm text-foreground/60">{s}</p>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-primary/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-sans-clean text-xs text-muted-foreground">
            © {new Date().getFullYear()} Astrolight by Snehaa. All rights reserved.
          </p>
          <p className="font-sans-clean text-xs text-muted-foreground">
            Developed by <span className="text-primary font-semibold">UDM</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
