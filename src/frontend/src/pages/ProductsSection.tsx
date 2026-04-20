import { Tag } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface Product {
  name: string;
  brand: string;
  image: string;
  badge: string;
}

const categories = ["Shoes", "Clothing", "Sports Gear"] as const;
type Category = (typeof categories)[number];

const products: Record<Category, Product[]> = {
  Shoes: [
    {
      name: "Air Zoom Pegasus 39",
      brand: "Nike",
      image: "/assets/generated/shoe-nike.dim_600x400.jpg",
      badge: "Up to 60% OFF",
    },
    {
      name: "RS-X Efekt",
      brand: "Puma",
      image: "/assets/generated/shoe-puma.dim_600x400.jpg",
      badge: "Up to 55% OFF",
    },
    {
      name: "Floatride Energy 5",
      brand: "Reebok",
      image: "/assets/generated/shoe-reebok.dim_600x400.jpg",
      badge: "Up to 50% OFF",
    },
  ],
  Clothing: [
    {
      name: "Dri-FIT Training Set",
      brand: "Nike",
      image: "/assets/generated/clothing-tshirt.dim_600x400.jpg",
      badge: "Up to 70% OFF",
    },
    {
      name: "Evostripe Tracksuit",
      brand: "Puma",
      image: "/assets/generated/clothing-tshirt.dim_600x400.jpg",
      badge: "Up to 65% OFF",
    },
    {
      name: "Identity Athletics",
      brand: "Reebok",
      image: "/assets/generated/clothing-tshirt.dim_600x400.jpg",
      badge: "Up to 60% OFF",
    },
  ],
  "Sports Gear": [
    {
      name: "Cricket Kit Pro",
      brand: "Nike",
      image: "/assets/generated/sports-gear.dim_600x400.jpg",
      badge: "Up to 50% OFF",
    },
    {
      name: "Tennis Racket Elite",
      brand: "Puma",
      image: "/assets/generated/sports-gear.dim_600x400.jpg",
      badge: "Up to 55% OFF",
    },
    {
      name: "Training Bundle",
      brand: "Reebok",
      image: "/assets/generated/sports-gear.dim_600x400.jpg",
      badge: "Up to 60% OFF",
    },
  ],
};

function ProductCard({
  product,
  index,
  category,
}: { product: Product; index: number; category: Category }) {
  const getAnimation = (cat: Category) => {
    if (cat === "Shoes") return { scale: 1.06, rotate: 1.5 };
    if (cat === "Clothing") return { y: -8, opacity: 1 };
    return { y: -4 };
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={getAnimation(category)}
      className="group relative rounded-2xl overflow-hidden cursor-default"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
      data-ocid={`products.${category.toLowerCase().replace(/\s+/g, "_")}.item.${index + 1}`}
    >
      {/* Discount badge */}
      <div
        className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold text-white"
        style={{
          background: "linear-gradient(135deg, #cc0000, #990000)",
          boxShadow: "0 0 12px rgba(204,0,0,0.45)",
        }}
      >
        <Tag size={10} />
        {product.badge}
      </div>

      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Info */}
      <div className="p-5">
        <p
          className="text-xs font-bold tracking-[0.2em] uppercase mb-1"
          style={{ color: "#ffd700" }}
        >
          {product.brand}
        </p>
        <h3 className="text-base font-bold text-white tracking-tight">
          {product.name}
        </h3>
        <div className="mt-3 flex items-center justify-between">
          <span
            className="text-xs font-medium tracking-wider uppercase"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Available In-Store
          </span>
          <div
            className="w-6 h-6 rounded-full flex items-center justify-center"
            style={{
              background: "rgba(204,0,0,0.15)",
              border: "1px solid rgba(204,0,0,0.3)",
            }}
          >
            <span style={{ color: "#cc0000", fontSize: 12, fontWeight: 700 }}>
              →
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState<Category>("Shoes");

  return (
    <section
      id="products"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0d0d0d 0%, #111111 100%)",
      }}
      data-ocid="products.section"
    >
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: "#cc0000" }}
          >
            What We Offer
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Our <span className="text-gradient">Collection</span>
          </h2>
          <p
            className="mt-4 text-base"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Trending picks across Nike, Puma & Reebok — all at massive discounts
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex justify-center mb-10 gap-2 flex-wrap"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          data-ocid="products.category.tab"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className="px-6 py-2.5 rounded-full text-sm font-bold tracking-wider uppercase transition-smooth"
              style={
                activeTab === cat
                  ? {
                      background: "linear-gradient(135deg, #cc0000, #990000)",
                      color: "#ffffff",
                      boxShadow: "0 0 20px rgba(204,0,0,0.45)",
                    }
                  : {
                      background: "rgba(255,255,255,0.05)",
                      color: "rgba(255,255,255,0.5)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }
              }
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              data-ocid={`products.tab.${cat.toLowerCase().replace(/\s+/g, "_")}`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            data-ocid={`products.${activeTab.toLowerCase().replace(/\s+/g, "_")}.list`}
          >
            {products[activeTab].map((product, i) => (
              <ProductCard
                key={product.name}
                product={product}
                index={i}
                category={activeTab}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <p
            className="text-sm mb-4"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            All products available exclusively at our stores. Prices updated
            regularly.
          </p>
          <motion.button
            onClick={() =>
              document
                .querySelector("#locations")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-3 rounded-full font-bold tracking-wider uppercase text-sm text-white glass neon-border-red hover:bg-white/5 transition-smooth"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            data-ocid="products.find_store.button"
          >
            Find Your Nearest Store →
          </motion.button>
        </motion.div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
