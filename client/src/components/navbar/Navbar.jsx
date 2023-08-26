import Dropdown from "./Dropdown";

const Navbar = () => {
  return (
    <nav className="overflow-hidden bg-black text-white">
      <div className="md:container mx-auto flex justify-center">
        <Dropdown className="k" />
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
    </nav>
  );
};

export default Navbar;
