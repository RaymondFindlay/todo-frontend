import React, { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/ToDoForm';
import apiService from './services/apiService';
import * as URLs from './services/urlService';
import './App.css';

const App = () => {

  const [todos, setTodos] = useState([
    apiService('GET', URLs.get)
  ]);

  const addTodo = text => {
    const newTodo = {
      text, 
      isCompleted: false 
    }

    const newTodos = [...todos, newTodo];
    setTodos(newTodos);

    apiService('POST', URLs.post, newTodo);
  };

  const updateTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;

    setTodos(newTodos);

    apiService('PUT', URLs.put.replace(':id', index), newTodos[index])
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);

    setTodos(newTodos);

    apiService('DELETE', URLs.del.replace(':id', index))
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
