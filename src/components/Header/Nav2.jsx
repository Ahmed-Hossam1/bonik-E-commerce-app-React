import Nav3 from "./Nav3";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextShopProvider } from "../../Context/ContextShop";
const Nav2 = () => {
  const { GetProductsCounts } = useContext(ContextShopProvider);
  return (
    <nav className="bg-slate-50 shadow-xl py-5">
      <div className="container c-flex gap-40">
        <Link to="/home">
          <img src="./logo.6172109437bb6cb48eb8dc1f65c9964c.svg" alt="logo" />
        </Link>
        <div className="hidden  md:block flex-1">
          <form className=" relative ">
            <input
              type="search"
              placeholder="search"
              className="w-full h-full p-2 pl-10 rounded-full bg-transparent focus:outline-none border border-gray-400"
            />
            <i className="fa-solid fa-magnifying-glass absolute top-3 left-4"></i>
          </form>
        </div>
        <div className="flex items-center gap-5">
          <div>
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="relative ">
            <Link to={"/cart"}>
              <img
                src="./favicon.png"
                className="h-[32px] cursor-pointer"
                alt="ShopCart"
              />
            </Link>
            <span className="bg-green overflow-hidden w-7 h-7 text-white absolute -top-6 -right-5 rounded-full  flex justify-center items-center ">
              {GetProductsCounts()}
            </span>
          </div>
        </div>
      </div>

      <Nav3 />
    </nav>
  );
};

export default Nav2;
