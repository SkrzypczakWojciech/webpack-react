
import React from 'react';
import style from './../containers/app.css';

const Todo = props => {
    return (<li>{props.text}<span className={style["todo-remove-span"]} onClick={() => {props.remove(props.id)}}>x</span></li>);
};

export default Todo;