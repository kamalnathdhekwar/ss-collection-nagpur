import { Award, Store, TrendingUp, Users } from "lucide-react";
import { motion } from "motion/react";

const stats = [
  { icon: Store, value: "6+", label: "Store Locations", color: "#cc0000" },
  {
    icon: Users,
    value: "97K+",
    label: "Instagram Community",
    color: "#ffd700",
  },
  { icon: Award, value: "13+", label: "Premium Brands", color: "#cc0000" },
  {
    icon: TrendingUp,
    value: "50–70%",
    label: "Max Discounts",
    color: "#ffd700",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0a0a0a 0%, #111111 100%)",
      }}
      data-ocid="about.section"
    >
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* BG accent */}
      <div
        className="absolute top-1/2 left-0 w-96 h-96 -translate-y-1/2 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(204,0,0,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p
              className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
              style={{ color: "#cc0000" }}
            >
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6">
              About <span className="text-gradient">SS Collection</span>
            </h2>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              SS Collection is a fast-growing offline retail chain offering
              branded shoes, clothing, and sports items at unbeatable prices
              across Nagpur, Chhattisgarh, and Madhya Pradesh.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              From Nike Air Max to Puma RS-X and Reebok Classics — we bring
              world-class athletic brands directly to your city at prices that
              beat the market. With 6 premium stores and a thriving 97K+
              Instagram community, SS Collection is the destination for sports
              and fashion enthusiasts across Central India.
            </p>

            {/* Divider */}
            <div className="section-divider mb-8" />

            {/* Brand names */}
            <div className="flex flex-wrap items-center gap-4">
              {["Nike", "Puma", "Reebok", "Skechers", "Woodland", "Crocs"].map(
                (brand) => (
                  <span
                    key={brand}
                    className="text-sm font-black tracking-widest uppercase px-3 py-1 rounded"
                    style={{
                      color: "rgba(255,255,255,0.25)",
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {brand}
                  </span>
                ),
              )}
              <span
                className="text-sm font-semibold"
                style={{ color: "#ffd700" }}
              >
                +7 more
              </span>
            </div>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 rounded-2xl relative overflow-hidden group"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${stat.color}20`,
                }}
                data-ocid={`about.stat.item.${i + 1}`}
              >
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${stat.color}15 0%, transparent 70%)`,
                    transform: "translate(30%, -30%)",
                  }}
                />
                <stat.icon
                  size={24}
                  className="mb-3"
                  style={{ color: stat.color }}
                />
                <div className="text-3xl font-black text-white mb-1">
                  {stat.value}
                </div>
                <div
                  className="text-xs font-semibold tracking-wider uppercase"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
