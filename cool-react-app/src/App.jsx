import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import tasksData from './tasks'
import Task from './components/Task'

function App() {
  const [tasks, setTasks] = useState(tasksData) 

  const allTasks = tasks.map(x => {
    return <Task
              key={x.id}
              task={x.task}
              priority={x.priority}
            />
  })

  const [newTask, setNewTask] = useState({
    task: "", priority: ""
  })

  function handleChange(event) {
    const {name, value} = event.target
    setNewTask(prev => {
      return {...prev, [name] : value}
    })
  }

  function addTask() {
    setTasks(prev => {
      return [...prev, {id : (prev.length + 1), task: newTask.task, priority: newTask.priority}]
    })
  }

  return (
    <div className="App">
      <div className='task-list'>
        {allTasks}
      </div>
      <div className="add-task">
        <input type="text" name="task" value={newTask.task} onChange={handleChange} placeholder="Task Name"
        />
        <input type="radio" name="priority" value="Low" onChange={handleChange}
        />
        <label htmlFor="low">Low</label>
        <input type="radio" name="priority" value="Medium" onChange={handleChange}
        />
        <label htmlFor="medium">Medium</label>
        <input type="radio" name="priority" value="High" onChange={handleChange}
        />
        <label htmlFor="high">High</label>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='task--preview'>
        <p>{newTask.task}</p>
      </div>
    </div>

  )
}

export default App

