import { aside } from "../../assets/images/images-data/data";
const Aside = () => {
  return (
    <aside className="md:w-1/4">
      <ul>
        {aside.map((el) => (
          <div key={el.id} className=" flex items-center gap-4 mb-3 hover:bg-red p-2 hover:text-white transition duration-300">
            <img src={el.image} alt={el.title} className="w-[50px] md:max-w-[40px]" />
            <p className="text-xl ">{el.title}</p>
          </div>
        ))}
      </ul>
    </aside>
  );
};
export default Aside;
