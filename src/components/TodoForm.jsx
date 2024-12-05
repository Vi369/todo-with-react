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
        <form onSubmit={handleTodoSubmit} className='flex justify-center items-center'>
            <input type="text"
            placeholder='Enter Your todo Task...'
            className= {`px-4 py-2 w-1/2 rounded-md border-2`}
            value={todo}
            onChange={(e)=> (setTodo(e.target.value))}
             />
            <button 
                type="submit"
                className='px-4 py-2 ml-4 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 '
            >Add</button>
        </form>
    </>
  )
}

export default TodoForm