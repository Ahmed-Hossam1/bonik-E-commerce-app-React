const Nav1 = () => {
  return (
    <nav className=" hidden md:block bg-blue py-2">
      <div className="container text-white c-flex  capitalize">
        <div className="flex gap-5">
          <div>
            <i className="fa-solid fa-phone mr-2"></i>
            <span>+88012 3457 7894</span>
          </div>
          <div>
            <i className="fa-solid fa-envelope mr-2"></i>
            <span>example@gmail.com</span>
          </div>
        </div>

        <div className="c-flex gap-10">
          <h4>Theme FAQ's</h4>
          <h4>Need Help</h4>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-flag"></i>
            <div>En</div>
          </div>
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-flag"></i>
            <div>usd</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav1;
