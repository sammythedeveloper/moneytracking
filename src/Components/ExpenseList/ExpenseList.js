import React from "react";
import { Link } from "react-router-dom";
import ExpenseChart from "./ExpenseChart/ExpenseChart";

const ExpenseList = ({ expenses, deleteExpense }) => {
  // Calculate total expenses
  const totalExpenses = expenses.reduce(
    (acc, expense) => acc + expense.amount,
    0
  );

  // Categorize expenses by type
  const categorizedExpenses = expenses.reduce((acc, expense) => {
    if (!acc[expense.category]) {
      acc[expense.category] = [];
    }
    acc[expense.category].push(expense);
    return acc;
  }, {});

  return (
    <div className="p-6 min-h-screen font-caveat">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-gray-800">
          Your Expense List
        </h1>
        <div className="w-full max-w-3xl mx-auto mt-6">
          <ExpenseChart expenses={expenses} />
        </div>
      </div>
      <div className="mb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.keys(categorizedExpenses).map((category) => (
            <div
              key={category}
              className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {category}
              </h3>
              <p className="text-xl font-medium text-green-600">
                $
                {categorizedExpenses[category]
                  .reduce((acc, item) => acc + item.amount, 0)
                  .toFixed(2)}
              </p>
            </div>
          ))}

          {/* Total Expenses Box */}
          <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">
              Total Expenses
            </h3>
            <p className="text-xl font-medium text-red-600">
              ${totalExpenses.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Expense Table Wrapper for Responsiveness */}
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Category
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Date
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Amount
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Edit
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id} className="border-b">
                <td className="px-4 py-2 text-sm text-gray-700">
                  {expense.category}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  {new Date(expense.date).toLocaleDateString()}
                </td>
                <td className="px-4 py-2 text-sm text-gray-700">
                  ${expense.amount.toFixed(2)}
                </td>
                <td className="px-4 py-2 text-sm text-blue-600">
                  <Link to={`/edit/${expense.id}`}>
                    <button className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
                      Edit
                    </button>
                  </Link>
                </td>
                <td className="px-4 py-2 text-sm text-red-600">
                  <button
                    className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                    onClick={() => deleteExpense(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ExpenseList;
