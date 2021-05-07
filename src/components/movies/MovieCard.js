import React, { Component } from 'react';
import { connect } from 'react-redux'

import { addNominee } from '../../actions/nominees.js'

class MovieCard extends Component {  
    renderButton = () => {
        const { movie, nominees } = this.props

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
        const { movie, addNominee } = this.props

        addNominee(movie)
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

const mapStateToProps = ({ nominees }) => {
    return {
        nominees
    }
}

export default connect(mapStateToProps, { addNominee })(MovieCard);