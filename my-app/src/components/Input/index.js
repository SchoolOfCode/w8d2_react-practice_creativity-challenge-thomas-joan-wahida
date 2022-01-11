import { useState, useEffect } from "react";

function Input({ onSubmitClick, addItem}) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState("");
  const [quotes,setQuotes] = useState("")

  let randomNumber = Math.floor(Math.random()*1643)

  useEffect(()=>{
    loadData();
  },[]);

  
  const loadData = async () => {
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    setQuotes(data[randomNumber].text)
    console.log(quotes)
}

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleChangePriority(event) {
    setPriority(event.target.value);
  }

  function handleSubmit(event) {
    // Stop the page from refreshing as the form will try and submit and refresh by default
    event.preventDefault();
    onSubmitClick({text,priority, quotes})
    setText("")
    setPriority("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange, addItem} value={text} />
      <input type = "number" onChange={handleChangePriority} value={priority} />
      <button>+</button>
    </form>
  );
}

export default Input;