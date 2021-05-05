import React from 'react';
import MovieCard from './MovieCard.js'

function MovieList({ movies, addNominate }) {
    return (
        <div className="movie-list">
            { movies.map(movie => {
                return < MovieCard key={movie.imdbID} movie={movie} addNominate={addNominate} />
            }) }
        </div>
    );
}

export default MovieList;