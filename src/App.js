import { useEffect, useState } from "react";
import Header from "./component/Header";
import {fetchAll} from './todo-api';
import Form from "./component/Form";
import List from "./component/List";

function App() {
  const [todoList, setTodoList] = useState([])

  useEffect(()=>{
    fetchAll((list) => setTodoList(list))
  }, [])

  return (
    <>
    <Header />
    <Form onReceived={(list) => setTodoList(list)} />
    <List todoList={todoList} onReceived={(list) => setTodoList(list)}/>
    </>
  );
}

export default App;
