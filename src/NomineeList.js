import React from 'react';
import NomineeCard from './NomineeCard.js'

function NomineeList({ movies }) {
    return (
        <div className="nominee-list">
            { movies.map(movie => {
                return < NomineeCard key={movie.imdbID} movie={movie} />
            }) }
        </div>
    );
}

export default NomineeList;