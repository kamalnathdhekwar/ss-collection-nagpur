import { ExternalLink, Heart, Instagram, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const mockPosts = [
  {
    img: "/assets/store-exterior-1.png",
    likes: "2.4K",
    comments: "48",
    caption: "Premium brands, unbeatable prices 🔥 Visit us today!",
  },
  {
    img: "/assets/store-interior.png",
    likes: "3.1K",
    comments: "62",
    caption: "Fresh new stock just arrived 👟 Nike, Puma & more!",
  },
  {
    img: "/assets/store-sale.png",
    likes: "4.8K",
    comments: "115",
    caption: "SALE IS LIVE 🎉 Up to 70% OFF on top brands!",
  },
  {
    img: "/assets/store-exterior-2.png",
    likes: "1.9K",
    comments: "37",
    caption: "Find us near you — 6 locations across Central India 📍",
  },
  {
    img: "/assets/store-exterior-1.png",
    likes: "2.7K",
    comments: "54",
    caption: "Nike Air Max collection is here! Don't miss out 👟",
  },
  {
    img: "/assets/store-interior.png",
    likes: "1.5K",
    comments: "28",
    caption: "Your one-stop shop for branded sportswear 🏆",
  },
];

export default function InstagramSection() {
  return (
    <section
      id="instagram"
      className="relative py-24 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #111111 0%, #0a0a0a 100%)",
      }}
      data-ocid="instagram.section"
    >
      <div className="section-divider absolute top-0 left-0 right-0" />

      {/* BG glow — warm gold instead of cyan */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(255,215,0,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-5 mx-auto"
            style={{
              background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
              boxShadow: "0 0 30px rgba(253,29,29,0.4)",
            }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{
              duration: 2.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          >
            <Instagram size={28} color="white" />
          </motion.div>

          <p
            className="text-xs font-bold tracking-[0.3em] uppercase mb-3"
            style={{ color: "#ffd700" }}
          >
            Follow Our Movement
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white">
            <span className="text-gradient">@sscollectionnagpur</span>
          </h2>

          <div className="flex items-center justify-center gap-8 mt-6">
            <div className="text-center">
              <div className="text-2xl font-black text-white">97K+</div>
              <div
                className="text-xs font-medium tracking-widest uppercase mt-0.5"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Followers
              </div>
            </div>
            <div
              className="w-px h-10"
              style={{ background: "rgba(255,255,255,0.1)" }}
            />
            <div className="text-center">
              <div className="text-2xl font-black text-white">500+</div>
              <div
                className="text-xs font-medium tracking-widest uppercase mt-0.5"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Posts
              </div>
            </div>
            <div
              className="w-px h-10"
              style={{ background: "rgba(255,255,255,0.1)" }}
            />
            <div className="text-center">
              <div className="text-2xl font-black text-white">6</div>
              <div
                className="text-xs font-medium tracking-widest uppercase mt-0.5"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Locations
              </div>
            </div>
          </div>
        </motion.div>

        {/* Instagram Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10"
          data-ocid="instagram.grid"
        >
          {mockPosts.map((post, idx) => (
            <motion.div
              key={`ig-${post.img}-${post.likes}`}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative group aspect-square rounded-xl overflow-hidden cursor-pointer"
              data-ocid={`instagram.post.item.${idx + 1}`}
            >
              <img
                src={post.img}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover overlay */}
              <motion.div
                className="absolute inset-0 flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(131,58,180,0.85), rgba(253,29,29,0.75))",
                }}
              >
                <Instagram size={22} color="white" />
                <div className="flex items-center gap-3 text-white text-xs font-bold">
                  <span className="flex items-center gap-1">
                    <Heart size={12} fill="white" /> {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle size={12} fill="white" /> {post.comments}
                  </span>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://instagram.com/sscollectionnagpur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-bold text-sm tracking-wider uppercase text-white"
            style={{
              background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
              boxShadow: "0 0 30px rgba(253,29,29,0.3)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 50px rgba(253,29,29,0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            data-ocid="instagram.follow.button"
          >
            <Instagram size={18} />
            Follow on Instagram
            <ExternalLink size={14} />
          </motion.a>
          <p
            className="mt-4 text-xs font-medium"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            Join 97K+ followers for daily drops, offers &amp; store updates
          </p>
        </motion.div>
      </div>

      <div className="section-divider absolute bottom-0 left-0 right-0" />
    </section>
  );
}
