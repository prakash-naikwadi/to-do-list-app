import React from "react";
import { useRef } from "react";
import { useState } from "react";

function ListItem({ task, id, getNewAddedItem, deleteItem }) {
  // console.log(id);
  const [input, setInput] = useState(task);
  const [itemID] = useState(id);

  const [save, setSet] = useState(false);
  const ref = useRef();

  const handleEdit = () => {
    if (!save) {
      ref.current.removeAttribute("readOnly");
      ref.current.focus();
    } else {
      ref.current.setAttribute("readOnly", "readonly");
      getNewAddedItem([input, itemID]);
    }
    setSet(!save);
  };

  const handleInput = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const handleDeleteItem = () => {
    deleteItem(itemID);
  };

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
      style={{ gap: "1rem" }}
    >
      <div className="d-flex align-items-center" style={{ flex: "1 1 0%" }}>
        <input
          className="form-control"
          readOnly="readonly"
          value={input}
          ref={ref}
          onChange={handleInput}
        />
      </div>
      <button id="edit-btn" className="btn btn-success" onClick={handleEdit}>
        {save ? "save" : "edit"}
      </button>
      <button className="btn btn-danger" onClick={handleDeleteItem}>
        delete
      </button>
    </li>
  );
}

export default ListItem;
