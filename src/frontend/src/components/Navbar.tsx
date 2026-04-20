import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "Brands", href: "#brands" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Locations", href: "#locations" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-dark shadow-lg" : "bg-transparent"
      }`}
      data-ocid="navbar"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.button
            onClick={() => handleLinkClick("#hero")}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.02 }}
            data-ocid="nav.logo.link"
          >
            <div className="bg-white rounded-lg px-2 py-1.5 flex items-center">
              <img
                src="/assets/ss-logo.png"
                alt="SS Collection"
                className="h-9 w-auto object-contain"
              />
            </div>
          </motion.button>

          {/* Desktop Links */}
          <div
            className="hidden md:flex items-center gap-1"
            data-ocid="nav.desktop_links"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-4 py-2 text-sm font-semibold tracking-wider uppercase text-white/70 hover:text-white transition-colors duration-200 relative group"
                data-ocid={`nav.${link.label.toLowerCase()}.link`}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-4/5 h-0.5 transition-all duration-300"
                  style={{
                    background: "linear-gradient(90deg, #cc0000, #ffd700)",
                  }}
                />
              </a>
            ))}
          </div>

          {/* CTA Button (Desktop) */}
          <motion.button
            onClick={() => handleLinkClick("#locations")}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase text-white transition-smooth glow-primary"
            style={{ background: "linear-gradient(135deg, #cc0000, #990000)" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            data-ocid="nav.visit_store.button"
          >
            Visit Store
          </motion.button>

          {/* Hamburger (Mobile) */}
          <motion.button
            className="md:hidden p-2 rounded-lg text-white/80 hover:text-white transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            data-ocid="nav.hamburger.toggle"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(0,0,0,0.95)",
              backdropFilter: "blur(20px)",
            }}
            data-ocid="nav.mobile_menu"
          >
            <div className="px-4 py-6 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className="px-4 py-3 text-base font-semibold tracking-widest uppercase text-white/70 hover:text-white border-b border-white/5 transition-colors text-left"
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                  data-ocid={`nav.mobile.${link.label.toLowerCase()}.link`}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                onClick={() => handleLinkClick("#locations")}
                className="mt-4 flex items-center justify-center py-3 rounded-full font-bold tracking-wider uppercase text-white glow-primary"
                style={{
                  background: "linear-gradient(135deg, #cc0000, #990000)",
                }}
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                data-ocid="nav.mobile.visit_store.button"
              >
                Visit Store
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
