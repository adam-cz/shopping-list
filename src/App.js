import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const onChange = (event) => {
    setInput(event.target.value);
  };
  //test
  const todoModel = {
    productName: "",
    inCart: false,
    icon: "",
  };

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput("");
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((value, pos) => pos !== index));
  };

  return (
    <div className="list">
      <h1>Nákupní seznam</h1>
      <div className="input">
        <input type="text" onChange={onChange} value={input} />
        <button onClick={addTodo}>Přidat</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => deleteTodo(index)}>X</button>
            <button>Hotovo</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
