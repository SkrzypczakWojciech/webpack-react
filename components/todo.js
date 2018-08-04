import React from 'react';


class ToDo extends React.Component{
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    toDo = this.state.data.map = singleToDo => {
    return (
      <singleToDo>
        {item: singleToDo, key: singleToDo.id};
      </singleToDo>
    );
  }


export default ToDo;