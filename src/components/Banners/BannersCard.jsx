const cards = [
  {
    id: 1,
    icon: "fa-solid fa-truck-fast",
    title: "Worldwide Delivery",
    descreption:
      "We offer competitive prices on our 100 million plus product any range.",
  },
  {
    id: 2,
    icon: "fa-solid fa-id-card",
    title: "Safe Payment",
    descreption:
      "We offer competitive prices on our 100 million plus product any range.",
  },
  {
    id: 3,
    icon: "fa-solid fa-shield",
    title: "Shop With Confidence",
    descreption:
      "We offer competitive prices on our 100 million plus product any range.",
  },
  {
    id: 4,
    icon: "fa-solid fa-headset",
    title: "24/7 Support",
    descreption:
      "We offer competitive prices on our 100 million plus product any range.",
  },
];
const newcards = cards.map((card) => {
  return (
    <div className="box border border-gray-200 p-5 shadow-xl  md:my-10" key={card.id}>
      <div className=" flex text-3xl my-5">
        <i className={`${card.icon} mx-auto `}></i>
      </div>
      <div className="text">
        <h2 className="font-bold text-center capitalize my-3 ">{card.title}</h2>
        <p className="leading-8 capitaliz text-gray-500 text-center"> {card.descreption}</p>
      </div>
    </div>
  );
});
const BannersCard = () => {
  return <>{newcards}</>;
};

export default BannersCard;
