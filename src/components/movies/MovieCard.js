// libraries
import React, { Component } from 'react';
import { connect } from 'react-redux'

// actions
import { addNominee, createNominee } from '../../actions/nominees.js'

class MovieCard extends Component {  
    renderButton = () => {
        const { movie, nominees } = this.props

        // disable button at 5 nominees or if already nominated
        let displayButton = true

        if (nominees.length > 4) {
            displayButton = false
        } else {
            for(let i = 0; i < nominees.length; i++) {
                if (nominees[i].imdbID === movie.imdbID) {
                    displayButton = false
                    break
                }
            }
        }

        return <button className="nominate-button" disabled={!displayButton} onClick={this.handleClick}>Nominate</button>
    }

    handleClick = () => {
        const { movie, addNominee, createNominee, user } = this.props

        // addNominee only interacts with store for when a user is NOT logged in
        // createNominee will communicate with backend first
        if (user) {
            createNominee(movie, user)
        } else {
            addNominee(movie)
        }
    }
    
    render() {
        const { Title, Year } = this.props.movie
        return (
            <div className="movie-card">
               { Title } ({ Year })
               { this.renderButton() }
            </div>
        );
    }
}

const mapStateToProps = ({ nominees, user }) => {
    return {
        nominees,
        user
    }
}

export default connect(mapStateToProps, { addNominee, createNominee })(MovieCard);