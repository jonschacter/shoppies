// base url
import { OMDB_API_ROOT } from '../apiRoot.js'

export const setMovies = movies => {
    return {
        type: "SET_MOVIES",
        movies
    }
}

export const getMovies = (query) => {
    return dispatch => {
        fetch(`${OMDB_API_ROOT}&s=${query}`)
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