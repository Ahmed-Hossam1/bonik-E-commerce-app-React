const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="text-center text-red my-10 w-fit mx-auto capitalize text-4xl relative  font-bold after:content=['] after:absolute after:bg-blue after:w-[100px] after:h-1  after:-bottom-3 after:left-1/4 tracking-wider">
          about us{" "}
        </h2>
        <p className="my-5 capitalize leading-9 text-gray-500">
          What started small, with a single discount store and the simple idea
          of selling more for less, has grown over the last 50 years into the
          largest retailer in the world. Each week, nearly 265 million customers
          and members visit approximately 11,500 stores under 56 banners in 27
          countries and eCommerce websites. With fiscal year 2020 revenue of
          $524 billion, Walmart employs over 2.2 million associates worldwide.
          Walmart continues to be a leader in sustainability, corporate
          philanthropy and employment opportunity. It's all part of our
          unwavering commitment to creating opportunities and bringing value to
          customers and communities around the world.
        </p>
        <div className="imgs md:flex items-center gap-4 my-10 ">
          {/* img1 */}
          <div className="flex-1 ">
            <img
              className="w-full"
              src="https://th.bing.com/th/id/OIP.ODZx8uX0axGt-iPg-d9-EAHaD-?rs=1&pid=ImgDetMain"
              alt="img"
            />
          </div>
          {/* img2 */}
          <div className="flex-1 relative  after:content['] after:absolute after:bg-gray-300 after:bg-opacity-30 after:w-[100%] after:h-[100%] after:top-0 after:left-0">
            <img src="./landing.png" alt="img" className="w-full relative" />
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38618.95029024173!2d29.90797692873531!3d31.180112192609712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f5c38a0562fe85%3A0xa34cc632ec23e7!2sAlexandria%20Bibliotheca!5e0!3m2!1sen!2seg!4v1727773423743!5m2!1sen!2seg"
            className="w-full h-[500px]"
            title="map"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default About;
