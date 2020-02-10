// showing 3 static todos on a buttong click
import React, { useState } from 'react';

function Todos() {
    const todoElements = [
        {
            "id": 1,
            "description": "Get out of bed"
        },
        {
            "id": 2,
            "description": "Brush teeth"
        },
        {
            "id": 3,
            "description": "Eat breakfast"
        },
        {
            "id": 4,
            "description": "Drive to office"
        }


    ];

    const [todos, newTodos] = useState(todoElements);
    //updating state 
    // function showTodos() {
    //     newTodos([...todoElements]);
    // }
    // function addTodo(){
        
    // }
    return (
        <div>
            <h1>Bismillah </h1>
            <h2>ToDos for Today</h2>
            {/* <button onClick={showTodos}>Click to Show ToDos</button> */}
            {todos.map((todo) => <li key={todo.id}><input type='checkbox' />{todo.description}</li>)}
            <form>            
                <input type="text" placeholder="enter todo" onClick={addTodo}></input>
                <button >Click to Add ToDo</button>
            </form>

        </div>
    );

}

export default Todos;