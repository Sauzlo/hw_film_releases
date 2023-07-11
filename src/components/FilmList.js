import React from 'react';
import Film from './Film'

function FilmList({filmData}){

    const filmNodes = filmData.map(function(film){
        return (
            <Film key={film.id}
                name={film.name}
                url={film.url}
            />
        )
    });

    return (
        <ul>
            {filmNodes}
        </ul>
    )
};

export default FilmList;