"use client";

import { FiLayout, FiSmartphone, FiDatabase, FiArrowRight, FiCheckCircle } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { useReveal } from "@/hooks/use-reveal";

const services = [
  {
    icon: FiLayout,
    title: "Landing Pages",
    description: "High-converting, SEO-optimized landing pages that turn visitors into customers. Fast, responsive, and modern.",
    features: ["SEO Optimization", "Lightning Fast Load Times", "Responsive Design", "Custom Animations"],
    color: "from-indigo-500 to-indigo-700",
    bg: "hover:shadow-indigo-500/20 hover:border-indigo-200",
    tag: "bg-indigo-50 text-indigo-700 border-indigo-100",
  },
  {
    icon: FiSmartphone,
    title: "SPAs (Single Page Apps)",
    description: "Fluid and dynamic web applications built with React and Next.js. Seamless user experience without page reloads.",
    features: ["React/Next.js Architecture", "State Management", "Smooth Transitions", "API Integration"],
    color: "from-purple-500 to-purple-700",
    bg: "hover:shadow-purple-100 hover:border-purple-200",
    tag: "bg-purple-50 text-purple-700 border-purple-100",
  },
  {
    icon: FiDatabase,
    title: "Full Stack Systems",
    description: "Powerful end-to-end solutions combining robust backends, secure databases, and tailored admin dashboards.",
    features: ["Database Architecture", "Secure Auth Systems", "Admin Support Panels", "Scalable Microservices"],
    color: "from-violet-500 to-violet-700",
    bg: "hover:shadow-violet-100 hover:border-violet-200",
    tag: "bg-violet-50 text-violet-700 border-violet-100",
  },
];

const ServicesComponent = () => {
  useReveal();

  return (
    <section id="services" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-indigo-500 text-xs font-bold uppercase tracking-widest mb-3">
            What I Offer
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Professional Services
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
            From simple landing pages to complex full-stack ecosystems, I build digital products that are fast, reliable, and user-centric.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={service.title}
              className={`reveal glass-card rounded-none p-8 flex flex-col hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl ${service.bg}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-none bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>

              <div className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <FiCheckCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                    <span className="text-[13px] text-slate-400 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-50">
                <a
                  href="https://t.me/botirjon_sh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 hover:text-indigo-800 transition-colors group"
                >
                  Discuss Project
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Banner */}
        <div className="mt-16 reveal">
          <div className="glass-card rounded-none p-8 md:p-10 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 border-indigo-100/50 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-white mb-2">Transparent Pricing</h3>
              <p className="text-slate-400 text-sm max-w-md">
                Every project is unique. I offer flexible pricing models tailored to your specific requirements and budget.
              </p>
            </div>
            <a
              href="https://t.me/botirjon_sh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 bg-slate-950 text-indigo-600 font-bold rounded-none border-2 border-indigo-100 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white shadow-lg shadow-indigo-500/20 transition-all duration-300"
            >
              <FaTelegramPlane className="w-5 h-5" />
              Discuss via Telegram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesComponent;
