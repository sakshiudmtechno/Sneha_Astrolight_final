import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919235889025"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      style={{ background: "#25D366" }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      whileHover={{ scale: 1.15 }}
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7" fill="white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16.004c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.914 15.914 0 0016.004 32C24.826 32 32 24.826 32 16.004 32 7.176 24.826 0 16.004 0zm9.302 22.602c-.388 1.094-1.938 2.002-3.168 2.268-.842.178-1.94.32-5.642-1.212-4.738-1.96-7.79-6.762-8.028-7.076-.228-.314-1.918-2.556-1.918-4.876 0-2.32 1.214-3.462 1.646-3.936.388-.426 1.028-.618 1.642-.618.198 0 .376.01.536.018.472.02.708.048 1.02.79.388.926 1.334 3.246 1.452 3.482.118.236.236.552.076.866-.15.324-.276.468-.512.74-.236.274-.46.482-.696.776-.216.256-.46.532-.194.998.266.466 1.182 1.944 2.538 3.15 1.742 1.548 3.21 2.028 3.666 2.254.344.17.752.132 1.028-.166.348-.374.778-.994 1.214-1.606.31-.436.702-.49 1.084-.334.388.148 2.452 1.156 2.874 1.368.42.212.702.314.806.49.104.176.104 1.028-.284 2.122z"/>
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
