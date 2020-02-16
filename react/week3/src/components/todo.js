import React, { useState, useEffect } from 'react';

function Todo({ todo, id, todoDone, todoRemove, todoUpdate }) {
  console.log(todo);

  const [editedTodo, setEditedtodo] = useState({ description: todo.description, deadline: todo.deadline });
  const [iscmdEdit, setcmdEdit] = useState(false);
  //console.log(index, todo.description);
  // console.log(index,editedTodo.description);
  return (

    <div className='todo' style={{ textDecoration: todo.isComplete ? 'line-through' : '' }}>
      <p>
        {iscmdEdit ?
          (
            <>
              <input
                value={editedTodo.description}
                onChange={e => setEditedtodo({ ...editedTodo, description: e.target.value })} />

              <input type="date"
                value={editedTodo.deadline}
                onChange={e => setEditedtodo({ ...editedTodo, deadline: e.target.value })} />
            </>
          )
          :
          <>{todo.description} | {todo.deadline}</>

        }


        {iscmdEdit ?
          (<>
            <button className='fr'
              onClick={() => {
                setcmdEdit(false);
                todoUpdate(
                  todo.id,
                  editedTodo
                );
              }}
            >
              update
              </button></>) :
          <>
            <button className='fr' onClick={() => setcmdEdit(true)}>
              edit
                          </button>
          </>
        }
        <span><button className='fr' onClick={() => todoDone(id)}>Mark Done</button></span>
        <span><button className='fr' onClick={() => todoRemove(id)}>Delete</button></span>
      </p>
    </div>
  )
}

function areEqual(prevProps, newProps) {
  return prevProps.todo.description === newProps.todo.description && prevProps.todo.deadline === newProps.todo.deadline;

}

export default Todo;
//export default Todo;