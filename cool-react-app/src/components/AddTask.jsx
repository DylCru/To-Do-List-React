import React, {useState} from "react";

export default function AddTask(props) {
    const [shown, setShown] = useState(false)

    function toggle() {
        setShown(prev => !prev)
    }

    const addClass = shown ? "new-task-show" : "new-task-hide"

    return (
    <div className={addClass}>
        <div className="toggle" onClick={toggle}>{shown ? '⬇' : '⬆'}</div>
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
    </div>
    
    )
}