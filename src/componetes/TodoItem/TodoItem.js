import React from "react";
import "./TodoItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}> √</span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span className="Icon Icon-delete">
                <FontAwesomeIcon icon={faTrash} />
            </span>
        </li>
    );
}

export { TodoItem };