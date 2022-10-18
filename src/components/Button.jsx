function Button({ name, type, classname }) {
  // console.log(type);

  const deleteListItem = (e) => {
    // console.log(e);
    e.target.parentElement.remove();
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
