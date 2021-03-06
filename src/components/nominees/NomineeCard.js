// libraries
import React, { Component } from 'react';
import { connect } from 'react-redux'

// actions
import { removeNominee } from '../../actions/nominees.js'

class NomineeCard extends Component {  
    handleClick = () => {
        const { removeNominee, movie } = this.props

        removeNominee(movie.imdbID)
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

export default connect(null, { removeNominee })(NomineeCard);