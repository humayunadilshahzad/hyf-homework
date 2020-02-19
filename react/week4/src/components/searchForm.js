import React, { useEffect, useState } from 'react';

function SearchForm({ searchUser }) {
    const [userToSearch, setUserToSearch] = useState('');

    useEffect(() => {
        //fetch(git api)
        setUserToSearch(userToSearch);
    },[userToSearch])

    const handleSubmit = ev => {
        ev.preventDefault();
        searchUser(userToSearch);
        setUserToSearch('');
    }

    return (

        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter user name to search" value={userToSearch}
                onChange={e => {
                    setUserToSearch(e.target.value);
                }} />
        </form>

    )


}
export default SearchForm;



