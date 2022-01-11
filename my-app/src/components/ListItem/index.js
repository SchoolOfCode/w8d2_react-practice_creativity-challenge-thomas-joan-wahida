import React from "react";

function ListItem({ text, onDeleteClick, priority, quotes}) {
  return (
    <li>
      {text}  {priority}  {quotes}
      <button onClick={onDeleteClick}>X</button>
    </li>
  );
}

export default ListItem;