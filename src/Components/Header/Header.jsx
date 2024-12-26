import { Link } from "react-router-dom";
import logoImage from "../../asset/icon.png"; // Import your logo image
import { FaDollarSign } from "react-icons/fa";

export const navItems = [
  {
    name: "About",
    href: "#footer",
  },
  {
    name: "Features",
    href: "#footer",
  },
  {
    name: "Add Expenses",
    href: "/add-expense",
  },
  {
    name: "Expenses",
    href: "/list",
  },
];
export const Header = () => {
  return (
    <div className="h-24 flex justify-between items-center px-6 bg-black text-white font-caveat text-2xl">
      {/* Logo Section */}
      <Link to="/">
        <div className="flex items-center">
          <FaDollarSign className="text-white size-8 " />{" "}
        </div>
      </Link>
      <nav className="flex gap-6">
        {navItems.map(({ name, href }) => (
          <a
            href={href}
            key={href}
            className="font-bold text-xs tracking-widest text-gray-400 uppercase hover:text-white transition duration-300"
          >
            {name}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Header;
