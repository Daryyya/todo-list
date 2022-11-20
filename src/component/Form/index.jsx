import React, { useEffect, useState } from "react";
import { createTodo } from "../../todo-api";
import style from './style.module.scss'

const Form = ({ onReceived, setFormIsOpen }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const value = Object.fromEntries(data.entries());

    if (!value.title) {
      console.warn("no data");
      return;
    }

    createTodo(value, onReceived);
    setFormIsOpen(false)
  };

  return (
    <div className={style.popup}>
      <form onSubmit={handleSubmit} className={style.modal}>
      <input className={style.modal__input} type="text" placeholder="title" name="title" />
      <input className={style.modal__input} type="text" placeholder="description" name="description" />
      <input className={style.modal__input} type="date" name="date" />
      <input type='file' name='file'/>
      <button  className={style.modal__button} type="submit">OK</button>
    </form>
    </div>
    
  );
};

export default Form;
