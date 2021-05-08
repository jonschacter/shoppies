// libraries
import React, { Component } from 'react';
import { connect } from 'react-redux'

// actions
import { removeNominee, deleteNominee } from '../../actions/nominees.js'

class NomineeCard extends Component {  
    handleClick = () => {
        const { removeNominee, deleteNominee, movie, loggedIn } = this.props

        // removeNominee only interacts with store for when a user is NOT logged in
        // deleteNominee will communicate with backend first
        if (loggedIn) {
            deleteNominee(movie.imdbID)
        } else {
            removeNominee(movie.imdbID)
        }
    }
    
    render() {
        const { Title, Year } = this.props.movie
        return (
            <div className="nominee-card">
               { Title } ({ Year })
               <button className="nominate-button" onClick={this.handleClick}>Remove</button>
            </div>
        );
    }
}

const mapStateToProps = ({ user }) => {
    return {
        loggedIn: !!user
    }
}

export default connect(mapStateToProps, { removeNominee, deleteNominee })(NomineeCard);