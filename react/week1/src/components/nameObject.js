import React, { useState } from 'react';

function NameObj() {
    const [name, setName] = useState({ firstName: '', secondName: '' })

     return <div>
        <input type='text' onChange={e => setName({ ...name, firstName: e.target.value })} />
        <input type='text' onChange={e => setName({ ...name, secondName: e.target.value })} />
        <h1> first name : {name.firstName}</h1>
        <h1>second name : {name.secondName}</h1>
    </div>
}
export default NameObj;
