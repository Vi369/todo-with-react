import React, { useState } from 'react'
import {useTodo} from "../contexts/index"
function TodoForm() {
    const [todo, setTodo] = useState("");
    const {addTodo} = useTodo();

    // handleTodoSubmit
    const handleTodoSubmit = (e)=>{
        e.preventDefault()
        if(!todo) return 
        addTodo({todo, isCompleted: false});
        setTodo("")
    }
  return (
    <>
        <form onSubmit={handleTodoSubmit}>
            <input type="text"
            placeholder='Enter Your todo Task...'
            className=''
            value={todo}
            onChange={(e)=> (setTodo(e.target.value))}
             />
            <button 
                type="submit"
                className=''
            >Add</button>
        </form>
    </>
  )
}

export default TodoForm