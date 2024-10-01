import Arrivals from "../components/Arrivals/Arrivals";
import Banners from "../components/Banners/Banners";
import Category from "../components/Category/Category";
import Discount from "../components/Discount/Discount";
import FlashDeals from "../components/FlashDeals/FlashDeals";
import Hero from "../components/Hero/Hero";
import MobilPhones from "../components/MobilPhones/MobilPhones";
import Footer from "../components/Footer/Footer.jsx";
const Home = () => {
  return (
    <>
      <Hero />
      <FlashDeals />
      <Category />
      <Arrivals />
      <Discount />
      <MobilPhones />
      <Banners />
      <Footer />
    </>
  );
};

export default Home;
