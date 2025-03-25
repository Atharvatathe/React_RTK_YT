import { configureStore} from "@reduxjs/toolkit";
import { taskReducer } from "./features/todo/todoSlice";

//! Using RTK step: 2 configure store
export const store = configureStore({
  reducer: {
    taskReducer: taskReducer.reducer,
  },
});


