import React, { useState, useEffect } from 'react';
import './App.css';
import TodoForm from './components/todoForm';

//import Todos from './components/Todos';
//import NameObj from './components/nameObject'
//import ArryState from './components/arrayState'
//import MountingTodos from './components/simple-todos'

function Todo({ todo, index, todoDone, todoRemove }) {
  //const { todo, index } = props;
  return (
    <div>
      <div className='todo' style={{ textDecoration: todo.isComplete ? 'line-through' : '' }}> {todo.description}
        <span><button className='fr' onClick={() => todoDone(index)}>Done</button></span>
        <span><button className='fr' onClick={() => todoRemove(index)}>Delete</button></span> </div>

    </div>
  )
}
////////////////////////////
let call=0;

function App() {
  const basetodos = [{
    id: 1,
    description: "Get out of bed",
    isComplete: false
  },
  {
    id: 2,
    description: "Brush teeth",
    isComplete: false
  },
  {
    id: 3,
    description: "Eat breakfast",
    isComplete: false
  }
  ];

  const [todos, setTodos] = useState(basetodos);

  const addTodo = text => {
    const newtodo = {
      id: todos.length + 1,
      description: text,
      isComplete: false
    }
    const newTodos = [...todos, newtodo];
    console.log(newTodos);
    setTodos(newTodos);

  }
  const todoRemove = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const todoDone = index => {
    const newTodos = [...todos];
    console.log(newTodos);
    newTodos[index].isComplete = true;
    setTodos(newTodos);
  }
  
  useEffect(()=>{
    document.title= `call: ${call}`;
    call++;
  });

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (<Todo key={index} index={index} todo={todo} todoDone={todoDone} todoRemove={todoRemove} />))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}

export default App;

