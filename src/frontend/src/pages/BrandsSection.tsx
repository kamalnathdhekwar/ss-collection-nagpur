import { motion } from "motion/react";
import { SiNike, SiPuma, SiReebok } from "react-icons/si";

const featuredBrands = [
  {
    name: "Nike",
    Icon: SiNike,
    tagline: "Just Do It",
    color: "#cc0000",
    items: ["Air Max", "Air Force", "React", "Zoom Pegasus"],
  },
  {
    name: "Puma",
    Icon: SiPuma,
    tagline: "Forever Faster",
    color: "#ffd700",
    items: ["RS-X", "Velocity", "Suede", "Deviate Nitro"],
  },
  {
    name: "Reebok",
    Icon: SiReebok,
    tagline: "Be More Human",
    color: "#cc0000",
    items: ["Classic", "Nano X", "Floatride", "Zig Kinetica"],
  },
];

// Additional brands visible in store
const moreBrands = [
  "Skechers",
  "Levi's",
  "Killer",
  "Rare Rabbit",
  "Clarks",
  "Pepe Jeans",
  "Woodland",
  "Nautica",
  "Crocs",
  "Monte Carlo",
  "Jack & Jones",
  "Spykar",
  "Linen Club",
];

export default function BrandsSection() {
  return (
    <section
      id="brands"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #111111 0%, #0d0d0d 100%)",
      }}
      data-ocid="brands.section"
    >
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* BG text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        style={{ zIndex: 0 }}
      >
        <span
          className="text-[20vw] font-black tracking-tight select-none"
          style={{ color: "rgba(255,255,255,0.02)", letterSpacing: "-0.05em" }}
        >
          BRANDS
        </span>
      </div>

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ zIndex: 1 }}
      >
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: "#cc0000" }}
          >
            Official Partners
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
            World-Class <span className="text-gradient">Brands</span>
          </h2>
          <p
            className="mt-4 text-base"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Exclusively stocked, authentically priced
          </p>
        </motion.div>

        {/* Featured brand cards */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          data-ocid="brands.list"
        >
          {featuredBrands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative group glass rounded-2xl p-8 cursor-default overflow-hidden"
              style={{
                border: "1px solid rgba(255,255,255,0.06)",
                transition: "box-shadow 0.35s ease",
              }}
              data-ocid={`brands.item.${i + 1}`}
            >
              {/* Glow on hover */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${brand.color}15 0%, transparent 60%)`,
                  border: `1px solid ${brand.color}30`,
                }}
              />

              {/* Brand icon */}
              <div className="mb-6 relative">
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: `1px solid ${brand.color}30`,
                  }}
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.4 }}
                >
                  <brand.Icon size={44} color={brand.color} />
                </motion.div>
              </div>

              <h3 className="text-3xl font-black tracking-wider mb-1 text-white">
                {brand.name}
              </h3>
              <p
                className="text-sm font-semibold tracking-[0.2em] uppercase mb-6"
                style={{ color: brand.color }}
              >
                {brand.tagline}
              </p>

              <div className="space-y-2">
                {brand.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    <span
                      className="w-1 h-1 rounded-full flex-shrink-0"
                      style={{ background: brand.color }}
                    />
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-white/5">
                <span
                  className="text-xs font-bold tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  Official Stock Available
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More brands marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-center text-xs font-bold tracking-[0.3em] uppercase mb-6"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            Also Available In-Store
          </p>

          {/* Scrolling marquee */}
          <div className="relative overflow-hidden">
            <div className="animate-marquee flex gap-6 w-max">
              {[
                ...moreBrands.map((b) => ({ brand: b, id: `a-${b}` })),
                ...moreBrands.map((b) => ({ brand: b, id: `b-${b}` })),
              ].map(({ brand, id }) => (
                <div
                  key={id}
                  className="flex-shrink-0 px-5 py-2.5 rounded-full glass text-sm font-bold tracking-widest uppercase"
                  style={{
                    color: "rgba(255,255,255,0.45)",
                    border: "1px solid rgba(255,215,0,0.12)",
                  }}
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
