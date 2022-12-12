import axios from "axios";

import {
  addNewTodo,
  allTodos,
  editTodo,
  removeTodo,
} from "../redux/features/todoSlice";

export const getAllTodos = async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:5000/api/todos/getAll");
    dispatch(allTodos(data));
  } catch (error) {
    console.log(error.response);
  }
};

export const addTodo = async (todo, dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:5000/api/todos/add",
      todo
    );
    dispatch(addNewTodo(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTodo = async (id, dispatch) => {
  try {
    const { data } = await axios.delete(
      `http://localhost:5000/api/todos/${id}`
    );
    dispatch(removeTodo(data));
  } catch (error) {}
};

export const updateTodo = async (id, updatedTodo, dispatch) => {
  try {
    const { data } = await axios.patch(
      `http://localhost:5000/api/todos/${id}`,
      updatedTodo
    );
    dispatch(editTodo(data));
  } catch (error) {
    console.log(error.message);
  }
};
