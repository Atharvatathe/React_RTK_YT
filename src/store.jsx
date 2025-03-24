import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  task: [],
};

// step 1: create slicre using RTK
const taskReducer = createSlice({
  name: "task",
  initialState,
  reducers: {
    addTask(state, action) {},
    deleteTask(state, action) {},
  },
});

const { addTask, deleteTask } = taskReducer.actions;

//! Using RTK step: 2 configure store
export const store = configureStore({
  reducer: {
    taskReducer,
  },
});

//step 3: Log the initial state
// The getState method is synchronous function that returns the current state of redux application. It include the entire state of the application, including akk the reducers and their respective state.
console.log("initial state:", store.getState());

//step 4: Dispatch action to add task
store.dispatch(addTask("Buy Apple"));
console.log("updated state:", store.getState());

store.dispatch(addTask("Buy Banana"));
console.log("updated state:", store.getState());

store.dispatch(addTask("Buy Mango"));
console.log("updated state:", store.getState());

store.dispatch(deleteTask(0));
console.log("deleted state:", store.getState());
