import React, { useState, useEffect } from "react";
import torusKnot from "../../asset/torus-knot.png";
import cube from "../../asset/cube.png";
import { CutCornerButton } from "../Header/CutCornerButton.jsx"; // Assuming this is your styled button

// Define categories for select dropdown
const categories = [
  "Food",
  "Transport",
  "Grocery",
  "Shopping",
  "Bills",
  "Other",
];

const AddExpense = ({ addExpense, editingExpense, saveEditedExpense }) => {
  const [category, setCategory] = useState(categories[0]);
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // Error messages state

  // On editing an existing expense, update the state with the current expense data
  useEffect(() => {
    if (editingExpense) {
      setCategory(editingExpense.category);
      setDate(editingExpense.date);
      setAmount(editingExpense.amount);
    } else {
      setCategory(categories[0]);
      setDate("");
      setAmount("");
    }
  }, [editingExpense]);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation: check if required fields are filled and amount is positive
    if (!date || !amount) {
      setErrorMessage("Both date and amount are required.");
      return;
    }

    if (parseFloat(amount) <= 0) {
      setErrorMessage("Amount must be a positive number.");
      return;
    }

    const newExpense = {
      id: editingExpense ? editingExpense.id : Date.now(),
      category,
      date,
      amount: parseFloat(amount),
    };

    // If editing, save the edited expense; otherwise, add a new one
    if (editingExpense) {
      saveEditedExpense(newExpense);
    } else {
      addExpense(newExpense);
      setSuccessMessage("Expense successfully added!");
      setCategory(categories[0]);
      setDate("");
      setAmount("");
    }

    setErrorMessage(""); // Clear error message if successful
    setTimeout(() => {
      setSuccessMessage(""); // Hide success message after 2 seconds
    }, 2000);
  };

  return (
    <section className="py-24 md:py-52 overflow-x-clip">
      <div className="container">
        <div className="flex justify-center">
          <div className="max-w-lg mx-auto p-6  bg-zinc-900 shadow-md rounded-lg font-caveat m-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Category:
                </label>
                <select
                  id="category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>
                      {cat}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                  Date:
                </label>
                <input
                  id="date"
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div>
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                  Amount:
                </label>
                <input
                  id="amount"
                  type="number"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-green-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  {editingExpense ? "Save Changes" : "Add Expense"}
                </button>
              </div>
            </form>

            {/* Display error message */}
            {errorMessage && <p className="mt-4 text-sm text-red-600">{errorMessage}</p>}

            {/* Display success message */}
            {successMessage && <p className="mt-4 text-sm text-green-600">{successMessage}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddExpense;

