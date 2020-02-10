import React, { useState } from 'react';

function NameObj() {
    const [name, setName] = useState({ firstName: '', secondName: '' })

    //setName = (e) => (e.t)
    // this functions returns JSX .. java script XML (using jsx its easy to creat UI)
    return <div>
        <input type='text' onChange={e => setName({ ...name, firstName: e.target.value })} />
        <input type='text' onChange={e => setName({ ...name, secondName: e.target.value })} />
        <h1> first name : {name.firstName}</h1>
        <h1>second name : {name.secondName}</h1>
    </div>

    // we can also do it with using JSX .. then programmer have to use 
    //React.createElement function to create all the required elements manually ..without requring react..

    // return React.createElement(
    //     'div',
    //     {id:'hello',className:'dummeyClass'},
    //     React.createElement('h1',null,'Bismillah ... hello Adil')
    //     )

}
export default NameObj;