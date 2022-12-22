import { createSlice } from "@reduxjs/toolkit";
import { TaskInterface } from "../../interfaces/Task/task.interface";

const initialState: TaskInterface[] = [];

export const todoDoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = todoDoSlice.actions;