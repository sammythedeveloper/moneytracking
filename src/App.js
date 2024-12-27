import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AddExpense from "./Components/AddExpense/AddExpense";
import ExpenseList from "./Components/ExpenseList/ExpenseList";
import EditExpense from "./Components//EditExpense/EditExpense";
import Header from "./Components/Header/Header";
import Home from "./Components/HomePage/Home.jsx";
import Footer from "./Components/Footer/Footer";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    const savedExpenses = JSON.parse(localStorage.getItem("expenses")) || [];
    setExpenses(savedExpenses);
  }, []);

  const addExpense = (expense) => {
    const updatedExpenses = [...expenses, expense];
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  const saveEditedExpense = (updatedExpense) => {
    const updatedExpenses = expenses.map((expense) =>
      expense.id === updatedExpense.id ? updatedExpense : expense
    );
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
    setEditingExpense(null); // Reset editing state
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter((expense) => expense.id !== id);
    setExpenses(updatedExpenses);
    localStorage.setItem("expenses", JSON.stringify(updatedExpenses));
  };

  return (
    <Router>
      <Header />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Home />
              </div>
            }
          />
          <Route
            path="/add-expense"
            element={
              <div>
                <AddExpense addExpense={addExpense} />
                <button>
                  <Link to="/" style={{ textDecoration: "none", color: "inherit" }}></Link>
                </button>
              </div>
            }
          />
          <Route
            path="/list"
            element={
              <div>
                <ExpenseList
                  expenses={expenses}
                  startEditExpense={setEditingExpense}
                  deleteExpense={deleteExpense}
                />
              </div>
            }
          />
          <Route
            path="/edit/:id"
            element={
              <EditExpense
                expenses={expenses}
                saveEditedExpense={saveEditedExpense}
                setEditingExpense={setEditingExpense}
              />
            }
          />
        </Routes>
      </div>
      {/* Footer added outside of Routes to be globally rendered */}
   
    </Router>
  );
};

export default App;
