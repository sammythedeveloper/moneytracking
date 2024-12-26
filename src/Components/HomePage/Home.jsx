import React from 'react';
import { Link } from "react-router-dom";
import backgroundImage from '../../asset/money.jpg'; 


const Home = () => {
  return (
    <div
      className="bg-cover bg-center h-screen text-white flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // 
    >
      <h1 className="text-4xl font-bold mb-24">Welcome to Expense Tracker</h1>
      <div className="button-container mt-24">
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700">
          <Link to="/add-expense" className="link-button">Add Expense</Link>
        </button>
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-700 mt-4">
          <Link to="/list" className="link-button">Expense List</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
