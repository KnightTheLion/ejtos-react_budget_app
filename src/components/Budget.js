import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Budget = () => {
  const { budget } = useContext(AppContext);
  const [newBudget, setNewBudget] = useState(budget);
  const handleBudgetChange = (event) => {
    setNewBudget(event.target.value);
  };
  return (
    <div className=" h-[75px] bg-indigo-950 flex justify-center items-center gap-2 text-sky-400 rounded-md">
      <span>Budget: £ </span>
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
