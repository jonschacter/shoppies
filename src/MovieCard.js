import React, { Component } from 'react';

class MovieCard extends Component {
    render() {
        return (
            <div>
               { this.props.movie.Title } 
            </div>
        );
    }
}

export default MovieCard;