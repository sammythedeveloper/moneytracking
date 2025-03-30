// import { Link } from "react-router-dom";
// import { FaDollarSign } from "react-icons/fa";


// export const Header = () => {
//   return (
//     <div className="h-32 flex justify-between items-center px-6 bg-black text-white font-caveat text-2xl">
//       {/* Logo Section */}
//       <Link to="/">
//         <div className="flex items-center text-3xl">
//           Track <FaDollarSign className="text-white size-8 " />{" "}
//         </div>
//       </Link>
      

//     </div>
//   );
// };

// export default Header;
import { useState } from "react";
import { Link } from "react-router-dom";
import { CutCornerButton } from "./CutCornerButton";

export const navItems = [
  { name: "About", href: "#footer" },
  { name: "Features", href: "#footer" },
  { name: "Add Expenses", href: "/add-expense" },
  { name: "Expenses", href: "/list" },
];

export const Header = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-40 bg-zinc-900/50 backdrop-blur-lg">
      <div className="container">
        <div className="flex justify-between items-center h-24 md:h-28">
          <Link to={"/dashboard"}>
            <div className="font-heading text-4xl font-bold">
              <h1 className="pl-10">MONIFY</h1>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            <div
              className="md:hidden cursor-pointer"
              onClick={toggleMenu}
            >
              {!isMenuOpen ? (
                <div className="size-10 relative">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
                  </div>
                </div>
              ) : (
                // Close (X) Button when the menu is open, positioned at the top-right
                <div className="size-1 relative top right-32 cursor-pointer">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-5 h-0.5 bg-zinc-300 rotate-45 translate-y-2"></div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-5 h-0.5 bg-zinc-300 -rotate-45 translate-y-2"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Items */}
            <nav
              className={`flex gap-6 ${isMenuOpen ? 'flex-col absolute top-0 right-0 bg-zinc-900 p-6 md:flex md:static md:flex-row md:gap-4' : 'hidden md:flex'}`}
            >
              {navItems.map(({ name, href }) => {
                const item = (
                  <span key={href} className="inline-block">
                    {href.startsWith("#") ? (
                      <a
                        href={href}
                        className="font-bold text-xs tracking-widest text-gray-400 uppercase hover:text-white transition duration-300"
                      >
                        {name}
                      </a>
                    ) : (
                      <Link
                        to={href}
                        className="font-bold text-xs tracking-widest text-gray-400 uppercase hover:text-white transition duration-300"
                      >
                        {name}
                      </Link>
                    )}
                  </span>
                );

                return (
                  <CutCornerButton className="inline-flex" key={href}>
                    {item}
                  </CutCornerButton>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;





