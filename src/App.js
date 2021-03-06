import { useState, useEffect } from "react";
import Form from "./components/Form";
import ItemList from "./components/ItemList";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredItems, setFilteredItems] = useState([]);

  //Get items from localStorge
  useEffect(() => {
    if (localStorage.getItem("items"))
      setItems(JSON.parse(localStorage.getItem("items")));
  }, []);

  //Save items to localStorage
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  //filtering items
  useEffect(() => {
    switch (filter) {
      case "done":
        setFilteredItems(items.filter((item) => item.inCart === true));
        break;
      case "todo":
        setFilteredItems(items.filter((item) => item.inCart === false));
        break;
      default:
        setFilteredItems(items);
        break;
    }
    console.log(filteredItems);
  }, [filter, items]);

  return (
    <div className="app-container">
      <header>
        <h1>Nákupní seznam</h1>
      </header>
      <Form
        input={input}
        setInput={setInput}
        items={items}
        setItems={setItems}
        setFilter={setFilter}
      />
      <ItemList
        items={items}
        setItems={setItems}
        filteredItems={filteredItems}
      />
    </div>
  );
}

export default App;
