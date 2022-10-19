import { useEffect, useState } from "react";
import Form from "./components/Form";
import TaskList from "./components/TaskList";

let newObj = [];

function App() {
  const [val, setVal] = useState([]);

  const fetchDataFromLocalStorage = () => {
    const data1 = JSON.parse(localStorage.getItem("myData"))
      ? JSON.parse(localStorage.getItem("myData"))
      : [];
    return data1;
  };

  const handleUserInput = (input) => {
    if (input) {
      const data1 = fetchDataFromLocalStorage();
      const len = data1.length;
      const data2 = { task: input, key: len + 1 };
      newObj = [...data1, data2];
      setVal(newObj);
      localStorage.setItem("myData", JSON.stringify(newObj));

      console.log(localStorage.getItem("myData"));
    }
  };
  useEffect(() => {
    const data1 = fetchDataFromLocalStorage();
    setVal(data1);
  }, []);

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
                  {console.log(newObj)}
                  <TaskList data={val}></TaskList>
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
