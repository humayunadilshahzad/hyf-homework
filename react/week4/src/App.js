import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './components/searchForm';

function App() {
  const [users, setUsers] = useState('');
  // useEffect(() => {
  //   // fetch("gitAPI");
  //   // set User State with api result  setUsers();
    

  // })

  const searchUser = user => {
    setUsers(user);
    console.log(users);
  }


  return (
     

    <div className="App">
      <header>
        <h1>GitHub User sercher</h1>
      </header>
      <SearchForm  searchUser={searchUser} />

    </div>
  );
}

export default App;
