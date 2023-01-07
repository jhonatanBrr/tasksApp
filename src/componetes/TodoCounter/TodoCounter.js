import React from "react";
import './TodoCounter.css'

function TodoCounter() {
    return (
        <React.Fragment>
            <div className="container">
                <h2 className="title"> How are you!✋</h2>,
                <span className="TodoCounter">Has completado 2 de 3 tareas</span>
            </div>
        </React.Fragment>
    );
}

export { TodoCounter };