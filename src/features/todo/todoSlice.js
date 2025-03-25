import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: ["Buy Banana", "Buy Mango"],
};

// step 1: create slice using RTK
export const taskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {
      state.task.push(action.payload);
    },
    deleteTask(state, action) {
      state.task = state.task.filter((item, index) => index !== action.payload);
    },
  },
});

export const { addTask, deleteTask } = taskReducer.actions;

export default taskReducer.reducer;

//step 3: Log the initial state
// The getState method is synchronous function that returns the current state of redux application. It include the entire state of the application, including akk the reducers and their respective state.
// console.log("initial state:", store.getState());

