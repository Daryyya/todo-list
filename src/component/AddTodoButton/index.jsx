import React from "react";
import style from "./style.module.scss";

const AddTodoButton = ({ onClick }) => {
  return (
    <>
      <label className={style.text}>
        Add task
        <button onClick={onClick} className={style.button}>
          ➕
        </button>
      </label>
    </>
  );
};

export default AddTodoButton;
