import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/userSlice";
import todoReducer from "./features/todoSlice";

const store = configureStore({
    reducer: {
        user: userReducer,
        todo: todoReducer
    },
})

export default store;