import React from "react";
import "./CreateTodoButton.css"

function CreateTodoButton() {

    const onClickButton = () => {
        alert('click')
    }


    return (
        <button 
            className="CreateTodoButton"
            onClick={onClickButton}
        >
            +
        </button>
    );
}

export { CreateTodoButton };