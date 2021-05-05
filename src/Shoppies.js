import React, { Component } from 'react';
import MovieList from './MovieList'
import NomineeList from './NomineeList'

class Shoppies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            movies: [],
            nominations: []
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleChange = (e) => {
        const query = e.target.value
        
        this.setState({
            query
        })

        this.getMovies(query)
    }

    addNominate = (movie) => {
        this.setState(prevState => {
            return {
                nominations: [...prevState.nominations, movie]
            }
        })
    }

    getMovies = (query) => {
        fetch(`http://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}`)
            .then(resp => resp.json())
            .then(data => {
                if (data.Response === "True") {
                    this.setState({
                        movies: data.Search
                    })
                } else {
                    this.setState({
                        movies: []
                    })
                }
            })
    }

    render() {
        return (
            <div className="App">
                <h1>The Shoppies</h1>
                <div className="movie-search-form">
                    <form onSubmit={this.handleSubmit} >
                        <label>Movie Title:</label>
                        <input type="text" onChange={this.handleChange} name="search-title" value={this.state.query} />
                    </form>
                </div>
                <MovieList movies={this.state.movies} addNominate={this.addNominate} />
                <NomineeList movies={this.state.nominations} />
            </div>
        );
    }
}

export default Shoppies;