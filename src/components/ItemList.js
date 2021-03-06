import React from "react";
import Item from "./Item";

const ItemList = ({ items, setItems, filteredItems }) => {
  return (
    <ul className="item-list">
      {filteredItems.map((item) => {
        return (
          <Item
            name={item.name}
            key={item.id}
            id={item.id}
            inCart={item.inCart}
            items={items}
            setItems={setItems}
          />
        );
      })}
    </ul>
  );
};

export default ItemList;
