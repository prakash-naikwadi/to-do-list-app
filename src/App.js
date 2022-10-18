import { useState } from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

// data
const data = [
  { key: 0, task: "HTML I" },
  { key: 1, task: "CSS" },
  { key: 2, task: "Responsive design" },
  { key: 3, task: "Git" },
];

let count = 4;

function App() {
  const [input, setInput] = useState("");

  console.log(input);

  const handleUserInput = (input) => {
    // console.log("from App component", input);
    setInput(input);
    count++;
    if (input) data.push({ task: input, key: count });
    console.log(data);
  };

  return (
    <div className="App">
      <section className="min-vh-100" style={{ backgroundColor: "#e2d5de" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h6 className="mb-3">Awesome Todo List</h6>
                  <Form handleUserInput={handleUserInput}></Form>
                  <TaskList data={data}></TaskList>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
