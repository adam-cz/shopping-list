import React from "react";
import { FaTrashAlt, FaCheck } from "react-icons/fa";

const Item = ({ name, id, inCart, items, setItems }) => {
  const deleteHandler = () => {
    setItems(items.filter((item) => item.id !== id));
  };

  const inCartHandler = () => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            inCart: !item.inCart,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="item">
      <li className={`item-name ${inCart ? "item-done" : ""}`}>{name}</li>
      <button className="done-btn" onClick={inCartHandler}>
        <FaCheck />
      </button>
      <button className="delete-btn" onClick={deleteHandler}>
        <FaTrashAlt />
      </button>
    </div>
  );
};

export default Item;
