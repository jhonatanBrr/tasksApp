// import './App.css';
import React from "react";
import {TodoCounter} from "./componetes/TodoCounter/TodoCounter"
import {TodoSearch} from "./componetes/TodoSearch/TodoSearch"
import {TodoList} from "./componetes/TodoList/TodoList"
import {TodoItem} from "./componetes/TodoItem/TodoItem"
import {CreateTodoButton} from "./componetes/CreateTodoButton/CreateTodoButton"

const defaultTodos = [
  {text: 'Cortar cebolla', completed : false},
  {text: 'Tomar cebolla', completed : true},
  {text: 'Llorrar cebolla', completed : true},
  {text: 'lalalalaal', completed : false}
]

function App( ) {
  const [todos, setTodos ] = React.useState(defaultTodos)
  const [ searchValue, setSearchValue ] = React.useState('');

  let searchedTodos = []
  if (searchValue.length > 0) {
    searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  }else{
    searchedTodos = todos
  }

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  return (

    <React.Fragment>
      <TodoCounter 
        total={totalTodos}
        completed={completedTodos}
      />
     
      <TodoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue} 
      /> 
      
      <TodoList>
        { searchedTodos.map(todo => (
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            todos={todos} 
            setTodos={setTodos}
            completed={todo.completed}
          />
        ))}
      </TodoList>
  
      <CreateTodoButton />

    </React.Fragment>
  );
}

export default App;
