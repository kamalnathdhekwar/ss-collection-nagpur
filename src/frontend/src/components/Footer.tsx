import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

const locations = [
  "Ayodhya Nagar, Nagpur",
  "Jafar Nagar, Nagpur",
  "Ambazari, Nagpur",
  "Durg, Chhattisgarh",
  "Raipur, Chhattisgarh",
  "Seoni, Madhya Pradesh",
];

const allBrands = [
  "Nike",
  "Puma",
  "Reebok",
  "Skechers",
  "Levi's",
  "Woodland",
  "Crocs",
  "Pepe Jeans",
  "Jack & Jones",
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer
      id="contact"
      className="relative pt-16 pb-8 border-t"
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #000000 100%)",
        borderColor: "rgba(204,0,0,0.15)",
      }}
      data-ocid="footer"
    >
      {/* Top gradient line */}
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <div className="inline-block bg-white rounded-xl px-3 py-2">
                <img
                  src="/assets/ss-logo.png"
                  alt="SS Collection Nagpur"
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Premium multi-brand retail store offering Nike, Puma, Reebok &
              more at unbeatable prices across Central India.
            </p>
            <div className="flex items-center gap-3">
              <motion.a
                href="https://wa.me/919112299996"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-smooth glow-primary"
                style={{
                  background: "linear-gradient(135deg, #cc0000, #990000)",
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                data-ocid="footer.whatsapp.button"
              >
                <MessageCircle size={14} />
                WhatsApp
              </motion.a>
              <motion.a
                href="https://instagram.com/sscollectionnagpur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-white transition-smooth glass neon-border-gold"
                whileHover={{ scale: 1.05 }}
                data-ocid="footer.instagram.button"
              >
                <Instagram size={14} style={{ color: "#ffd700" }} />
                Follow
              </motion.a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-5 text-white">
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+919112299996"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white group"
                style={{ color: "rgba(255,255,255,0.5)" }}
                data-ocid="footer.phone.link"
              >
                <Phone
                  size={14}
                  className="flex-shrink-0"
                  style={{ color: "#cc0000" }}
                />
                +91 91122 99996
              </a>
              <a
                href="https://instagram.com/sscollectionnagpur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm transition-colors hover:text-white group"
                style={{ color: "rgba(255,255,255,0.5)" }}
                data-ocid="footer.instagram_handle.link"
              >
                <Instagram
                  size={14}
                  className="flex-shrink-0"
                  style={{ color: "#ffd700" }}
                />
                @sscollectionnagpur
              </a>
              <div
                className="flex items-start gap-3 text-sm"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                <MapPin
                  size={14}
                  className="mt-0.5 flex-shrink-0"
                  style={{ color: "#cc0000" }}
                />
                <span>
                  5, Juna Subedar Rd, Jawahar Nagar, Ayodhya Nagar, Nagpur
                </span>
              </div>
            </div>
          </div>

          {/* Store Locations */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-5 text-white">
              Locations
            </h4>
            <ul className="space-y-2">
              {locations.map((loc) => (
                <li
                  key={loc}
                  className="flex items-center gap-2 text-sm"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  <span
                    className="w-1 h-1 rounded-full flex-shrink-0"
                    style={{ background: "#cc0000" }}
                  />
                  {loc}
                </li>
              ))}
            </ul>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-sm font-bold tracking-widest uppercase mb-5 text-white">
              Our Brands
            </h4>
            <div className="flex flex-wrap gap-2">
              {allBrands.map((brand) => (
                <span
                  key={brand}
                  className="text-xs font-semibold px-2 py-1 rounded"
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {brand}
                </span>
              ))}
            </div>
            <div className="mt-5 pt-5 border-t border-white/5">
              <p
                className="text-xs font-medium tracking-wider uppercase"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Shoes · Clothing · Sports Gear
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {year} SS Collection Nagpur. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.25)" }}>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-2"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
