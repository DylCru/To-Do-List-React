import React, {useState} from "react";

export default function task(props) {
    let priorityColour;
    switch(props.priority) {
        case "high":
            priorityColour = {backgroundColor: "red"}
            break
        case "medium":
            priorityColour = {backgroundColor: "orange"}
            break
        case "low" :
            priorityColour = {backgroundColor: "green"}
    }


    return (
        <div className="task" style={priorityColour}>
            <h3 className="task--name">{props.task}</h3>
            <h4 className="task--priority">{props.priority}</h4>
        </div>
    )
}