import React from 'react';

function Header(porps){
    return(
        <>
        <h1 className='header'> To Do Application</h1>
        {porps.children}
        </>
    );

}
export default Header;