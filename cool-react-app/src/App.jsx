import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import tasksData from './tasks'
import Task from './components/Task'
import Header from './components/Header'
import AddTask from './components/AddTask'

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
      <Header />
      <div className='task-list'>
        {allTasks}
      </div>
      <AddTask addTask={addTask} newTask={newTask} handleChange={handleChange} />
      <div className='task--preview'>
        <p>{newTask.task}</p>
      </div>
    </div>

  )
}

export default App

