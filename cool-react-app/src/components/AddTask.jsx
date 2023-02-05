import React from "react";

export default function AddTask(props) {
    return (
    <div className="add-task">
        <input className="task-name" type="text" name="task" value={props.newTask.task} onChange={props.handleChange} placeholder="Task Name"/>
        
        <div className="prio-select">
            <div>
                <input className="task-prio" type="radio" name="priority" value="Low" onChange={props.handleChange}/>
                <label htmlFor="low">Low</label>
            </div>
            <div>
                <input className="task-prio" type="radio" name="priority" value="Medium" onChange={props.handleChange}/>
                <label htmlFor="medium">Medium</label>
            </div>
            <div>
                <input className="task-prio" type="radio" name="priority" value="High" onChange={props.handleChange}/>
                <label htmlFor="high">High</label>
            </div>
        </div>
        
        <button onClick={props.addTask}>Add Task</button>
    </div>
    )
}