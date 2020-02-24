import React, { useState, useEffect } from 'react';
import './App.css';
import SearchForm from './components/searchForm';

function App() {
  const [user, setUser] = useState('');
  const [repos, setRepos] = useState([]);
  
  useEffect(() => {
    if (user)
      fetch(`https://api.github.com/users/${user}/repos`)
        .then(res => res.json())
        .then(res_repos => {
          setRepos(res_repos);
          console.log(res_repos);
        })
        .then(() => console.log(repos))
        .catch(err => console.log(err));
  }, [user])

  const searchUser = user => {
    setUser(user);
    console.log(user);
  }


  return (
    <div className="App">

      <h1>GitHub User sercher</h1>
      <SearchForm searchUser={searchUser} />
      {/* {<p>{repos}</p>} */}

    </div>
  );
}

export default App;
