import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AboutSection from "./pages/AboutSection";
import BrandsSection from "./pages/BrandsSection";
import GallerySection from "./pages/GallerySection";
import HeroSection from "./pages/HeroSection";
import InstagramSection from "./pages/InstagramSection";
import LocationsSection from "./pages/LocationsSection";
import ProductsSection from "./pages/ProductsSection";

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "#141414", color: "#f5f5f5" }}
    >
      <Navbar />
      <main>
        <HeroSection />
        <BrandsSection />
        <ProductsSection />
        <GallerySection />
        <LocationsSection />
        <InstagramSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
