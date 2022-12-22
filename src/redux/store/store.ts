import { configureStore } from "@reduxjs/toolkit";
import { todoDoSlice } from "../slices/todoSlice.redux";

export const store = configureStore({
  reducer: {
    todoReducer: todoDoSlice.reducer,
  },
});
