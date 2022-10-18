import Button from "./Button";

function TaskList({ data }) {
  return (
    <ul className="list-group mb-0">
      {data.map((item) => {
        return (
          <li
            className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2"
            style={{ gap: "1rem" }}
            key={item.key}
          >
            <div
              className="d-flex align-items-center"
              style={{ flex: "1 1 0%" }}
            >
              <input className="form-control" value={item.task} readOnly />
            </div>
            <Button type="button" classname="btn btn-success" name="Edit" />
            <Button type="button" classname="btn btn-danger" name="Delete" />
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList;
