import React, {useState} from "react";

export default function task(props) {
    const [expanded, setExpanded] = useState(false)
    const [completed, setCompleted] = useState(false)

    const taskClass = expanded ? "task large" : "task"

    let priorityColour;
    switch(props.priority) {
        case "High":
            priorityColour = {backgroundColor: "red"}
            break
        case "Medium":
            priorityColour = {backgroundColor: "orange"}
            break
        case "Low" :
            priorityColour = {backgroundColor: "green"}
    }

    function expand(event) {
        if (!(event.target.className == "task--tool")) {
            setExpanded(prev => !prev)
        }
    }

    function complete() {
        setCompleted(prev => !prev)
    }

    return (
        <div className={taskClass} style={priorityColour} onClick={expand}>
            <div className="task--info">
                <h3 className="task--name">{props.task}</h3>
                <h4 className="task--priority">{props.priority}</h4>
            </div>
            {expanded && 
            <div className="task--tools">
                <div className="task--tool" onClick={complete}>✅ {completed ? "Set Task as Incompleted" : "Set Task as Completed"}</div>
                <div className="task--tool">❎ Delete Task</div>
            </div>
            }
        </div>
    )
}
