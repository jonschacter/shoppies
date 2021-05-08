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
