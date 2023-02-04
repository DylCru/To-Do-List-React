import React, {useState} from "react";

export default function task(props) {
    return (
        <div className="task">
            <h3 className="task--name">{props.task}</h3>
            <h4 className="task--priority">{props.priority}</h4>
        </div>
    )
}