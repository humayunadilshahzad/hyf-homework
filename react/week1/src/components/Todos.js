// showing 3 static todos on a buttong click
import React, { useState } from 'react';

function Todos() {
    const todoElements = ['Get out of bed -Wed Sep 13 2017',
        'Brush teeth - Thu Sep 14 2017',
        'Eat breakfast - Fri Sep 15 2017'];

    const [state, newState] = useState([]);
    function showTodos() {
        newState([...todoElements]);
    }
 

    return (
        <div>
            <h1>Bismillah </h1>
            <h2>ToDos for Today</h2>
            <button onClick={showTodos}>Click to Show ToDos</button>
            {state.map(todo => <li><input type='checkbox' />{todo}</li>)}
        </div>
    );

}

export default Todos;