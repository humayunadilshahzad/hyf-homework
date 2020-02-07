import React from 'react';
import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';
import NameObj from './components/nameObject'
import ArryState from './components/arrayState'
import MountingTodos from './components/simple-todos'
function App() {
  return (
    <div className="App">
     {/* <NameObj/>
     <ArryState/> */}
     <Todos/>
     {/* <MountingTodos/> */}

    </div>
  );
}

export default App;

/* <Todos name='adil' name1='shahzada'> <button>click</button> </Todos>
<Todos name='basil' name1='chona' />
<Todos name='rafeh' name1='paru' />
 */


//DEFAULT APP.JS PRE CODE RETURN JSX

// <div className="App">
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <p>
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//   <a
//     className="App-link"
//     href="https://reactjs.org"
//     target="_blank"
//     rel="noopener noreferrer"
//   >
//     Learn React
//   </a>
// </header>
// </div>