import React, { Component } from 'react';
import { connect } from 'react-redux'

import { getMovies } from './actions/movies.js'
import MovieList from './components/movies/MovieList'
import NomineeList from './components/nominees/NomineeList'

class Shoppies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: ""
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
        
        this.props.getMovies(this.state.query)
    }

    handleChange = (e) => {
        const query = e.target.value
        
        this.setState({
            query
        })

        this.props.getMovies(query)
    }

    // addNominate = (movie) => {
    //     this.setState(prevState => {
    //         const newNominations = [...prevState.nominations, movie]
    //         return {
    //             nominations: newNominations
    //         }
    //     })
    // }

    // removeNominate = (movie) => {
    //     this.setState(prevState => {
    //         const index = prevState.nominations.findIndex(nom => nom.imdbID === movie.imdbID)
    //         const newNominations = [...prevState.nominations.slice(0, index), ...prevState.nominations.slice(index+1)]
    //         return {
    //             nominations: newNominations
    //         }
    //     })
    // }

    // getMovies = (query) => {
    //     fetch(`http://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}`)
    //         .then(resp => resp.json())
    //         .then(data => {
    //             if (data.Response === "True") {
    //                 this.setState({
    //                     movies: data.Search
    //                 })
    //             } else {
    //                 this.setState({
    //                     movies: []
    //                 })
    //             }
    //         })
    // }

    render() {
        const { movies, nominees } = this.props

        return (
            <div className="shoppies">
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