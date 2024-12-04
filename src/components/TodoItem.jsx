import React, {useState} from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({todo}) {
    console.log(todo.isCompleted)
    const [isTodoEditable, setIsTodoEditable] = useState(false);

    const [todoMessage, setTodoMessage] = useState(todo.todo);

    const {updateTodo, removeTodo, toggleIsCompleted} = useTodo()


    // handle checkbox function
    const handleIsCompleted = ()=>{
        console.log("is completed call")
        console.log(todo.id)
        
    }

    // handle edit button 
    const handleEdit = ()=>{
        if(todoMessage.length === 0){
            return
        }
        updateTodo(todo.id, {...todo, todo: todoMessage});
    }
  return (
    <div className='bg-black'>
        // checkbox
        <input type="checkbox"
        checked = {todo.isCompleted}
        onChange={()=> toggleIsCompleted(todo.id)}
        />

        <input type="text" 
            className= ''
            value={todoMessage}
            onChange={(e)=> setTodoMessage(e.target.value)}
            readOnly = {!isTodoEditable}
        />

        <button
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