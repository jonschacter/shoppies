// libraries
import React from 'react';

// components
import NomineeCard from './NomineeCard.js'

function NomineeList({ movies }) {
    return (
        <div className="nominee-list">
            <h4>Your Nominees</h4>
            { movies.map(movie => {
                return < NomineeCard key={movie.imdbID} movie={movie} />
            }) }
        </div>
    );
}

export default NomineeList;