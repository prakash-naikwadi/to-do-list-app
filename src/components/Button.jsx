function Button({ name, type, classname }) {
  // console.log(type);

  const deleteListItem = (e) => {
    const newObj = JSON.parse(localStorage.getItem("myData"));
    const key = e.target.parentElement.getAttribute("data-key");
    const i = newObj.findIndex((item) => item.key === parseInt(key));

    e.target.parentElement.remove();

    newObj.splice(i, 1);

    localStorage.setItem("myData", JSON.stringify(newObj));
  };

  return (
    <>
      {name === "Add" ? (
        <button type={type} className={classname}>
          {name}
        </button>
      ) : (
        <button type={type} className={classname} onClick={deleteListItem}>
          {name}
        </button>
      )}
    </>
  );
}

export default Button;
