// import React from "react";
// import { Link } from "react-router-dom";
// import Footer from "../Footer/Footer";

// const Home = () => {
//   return (
//     <div
//       className="relative w-full h-[120vh] bg-cover bg-center flex flex-col" // Increased height here
//       style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/money.jpg)` }}
//     >
//       <div className="absolute inset-0 bg-black opacity-40"></div>
//       <div className="z-10 text-center text-white flex-grow flex items-center justify-center font-caveat ">
//         <div>
//           <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-10 drop-shadow-lg">
//             Welcome to Your Expense Tracker
//           </h1>
//           <p className=" font-semibold text-xl md:text-2xl mb-10 px-6 drop-shadow-lg">
//             Track your spending, stay on top of your budget, and take control of
//             your financial future!
//           </p>
//           <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
//             <Link to="/add-expense">
//               <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
//                 Add Expense
//               </button>
//             </Link>
//             <Link to="/list">
//               <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
//                 Expense List
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Footer, placed at the bottom */}
//       <footer className="mt-auto">
//         <Footer />
//       </footer>
//       {/* Optional: Parallax Scroll Effect for background */}
//       <style jsx>{`
//         .bg-cover {
//           background-position: center;
//           background-attachment: fixed;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Home;
import { Hexagon } from "./Hexagon";
import { Circle } from "./Circle";
import torusKnot from "../../asset/torus-knot.png";
import cube from "../../asset/cube.png";
import { CutCornerButton } from "../Header/CutCornerButton";

export const loginItems = [
  {
    buttonVariant: "tertiary",
    name: "Login",
    href: "/signin",
  },
  {
    buttonVariant: "primary",
    name: "SignUp",
    href: "/signup",
  },
];

export const Landing = () => {
  return (
      <section className=" py-24 md:py-52 overflow-x-clip ">
        <div className=" container">
          <p className=" uppercase font-extrabold text-center text-zinc-500 tracking-wider">
            Introducing Flowture
          </p>
          <h1 className=" font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4 max-w-3xl mx-auto ">
            Where Time Meets Efficiency
          </h1>
          <p className=" text-center text-xl md:text-2xl mt-6 text-zinc-400 max-w-xl mx-auto ">
            Flowture is your smart planner that helps you organize,prioritize
            and achieve moree with less effort day by day.
        </p>
        <div className=" flex justify-center mt-10">
          <CutCornerButton>Get Started</CutCornerButton>
        </div>
          <div className=" flex justify-center mt-24">
            <div className=" inline-flex relative z-0 ">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Hexagon className="size-[1800px]" />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Hexagon className="size-[1100px]" />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Hexagon className="size-[500px]" />
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Circle className=" absolute left-[400px] -top-[170px] ">
                  <img
                    src={torusKnot}
                    alt="3D torus knot shape"
                    className="size-[140px]"
                  />
                </Circle>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <Circle className=" absolute -left-[600px] -top-[80px] ">
                  <img
                    src={cube}
                    alt="3D cube shape"
                    className="size-[140px]"
                  />
                </Circle>
              </div>
            </div>
        </div>
        <div className=" flex justify-center flex-col items-center mt-40 md:mt-80 gap-4 ">
          <div className=" h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex justify-center pt-2 rounded-full">
            <div className=" justify-center pt-2 rounded-full "></div>
          </div>
          <p className="uppercase text-zinc-500 font-extrabold tracking-wider">
            Scroll to learn more
          </p>
        </div>
        </div>
      </section>
  );
};

export default Landing;
