import { createContext, useContext } from "react";

export const Todocontext = createContext({
    todos: [
    ],

    addTodo: (todo) => {},
    updateTodo: (id, todo)=>{},
    removeTodo: (id)=> {},
    toggleIsCompleted: (id)=>{}
});

export const useTodo = ()=>{
    return useContext(Todocontext)
}


export const TodoProvider = Todocontext.Provider;