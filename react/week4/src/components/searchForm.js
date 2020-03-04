import React, { useEffect, useState } from 'react';

function SearchForm({ searchUser }) {
    const [userToSearch, setUserToSearch] = useState('');
    const [foundusers, setFoundusers] = useState(false);
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]);
    const [error, setErrot] = useState('')
    //console.log('items data', items.items);
    useEffect(() => {
        if (userToSearch) {
            setLoading(true)
            fetch(`https://api.github.com/search/users?q=${userToSearch}`, { headers: { Authorization: "Basic" + btoa("humayunadilshahzad:gh12348765") } })
                .then(res => res.json())
                .then(data => {
                    setItems(data.items)
                    //                    console.log("items", data.items);
                    if (items.length > 0)
                        setFoundusers(true)
                    setLoading(false);
                })
                //            .then(console.log(items))
                .catch(err => console.log("consoled error", err));
        }
        else {
            setFoundusers(false);
            setLoading(false);
        }
    }, [userToSearch])

    const handleSubmit = ev => {
        ev.preventDefault();
        console.log(userToSearch);
        searchUser(userToSearch);
        //       setUserToSearch('');
    }

    // const selectUser = (user) => {
    //     // setUserToSearch(user);
    //     // console.log(user);
    // }

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter user name to search" value={userToSearch}
                    onChange={e => {
                        setUserToSearch(e.target.value);
                    }} />
            </form>
            {loading ?
                <p>Loading ....</p>
                : <>{
                    foundusers ?
                        items.map((item, index) => {

                            return <li key={index}  >{item.login} </li>;
                        })
                        : <p>no users</p>
                }</>}
            {/* {console.log(items[0])} */}

        </div>

    )


}
export default SearchForm;



