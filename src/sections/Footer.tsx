import React from "react";
import { Github, Linkedin, Twitter, Send, ArrowUp } from "lucide-react";

const socialLinks = [
  {
    title: "LinkedIn",
    href: "#",
    icon: <Linkedin className="w-5 h-5" />,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    title: "GitHub",
    href: "https://github.com/jhonswg",
    icon: <Github className="w-5 h-5" />,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    title: "Twitter",
    href: "https://www.x.com/jhonswgeth/",
    icon: <Twitter className="w-5 h-5" />,
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    title: "Telegram",
    href: "https://www.t.me/jhonswg/",
    icon: <Send className="w-5 h-5" />,
    target: "_blank",
    rel: "noopener noreferrer",
  },
];

const serviceLinks = [
  {
    title: "Staking",
    href: "https://explorer.jhonswg.com",
  },
  {
    title: "IBC Relayer",
    href: "#",
  },
  {
    title: "Monitoring",
    href: "#",
  },
  {
    title: "Rpc Endpoint",
    href: "#",
  },
];

const supportLinks = [
  {
    title: "Feedback & Bug Report",
    href: "#feedback",
  },
  {
    title: "Terms",
    href: "#terms",
  },
  {
    title: "Privacy",
    href: "#privacy",
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-x-clip bg-gray-900">
      <div className="absolute h-[400px] w-full lg:w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/20 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>

      <div className="container mx-auto px-4 py-12">
        <div className="border-t border-white/15 pt-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
            {/* Profile Section */}
            <div className="col-span-1 md:col-span-2 lg:col-span-6 flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0"></div>
              <div>
                <h2 className="text-2xl font-bold text-emerald-400 mb-4">Jhonswg</h2>
                <p className="text-gray-400 mb-4">
                  Operating nodes for blockchain projects, always up to date
                  with industry developments, and eager to contribute to the
                  advancement of blockchain technology through efficient node
                  operations.
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.title}
                      href={link.href}
                      className="text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.title}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Services Section */}
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-4">
                Services
              </h3>
              <ul className="space-y-3">
                {serviceLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{link.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Section */}
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <ul className="space-y-3">
                {supportLinks.map((link) => (
                  <li key={link.title}>
                    <a
                      href={link.href}
                      className="group inline-flex items-center gap-1.5 text-gray-400 hover:text-emerald-400 transition-colors duration-200"
                    >
                      <span>{link.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Section */}
            <div className="col-span-1 lg:col-span-2">
              <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">Feel free to reach out</p>
              <a
                href="mailto:me@jhonswg.com"
                className="text-emerald-400 hover:text-emerald-300 transition-colors duration-200"
              >
                me@jhonswg.com
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Jhonswg. All rights reserved.
              </div>
              <div className="flex items-center gap-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-emerald-400 text-sm transition-colors duration-200 flex items-center gap-1"
                >
                  <ArrowUp className="w-4 h-4" />
                  Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
