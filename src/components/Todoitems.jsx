import React, { useState } from 'react'
import { useTodo } from '../context/Todocontext';

function Todoitems({todo}) {
  const {updateTodo,deleteTodo,toggleComplete}=useTodo()
  
  const [isedit,setiseditable]=useState(false)
  const [taskmsg,settaskmsg]=useState(todo.todo)
  // for deleting the todo
  // const [keep,setkeep]=useState(todo.complete)
  
  const edit=()=>{
    updateTodo(todo.id,todo.todo)
    setiseditable(false)
  }
  const forcheckedit=()=>{
    toggleComplete(todo.id)
  }

  return (
    <div className={`flex  text-white w-150 h-15 border-2 border-white rounded-2xl ${todo.complete ? "bg-green-500" : "bg-purple-500"}`}>

      <input 
      type="checkbox"
      checked={todo.complete}
      onChange={forcheckedit}
      className='ml-1'
       />

       <input
        type="text" 
        className={`w-150 h-15 text-white ml-2 ${todo.complete ? "line-through": ""}`}
        value={taskmsg}
        onChange={(e)=>settaskmsg(e.target.value)}
        readOnly={!isedit}
        />
        <button onClick={()=>{
          if(todo.complete) return
          if(isedit){
            edit()
          }
          else setiseditable((prev)=>!prev)
        }}
        disabled={todo.completed}
        className='p-0'
        >{isedit ? "📁" : "✏️"}</button>
        <button onClick={()=>{
          deleteTodo(todo.id)
        }}
        className='p-2'
        >Delete</button>
    </div>
  )
}

export default Todoitems;
// add global button to delet all the todos togethor