import React, { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/ToDoForm';
//import apiService from './services/apiService';
import './App.css';

const App = () => {

  const [todos, setTodos] = useState([
    {
      text: 'Learn hooks',
      isCompleted: false
    }
  ]);

  // const [todos, setTodos] = useState([
  //   apiService('GET', 'http://todo-core-api.azurewebsites.net/api/TodoItems/')
  // ]);

  const addTodo = text => {
    const newTodo = {
      text, 
      isCompleted: false 
    }

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);

    //apiService('POST', 'http://todo-core-api.azurewebsites.net/api/TodoItems/', newTodo);
  };

  const updateTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;

    setTodos(newTodos);

    //apiService('PUT', `http://todo-core-api.azurewebsites.net/api/TodoItems/${index}`, newTodos[index])
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);

    setTodos(newTodos);

    //apiService('DELETE', `http://todo-core-api.azurewebsites.net/api/TodoItems/${index}`)
  };

  return (
    <div className='app'>
      <div className='title'>
        Yes, another To Do!
      </div>
      <div className='todo-list'>
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            updateTodo={updateTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm
          addTodo={addTodo}
        />
      </div>
    </div>
  )
}

export default App;
