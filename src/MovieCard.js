import React, { Component } from 'react';

class MovieCard extends Component {  
    constructor(props){
        super(props)

        this.state = {
            button: true
        }
    }
    
    render() {
        const { Title, Year } = this.props.movie
        return (
            <div className="movie-card">
               { Title } ({ Year })
               <button className="nominate-button" disabled={!this.state.button}>Nominate</button>
            </div>
        );
    }
}

export default MovieCard;