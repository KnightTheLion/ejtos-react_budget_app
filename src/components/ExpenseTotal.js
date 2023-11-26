import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ExpenseTotal = () => {
  const { expenses, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  return (
    <div className="h-[75px] flex items-center bg-blue-950 rounded-md px-4 text-sky-400">
      <span>Spent so far: {currency} {totalExpenses}</span>
    </div>
  );
};

export default ExpenseTotal;
