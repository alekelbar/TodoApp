import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskInterface } from "../../interfaces/Task/task.interface";
import { getItem } from "../../helpers/getItem";

const initialState: TaskInterface[] = getItem() || [];

export const todoDoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TaskInterface>) => {
      return [...state, action.payload];
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      return state.filter((e) => e.id != action.payload);
    },
    completeTodo: (state, action: PayloadAction<string>) => {
      return state.map((e) => {
        if (e.id === action.payload) {
          return { ...e, done: true };
        }
        return e;
      });
    },
    unCompleteTodo: (state, action: PayloadAction<string>) => {
      return state.map((e) => {
        if (e.id === action.payload) {
          return { ...e, done: false };
        }
        return e;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, completeTodo, removeTodo, unCompleteTodo } =
  todoDoSlice.actions;
