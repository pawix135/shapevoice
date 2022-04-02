import logo from "../../assets/logo.png";

const Navbar: React.FunctionComponent = () => {
  return (
    <header className="flex flex-row flex-wrap justify-between py-5 px-5 items-center fixed top-0 left-0">
      <img src={logo} alt="Logo w-[120px] h-[25px]" />
      <nav className="flex flex-row gap-5 items-center">
        <a href="#product">Product</a>
        <a href="#template">Template</a>
        <a href="#blog">Blog</a>
        <a href="#pricing">Pricing</a>
      </nav>
      <div className="flex flex-row gap-5 items-center">
        <button>Sign In</button>
        <button>Start Free</button>
      </div>
    </header>
  );
};

export default Navbar;
