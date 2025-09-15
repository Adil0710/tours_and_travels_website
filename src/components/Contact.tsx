"use client";
import { motion } from "framer-motion";
import { CONTACT_INFO, IMAGES } from "@/constants";

export default function Contact() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Contact Us
          </motion.h2>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.2, delayChildren: 0.4 }}
              className="space-y-6"
            >
              {CONTACT_INFO.map((contact, index) => (
                <motion.div 
                  key={contact.id}
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ x: 10, transition: { duration: 0.2 } }}
                  className="flex items-center space-x-4"
                >
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center"
                  >
                    <span className="text-red-500">{contact.icon}</span>
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{contact.title}</h4>
                    <p className="text-gray-600">{contact.info}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.button 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-600 transition-colors font-semibold"
            >
              Get In Touch
            </motion.button>
          </motion.div>
          <motion.div 
            initial={{ x: 100, opacity: 0, rotateY: -20 }}
            whileInView={{ x: 0, opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            whileHover={{ scale: 1.02, boxShadow: "0 15px 30px rgba(0, 0, 0, 0.1)" }}
            className="h-80 bg-gray-200 rounded-lg flex items-center justify-center"
          >
            <span className="text-gray-500">{IMAGES.placeholders.map}</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
