import React, { useState } from 'react'
import ToDoItems from './ToDoItems'

const Todos = () => {
  const [task, setTask] = useState('')
  const[todos,setTodos] = useState([])
  const changeHandler = (e) => {
    setTask(e.target.value)
  }
  const submiHandler = (e)=>{
    e.preventDefault();  //to prevent default submission
    console.log(task);
    const newTodos = [...todos,task]  //copy the old todos with task to newTodos
    setTodos(newTodos)
    setTask('') //reset the value on inputbox once we click on submit
  }
  const delButton=(indexValue)=>{
    const newTodos = todos.filter((todo,index)=>index!==indexValue)
    setTodos(newTodos)
  }
  return (
    <div className='todo-container'>
      <h1>To-Do-List</h1>
      <div className="input-box">
        <form onSubmit={submiHandler}>
          <input type="text" value={task} onChange={changeHandler} placeholder='Add Task here' />
          <button type='submit'>Add</button>
        </form>
      </div>
      <ToDoItems todos= {todos} delButton={delButton}/>
    </div>
  )
}

export default Todos