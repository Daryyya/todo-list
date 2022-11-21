import React, { useState } from "react";
import { deleteTodo, updateTodo } from "../../todo-api";
import Modal from "../Modal";
import Portal from "../Portal";
import style from "./style.module.scss";

const List = ({ todoList, onReceived }) => {
  const [editTodo, setEditTodo] = useState(null);

  const handleDelete = (id) => {
    deleteTodo(id, onReceived);
  };

  const handleUpdateForm = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());
    if (!value.title) {
      console.warn("no data");
      return;
    }
    updateTodo(editTodo.id, value, onReceived);
    setEditTodo(null);
  };

  const handleUpdateStatus = (id, todo) => {
    updateTodo(id, { ...todo, isDone: !todo.isDone }, onReceived);
  };

  return (
    <>
      {todoList.map((todo) => {
        const { title, description, date, id, isDone, file } = todo;
        return (
          <div
            key={id}
            style={
              isDone ? { textDecoration: "line-through", opacity: 0.5 } : null
            }
          >
            <p>Task: {title}</p>
            <p>Description: {description || "no description"}</p>
            <p>Date to: {date || "no data"}</p>
            {file && (
              <p style={{ fontSize: 22 }}>
                <a href={file} target="_blank">file</a>
              </p>
            )}

            <button
              className={`${style.delete} ${style.button}`}
              onClick={() => handleDelete(id)}
            >
              DELETE
            </button>
            <button className={`${style.edit} ${style.button}`} onClick={() => setEditTodo(todo)}>
              EDIT
            </button>
            <button
              className={`${style.done} ${style.button}`}
              onClick={() => handleUpdateStatus(id, todo)}
            >
              Mark as {isDone ? "not done" : "done"}
            </button>
            <hr></hr>
          </div>
        );
      })}
      <Portal>
        {editTodo && (
          <Modal handleUpdateForm={handleUpdateForm} editTodo={editTodo} />
        )}
      </Portal>
    </>
  );
};

export default List;
