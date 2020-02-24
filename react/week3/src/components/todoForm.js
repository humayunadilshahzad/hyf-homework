import React, { useState, useEffect } from 'react';

function TodoForm({ addTodo }) {
  const [newtodo, setNewtodo] = useState({ description: '', deadline: '' });

  const handleSubmit = ev => {
    ev.preventDefault();
    if (!newtodo.description) return;
    addTodo(newtodo);
    setNewtodo({ description: '', deadline: '' });
  }
  return (
    <form className='form' onSubmit={handleSubmit}>
      <input className='todo' type="text" placeholder="enter new todo" value={newtodo.description}
        onChange={e => setNewtodo({ ...newtodo, description: e.target.value })} />
      <input className='todo' type="date" value={newtodo.deadline} onChange={e =>
        setNewtodo({ ...newtodo, deadline: e.target.value })} />

      <button className='button' onClick={handleSubmit}>Click to Add</button>
    </form>
  )
}

export default TodoForm;
