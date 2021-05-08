// libraries
import React, { Component } from 'react';
import { connect } from 'react-redux'

// actions
import { getMovies } from './actions/movies.js'

// components
import MovieList from './components/movies/MovieList.js'
import NomineeList from './components/nominees/NomineeList.js'

class Shoppies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ""
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        
        // re-fetch on submission to help prevent bugs
        this.props.getMovies(this.state.query)
    }

    handleChange = (e) => {
        const query = e.target.value
        
        this.setState({
            query
        })

        this.props.getMovies(query)
    }

    render() {
        const { movies, nominees } = this.props

        return (
            <div className="App">
                <h1>The Shoppies</h1>
                { nominees.length === 5 ? <div className="banner"><h3>Thank You for Contributing Your Nominations!!</h3></div> : null}
                <div className="movie-search-form">
                    <form onSubmit={this.handleSubmit} >
                        <label className="movie-label">Movie Title:</label>
                        <input className="movie-input" type="text" onChange={this.handleChange} name="search-title" value={this.state.query} />
                    </form>
                </div>
                { movies.length > 0 ? <MovieList movies={movies} query={this.state.query} /> : null }
                { nominees.length > 0 ? <NomineeList movies={nominees} /> : null }
            </div>
        );
    }
}

const mapStateToProps = ({ movies, nominees }) => {
    return {
        movies,
        nominees
    }
}

export default connect(mapStateToProps, { getMovies })(Shoppies);