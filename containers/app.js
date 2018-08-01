import React from 'react';
import style from './app.css';
import title from '../components/title';
import toDo from '../components/todo';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
    const remainder = this.state.data.filter(todo => todo.id !== id);
    this.setState({data: remainder});
    }
    render() {
    return (
        <div className={style.TodoApp}>
        	<title title={'rzeczy do zrobienia:'+ this.state.data.length}></title>
        	<toDo/>
            Tutaj pojawią się komponenty naszej aplikacji.
        </div>
        );
    }
}

export default hot(module)(App);