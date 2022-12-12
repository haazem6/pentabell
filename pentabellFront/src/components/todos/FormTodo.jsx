import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { addTodo , updateTodo} from '../../api/todo';

const FormTodo = ({currentId, setCurrentId}) => {
  const dispatch = useDispatch();
  const todo = useSelector((state) => currentId ? state?.todo?.todos.find((elem) => elem._id === currentId ) : null);

  const [todoData, setTodoData] = useState({
    title: "",
    description: "",
  })

  const formHandler = () => {
    if (currentId) {
      //update the Todo
      updateTodo(todo._id, todoData, dispatch);
      setCurrentId(null);
      setTodoData({
        title: "",
        description: "",
      })

    } else {
      //add new todo
      addTodo(todoData, dispatch);
      setCurrentId(null);
      setTodoData({
        title: "",
        description: "",
      })
    }

  }

  const clearHandler = () => {
    setTodoData({title: "", description: ""})
    setCurrentId(null);
  }

  useEffect(() => {
     if (todo) {
      setTodoData(todo);
     }
  }, [todo]);

  const updateTitleHandler = (e) => {
    setTodoData({...todoData, title: e.target.value})
  }
  return (
    <div className="bg-gray-100 w-[50%] rounded-2xl space-y-3 p-3 ">
      <h1 className="text-center text-3xl font-bold my-3">{currentId ? "Update Todo" : "Add a New Todo" }</h1>
      <input
        className="p-3 rounded-md w-[90%] m-3 border-2 border-black"
        type="text"
        name="title"
      
        placeholder="Todo Title..."
        value={todoData.title}
        onChange={updateTitleHandler}
      />
      <textarea
        className="p-3 rounded-md w-[90%] m-3 border-2 border-black"
        type="text"
        name="description"
        placeholder="Todo Description..."
        value={todoData.description}
        onChange={(e) => setTodoData({...todoData, description: e.target.value})}
      />
      <button
        className="p-3 rounded-md w-[90%] m-3 bg-[#DD1188] hover:bg-[#861153] text-white text-xl font-bold"
        onClick={formHandler}
      >{currentId ? "Update Todo" : "Add Todo" }</button>
      <button
        className="p-3 rounded-md w-[90%] m-3 bg-[#DD1188] hover:bg-[#861153] text-white text-xl font-bold"
        onClick={clearHandler}
      >Clear</button>
    </div>
  )
}

export default FormTodo