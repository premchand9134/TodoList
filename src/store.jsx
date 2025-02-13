// Importing the createStore function from Redux to create a Redux store.
import { configureStore } from "@reduxjs/toolkit";
import {  taskReducer } from "./features/task/taskSlice";


 
export const store = configureStore({
  reducer: {
    taskReducer:taskReducer.reducer,

  }
})




