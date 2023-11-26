import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Remaining = () => {
  const { expenses, budget, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  const alertType =
    totalExpenses > budget - 0.000001 ? "bg-red-400" : "bg-emerald-500";
  return (
    <div className={`h-[75px] flex px-4 items-center rounded-md ${alertType}`}>
      <span className="text-white">Remaining: {currency} {budget - totalExpenses}</span>
    </div>
  );
};

export default Remaining;
