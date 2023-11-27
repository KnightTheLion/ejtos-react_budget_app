import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const CurrencySelector = () => {
  const { currency, dispatch } = useContext(AppContext);
  //const [newCurrency, setNewCurrency] = useState(currency);

  const handleCurrencyChange = (event) => {
    if (dispatch) {
      dispatch({ type: "CHG_CURRENCY", payload: event.target.value });
    }
  };

  return (
    <div className="flex gap-2">
      {" "}
      <div className="input-group-prepend">
        <label
          className="h-12 p-4 rounded-md bg-indigo-950 text-sky-400 flex items-center"
          htmlFor="inputGroupSelect02"
        >
          Currency ({currency})
        </label>
      </div>
      <select
        className="h-12 rounded-md text-black"
        id="inputGroupSelect03"
        onChange={handleCurrencyChange}
      >
        <option value="$" name="Dollar">
          $ Dollar
        </option>
        <option value="£" name="Pound">
          £ Pound
        </option>
        <option value="€" name="Euro">
          € Euro
        </option>
        <option value="₹" name="Ruppee">
          ₹ Ruppee
        </option>
      </select>
    </div>
  );
};

export default CurrencySelector;
