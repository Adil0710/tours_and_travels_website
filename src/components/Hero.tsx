"use client";
import { motion } from "framer-motion";
import { HERO_DATA, IMAGES } from "@/constants";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-red-50 to-pink-50 py-20 overflow-hidden min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
            >
              {HERO_DATA.title}
              <motion.span
                initial={{ color: "#374151" }}
                animate={{ color: "#ef4444" }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-red-500"
              >
                {HERO_DATA.titleHighlight}
              </motion.span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-600 mb-8"
            >
              {HERO_DATA.description}
            </motion.p>
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(239, 68, 68, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-red-500 text-white px-8 py-4 rounded-lg hover:bg-red-600 transition-colors font-semibold"
              >
                {HERO_DATA.buttons.primary}
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors"
              >
                {HERO_DATA.buttons.secondary}
              </motion.button>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0, rotateY: -30 }}
            animate={{ x: 0, opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative h-full w-full"
          >
            <motion.div
              transition={{ type: "spring", stiffness: 300 }}
              className=" rounded-2xl p-8 "
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="w-full h-80 mt-10 rounded-lg z-10 flex items-center justify-center mb-4"
              >
                <Image
                  src={IMAGES.hero.car}
                  alt="Hero Car"
                  width={1000}
                  height={1000}
                  className="z-10 mt-24"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="w-full absolute h-full top-0 z-0 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={IMAGES.hero.map}
                  alt="Hero Car"
                  width={500}
                  height={500}
                  className="w-full h-full "
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
