import { useEffect, useState } from 'react'
import './App.css'
import Todoform from './components/Todoform.jsx'
import Todoitems from './components/Todoitems.jsx'
import { TodoProvider } from './context/Todocontext.js'

function App() {
  // todoobject is an array which has all the todo items which you are entering through the form.
  const[todoobject,settodoobject]=useState([])

  const addTodo=(task)=>{
    settodoobject(prev=>[{id:Date.now(),...task},...prev])    
  }

  const updateTodo=(id,task)=>{
    settodoobject((prev)=>prev.map((prevTodoobject)=>prevTodoobject.id===id ?task :prevTodoobject))
  }
  const deleteTodo=(id)=>{
    settodoobject((prev)=>prev.filter((prevTodo)=>prevTodo.id !==id))
  }
  const toggleComplete=(id)=>[
    settodoobject((prev)=>prev.map((prevTodo)=>prevTodo.id===id ? {...prevTodo, complete:!prevTodo.complete}:prevTodo ))
  ]

  useEffect(()=>{
    const localtodo=JSON.parse(localStorage.getItem("todokey"))
    if(localtodo && localtodo.length>0){
      settodoobject(localtodo)      
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todokey",JSON.stringify(todoobject))
  },[todoobject])

  return (
   <TodoProvider value={{todoobject,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className='bg-black w-screen h-screen flex items-center flex-col'>
      <h1 className='text-2xl text-white  mt-20'> Task Manager</h1>
      <div>
        <Todoform/>
      </div>
      <br />
      <br />
      <div>
        {/* is used to uniquiely identify the element */}
       {todoobject.map((todo) => (
        <div key={todo.id}>
          <Todoitems todo={todo} />
          <br />
        </div>
      ))}
      </div>

    </div>
   </TodoProvider>
  )
}

export default App
