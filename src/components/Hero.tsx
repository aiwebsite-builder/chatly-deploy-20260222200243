import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex flex-col items-center justify-center min-h-screen py-32 md:py-48 text-center overflow-hidden"
    >
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1800&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        filter: 'blur(80px) grayscale(100%) brightness(50%)'
      }}></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.9] text-white bg-gradient-to-r from-neutral-50 to-neutral-400 bg-clip-text text-transparent mb-6"
        >
          Unleash Your Potential
          <br />
          with <span className="inline-block bg-gradient-to-r from-indigo-500 to-purple-600 text-transparent bg-clip-text">Innovation</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          className="text-lg md:text-xl text-neutral-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          Our platform empowers teams to build, scale, and deliver with unparalleled efficiency and a touch of magic. Experience the future of productivity.
        </motion.p>

        <motion.button
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 ease-out overflow-hidden group"
        >
          <span className="relative z-10">Get Started Today</span>
          <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.section>
  );
}
