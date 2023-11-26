import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const AllocationForm = (props) => {
  const { dispatch, remaining, currency } = useContext(AppContext);

  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [action, setAction] = useState("");

  const submitEvent = () => {
    if (cost > remaining) {
      alert("The value cannont exceed remaining funds  £" + remaining);
      setCost("");
      return;
    }

    const expense = {
      name: name,
      cost: parseInt(cost),
    };

    if (action === "Reduce") {
      dispatch({
        type: "RED_EXPENSE",
        payload: expense,
      });
    } else {
      dispatch({
        type: "ADD_EXPENSE",
        payload: expense,
      });
    }
  };

  return (
    <div className="w-full">
      <div className="text-black">
        <div className="grid grid-flow-col justify-between">
          <div className="flex gap-2">
            <div className="input-group-prepend">
              <label
                className="h-12 p-4 rounded-md bg-indigo-950 text-sky-400 flex items-center"
                htmlFor="inputGroupSelect01"
              >
                Department
              </label>
            </div>
            <select
              className="h-12 rounded-md text-black"
              id="inputGroupSelect01"
              onChange={(event) => setName(event.target.value)}
            >
              <option defaultValue>Choose...</option>
              <option value="Marketing" name="marketing">
                {" "}
                Marketing
              </option>
              <option value="Sales" name="sales">
                Sales
              </option>
              <option value="Finance" name="finance">
                Finance
              </option>
              <option value="HR" name="hr">
                HR
              </option>
              <option value="IT" name="it">
                IT
              </option>
              <option value="Admin" name="admin">
                Admin
              </option>
            </select>
          </div>
          <div className="flex gap-2">
            <div className="input-group-prepend">
              <label
                className="h-12 p-4 rounded-md bg-indigo-950 text-sky-400 flex items-center"
                htmlFor="inputGroupSelect02"
              >
                Allocation
              </label>
            </div>
            <select
              className="h-12 rounded-md text-black"
              id="inputGroupSelect02"
              onChange={(event) => setAction(event.target.value)}
            >
              <option defaultValue value="Add" name="Add">
                Add
              </option>
              <option value="Reduce" name="Reduce">
                Reduce
              </option>
            </select>
          </div>
          <div className="flex gap-2 items-center">
            <span className="text-2xl text-sky-400">{currency}</span>
            <input
              required="required"
              type="number"
              id="cost"
              value={cost}
              className="h-12 rounded-md text-black px-2"
              onChange={(event) => setCost(event.target.value)}
            ></input>
            <button
              className="h-12 bg-blue-700 p-4 rounded-md flex items-center text-white"
              onClick={submitEvent}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
