import Hero from "../Components/Hero";
import FeaturedSection from "../Components/FeaturedSection";
import CategorySection from "../Components/CategorySection";
import LatestSection from "../Components/LatestSection";
import Newsletter from "../Components/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedSection />
      <CategorySection />
      <LatestSection />
      <Newsletter />
    </>
  );
}
