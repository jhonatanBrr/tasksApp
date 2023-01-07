import React from "react";
import "./TodoItem.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function TodoItem({text, completed, todos , setTodos}) {

    const onComplete = () => {
        let mapTodos = todos.map(todo => {
            if (todo.text.toLowerCase() === text.toLowerCase()) {
                todo.completed = todo.completed? false : true; 
            }
            return todo
        })
        setTodos(mapTodos)
       alert('Ya completaste la tarea' + text)
    }

    const onDelete = () => {
        let filterTodos = todos.filter(todo => todo.text.toLowerCase() != text.toLowerCase())
        setTodos(filterTodos) 
        alert('Borraste la tarea ' + text)
    }


    return (
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${completed && 'Icon-check--active'}`}
                onClick={onComplete}
            > 
                √
            </span>
            <p className={`TodoItem-p ${completed && 'TodoItem-p--complete'}`}>
                {text}
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