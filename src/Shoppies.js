import React, { Component } from 'react';

class Shoppies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            movies: []
        }
    }
    
    handleChange = (e) => {
        this.setState({
            query: e.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <h1>The Shoppies</h1>
                <div className="movie-search-form">
                    <form>
                        <label>Movie Title:</label>
                        <input type="text" onChange={this.handleChange} name="search-title" value={this.state.query} />
                    </form>
                </div>
            </div>
        );
    }
}

export default Shoppies;