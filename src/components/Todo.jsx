import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { addTask, deleteAll, deleteTask } from "../features/task/taskSlice";
import { MdDeleteForever } from "react-icons/md";


export const Todo = () =>{

    const [inputValue,setInputValue] = useState("")
    

    const task = useSelector((state)=> state.taskReducer.task)
    // console.log("react state",task);

    const dispatch = useDispatch()
    
    const handleFormSubmit = (e) =>{
        e.preventDefault()  
        if(inputValue === ""){
            return []
        }
        dispatch(addTask(inputValue))
        return setInputValue("")
    }
    const handleTaskDelete = (id) =>{
         dispatch(deleteTask(id))
    }
   
    const handleDeleteAll = () =>{
        dispatch(deleteAll())
    }

    
    return(
        <div className="container">
            <div className="todo-app">
                <h1>
                    <i></i>To-do List:
                </h1>
                <p>Total Item list: {task.length}</p>
                
                <div className="row">
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} id="input-box" placeholder="Add a new task" />
                        <button>Add Task</button>
                    </form>
                </div>
                
                <ul >
                    {
                        task?.map((curr,index)=>{
                            return<li key={index}>
                                <p>{index}. {  curr}</p>
                                <div className="icon">
                               
                                <MdDeleteForever onClick={()=>handleTaskDelete(index)}  className="icon-style" />
                                </div>
                                
                            </li>

                        })
                    }
                </ul>
                <button onClick={handleDeleteAll}>Clear All</button>
            </div>
        </div>
    )
}
