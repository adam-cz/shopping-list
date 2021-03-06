import React from "react";
import { v4 as uuidv4 } from "uuid";
import { FaPlus } from "react-icons/fa";

const Form = ({ input, setInput, items, setItems, setFilter }) => {
  const inputHandleChange = (e) => {
    setInput(e.target.value);
  };
  const addItem = (e) => {
    e.preventDefault();
    setItems([...items, { name: input, inCart: false, id: uuidv4() }]);
    setInput("");
  };
  const filterHandler = (e) => {
    setFilter(e.target.value);
  };

  return (
    <form className="form">
      <input
        value={input}
        onChange={inputHandleChange}
        type="text"
        placeholder="Přidejte položku..."
        required
      />
      <button onClick={addItem}>
        <FaPlus className="react-icon" />
      </button>
      <select onChange={filterHandler}>
        <option value="all">Vše</option>
        <option value="done">V košíku</option>
        <option value="todo">Koupit</option>
      </select>
    </form>
  );
};

export default Form;
