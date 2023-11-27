import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget, expenses, currency } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);
  const handleBudgetChange = (event) => {
    if (event.target.value < totalExpenses) {
      alert("You cannot reduce the budget value lower than the spending");
    }
    setNewBudget(event.target.value);
  };

  return (
    <div className=" h-[75px] bg-indigo-950 flex justify-center items-center gap-2 text-sky-400 rounded-md">
      <span>Budget: {currency} </span>
      <input
        type="number"
        step="10"
        value={newBudget}
        onChange={handleBudgetChange}
        className="text-black rounded-sm"
      ></input>
    </div>
  );
};
export default Budget;
