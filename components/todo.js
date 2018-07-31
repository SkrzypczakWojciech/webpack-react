import React from 'react';

var toDo = [
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


var toDo = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var toDo = this.props.items.map = singleToDo => {
        return React.createElement(singleToDo, {item: singleToDo, key: singleToDo.id});
    };
    return (
      React.createElement('ul', toDo)
    );
  }
});