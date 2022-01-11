import { useState } from "react";

function Input({ onSubmitClick }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleChangePriority(event) {
    setPriority(event.target.value);
  }

  function handleSubmit(event) {
    // Stop the page from refreshing as the form will try and submit and refresh by default
    event.preventDefault();
    onSubmitClick({text,priority})
    setText("")
    setPriority("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={text} />
      <input type = "number" onChange={handleChangePriority} value={priority} />
      <button>+</button>
    </form>
  );
}

export default Input;