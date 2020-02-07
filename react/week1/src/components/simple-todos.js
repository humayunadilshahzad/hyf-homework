// showing 3 static todos on mount
import React, { useState } from 'react';

function MountingTodos() {
    const todoElements = ['Get out of bed -Wed Sep 13 2017',
        'Brush teeth - Thu Sep 14 2017',
        'Eat breakfast - Fri Sep 15 2017'];

    const [state, newState] = useState(todoElements);
  

    return (
        <div>
            <h1>Bismillah </h1>
            <h2>ToDos for Today</h2>
            {state.map(todo => <li><input type='checkbox' />{todo}</li>)}
        </div>
    );

}

export default MountingTodos;