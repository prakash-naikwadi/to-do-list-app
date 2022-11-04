import React, { useState } from "react";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import Form from "./Form";
import List from "./List";

function ToDoList() {
  const [task, setTask] = useState(
    JSON.parse(localStorage.getItem("myData"))
      ? JSON.parse(localStorage.getItem("myData"))
      : []
  );

  const getUserInput = (input) => {
    // console.log(task);
    const taskItem = { task: input, id: uuidv4() };
    setTask((prevState) => [...prevState, taskItem]);
    localStorage.setItem("myData", JSON.stringify(task));
  };

  const getNewAddedItem = (item) => {
    // console.log(item);
    setTask((prevState) =>
      prevState.map((task) => {
        if (task.id === item[1]) {
          return { ...task, task: item[0], id: item[1] };
        }
        return task;
      })
    );
  };

  const deleteItem = (item) => {
    const newTask = task.filter((taskItem) => {
      return taskItem.id !== item;
    });

    setTask(newTask);
  };

  useEffect(() => {
    localStorage.setItem("myData", JSON.stringify(task));
  }, [task]);

  return (
    <section className="min-vh-100" style={{ backgroundColor: "#e2d5de" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body p-5">
                <h6 className="mb-3">Awesome Todo List</h6>
                <Form getUserInput={getUserInput} />
                <List
                  data={task}
                  getNewAddedItem={getNewAddedItem}
                  deleteItem={deleteItem}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ToDoList;
