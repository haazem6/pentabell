import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // Signup
    register: (state, action) => {
      state.currentUser = action.payload;
    },

    // Login
    login: (state, action) => {
      state.currentUser = action.payload;
    },

    //Logout
    logout: (state) => {
      state.currentUser = null;
    }
  },
});

export const {register, login, logout} = userSlice.actions;

export default userSlice.reducer



