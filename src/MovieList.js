import React from 'react';

function MovieList({ movies }) {
    return (
        <div className="movie-list">
            { movies.map(movie => {
                console.log(movie)
            }) }
        </div>
    );
}

export default MovieList;