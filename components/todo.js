import React from 'react';

const toDo = [
{
id: 1,
    text: 'clean room'
}, {
id: 2,
    text: 'wash the dishes'
}, {
id: 3,
    text: 'feed my cat'
}
]


class ToDo extends React.Component{
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var toDo = this.props.items.map = singleToDo => {
        return React.createElement(singleToDo, {item: singleToDo, key: singleToDo.id});
    };
    return (
      <div>
        {this.items}
      </div>
    );
  }


export default ToDo;