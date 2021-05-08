// base urls
import { BACKEND_API_ROOT, OMDB_API_ROOT } from '../apiRoot.js'


// add single nominee to store
export const addNominee = (movie) => {
    return {
        type: "ADD_NOMINEE",
        movie
    }
}

// remove single nominee from store
export const removeNominee = (movieId) => {
    return {
        type: "REMOVE_NOMINEE",
        movieId
    }
}

// reset nominees to empty
export const clearNominees = () => {
    return {
        type: "CLEAR_NOMINEES"
    }
}

// fetch single movie data from OMDB using IMDB id
export const getNomineeData = (imdbID) => {
    return dispatch => {
        fetch(`${OMDB_API_ROOT}&i=${imdbID}`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                if (data.Response === "True") {
                    dispatch(addNominee(data))
                } else {
                    console.log(`${data.Error}`)
                }
            })
    }
}

// fetch users existing nominees from backend
export const getNominees = () => {
    return dispatch => {
        return fetch(`${BACKEND_API_ROOT}/nominees`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    for(let i in data){
                        dispatch(getNomineeData(data[i].imdbID))
                    }
                }
            })
            .catch(error => alert(error)) 
    }
}

// add nominee to backend user data
export const createNominee = (movie, user) => {
    return dispatch => {
        return fetch(`${BACKEND_API_ROOT}/nominees`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                imdbID: movie.imdbID,
                user_id: user.id
            })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    // add to store
                    dispatch(addNominee(movie))
                }
            })
            .catch(error => alert(error))
    }
}

// remove nominee from backend user data
export const deleteNominee = (imdbID) => {
    return dispatch => {
        return fetch(`${BACKEND_API_ROOT}/nominees`, {
            credentials: "include",
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                imdbID
            })
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    // remove from store
                    dispatch(removeNominee(imdbID))
                }
            })
            .catch(error => alert(error))
    }
}

