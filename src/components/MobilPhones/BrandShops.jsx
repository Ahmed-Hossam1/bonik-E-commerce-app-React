import { Brands } from "../../assets/images/images-data/data";

const BrandShops = () => {
  return (
    <aside className="md:w-1/4 border border-gray-200 shadow-xl h-[700px] p-5">
      <div className="c-flex mb-10 mt-2 relative">
        <span className="font-bold text-2xl capitalize md:after:content[ | ] md:after:absolute after:bg-gray-300 after:h-10 after:w-1 after:left-1/2 ">brands</span>
        <span className="text-gray-400 font-bold capitalize text-xl">shops</span>
      </div>
      <ul>
        {Brands.map((el , index) => (
          <div className=" flex items-center gap-4 mb-10 hover:bg-red p-2 hover:text-white transition duration-300"
          key={index}
          >
            <img src={el.cover} alt={el.name} className="" />
            <p className="text-xl capitalize ">{el.name}</p>
          </div>
        ))}
        <div className="capitalize text-center">view all brands</div>
      </ul>
    </aside>
  );
};

export default BrandShops;
