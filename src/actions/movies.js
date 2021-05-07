export const setMovies = movies => {
    return {
        type: "SET_MOVIES",
        movies
    }
}

export const getMovies = (query) => {
    return dispatch => {
        fetch(`http://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${query}`)
            .then(resp => resp.json())
            .then(data => {
                if (data.Response === "True") {
                    dispatch(setMovies(data.Search))
                } else {
                    console.log(`${data.Error}`)
                    dispatch(setMovies([]))
                }
            })
    }
}