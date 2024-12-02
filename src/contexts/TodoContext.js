import { createContext, useContext } from "react";

export const Todocontext = createContext({
    todos: [
        {
            id: 1,
            text: "Learn React",
            isCompleted: false
        }
    ],

    addTodo: (todo) => {},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=> {},
    toggleIsCompleted: (id)=>{}
});

export const useTodo = ()=>{
    return useContext(Todocontext)
}


export const TodoProvider = Todocontext.Provider;