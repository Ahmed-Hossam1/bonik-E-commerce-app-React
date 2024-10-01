import { shopItems } from "../../assets/images/images-data/data";
import { useContext } from "react";
import { ContextShopProvider } from "../../Context/ContextShop";
const Phone = () => {
  const {AddToCart, calculateTotalItems} = useContext(ContextShopProvider)
  return (
    <>
      {shopItems.map((el) => (
        <div
          className="FlashCard relative border border-gray-200 shadow-xl"
          key={el.id}
        >
          <div>
            <img
              src={el.cover}
              alt={el.name}
              className="h-[300px] object-cover"
            />
          </div>
          <div className="content  p-4">
            <h2>{el.name}</h2>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <i className="fa-solid fa-star text-yellow-500"></i>
            <div className="flex justify-between items-center">
              <span className="text-red font-bold">{el.price}.00</span>
              <span onClick={()=>AddToCart(el)}  className=" border-2 border-gray-200 p-2  text-red text-2xl rounded-md cursor-pointer  hover:bg-red hover:text-white transition duration-300">
                +
              </span>
            </div>
            <div className=" absolute top-2 left-1 bg-red text-white rounded-full px-4 py-2">
              {el.discount}% off
            </div>
            <div className="absolute top-1 right-2">
              <span className="bg-blue  text-white w-8 h-8  rounded-full mb-2 c-flex justify-center">
                {calculateTotalItems(el)}
              </span>
              <div>
                <i className="fa-solid fa-heart cursor-pointer text-xl"></i>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Phone;
