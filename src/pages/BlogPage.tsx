import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { motion } from "framer-motion";
import { blogs } from "@/data/blogs";
import { Link } from "react-router-dom";

const BlogPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20">
        <div className="bg-secondary/30 py-16 mb-16">
          <div className="container mx-auto px-4 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-display text-gradient-gold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Spiritual Insights
            </motion.h1>
            <motion.p
              className="text-lg font-body text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Knowledge and wisdom to guide your spiritual journey
            </motion.p>
          </div>
        </div>

        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-card border border-primary/15 rounded-2xl overflow-hidden group"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={blog.img}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="bg-gradient-gold text-primary-foreground text-xs font-sans-clean font-semibold px-3 py-1 rounded-full">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-sans-clean text-muted-foreground mb-2">{blog.date}</p>
                  <h3 className="font-display text-lg text-primary mb-2 line-clamp-2">{blog.title}</h3>
                  <p className="text-sm font-sans-clean text-foreground/60 line-clamp-3 mb-4">{blog.excerpt}</p>
                  <Link
                    to={`/blog/${blog.id}`}
                    className="inline-flex items-center gap-1 text-sm font-sans-clean font-semibold text-primary hover:text-gold-light transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BlogPage;
