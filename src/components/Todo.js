import React from 'react';
import Checkbox from './Checkbox';
import Button from './Button';

const Todo = ({ todo, index, updateTodo, removeTodo }) => {

    const checkedStyle = {
        background: 'rgba(240, 98, 146, 0.5)',
        textDecoration: 'line-through'
    }

    return (
        <div className='todo-container'>
            <Checkbox onClick={() => updateTodo(index)}/>
            <div 
                className='todo' 
                style={todo.isCompleted ? checkedStyle : {}}
            >
                <span>
                    {todo.text}
                </span>
            </div>
            <Button
                text='Remove'
                onClick={() => removeTodo(index)}
            />
        </div>
    );
}

export default Todo;