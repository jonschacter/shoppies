import React, { Component } from 'react';

class MovieCard extends Component {  
    constructor(props){
        super(props)

        this.state = {
            button: true
        }
    }

    handleClick = () => {
        this.props.addNominate(this.props.movie)
    }
    
    render() {
        const { Title, Year } = this.props.movie
        return (
            <div className="movie-card">
               { Title } ({ Year })
               <button className="nominate-button" disabled={!this.state.button} onClick={this.handleClick}>Nominate</button>
            </div>
        );
    }
}

export default MovieCard;