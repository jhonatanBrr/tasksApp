// import './App.css';
import React from "react";
import {TodoCounter} from "./componetes/TodoCounter/TodoCounter"
import {TodoSearch} from "./componetes/TodoSearch/TodoSearch"
import {TodoList} from "./componetes/TodoList/TodoList"
import {TodoItem} from "./componetes/TodoItem/TodoItem"
import {CreateTodoButton} from "./componetes/CreateTodoButton/CreateTodoButton"
import { Modal } from "./modal";
import { TodoForm } from "./componetes/TodoForm/TodoForm";

function useLocalStorage(itemName) {
  const storageItem = localStorage.getItem(itemName)
  
  let _item = [];
  if (storageItem) {
    _item = JSON.parse(storageItem)
  }

  const [item, setItem ] = React.useState(_item)
  
  const saveItem = (newItem) =>  {
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem)
  }

  return [
    item,
    saveItem
  ];
}


function App() {
  const [ todos , saveTodos ] = useLocalStorage('TODOS'); 
  const [ searchValue, setSearchValue ] = React.useState('');
  const [ openModal, setOpenModal ] = React.useState(false);

  let searchedTodos = []
  if (searchValue.length > 0) {
    searchedTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))
  }else{
    searchedTodos = todos
  }

  const completedTodos = searchedTodos.filter(todo => !!todo.completed).length;
  const totalTodos = searchedTodos.length;

  const onComplete = (text) => {
    let mapTodos = todos.map(todo => {
      if (todo.text.toLowerCase() === text.toLowerCase()) {
        todo.completed = todo.completed? false : true; 
      }
      return todo
    })
    saveTodos(mapTodos)
    alert('Ya completaste la tarea' + text)
  }

  const onDelete = (text) => {
    let filterTodos = todos.filter(todo => todo.text.toLowerCase() !== text.toLowerCase())
    saveTodos(filterTodos) 
    alert('Borraste la tarea ' + text)
  }

  const addTodo = (text) => {
    let newArrayTodo =  [...todos]
    newArrayTodo.push(
      {
        completed: false,
        text:text
      }
    )
    saveTodos(newArrayTodo)
  }


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
            onComplete={onComplete} 
            onDelete={onDelete}
            completed={todo.completed}
          />
        ))}
      </TodoList>

      {!!openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal}/>
        </Modal>
      )}
    
      <CreateTodoButton 
        setOpenModal={setOpenModal}
      />

    </React.Fragment>
  );
}

export default App;
