import { createContext, useState } from "react";
export const ContextShopProvider = createContext();

const ContextShop = ({ children }) => {
  const [products, setproducts] = useState([]);

  const GetProductsCounts = () => {
    return products.reduce((total, product) => total + product.quantity, 0);
  };
  const AddToCart = (item) => {
    setproducts((prev) => {
      if (products.find((product) => product.id === item.id) == null) {
        return [...prev, { ...item, quantity: 1 }];
      } else {
        return products.map((product) => {
          if (product.id === item.id) {
            return { ...product, quantity: product.quantity + 1 };
          } else {
            return product;
          }
        });
      }
    });
  };
  const MinusToCart = (item) => {
    setproducts((prev) => {
      const existingProduct = products.find(
        (product) => product.id === item.id
      );
      if (existingProduct && existingProduct.quantity > 1) {
        return products.map((product) => {
          if (product.id === item.id) {
            return { ...product, quantity: product.quantity - 1 };
          } else {
            return product;
          }
        });
      } else {
        return prev.filter((product) => product.id !== item.id);
      }
    });
  };

  const RemoveCart = (item) => {
    setproducts((prev) => {
      return prev.filter((product) => product.id !== item.id);
    });
  };
  const calculateTotalPrice = () => {
    return products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };

  const calculateTotalItems = (item) => {
    const foundItem = products.find((product) => product.id === item.id);
    return foundItem ? foundItem.quantity : 0;
  };

  return (
    <ContextShopProvider.Provider
      value={{
        products,
        AddToCart,
        GetProductsCounts,
        MinusToCart,
        RemoveCart,
        calculateTotalPrice,
        calculateTotalItems,
      }}
    >
      {children}
    </ContextShopProvider.Provider>
  );
};

export default ContextShop;
