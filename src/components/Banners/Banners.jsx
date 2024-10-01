import banner1 from "../../assets/images/banner/banner-1.png"
import banner2 from "../../assets/images/banner/banner-2.png"
import BannersCard from "./BannersCard"
const Banners = () => {
  return (
    <section id="Banners" className="mt-10">
        <div className="container">
            <div className="hidden lg:flex lg:c-flex">
                <div className="flex-1"><img src={banner1} alt="bannerImg"  className=" h-[340px] object-contain w-full"/></div>
                <div className="flex-1"><img src={banner2} alt="bannerImg" className="w-full" /></div>
            </div>
            
            <div className="cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-5">
            <BannersCard />
            </div>
        </div>
    </section>
  )
}

export default Banners