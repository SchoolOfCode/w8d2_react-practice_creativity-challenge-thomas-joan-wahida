import React from "react";

function ListItem({ text, onDeleteClick, priority, quotes}) {
  return (
    <li>
      {text}
      <br></br>
      {priority}
      <br></br>
      {quotes}
      <br></br>
      <button onClick={onDeleteClick}>X</button>
    </li>
  );
}

export default ListItem;