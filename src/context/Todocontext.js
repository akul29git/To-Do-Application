import { createContext, useContext } from "react";


export const Todocontext=createContext({
    todoobject:[{
        id:1,
        todomsg:'test',
        complete:false
    }],
    addTodo:(task)=>{},
    updateTodo:(id,task)=>{},
    deleteTodo:(idk)=>{},
    toggleComplete:(id)=>{}
})

export const useTodo=()=>{
    return useContext(Todocontext)
}

export const TodoProvider=Todocontext.Provider;

// todoibject is an array not an object 
// and also we have not given the name of the object