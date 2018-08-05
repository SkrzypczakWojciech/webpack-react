import React from 'react';
import style from './app.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import {hot} from 'react-hot-loader';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    text: 'clean room',
                    severity: 1
                }, {
                    id: 2,
                    text: 'wash the dishes',
                    severity: 1
                }, {
                    id: 3,
                    text: 'feed my cat',
                    severity: 5
                }
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
                <h1>Most pointed todos</h1>
                <Title title={'Rzeczy do zrobienia: ' + this.state.data.length}></Title>
                <TodoList todos={this.state.data} removeTodo={this.removeTodo.bind(this)}></TodoList>
            </div>
        );
    }
}

export default hot(module)(App);
