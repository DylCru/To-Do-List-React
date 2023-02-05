import React from "react";

export default function AddTask(props) {
    return (
    <div className="add-task">
        <input type="text" name="task" value={props.newTask.task} onChange={props.handleChange} placeholder="Task Name"/>
        <input type="radio" name="priority" value="Low" onChange={props.handleChange}/>
        <label htmlFor="low">Low</label>
        <input type="radio" name="priority" value="Medium" onChange={props.handleChange}/>
        <label htmlFor="medium">Medium</label>
        <input type="radio" name="priority" value="High" onChange={props.handleChange}/>
        <label htmlFor="high">High</label>
        <button onClick={props.addTask}>Add Task</button>
      </div>
    )
}