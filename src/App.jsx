import { useState, useEffect } from 'react'
import {addTodo, updateTodo, removeTodo, toggleIsCompleted} from "./TodoFunctions/functions.js"
import './App.css'

function App() {
    const [todos, setTodos] = useState([]);

    // handle state changes for add todo
    const handleAddTodo = (newTodo)=>{
        setTodos((prevTodos)=> addTodo(prevTodos, newTodo))
    }

    // handle state changes for update todo
    const handleUpdateTodo = (id, updatedTodo)=>{
        setTodos((prevTods)=> updateTodo(prevTods, id, updatedTodo));
    }

    // handle state changes for remove todo
    const handleRemoveTodo = (id)=>{
        setTodos((prevTodo)=> removeTodo(prevTodo, id));
    }

    // handle state changes for toggle completed
    const handleToggleIsCompleted = (id)=>{
        setTodos((prevTodo)=> toggleIsCompleted(prevTodo, id));
    }

    // get all prev todos
    useEffect(()=>{
        const todos = JSON.parse(localStorage.getItem('todos'))
        if(todos && todos.length > 0){
            setTodos(todos);
        }
    },[]);

    // localStorage update for other changes
    useEffect(()=>{
        localStorage.setItem("todos", JSON.stringify(todos));
    },[todos])

  return (
    <TodoProvider value={{todos,
        addTodo : handleAddTodo,
        updateTodo : handleUpdateTodo,
        removeTodo : handleRemoveTodo,
        toggleIsCompleted : handleToggleIsCompleted
    }}>

        
        
    </TodoProvider>
  )
}

export default App
