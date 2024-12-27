import React from 'react';
import { Link } from "react-router-dom";
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <div
      className="relative w-full h-[120vh] bg-cover bg-center flex flex-col"  // Increased height here
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/money.jpg)` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Main Content */}
      <div className="z-10 text-center text-white flex-grow flex items-center justify-center font-caveat ">
        <div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-10 drop-shadow-lg">
            Welcome to Your Expense Tracker
          </h1>
          <p className=" font-semibold text-xl md:text-2xl mb-10 px-6 drop-shadow-lg">
            Track your spending, stay on top of your budget, and take control of your financial future!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            {/* Add Expense Button */}
            <Link to="/add-expense">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                Add Expense
              </button>
            </Link>

            {/* Expense List Button */}
            <Link to="/list">
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-700 text-white font-semibold rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                Expense List
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer, placed at the bottom */}
      <footer className="mt-auto">
        <Footer />
      </footer>
      {/* Optional: Parallax Scroll Effect for background */}
      <style jsx>{`
        .bg-cover {
          background-position: center;
          background-attachment: fixed;
        }
      `}</style>
    </div>
  );
};

export default Home;
