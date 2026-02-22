import { motion } from 'framer-motion';
import { Rocket, Zap, Cloud, Shield, Settings, Lightbulb } from 'lucide-react';

const featureVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function Features() {
  const features = [
    {
      icon: Rocket,
      title: 'Blazing Fast Performance',
      description: 'Experience lightning-fast speeds and seamless operations that keep your workflow agile and efficient.',
    },
    {
      icon: Zap,
      title: 'Intuitive Workflow',
      description: 'Streamline your processes with a design that simplifies complex tasks and enhances user engagement.',
    },
    {
      icon: Cloud,
      title: 'Scalable Architecture',
      description: 'Grow without limits. Our cloud-native infrastructure is built to scale with your ambitions, effortlessly.',
    },
    {
      icon: Shield,
      title: 'Enterprise-Grade Security',
      description: 'Protect your data with advanced security protocols and compliance standards you can trust.',
    },
    {
      icon: Settings,
      title: 'Highly Customizable',
      description: 'Tailor every aspect to fit your unique needs. Our flexible platform adapts to you, not the other way around.',
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'Stay ahead of the curve with cutting-edge features and continuous updates designed for the future.',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0A0A0A] relative">
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(50% 50% at 50% 50%, rgba(100, 50, 200, 0.05) 0%, rgba(0,0,0,0) 100%)',
      }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.2em] font-bold text-gray-500 mb-4 text-center"
        >
          Core Capabilities
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight text-center mb-16 text-white bg-gradient-to-r from-neutral-100 to-neutral-300 bg-clip-text text-transparent"
        >
          Designed for Excellence
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-8 flex flex-col items-start text-left hover:border-indigo-500/50 transition-colors duration-300 group"
              variants={featureVariants}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="p-3 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg mb-6 shadow-lg group-hover:shadow-indigo-500/30 transition-shadow duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-400 text-base leading-relaxed font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
