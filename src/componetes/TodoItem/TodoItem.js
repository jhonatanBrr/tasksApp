import React from "react";
import "./TodoItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faCheck } from '@fortawesome/free-solid-svg-icons'

function TodoItem({text, completed, onComplete , onDelete}) {

    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
                onClick={() => onComplete(text)}
            > 
                <FontAwesomeIcon icon={faCheck} />
            </span>
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
                {text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={() => onDelete(text)}
            >
                <FontAwesomeIcon icon={faTrash} />
            </span>
        </li>
    );
}

export { TodoItem };