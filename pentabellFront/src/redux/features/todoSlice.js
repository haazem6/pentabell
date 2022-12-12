import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //Get All Todos
    allTodos: (state, action) => {
      state.todos = action.payload ;
    },
    //Add Todo
    addNewTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    // Remove Todo
    removeTodo: (state, action) => {
      state.todos.filter((t) => t._id === action.payload._id);
    },
    //Update Todo
    editTodo: (state, action) => {
      state.todos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );
    },
  },
});

export const { allTodos, addNewTodo, removeTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;
