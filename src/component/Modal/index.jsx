import React from 'react'
import style from './style.module.scss'

const Modal = ({handleUpdateForm, editTodo}) => {
console.log(editTodo.file);

  return (
    <div className={style.popup} >
        <form onSubmit={handleUpdateForm} className={style.modal}>
          <input className={style.modal__input} type="text" defaultValue={editTodo.title} name="title" />
          <input className={style.modal__input} type="text" defaultValue={editTodo.description} name="description" />
          <input className={style.modal__input} type="date" defaultValue={editTodo.date} name="date" />

          {editTodo.file && (
            <p>replace file:</p>
          )}
          <input type='file' defaultValue={undefined} name='file'/>
          <button className={style.modal__button} type="submit">
            SAVE
          </button>
        </form>
    </div>
  )
}

export default Modal