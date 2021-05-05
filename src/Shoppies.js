import React, { Component } from 'react';

class Shoppies extends Component {
    constructor(props) {
        super(props)
        this.state = {
            query: "",
            movies: []
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

    getMovies = (query) => {
        fetch(`http://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}`)
            .then(resp => resp.json())
            .then(data => {
                if (data.Response === "True") {
                    this.setState({
                        movies: data.Search
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
            </div>
        );
    }
}

export default Shoppies;