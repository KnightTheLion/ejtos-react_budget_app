import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { AppProvider } from "./context/AppContext";
import Budget from "./components/Budget";
import ExpenseTotal from "./components/ExpenseTotal";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";
import RemainingBudget from "./components/Remaining";

const App = () => {
  return (
    <AppProvider>
      <div className="grid gril-flow-col items-center justify-center h-screen w-full antialiased text-white bg-gradient-to-r from-indigo-950 via-blue-900 to-black px-24">
        <h1 className="mt-12 text-5xl text-center text-sky-400 drop-shadow-2xl uppercase font-semibold">
          Company's Budget Allocation
        </h1>
        <div className="grid grid-cols-3 mt-4 items-center gap-4 justify-evenly w-[1000px]">
          <div>
            <Budget />
          </div>
          <div>
            <RemainingBudget />
          </div>
          <div>
            <ExpenseTotal />
          </div>
        </div>
        <h3 className="text-3xl">Allocation</h3>
        <div>
          <div>
            <ExpenseList />
          </div>
        </div>
        <div className="grid grid-rows-2 ">
          <h3 className="text-3xl ">Change Allocation</h3>

          <div>
            <AllocationForm />
          </div>
        </div>
      </div>
    </AppProvider>
  );
};

export default App;
