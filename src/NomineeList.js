import React from 'react';
import NomineeCard from './NomineeCard.js'

function NomineeList({ movies, removeNominate }) {
    return (
        <div className="nominee-list">
            { movies.map(movie => {
                return < NomineeCard key={movie.imdbID} movie={movie} removeNominate={removeNominate} />
            }) }
        </div>
    );
}

export default NomineeList;