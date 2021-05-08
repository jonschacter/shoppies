const nominees = (state = [], action) => {
    switch(action.type) {
        case "ADD_NOMINEE":
            return state.concat(action.movie)
        case "REMOVE_NOMINEE":
            return state.filter(nominee => nominee.imdbID !== action.movieId)
        default:
            return state
    }
}

export default nominees