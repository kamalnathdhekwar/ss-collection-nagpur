import { Clock, MapPin, Phone, Star } from "lucide-react";
import { motion } from "motion/react";

const mainStore = {
  name: "Ayodhya Nagar",
  address: "5, Juna Subedar Rd, Jawahar Nagar, Nagpur",
  phone: "+91 91122 99996",
  hours: "10:00 AM – 9:00 PM",
  city: "Nagpur, Maharashtra",
  isMain: true,
};

const otherLocations = [
  { name: "Jafar Nagar", city: "Nagpur, Maharashtra" },
  { name: "Ambazari", city: "Nagpur, Maharashtra" },
  { name: "Durg", city: "Chhattisgarh" },
  { name: "Raipur", city: "Chhattisgarh" },
  { name: "Seoni", city: "Madhya Pradesh" },
];

export default function LocationsSection() {
  return (
    <section
      id="locations"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0e0e0e 0%, #111111 100%)",
      }}
      data-ocid="locations.section"
    >
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* Background text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span
          className="text-[18vw] font-black select-none"
          style={{ color: "rgba(255,255,255,0.015)", letterSpacing: "-0.05em" }}
        >
          NAGPUR
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: "#cc0000" }}
          >
            Find Us
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Store <span className="text-gradient">Locations</span>
          </h2>
          <p
            className="mt-4 text-base"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            6 premium stores across Nagpur, Chhattisgarh &amp; Madhya Pradesh
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Main Store Card */}
          <motion.div
            className="lg:col-span-3 relative rounded-2xl overflow-hidden glass neon-border-red"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            data-ocid="locations.main_store.card"
          >
            {/* Store photo header */}
            <div className="relative h-48 overflow-hidden">
              <img
                src="/assets/store-exterior-1.png"
                alt="SS Collection Main Store"
                className="w-full h-full object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.7) 100%)",
                }}
              />
              <div className="absolute bottom-4 left-6 flex items-center gap-2">
                <div
                  className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{
                    background: "linear-gradient(135deg, #cc0000, #990000)",
                  }}
                >
                  <Star size={10} fill="white" />
                  Main Store
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Glow */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(204,0,0,0.08) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />

              <h3 className="text-3xl font-black text-white mb-1">
                {mainStore.name}
              </h3>
              <p
                className="text-base font-semibold mb-6"
                style={{ color: "#ffd700" }}
              >
                {mainStore.city}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={16}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "#cc0000" }}
                  />
                  <div>
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      Address
                    </p>
                    <p className="text-sm text-white font-medium">
                      {mainStore.address}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone
                    size={16}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "#cc0000" }}
                  />
                  <div>
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      Phone
                    </p>
                    <a
                      href={`tel:${mainStore.phone.replace(/\s/g, "")}`}
                      className="text-sm font-bold text-white hover:text-red-400 transition-colors"
                      data-ocid="locations.main_store.phone.link"
                    >
                      {mainStore.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock
                    size={16}
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: "#cc0000" }}
                  />
                  <div>
                    <p
                      className="text-xs font-bold tracking-widest uppercase mb-1"
                      style={{ color: "rgba(255,255,255,0.4)" }}
                    >
                      Hours
                    </p>
                    <p className="text-sm text-white font-medium">
                      {mainStore.hours}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map embed */}
              <div
                className="mt-8 rounded-xl overflow-hidden"
                style={{
                  height: "200px",
                  border: "1px solid rgba(204,0,0,0.2)",
                }}
              >
                <iframe
                  title="SS Collection Nagpur Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.4127!2d79.0742!3d21.1613!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0b1a1b1b1b1%3A0x1b1b1b1b1b1b1b1b!2sJawahar%20Nagar%2C%20Nagpur!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="200"
                  style={{
                    border: 0,
                    filter: "invert(90%) hue-rotate(180deg)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Action buttons */}
              <div className="mt-6 flex gap-3 flex-wrap">
                <motion.a
                  href="https://wa.me/919112299996"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white transition-smooth glow-primary"
                  style={{
                    background: "linear-gradient(135deg, #cc0000, #990000)",
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  data-ocid="locations.main_store.whatsapp.button"
                >
                  <Phone size={14} />
                  Call / WhatsApp
                </motion.a>
                <motion.a
                  href="https://maps.google.com/?q=5+Juna+Subedar+Rd+Jawahar+Nagar+Nagpur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold text-white glass neon-border-gold hover:bg-white/5 transition-smooth"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  data-ocid="locations.main_store.directions.button"
                >
                  <MapPin size={14} style={{ color: "#ffd700" }} />
                  Get Directions
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Other Locations */}
          <motion.div
            className="lg:col-span-2 space-y-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-lg font-bold text-white mb-6 tracking-wider uppercase">
              Other Stores
            </h3>
            {otherLocations.map((loc, i) => (
              <motion.div
                key={loc.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ x: 6, scale: 1.01 }}
                className="group flex items-center gap-4 p-4 rounded-xl cursor-default transition-smooth"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                data-ocid={`locations.other.item.${i + 1}`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-smooth group-hover:scale-110"
                  style={{
                    background: "rgba(204,0,0,0.1)",
                    border: "1px solid rgba(204,0,0,0.2)",
                  }}
                >
                  <MapPin size={16} style={{ color: "#cc0000" }} />
                </div>
                <div className="min-w-0">
                  <h4 className="text-sm font-bold text-white truncate">
                    {loc.name}
                  </h4>
                  <p className="text-xs mt-0.5" style={{ color: "#ffd700" }}>
                    {loc.city}
                  </p>
                </div>
                <div className="ml-auto text-xs font-bold text-white/20 group-hover:text-white/60 transition-colors flex-shrink-0">
                  →
                </div>
              </motion.div>
            ))}

            {/* Call to action */}
            <div
              className="mt-6 p-5 rounded-xl text-center"
              style={{
                background: "rgba(255,215,0,0.04)",
                border: "1px solid rgba(255,215,0,0.15)",
              }}
            >
              <p
                className="text-xs font-bold tracking-widest uppercase mb-2"
                style={{ color: "#ffd700" }}
              >
                All Locations
              </p>
              <p
                className="text-sm mb-4"
                style={{ color: "rgba(255,255,255,0.5)" }}
              >
                Visit any store for the latest collection and best prices.
              </p>
              <a
                href="tel:+919112299996"
                className="text-sm font-bold hover:text-white transition-colors"
                style={{ color: "#cc0000" }}
                data-ocid="locations.call_any.link"
              >
                +91 91122 99996
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
