import logoImage from "../asset/money.jpg"; // Import your logo image

export const navItems = [
  {
    name: "About",
    href: "#About",
  },
  {
    name: "Features",
    href: "#feature",
  },
  {
    name: "Add Expenses",
    href: "#pricing",
  },
  {
    name: "Expenses",
    href: "#testimonials",
  },
];
export const Header = () => {
  return (
    <div className="h-24 flex justify-between items-center px-6 bg-black text-white font-caveat text-2xl">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src={logoImage} alt="Logo" className="h-20 w-auto" />{" "}
      </div>
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
