import { collection, getDocs, addDoc, deleteDoc, doc, updateDoc } from "firebase/firestore/lite";
import { firebaseDB } from "./firebase";

export const fetchAll = async (onReceived) => {
  const testCol = collection(firebaseDB, "todo");
  const testSnapshot = await getDocs(testCol);
  const list = testSnapshot.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id
  }));

  onReceived(list);
};

export const createTodo = async (todo, onReceived) => {
  try {
    const { title, description, date } = todo;
    await addDoc(collection(firebaseDB, "todo"), {
      title,
      description,
      date,
    });

    fetchAll(onReceived)
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const deleteTodo = async (id, onReceived) => {
  await deleteDoc(doc(firebaseDB, "todo", id));
  fetchAll(onReceived)
}

export const updateTodo = async (id, todo, onReceived) => {
  const { title, description, date } = todo;
  const todoRef = doc(firebaseDB, "todo", id);


  await updateDoc(todoRef, {
    title: title,
    description: description, 
    date: date,
  });

  fetchAll(onReceived)
}
