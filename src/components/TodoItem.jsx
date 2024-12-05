import React, {useState} from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({todo}) {
    const [isTodoEditable, setIsTodoEditable] = useState(false);

    const [todoMessage, setTodoMessage] = useState(todo.todo);

    const {updateTodo, removeTodo, toggleIsCompleted} = useTodo()


    // handle checkbox function
    const handleIsCompleted = ()=>{
        toggleIsCompleted(todo.id)
    }

    // handle edit button 
    const handleEdit = ()=>{
        if(todoMessage.length === 0){
            return
        }
        updateTodo(todo.id, {...todo, todo: todoMessage});
    }
  return (
    <div className='flex justify-center items-center gap-2 my-2'>
        
        <input type="checkbox"
        checked = {todo.isCompleted}
        onChange={handleIsCompleted}
        className='mr-2 w-6 h-6 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        />

        <input type="text" 
            className= {`${todo.isCompleted ? "line-through" : ""} ${isTodoEditable ? "bg-slate-100" :  "bg-gray-400"} px-4 py-2 w-1/2 rounded-md border-2`}
            value={todoMessage}
            onChange={(e)=> setTodoMessage(e.target.value)}
            readOnly = {!isTodoEditable}
        />

        <button 
            className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
            onClick={()=>{
                if(todo.isCompleted){
                    return
                }
                if(isTodoEditable){
                    handleEdit()
                    setIsTodoEditable((prev)=> !prev);
                }else{
                    setIsTodoEditable((prev)=> !prev);
                }
            }}
        >{isTodoEditable ? "📁": "✏️"}</button>

<button
        className='inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
        onClick={() => removeTodo(todo.id)}
        >❌</button>
    </div>
  )
}

export default TodoItem