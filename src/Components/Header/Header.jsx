// import { Link } from "react-router-dom";
// import { FaDollarSign } from "react-icons/fa";

// export const navItems = [
//   {
//     name: "About",
//     href: "#footer", // Scrolls to footer section in the same page
//   },
//   {
//     name: "Features",
//     href: "#footer", // Scrolls to footer section in the same page
//   },
//   {
//     name: "Add Expenses",
//     href: "/add-expense", // Navigates to the add-expense page
//   },
//   {
//     name: "Expenses",
//     href: "/list", // Navigates to the list page
//   },
// ];

// export const Header = () => {
//   return (
//     <div className="h-32 flex justify-between items-center px-6 bg-black text-white font-caveat text-2xl">
//       {/* Logo Section */}
//       <Link to="/">
//         <div className="flex items-center text-3xl">
//           Track <FaDollarSign className="text-white size-8 " />{" "}
//         </div>
//       </Link>
      
//       <nav className="flex gap-6">
//         {navItems.map(({ name, href }) => {
//           if (href.startsWith("#")) {
//             // For anchor links that scroll to sections on the same page
//             return (
//               <a
//                 href={href}
//                 key={href}
//                 className="font-bold text-xs tracking-widest text-gray-400 uppercase hover:text-white transition duration-300"
//               >
//                 {name}
//               </a>
//             );
//           } else {
//             // For links that navigate to other pages
//             return (
//               <Link
//                 to={href}
//                 key={href}
//                 className="font-bold text-xs tracking-widest text-gray-400 uppercase hover:text-white transition duration-300"
//               >
//                 {name}
//               </Link>
//             );
//           }
//         })}
//       </nav>
//     </div>
//   );
// };

// export default Header;
import { Link} from "react-router-dom";
import { CutCornerButton } from "./CutCornerButton";

export const Header = ({ user }) => {
  return (
    <header className="sticky top-0 z-40 bg-zinc-900/50 backdrop-blur-lg">
      <div className="container">
        <div className="flex justify-between items-center h-24 md:h-28">
          <Link to={"/dashboard"}>
            <div className="font-heading text-4xl font-bold">
              <h2>Pennywise</h2>
            </div>
          </Link>
          <div className="flex gap-4 items-center">
            <CutCornerButton className="hidden md:inline-flex">
              <Link to="/signup">Sign Up</Link> {/* This links to SignUp page */}
            </CutCornerButton>
            <CutCornerButton className="hidden md:inline-flex">
              <Link to="/signin">Sign In</Link> {/* This links to SignIn page */}
            </CutCornerButton>
            <div className="size-10 relative">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 -translate-y-1"></div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-5 h-0.5 bg-zinc-300 translate-y-1"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
