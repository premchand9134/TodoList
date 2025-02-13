import { createSlice } from "@reduxjs/toolkit"

// Initial state of the store, which includes an empty task array and a loading flag.
const initialState = {
    task: [],  // Array to hold the tasks  
  }
  
export  const taskReducer = createSlice({
      name:"task",
      initialState,
      reducers:{
        addTask(state,action){
          state.task.push(action.payload)
        },
        deleteTask(state,action){
          state.task = state.task.filter((currTask,index)=>{
            return index !== action.payload
          })
        },
        deleteAll(state,action){
          state.task = []
        }
        
      }
      
  })
  console.log(taskReducer);
  
export const {addTask,deleteTask,deleteAll} = taskReducer.actions