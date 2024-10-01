const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 mt-8 md:mt-0">
      <aside>
        <div>
          <img src="./logo.6172109437bb6cb48eb8dc1f65c9964c.svg" alt="" />
        </div>
        <p className="leading-6">
          E-Commerce website
          <br />
          Providing Reliable Products since 1992
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover" href="/">
          Addproduct
        </a>
        <a className="link link-hover" href="/">
          RemoveProduct
        </a>
        <a className="link link-hover" href="/">
          Marketing
        </a>
        <a className="link link-hover" href="/">
          Advertisement
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">website</h6>
        <a className="link link-hover" href="/">
          About us
        </a>
        <a className="link link-hover" href="/">
          Contact
        </a>
        <a className="link link-hover" href="/">
          cart
        </a>
        <a className="link link-hover" href="/">
          Press kit
        </a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover" href="/">
          Terms of use
        </a>
        <a className="link link-hover" href="/">
          Privacy policy
        </a>
        <a className="link link-hover" href="/">
          Cookie policy
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
