import React, { useState } from 'react';

function ArryState() {
    const [elements, setElement] = useState([])

    function addElement() {
        setElement([...elements, Math.floor(Math.random() * 10 + 1)])
    }
    // this functions returns JSX .. java script XML (using jsx its easy to creat UI)
    return <div>
        <button onClick={addElement}>click to add element</button>
        <ul>
            {elements.map((el,i) => (<li key={i}>{el}</li>))}
        </ul>
    </div>

    // we can also do it with using JSX .. then programmer have to use 
    //React.createElement function to create all the required elements manually ..without requring react..

    // return React.createElement(
    //     'div',
    //     {id:'hello',className:'dummeyClass'},
    //     React.createElement('h1',null,'Bismillah ... hello Adil')
    //     )

}
export default ArryState;