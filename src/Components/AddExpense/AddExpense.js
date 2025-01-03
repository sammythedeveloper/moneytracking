import React, { useState, useEffect } from "react";
import Footer from "../Footer/Footer";

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
  const [errorMessage, setErrorMessage] = useState(""); // State for error messages

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if required fields are filled and amount is positive
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
      setSuccessMessage("");
    }, 2000);
  };

  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/money.jpg)` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="h-full overflow-auto">
        {/* Sticky Form Container */}
        <div className="sticky top-20 max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg font-caveat m-10 z-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="date"
                className="block text-sm font-medium text-gray-700"
              >
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
              <label
                htmlFor="amount"
                className="block text-sm font-medium text-gray-700"
              >
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
          {errorMessage && (
            <p className="mt-4 text-sm text-red-600">{errorMessage}</p>
          )}

          {/* Display success message */}
          {successMessage && (
            <p className="mt-4 text-sm text-green-600">{successMessage}</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddExpense;
