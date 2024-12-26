import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welcome to Expense Tracker</h1>
      <div className="button-container">
        <button>
          <Link to="/add-expense" className="link-button">Add Expense</Link>
        </button>
        <button>
          <Link to="/list" className="link-button">Expense List</Link>
        </button>
      </div>
    </div>
  );
}

export default Home;
