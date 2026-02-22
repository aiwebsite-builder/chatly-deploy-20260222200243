import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function CallToAction() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="py-24 md:py-32 bg-[#030303] text-center"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-tight text-white bg-gradient-to-r from-neutral-50 to-neutral-400 bg-clip-text text-transparent mb-6">
          Ready to Transform Your Workflow?
        </h2>
        <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Join thousands of innovative teams already benefiting from MySaaS. It's time to elevate your productivity.
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="relative inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 ease-out overflow-hidden group"
        >
          <span className="relative z-10">Start Your Free Trial</span>
          <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
        </motion.button>
      </div>
    </motion.section>
  );
}
