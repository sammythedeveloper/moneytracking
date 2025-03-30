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
import AddExpense from "../AddExpense/AddExpense"
// import EditExpense from "../EditExpense/EditExpense"



export const Header = ({ user }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-40 bg-zinc-900/50 backdrop-blur-lg">
      <div className="container">
        <div className="flex justify-between items-center h-24 md:h-28">
          <Link to={"/"}>
            <div className="font-heading text-4xl font-bold">
              <h1 className="pl-10">MONIFY</h1>
            </div>
          </Link>
          <div className="flex items-center gap-4">
            {/* Hamburger Icon for small screens */}
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
                  <CutCornerButton className="inline-flex">
                <div className="size-1 relative top right-48 cursor-pointer">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-5 h-0.5 bg-zinc-300 rotate-45 translate-y-2"></div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-5 h-0.5 bg-zinc-300 -rotate-45 translate-y-2"></div>
                  </div>
                    </div>
                    </CutCornerButton>
              )}
            </div>
            <div className=" flex gap-4 items-center">  
              <AddExpense/>
            <div className="size-10 relative">
              <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className=" w-5 h-0.5 bg-zinc-300 -translate-y-1 "></div>
              </div>
              <div className=" absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className=" w-5 h-0.5 bg-zinc-300 translate-y-1 "></div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;





