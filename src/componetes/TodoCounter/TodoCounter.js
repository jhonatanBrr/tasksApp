import React from "react";
import './TodoCounter.css'

function TodoCounter({total, completed}) {
    return (
        <React.Fragment>
            <div className="container">
                <h2 className="title"> How are you!✋</h2>,
                <span className="TodoCounter">Has completado {completed} de {total} tareas</span>
            </div>
        </React.Fragment>
    );
}

export { TodoCounter };