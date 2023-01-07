import React from "react";
import "./TodoItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function TodoItem(props) {

    const onComplete = () => {
        alert('Ya completaste la tarea' + props.text)
    }

    const onDelete = () => {
        alert('Borraste la tarea ' + props.text)
    }


    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onComplete}
            > 
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={onDelete}
            >
                <FontAwesomeIcon icon={faTrash} />
            </span>
        </li>
    );
}

export { TodoItem };