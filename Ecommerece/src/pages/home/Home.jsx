import Filter from "../../components/filter/Filter";
import HeroSection from "../../components/herosection/HeroSection";
import Layout from "../../components/layout/Layout";
import ProductCard from "../../components/productcard/ProductCard";
import Testimonial from "../../components/testimonial/Testimonial";
import Track from "../../components/track/Track";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
