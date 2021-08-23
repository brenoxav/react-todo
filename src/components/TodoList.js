import React from 'react';

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((item) => (
          <li>{item.title}</li>
        ))}
      </ul>
    );
  };
}

export default TodoList;
