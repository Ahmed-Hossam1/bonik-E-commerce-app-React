import BrandShops from "./BrandShops";
import Phones from "./Phones";
const MobilPhones = () => {
  return (
    <section id="MobilPhones" className="md:flex gap-10 container mt-7">
      <BrandShops />
      <Phones />
    </section>
  );
};

export default MobilPhones;
