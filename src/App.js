// import './App.css';
import React from "react";
import {TodoCounter} from "./componetes/TodoCounter/TodoCounter"
import {TodoSearch} from "./componetes/TodoSearch/TodoSearch"
import {TodoList} from "./componetes/TodoList/TodoList"
import {TodoItem} from "./componetes/TodoItem/TodoItem"
import {CreateTodoButton} from "./componetes/CreateTodoButton/CreateTodoButton"

const todos = [
  {text: 'Cortar cebolla', completed : false},
  {text: 'Tomar cebolla', completed : false},
  {text: 'Llorrar cebolla', completed : true},
  {text: 'lalalalaal', completed : false}
]

function App( ) {
  return (

    <React.Fragment>
      <TodoCounter />
     
      <TodoSearch /> 
      
      <TodoList>
        { todos.map(todo => (
          <TodoItem key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          
          />
        ))}
      </TodoList>
  
      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
