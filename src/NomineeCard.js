import React, { Component } from 'react';

class NomineeCard extends Component {  
    handleClick = () => {
        this.props.removeNominate(this.props.movie)
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

export default NomineeCard;