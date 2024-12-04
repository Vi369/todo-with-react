const addTodo = (todos, newTodo) => {
    return [{...newTodo, id: Date.now()}, ...todos];
}

const updateTodo = (todos, id, updatedTodo)=>{
    return todos.map((todo)=> {
        return todo.id === id ? {...todo, ...updatedTodo} : todo
    })
}


const removeTodo = (todos, id)=> {
    return todos.filter((todo)=> (todo.id !== id));
}

const toggleIsCompleted = (todos, id)=>{
    if(todos && todos.length >= 1){
        return todos?.map((todo)=>(todo.id ===id ? {...todo, 
            isCompleted : !todo.isCompleted} : todo))
    }
}


export { addTodo, updateTodo, removeTodo, toggleIsCompleted}