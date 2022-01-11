import React from "react";

function ListItem({ text, onDeleteClick, priority}) {
  return (
    <li>
      {text}
      {priority}
      <button onClick={onDeleteClick}>X</button>
    </li>
  );
}

export default ListItem;