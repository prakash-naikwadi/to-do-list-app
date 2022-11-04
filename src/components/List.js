import React from "react";
import ListItem from "./ListItem";

function List({ data, getNewAddedItem, deleteItem }) {
  // console.log(data, "data");
  return (
    <ul id="task-list" className="list-group mb-0">
      {data
        ? data.map((item) => {
            // console.log(item);
            return (
              <ListItem
                key={item.id}
                {...item}
                getNewAddedItem={getNewAddedItem}
                deleteItem={deleteItem}
              />
            );
          })
        : ""}
    </ul>
  );
}

export default List;
