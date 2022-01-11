import { useState } from "react";

import List from "../List";
import Input from "../Input";
import "./App.css";


function App() {
// const [array,setArray] = useState([])
// console.log(array)

// function addItemToArray(){
//   const listEven = [2,4,6,8]
//   setArray(listEven)
//   console.log(array)
// }

  const [todos, setTodos] = useState([]);


  function addItem(item) {
    console.log(item)
    // Don't add the item if there is already one the same that exists
    if (todos.includes(item)) {
      return;
    }
    setTodos([{ text: item.text, priority: item.priority, quotes: item.quotes}, ...todos].sort((a,b) => {
      return a.priority-b.priority
  }))}

  function removeItem(index) {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }


  return (
    <div className="App">
      <Input onSubmitClick={addItem} />
      <div className = "heading">
      <h1>Your To-Do List</h1>
      <h1>Your Priority</h1>
      <h1>Your Inspirational Quote</h1>
      </div>
      <List id="list" items={todos} onItemDeleteClick={removeItem}/>
    </div>
  );
}

export default App;
