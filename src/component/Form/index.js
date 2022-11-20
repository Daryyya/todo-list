import React, { useEffect, useState } from "react";
import { createTodo } from "../../todo-api";

const Form = ({ onReceived }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());

    if (!value.title) {
      console.warn("no data");
      return;
    }

    createTodo(value, onReceived);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="title" name="title" />
      <input type="text" placeholder="description" name="description" />
      <input type="date" name="date" />
      <input type='file' name='file'/>
      <button type="submit">OK</button>
    </form>
  );
};

export default Form;
