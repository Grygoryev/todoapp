import React, { Component } from 'react';
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
// import '../scss/main.scss';

class App extends Component {
    state = {
        todos: [
            {id: 1, content: 'Go running'},
            {id: 2, content: 'Learn React'}
        ]
    }

    deleteTodo = (id) => {
        const todos = this.state.todos.filter( todo => {
            return todo.id !== id
       })
       this.setState({ 
           todos
         });
    }

    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];
        this.setState({
            todos
        });
    }

    render() {
       return (
            <div className="center container todo-container">
                <h1 className="purple-text">ToDo List</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <AddTodo addTodo={this.addTodo} />
            </div>
       )
    }
}

export default App;