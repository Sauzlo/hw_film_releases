import React from 'react';

function Film({name, url}){
    return(
        <>
            <li><a href={url}>{name}</a></li>
            <p></p>
        </>
    )
}

export default Film;