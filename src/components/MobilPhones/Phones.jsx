import Phone from "./Phone";
const Phones = () => {
  return (
    <div className="flex-1">
      <span className="text-3xl  font-bold ml-2 mt-5 mb-10 inline-block capitalize">
        mobile phones
      </span>
      <div className="Phones grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <Phone />
      </div>
    </div>
  );
};

export default Phones;
