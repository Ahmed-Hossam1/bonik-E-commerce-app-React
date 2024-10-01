import React, { useState } from "react";
import { Link } from "react-router-dom";

const Links = [
  {
    title: "home",
  },
  {
    title: "about",
  },
  {
    title: "cart ",
  },

  {
    title: "contact",
  },
];

const newLinks = Links.map((link, index) => {
  return (
    <Link
      to={link.title}
      key={index}
      className={`${
        index === Links.length - 1 ? "mr-0" : "mr-5"
      } capitalize cursor-pointer hover:text-red transition duration-200`}
    >
      {link.title}
    </Link>
  );
});
const Nav3 = () => {
  const [Toogle, setToogle] = useState(false);
  return (
    <nav className="pt-5 relative">
      <div className="container flex flex-wrap justify-between gap-10 items-center">
        <div className="flex items-center gap-4">
          <i className=" fa-solid fa-border-all text-3xl"></i>
          <span>Categories </span>
          <span>
            <i className="fa-solid fa-arrow-down"></i>
          </span>
        </div>
        <div className="hidden md:flex">{newLinks}</div>
        <div className=" block md:hidden  ">
          <i
            className="fa-solid fa-bars text-3xl cursor-pointer text-red"
            onClick={() => setToogle(!Toogle)}
          ></i>
          <div
            className={`${
              Toogle ? "w-[50%]" : "hidden"
            }  h-[100vh] p-5 bg-slate-100 shadow-2xl absolute left-0 -top-9 z-[99] `}
          >
            <div
              className="absolute right-5 top-0 cursor-pointer text-3xl hover:text-red"
              onClick={() => setToogle(!Toogle)}
            >
              x
            </div>
            <ul>
              {Links.map((link, index) => (
                <Link to={link.title} key={index}>
                  <li className=" my-10 capitalize cursor-pointer hover:text-red transition duration-200">
                    {link.title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav3;
