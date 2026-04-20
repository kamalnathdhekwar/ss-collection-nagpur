import { ZoomIn } from "lucide-react";
import { motion } from "motion/react";

const galleryItems = [
  {
    src: "/assets/store-exterior-1.png",
    alt: "Store Front – Main Store",
    caption: "Store Front – Main Store",
    tall: false,
  },
  {
    src: "/assets/store-interior.png",
    alt: "Inside The Store",
    caption: "Inside The Store",
    tall: true,
  },
  {
    src: "/assets/store-sale.png",
    alt: "Sale – Up to 70% OFF",
    caption: "Sale – Up to 70% OFF",
    tall: false,
  },
  {
    src: "/assets/store-exterior-2.png",
    alt: "Our Locations",
    caption: "Our Locations",
    tall: false,
  },
  {
    src: "/assets/store-exterior-1.png",
    alt: "Premium Brands",
    caption: "Premium Brands",
    tall: true,
  },
  {
    src: "/assets/store-interior.png",
    alt: "Shop Now",
    caption: "Shop Now",
    tall: false,
  },
];

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #111111 0%, #0e0e0e 100%)",
      }}
      data-ocid="gallery.section"
    >
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            style={{ color: "#ffd700" }}
          >
            Visual Story
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
            Store <span className="text-gradient">Gallery</span>
          </h2>
          <p
            className="mt-4 text-base"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Experience the premium in-store atmosphere across our locations
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"
          data-ocid="gallery.grid"
        >
          {galleryItems.map((item, idx) => (
            <motion.div
              key={`${item.alt}-${idx}`}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: idx * 0.1,
              }}
              className="relative group break-inside-avoid rounded-xl overflow-hidden cursor-pointer"
              style={{ marginBottom: "1rem" }}
              data-ocid={`gallery.item.${idx + 1}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                style={{ display: "block" }}
              />

              {/* Hover overlay — warm red + gold */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(204,0,0,0.72), rgba(255,215,0,0.35))",
                }}
              >
                <div className="flex flex-col items-center gap-2 text-white">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center glass"
                    style={{ border: "1px solid rgba(255,255,255,0.3)" }}
                  >
                    <ZoomIn size={20} />
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase">
                    View
                  </span>
                </div>
              </motion.div>

              {/* Bottom caption */}
              <div
                className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.92), transparent)",
                }}
              >
                <p className="text-xs font-semibold text-white">
                  {item.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
