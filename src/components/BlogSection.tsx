import { motion } from "framer-motion";
import { blogs } from "@/data/blogs";
import { Link } from "react-router-dom";

const BlogSection = () => {
  const displayBlogs = blogs.slice(0, 4);

  return (
    <section id="blog" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-display text-gradient-gold mb-4">Spiritual Insights</h2>
          <p className="text-lg font-body text-muted-foreground">Knowledge and wisdom to guide your spiritual journey</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayBlogs.map((blog, i) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="bg-card border border-primary/15 rounded-2xl overflow-hidden group"
            >
              <div className="relative overflow-hidden h-48">
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
              <div className="p-5">
                <p className="text-xs font-sans-clean text-muted-foreground mb-2">{blog.date}</p>
                <h3 className="font-display text-base text-primary mb-2 line-clamp-2">{blog.title}</h3>
                <p className="text-sm font-sans-clean text-foreground/60 line-clamp-3 mb-3">{blog.excerpt}</p>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-sm font-sans-clean font-semibold text-primary hover:text-gold-light transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 border border-primary/30 text-primary font-sans-clean text-sm font-medium px-6 py-3 rounded-full hover:bg-primary/10 transition-all"
          >
            View All Articles →
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
