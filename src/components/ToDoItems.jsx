import React from 'react'

const ToDoItems = ({todos,delButton}) => {
  return (
    <div>
        {todos.map((todo,index)=>
        <div className='todolist' key={index}>
          <h3 className='todo-text'>{todo}</h3>
          <i onClick={()=>delButton(index)} className="fa-solid fa-trash"></i>
        </div>)}
    </div>
  )
}

export default ToDoItems