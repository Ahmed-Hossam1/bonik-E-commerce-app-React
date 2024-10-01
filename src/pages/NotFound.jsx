const NotFound = () => {
  return (
    <div className="container absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
      <p className="leading-8 capitalize text-md ">
        the page you looking for may have been moved <br /> , deleted or
        possibly never existed{" "}
      </p>
      <div className="text-red text-8xl md:text-9xl opacity-50">404</div>
    </div>
  );
};

export default NotFound;
