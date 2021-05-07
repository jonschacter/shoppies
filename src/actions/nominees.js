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

