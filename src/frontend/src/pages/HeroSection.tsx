import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
}

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Fire/energy palette: red + golden yellow
    particlesRef.current = Array.from({ length: 60 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.6 - 0.2,
      size: Math.random() * 2 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
      color: Math.random() > 0.5 ? "#cc0000" : "#ffd700",
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particlesRef.current) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      rafRef.current = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #100a0a 100%)",
      }}
      data-ocid="hero.section"
    >
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      {/* Radial glow accents — red + gold */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(204,0,0,0.14) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 1,
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,0,0.09) 0%, transparent 70%)",
          filter: "blur(40px)",
          zIndex: 1,
        }}
      />

      {/* Hero image — real store exterior */}
      <motion.div
        className="absolute inset-y-0 right-0 w-full md:w-3/5 lg:w-1/2 pointer-events-none overflow-hidden"
        style={{ zIndex: 2 }}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
      >
        <img
          src="/assets/store-exterior-1.png"
          alt="SS Collection Store Front"
          className="w-full h-full object-cover object-center"
          style={{
            maskImage:
              "linear-gradient(to right, transparent 0%, rgba(0,0,0,0.3) 30%, black 60%)",
          }}
        />
        {/* Overlay gradient on image */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #111111 0%, rgba(17,17,17,0.7) 30%, rgba(17,17,17,0.15) 100%)",
          }}
        />
      </motion.div>

      {/* Content */}
      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        style={{ zIndex: 3 }}
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold tracking-[0.2em] uppercase glass neon-border-red"
            data-ocid="hero.badge"
          >
            <span
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ background: "#cc0000" }}
            />
            <span style={{ color: "#cc0000" }}>Now Open · 6 Locations</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-none tracking-tight mb-4"
            style={{ fontFamily: "Plus Jakarta Sans, sans-serif" }}
          >
            <span className="text-white">SS</span>
            <br />
            <span className="text-gradient">COLLECTION</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl sm:text-2xl font-bold tracking-widest uppercase mb-3"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Nagpur
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-lg sm:text-xl font-semibold mb-3 tracking-wider"
            style={{ color: "rgba(255,255,255,0.85)" }}
          >
            Premium Brands at Best Prices
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-base mb-10 tracking-widest uppercase font-medium"
            style={{ color: "#ffd700" }}
          >
            Shoes &nbsp;|&nbsp; Clothing &nbsp;|&nbsp; Sports Gear
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => scrollToSection("#locations")}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-bold tracking-wider uppercase text-white text-sm glow-primary"
              style={{
                background: "linear-gradient(135deg, #cc0000, #990000)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              data-ocid="hero.visit_store.button"
            >
              Visit Store
              <ArrowRight size={16} />
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("#products")}
              className="flex items-center gap-2 px-8 py-4 rounded-full font-bold tracking-wider uppercase text-white text-sm glass neon-border-gold hover:bg-white/10 transition-smooth"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              data-ocid="hero.explore.button"
            >
              Explore Collection
              <ChevronDown size={16} style={{ color: "#ffd700" }} />
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-wrap gap-8 mt-12"
          >
            {[
              { value: "6+", label: "Store Locations" },
              { value: "97K+", label: "Instagram Followers" },
              { value: "50–70%", label: "Discount Offers" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col"
                data-ocid={`hero.stat.${stat.label.toLowerCase().replace(/\s+/g, "_")}`}
              >
                <span
                  className="text-2xl font-black"
                  style={{ color: "#cc0000" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-xs font-medium tracking-widest uppercase"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ zIndex: 3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <ChevronDown size={20} style={{ color: "rgba(255,255,255,0.3)" }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
