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
            const newNominations = [...prevState.nominations, movie]
            return {
                nominations: newNominations
            }
        })
    }

    removeNominate = (movie) => {
        this.setState(prevState => {
            const index = prevState.nominations.findIndex(nom => nom.imdbID === movie.imdbID)
            const newNominations = [...prevState.nominations.slice(0, index), ...prevState.nominations.slice(index+1)]
            return {
                nominations: newNominations
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
                { this.state.nominations.length == 5 ? <div className="banner"><h3>Thank You for Contributing Your Nominations!!</h3></div> : null}
                <div className="movie-search-form">
                    <form onSubmit={this.handleSubmit} >
                        <label>Movie Title:</label>
                        <input type="text" onChange={this.handleChange} name="search-title" value={this.state.query} />
                    </form>
                </div>
                { this.state.movies.length > 0 ? <MovieList movies={this.state.movies} nominees={this.state.nominations} addNominate={this.addNominate} query={this.state.query} /> : null }
                { this.state.nominations.length > 0 ? <NomineeList movies={this.state.nominations} removeNominate={this.removeNominate} /> : null }
            </div>
        );
    }
}

export default Shoppies;