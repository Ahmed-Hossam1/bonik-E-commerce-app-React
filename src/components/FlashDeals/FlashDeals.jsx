import FlashCard from "./FlashCard";
const FlashDeals = () => {
  return (
    <section id="FlashDeals" className="mt-8">
      <div className="container">
        <span>
          <i className="fa-solid fa-bolt text-red text-3xl"></i>
          <span className="text-3xl  font-bold ml-2 mt-5 mb-10 inline-block capitalize">
            flash deals
          </span>
        </span>
        <div className="FlashCards">
          <FlashCard />
        </div>
      </div>
    </section>
  );
};

export default FlashDeals;
