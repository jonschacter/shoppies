import React, { Component } from 'react';

class MovieCard extends Component {
    render() {
        return (
            <div className="movie-card">
               { this.props.movie.Title } 
            </div>
        );
    }
}

export default MovieCard;