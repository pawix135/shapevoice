import logo from "../../assets/logo.png";

const Navbar: React.FunctionComponent = () => {
  return (
    <header className="flex flex-row justify-between py-5 px-5">
      <img src={logo} alt="Logo" />
      <nav className="flex flex-row gap-5 flex-1">
        <a href="#">Product</a>
        <a href="#">Template</a>
        <a href="#">Blog</a>
        <a href="#">Pricing</a>
      </nav>
      <div>
        <button>Sign In</button>
        <button>Start Free</button>
      </div>
    </header>
  );
};

export default Navbar;
