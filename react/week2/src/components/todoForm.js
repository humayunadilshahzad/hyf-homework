import React, { useState,useEffect } from 'react';

function TodoForm({ addTodo }) {
    const [value, setValue] = useState('');

  
    const handleSubmit = ev => {
      ev.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue('');
    }
    return (
      <form onSubmit={handleSubmit}>
        <input className='todo' type="text" placeholder="enter new todo" value={value}
         onChange={e => setValue(e.target.value)} />
      </form>
    )
  }

  export default TodoForm;