import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesGrid } from "./components/FeaturesGrid";
import { DetailedFeatures } from "./components/DetailedFeatures";
import { PricingTable } from "./components/PricingTable";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <DetailedFeatures />
        <PricingTable />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}
