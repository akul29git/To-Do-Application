import React, { useState } from 'react'
import { useTodo } from '../context/Todocontext'

function Todoform() {

  const [todo,settodo]=useState("")
  const {addTodo}=useTodo()

  const add=(e)=>{

    e.preventDefault()

    if(!todo) return
    
    addTodo({todo:todo,complete:false})
    settodo(" ")
  }
  return (
    <div className='mt-10'>
      <form onSubmit={add}>
        <input type="text"
        placeholder='Enter your task here'
        value={todo}
        onChange={(e)=>settodo(e.target.value)}
        className='w-180 h-15 text-white border-2 border-white rounded-l-full' 
        />
        <button className='bg-purple-500 h-15 w-20 border-2 border-white rounded-r-full '>Add</button>
      </form>
    </div>
  )
}

export default Todoform;
