import React from 'react';
import MovieCard from './MovieCard.js'

function MovieList({ query, movies }) {
    return (
        <div className="movie-list">
            <h4>Search Results for "{query}"</h4>
            { movies.map(movie => {
                return < MovieCard key={movie.imdbID} movie={movie} />
            }) }
        </div>
    );
}

export default MovieList;