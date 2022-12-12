import React, { useState, useEffect } from "react";

import Todo from "../components/todos/Todo";
import FormTodo from "../components/todos/FormTodo";
import { getAllTodos } from "../api/todo";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  const todos = useSelector((state) => state.todo.todos);

 
  useEffect(() => {
    getAllTodos(dispatch);
  }, [currentId]);

  console.log(todos);
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <FormTodo currentId={currentId} setCurrentId={setCurrentId} />

      {(!todos || todos?.length === 0) && (
        <div className="text-3xl font-bold my-8">
          You don't have any Todos. Try Add Some
        </div>
      )}
      {todos?.map((todo) => (
        <Todo setCurrentId={setCurrentId} key={todo._id} todo={todo} />
      ))}
    </div>
  );
};

export default Home;
