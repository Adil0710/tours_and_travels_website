"use client";
import { motion } from "framer-motion";
import { NAV_LINKS, SITE_CONFIG } from "@/constants";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="bg-white shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="flex items-center"
          >
            <span className="text-2xl font-bold text-red-500">{SITE_CONFIG.name}</span>
          </motion.div>
          <motion.nav 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden md:flex space-x-8"
          >
            {NAV_LINKS.map((link, index) => (
              <a 
                key={index}
                href={link.href} 
                className="text-gray-700 hover:text-red-500 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </motion.nav>
          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex items-center space-x-4"
          >
            <button className="text-gray-700 hover:text-red-500">Login</button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            >
              Sign Up
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
}
