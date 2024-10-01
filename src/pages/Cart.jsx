import { useContext } from "react";
import { ContextShopProvider } from "../Context/ContextShop";
const Cart = () => {
  const { products, AddToCart, MinusToCart, RemoveCart, calculateTotalPrice } =
    useContext(ContextShopProvider);

  return (
    <div className="cart">
      <div className="container">
        <h1 className="uppercase text-3xl mt-8 font-bold"> cart</h1>
        {products.length !== 0 ? (
          products.map((product) => (
            <div className="overflow-x-auto w-full " key={product.id}>
              <table className="table">
                {/* head */}
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>{product.id}</th>
                    <td>
                      <img
                        src={product.cover}
                        alt="img"
                        className="h-[100px] object-contain"
                      />
                    </td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td className="p-5 ">
                      <i
                        className="fa-solid fa-plus bg-green text-white block md:inline  text-center px-3 py-1 mr-0 md:mr-5 rounded-md cursor-pointer"
                        onClick={() => AddToCart(product)}
                      ></i>
                      <span className="inline-block w-full md:w-fit mt-2 text-center ">
                        {product.quantity}
                      </span>
                      <i
                        className="fa-solid fa-minus bg-green text-white block md:inline  text-center  px-3 py-1 ml-0 md:mx-5 rounded-md cursor-pointer"
                        onClick={() => MinusToCart(product)}
                      ></i>
                      <button
                        onClick={() => RemoveCart(product)}
                        className="mx-0 4 bg-red p-2 w-full md:w-fit rounded-md text-white capitalize mt-2 md:mt-0 md:mx- "
                      >
                        remove
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))
        ) : (
          <div className=" capitalize text-4xl my-3"> your cart is empty </div>
        )}
        {products.length > 0 ? (
          <div className=" capitalize text-2xl font-bold mt-3  ">
            total price :
            <span className="bg-red text-white px-5 py-1 rounded-md">
              ${calculateTotalPrice()}
            </span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
