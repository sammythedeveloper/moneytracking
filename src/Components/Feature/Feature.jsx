import React from "react";
import { CutCornerButton } from "../Header/CutCornerButton";
import AppLayout from "../AppLayout/AppLayout";

export const Features = () => {
  return (
      <section className="bg-zinc-900 text-white py-20">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Features</h2>

          {/* Track Expenses */}
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-semibold">Track Your Expenses</h3>
            <p className="text-xl mt-4">
              Quickly add your expenses and categorize them to understand where
              your money is going.
            </p>
            <CutCornerButton className="mt-4">Add an Expense</CutCornerButton>
          </div>

          {/* Spending Summary */}
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-semibold">View Your Spending</h3>
            <p className="text-xl mt-4">
              Get insights on your spending habits with easy-to-read charts and
              graphs.
            </p>
            {/* Insert example graph component here */}
          </div>

          {/* Budget Goals */}
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-semibold">Set Budget Goals</h3>
            <p className="text-xl mt-4">
              Set monthly spending limits and track how much you’ve spent
              towards each goal.
            </p>
            {/* Insert progress bar component here */}
          </div>

          {/* Get Started Button */}
          <div className="text-center mt-12">
            <CutCornerButton>Start Tracking</CutCornerButton>
          </div>
        </div>
      </section>
  );
};
