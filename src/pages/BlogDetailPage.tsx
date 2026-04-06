import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { blogs } from "@/data/blogs";
import { useParams, Link } from "react-router-dom";

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="text-3xl font-display text-primary">Blog not found</h1>
          <Link to="/blog" className="text-primary font-sans-clean mt-4 inline-block hover:underline">
            ← Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20">
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 overflow-hidden">
          <img src={blog.img} alt={blog.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        </div>

        <div className="container mx-auto px-4 max-w-3xl -mt-20 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link to="/blog" className="text-primary font-sans-clean text-sm hover:underline mb-6 inline-block">
              ← Back to Blog
            </Link>

            <span className="bg-gradient-gold text-primary-foreground text-xs font-sans-clean font-semibold px-3 py-1 rounded-full ml-4">
              {blog.category}
            </span>

            <h1 className="text-3xl md:text-5xl font-display text-gradient-gold mt-4 mb-4 leading-tight">
              {blog.title}
            </h1>

            <p className="font-sans-clean text-sm text-muted-foreground mb-8">{blog.date}</p>

            <div className="space-y-6">
              {blog.content.map((paragraph, i) => (
                <motion.p
                  key={i}
                  className="font-body text-lg text-foreground/80 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 bg-card border border-primary/15 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-display text-primary mb-3">Interested in a Consultation?</h3>
              <p className="font-sans-clean text-sm text-foreground/60 mb-6">
                Book a personalized session with Sneha Dubey and get guidance tailored to your life.
              </p>
              <Link
                to="/contact"
                className="bg-gradient-gold text-primary-foreground font-sans-clean font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-all hover:scale-105 inline-block"
              >
                Book Now
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogDetailPage;
