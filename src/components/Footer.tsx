import { motion } from 'framer-motion';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="py-12 bg-[#0A0A0A] border-t border-white/5 text-center text-neutral-400"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-xl font-bold tracking-tight text-white mb-4">
          MySaaS
        </div>
        <p className="text-sm leading-relaxed font-light mb-6">
          &copy; {new Date().getFullYear()} MySaaS. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <FaTwitter className="h-6 w-6" />
          </motion.a>
          <motion.a
            href="#"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="h-6 w-6" />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
}
