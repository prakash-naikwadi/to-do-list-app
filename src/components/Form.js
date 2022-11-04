import React from "react";
import { useState } from "react";

function Form({ getUserInput }) {
  const [input, setInput] = useState("");
  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (input) {
      getUserInput(input);
      setInput("");
    }
  };
  return (
    <form
      id="task-form"
      className="d-flex justify-content-center align-items-center mb-4"
    >
      <div className="form-outline flex-fill">
        <input
          id="task-input"
          type="text"
          className="form-control form-control-lg"
          placeholder="Enter Your Tasks"
          value={input}
          onChange={handleInput}
        />
      </div>
      <button
        id="submit-btn"
        type="submit"
        className="btn btn-primary btn-lg ms-2"
        onClick={handleAdd}
      >
        Add
      </button>
    </form>
  );
}

export default Form;
