import React from 'react';
import style from './app.css';
import Title from '../components/Title';
import TodoForm from '../components/todoform.js';
import TodoList from '../components/TodoList';
import {hot} from 'react-hot-loader';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'Posprzatac pokoj',
                }, {
                    id: 2,
                    text: 'Zmyc naczynia',
                }, {
                    id: 3,
                    text: 'Nakarmic psa',
                }, 
            ]
        };
    }

    addTodo(val) {
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
                <Title title={'Rzeczy do zrobienia: ' + this.state.data.length}></Title>
                <TodoList todos={this.state.data} removeTodo={this.removeTodo.bind(this)}></TodoList>
                <TodoForm addTodo={this.addTodo}></TodoForm>
            </div>
        );
    }
}

export default hot(module)(App);
