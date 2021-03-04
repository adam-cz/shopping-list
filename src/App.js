import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  const onChange = (event) => {
    setInput(event.target.value);
  };

  /*
  const itemModel = {
    productName: "",
    inCart: false
  };
  */

  const addItem = () => {
    setItems([...items, {
      productName: input, 
      inCart: false
    }]);
    setInput("");
  };

  const deleteItem = (index) => {
    setItems(items.filter((value, pos) => pos !== index));
  };

  return (
    <div className="list">
      <h1>Nákupní seznam</h1>
      <div className="input">
        <input type="text" onChange={onChange} value={input} />
        <button onClick={addItem}>Přidat</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.productName}
            <button onClick={() => deleteItem(index)}>X</button>
            <button>Koupeno</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
