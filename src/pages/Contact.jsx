import { useState } from "react";
const Contact = () => {
  const [Input, SetInput] = useState({ Email: "", User: "", Password: "" });

  const handlEmail = (e) => {
    SetInput({ ...Input, Email: e.target.value });
  };
  const handlUser = (e) => {
    SetInput({ ...Input, User: e.target.value });
  };
  const handlPassword = (e) => {
    SetInput({ ...Input, Password: e.target.value });
  };
  return (
    <form className=" mt-2 bg-gradient-to-tr from-red to-blue h-[80vh] flex flex-col justify-center  py-20 px-10 rounded-md shadow-xl">
      <div className="container">
        <h1  className="text-center capitalize text-4xl text-white  mb-5 font-bold"> Contact us</h1>
        <label className="input input-bordered flex items-center mb-5 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input
            type="email"
            className="grow"
            placeholder="Email"
            value={Input.Email}
            onChange={handlEmail}
          />
        </label>
        <label className="input input-bordered flex items-center mb-5 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Username"
            value={Input.User}
            onChange={handlUser}
          />
        </label>
        <label className="input input-bordered flex items-center mb-5 gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="w-full grow"
            value={Input.Password}
            onChange={handlPassword}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="submit"
            disabled={!Input.Email || !Input.User || !Input.Password}
            className="grow font-bold text-xl tracking-wide capitalize cursor-pointer"
            value="submit"
          />
        </label>
      </div>
    </form>
  );
};

export default Contact;
