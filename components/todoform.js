import React from 'react';

class TodoForm extends React.Component {
  render() {
    return (
        <div>
          <form>
            <input placeholder='Nowe Zadanie'>
            </input>
            <button type='submit' onClick={() => {props.addTodo(props.id)}}>add</button>
          </form>
      </div>
    );
  }
}
 
export default TodoForm;