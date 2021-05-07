import API_ROOT from '../apiRoot.js'

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const signup = (userInfo, history) => {
    return dispatch => {
        return fetch(`${API_ROOT}/signup`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                user: userInfo
            })
        })
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                if (data.error) {
                    alert(data.error)
                } else {
                    dispatch(setCurrentUser(data))
                    history.push("/")
                }
            })
    }
}

export const login = (userInfo) => {
    return dispatch => {
        console.log(userInfo)
    }
}

export const logout = (history) => {
    return dispatch => {
        console.log("logging out")
    }
}