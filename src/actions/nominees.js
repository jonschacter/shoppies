import API_ROOT from '../apiRoot.js'

export const addNominee = (movie) => {
    return {
        type: "ADD_NOMINEE",
        movie
    }
}

export const removeNominee = (movieId) => {
    return {
        type: "REMOVE_NOMINEE",
        movieId
    }
}

export const clearNominees = () => {
    return {
        type: "CLEAR_NOMINEES"
    }
}

export const getNomineeData = (imdbID) => {
    return dispatch => {
        fetch(`http://omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${imdbID}`)
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

export const getNominees = () => {
    return dispatch => {
        return fetch(`${API_ROOT}/nominees`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                if (!data.error) {
                    for(let i in data){
                        dispatch(getNomineeData(data[i].imdbID))
                    }
                }
            })
            .catch(error => alert(error)) 
    }
}

export const createNominee = (movie, user) => {
    return dispatch => {
        return fetch(`${API_ROOT}/nominees`, {
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
                console.log(data)
                if (data.error) {
                    alert(data.error)
                } else {
                    dispatch(addNominee(movie))
                }
            })
            .catch(error => alert(error))
    }
}

export const deleteNominee = (imdbID) => {
    return dispatch => {
        return fetch(`${API_ROOT}/nominees`, {
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
                console.log(data)
                if (data.error) {
                    alert(data.error)
                } else {
                    dispatch(removeNominee(imdbID))
                }
            })
            .catch(error => alert(error))
    }
}

