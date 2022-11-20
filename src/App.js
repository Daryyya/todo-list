import { useEffect, useState } from "react";
import Header from "./component/Header";
import {fetchAll} from './todo-api';
import Form from "./component/Form";
import List from "./component/List";
import AddTodoButton from "./component/AddTodoButton";
import Portal from "./component/Portal";
import './App.css'

function App() {
  const [todoList, setTodoList] = useState([])

  const [formIsOpen, setFormIsOpen] = useState(false)

  useEffect(()=>{
    fetchAll((list) => setTodoList(list))
  }, [])

  return (
    <>
    <Header />
    <AddTodoButton onClick={() => setFormIsOpen(true)}/>
    <Portal>
      {
        formIsOpen && <Form onReceived={(list) => setTodoList(list)} setFormIsOpen={setFormIsOpen}/>
      }
    </Portal>
    
    <List todoList={todoList} onReceived={(list) => setTodoList(list)}/>
    </>
  );
}

export default App;
