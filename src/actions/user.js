import { BACKEND_API_ROOT } from '../apiRoot.js'

import { getNominees, clearNominees } from './nominees.js'

export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}

export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

export const signup = (userInfo, history) => {
    return dispatch => {
        return fetch(`${BACKEND_API_ROOT}/signup`, {
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
                if (data.error) {
                    alert(data.error)
                } else {
                    // set user in store => reset nominees => redirect to home
                    dispatch(setCurrentUser(data))
                    dispatch(clearNominees())
                    history.push("/")
                }
            })
            .catch(error => alert(error))
    }
}

export const login = (userInfo, history) => {
    return dispatch => {
        return fetch(`${BACKEND_API_ROOT}/login`, {
            credentials: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
            .then(resp => resp.json())
            .then(data => {
                if (data.error) {
                    alert(data.error)
                } else {
                    // add user to store => reset nominees => get existing nominees from backend => redirect home
                    dispatch(setCurrentUser(data))
                    dispatch(clearNominees())
                    dispatch(getNominees())
                    history.push("/")
                }
            })
            .catch(error => alert(error))
    }
}

export const logout = (history) => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch(`${BACKEND_API_ROOT}/logout`, {
            credentials: "include",
            method: "DELETE"
        })
            .then(() => {
                // reset nominees => redirect home
                dispatch(clearNominees())
                history.push("/")
            })
            .catch(error => alert(error))
    }
}

export const getCurrentUser = () => {
    return dispatch => {
        return fetch(`${BACKEND_API_ROOT}/current_user`, {
            credentials: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                if (!data.error) {
                    // add user to store => reset nominees => get existing nominees from backend
                    dispatch(setCurrentUser(data))
                    dispatch(clearNominees())
                    dispatch(getNominees())
                }
            })
            .catch(error => alert(error))
    }
}