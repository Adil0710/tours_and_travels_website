"use client";
import { motion } from "framer-motion";
import { NEWSLETTER_DATA } from "@/constants";

export default function Newsletter() {
  return (
    <section className="py-16 bg-red-500 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-4xl font-bold text-white mb-4"
        >
          {NEWSLETTER_DATA.title}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-red-100 mb-8"
        >
          {NEWSLETTER_DATA.description}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
        >
          <motion.input 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            whileFocus={{ scale: 1.05 }}
            type="email" 
            placeholder={NEWSLETTER_DATA.placeholder}
            className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white transition-all"
          />
          <motion.button 
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(255, 255, 255, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-red-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            {NEWSLETTER_DATA.buttonText}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
