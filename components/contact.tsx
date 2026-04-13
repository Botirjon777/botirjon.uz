"use client";

import { FiInstagram } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

const socials = [
  {
    href: "https://t.me/botirjon_sh",
    icon: FaTelegramPlane,
    label: "Telegram (Username)",
    value: "@botirjon_sh",
    color: "text-sky-500",
    bg: "bg-sky-50 border-sky-100",
  },
  {
    href: "https://t.me/botirjon_log",
    icon: FaTelegramPlane,
    label: "Telegram (Channel)",
    value: "botirjon_log",
    color: "text-sky-600",
    bg: "bg-sky-50 border-sky-100",
  },
  {
    href: "https://www.instagram.com/_botirjonshokirov_/",
    icon: FiInstagram,
    label: "Instagram",
    value: "@_botirjonshokirov_",
    color: "text-pink-600",
    bg: "bg-pink-50 border-pink-100",
  },
];

const ContactComponent = () => {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className="animate-fade-in-up text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Let&apos;s build something{" "}
              <span className="gradient-text">great together</span>
            </h2>
            <p className="text-lg text-slate-500 leading-relaxed mb-10 max-w-lg mx-auto">
              I am most active on Telegram and Instagram. Feel free to reach out
              for collaborations, projects, or just to say hi!
            </p>

            <div className="grid sm:grid-cols-2 gap-4 text-left">
              {socials.map(({ href, icon: Icon, label, value, color, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-4 p-5 rounded-2xl border ${bg} hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group`}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm ${color}`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-400 font-medium">
                      {label}
                    </p>
                    <p className={`text-sm font-semibold ${color}`}>{value}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactComponent;
