import React, { Component } from 'react';
import { v4 as uuidv4 } from "uuid";
import Header from './Header';
import TodoList from './TodoList';
import InputTodo from './InputTodo';

class TodoContainer extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Setup development environment",
        completed: true
      },
      {
        id: uuidv4(),
        title: "Develop website and add content",
        completed: false
      },
      {
        id: uuidv4(),
        title: "Deploy to live server",
        completed: false
      }
    ]
  };

  handleChange = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    }));
  };

  addTodo = title => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    }
    this.setState({
      todos: [...this.state.todos, newTodo]
    })
    console.log(newTodo);
  }

  deleteTodo = id => {
    this.setState({
      todos: [
        ...this.state.todos.filter(todo => {
          return todo.id !== id;
        })
      ]
    });
  }

  render() {
    return (
      <div className="container">
        <div>
          <Header />
          <InputTodo
            addTodoProps={this.addTodo}
          />
          <TodoList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.deleteTodo}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
