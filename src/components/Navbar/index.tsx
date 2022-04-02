import classNames from "classnames";
import logo from "../../assets/logo.png";
import useOffset from "../../utils/useOffset";

const Navbar: React.FunctionComponent = () => {
  const offset = useOffset();

  return (
    <header
      className={classNames(
        "flex flex-row tansition duration-300 flex-wrap justify-between py-5 px-5 box-border items-center w-screen fixed top-0 left-0",
        {
          "bg-white/60": offset,
        }
      )}
    >
      <img src={logo} alt="Logo w-[120px] h-[25px]" />
      <nav className="flex flex-row gap-5 items-center">
        <a href="#product">Product</a>
        <a href="#template">Template</a>
        <a href="#blog">Blog</a>
        <a href="#pricing">Pricing</a>
      </nav>
      <div className="flex flex-row gap-5 items-center pr-3">
        <button>Sign In</button>
        <button>Start Free</button>
      </div>
    </header>
  );
};

export default Navbar;
