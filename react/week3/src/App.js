import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/todoForm';
import Header from './components/Header'
import Todo from './components/todo';
import Timer from './components/timer';

function App() {
  
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const todoArray = await fetch("https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw")
        .then(response => response.json());

      const todosWithComplete = todoArray.map(todo => {
        todo.isComplete = false;
        return todo;
      })
      console.log(todosWithComplete)
      setTodos(todoArray);
    };
    getData();
  }, []);

  const addTodo = todo => {
    console.log(todo);
    const newtodo = {

      id: todos[todos.length - 1].id + 1,

      description: todo.description,
      deadline: todo.deadline,
      isComplete: false
    }
    const newTodos = [...todos, newtodo];
    console.log(newTodos);
    setTodos(newTodos);
  }



  const todoUpdate = (id, update) => {
    console.log(id, update);
    const updateTodo = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          description: update.description,
          deadline: update.deadline
        }

      }
      else
        return todo;
    })
    setTodos(updateTodo)
  }

  const todoRemove = id => {
    const newTodos = todos.filter((todo) => {
      return id !== todo.id
    })
    setTodos(newTodos);
  }

  const todoDone = id => {
    const newTodos = [...todos];
    newTodos[id - 1].isComplete = !newTodos[id - 1].isComplete;
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <div className="todo-list">
        <Header />
        <Timer />
        <TodoForm addTodo={addTodo} />
        {todos.map((todo, index) =>
          (<Todo key={todo.id} id={todo.id} todo={todo} todoDone={todoDone} todoRemove={todoRemove} todoUpdate={todoUpdate} />))}

      </div>
    </div>
  );
}

export default App;

