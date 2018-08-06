import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    const mappedTodos = props.todos.map(todo => <Todo id={todo.id} text={todo.text} remove={props.removeTodo} key={todo.id}></Todo>);
    return (<ul>{mappedTodos}</ul>);
};

export default TodoList;