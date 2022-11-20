import React, { useState } from "react";
import { deleteTodo, updateTodo } from "../../todo-api";

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
    setEditTodo(null)
  };

  const handleUpdateStatus = (id, todo) => {
   updateTodo(id, {...todo, isDone: !todo.isDone}, onReceived)
  }

  return (
    <>
      {todoList.map((todo) => {
        const { title, description, date, id, isDone } = todo;
        return (
            <div key={id} style={isDone ? {textDecoration: 'line-through', opacity: 0.5} : null}>
              <p>{title}</p>
              <p>{description}</p>
              <p>{date}</p>
              

              <button onClick={() => handleDelete(id)}>DELETE</button>
              <button onClick={() => setEditTodo(todo)}>EDIT</button>
              <button onClick={() => handleUpdateStatus(id, todo)}>
                Mark as {isDone ? "not done" : "done"}
            </button>
              <hr></hr>
            </div>
          )
      })}

      {editTodo && (
        <form onSubmit={handleUpdateForm}>
          <input type="text" defaultValue={editTodo.title} name="title" />
          <input type="text" defaultValue={editTodo.description} name="description" />
          <input type="date" defaultValue={editTodo.date} name="date" />
          <input type='file' defaultValue={editTodo.file} name='file'/>
          <button type="submit">
            SAVE
          </button>
        </form>
      )}
    </>
  );
};

export default List;
