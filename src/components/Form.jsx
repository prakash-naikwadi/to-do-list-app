import React, { useState } from "react";
import Button from "./Button";

function Form({ handleUserInput }) {
  const [input, setInput] = useState("");

  const getUserInput = (e) => {
    setInput(e.target.value);
  };

  // console.log(input);

  const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log("from form component", input);
    handleUserInput(input);
    setInput("");
  };

  return (
    <>
      <form
        onSubmit={onFormSubmit}
        className="d-flex justify-content-center align-items-center mb-4"
      >
        <div className="form-outline flex-fill">
          <input
            type="text"
            className="form-control form-control-lg"
            value={input}
            onChange={getUserInput}
          />
        </div>
        <Button
          type="submit"
          classname="btn btn-primary btn-lg ms-2"
          name="Add"
        />
      </form>
    </>
  );
}

export default Form;
